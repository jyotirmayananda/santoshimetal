import { NextRequest, NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/validation/enquiry';

// In-memory rate limiting map (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 4;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'anonymous';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a minute before submitting again.',
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot spam check
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Spam submission detected.' },
        { status: 400 }
      );
    }

    const validationResult = enquirySchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          issues: validationResult.error.format(),
        },
        { status: 422 }
      );
    }

    const data = validationResult.data;

    // Log the enquiry securely for administrative processing
    console.log('[ENQUIRY RECEIVED]', {
      timestamp: new Date().toISOString(),
      fullName: data.fullName,
      companyName: data.companyName,
      email: data.email,
      phone: data.phone,
      service: data.serviceRequired,
      projectDetails: data.projectDetails.slice(0, 100) + '...',
      quantity: data.estimatedQuantity,
      ip,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you. Your enquiry has been received by Santoshi Metal Industries. Our corporate engineering and supply team will review your requirements and respond promptly.',
        referenceId: `SMI-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[ENQUIRY_API_ERROR]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected server error occurred while processing your enquiry. Please contact us directly.',
      },
      { status: 500 }
    );
  }
}

