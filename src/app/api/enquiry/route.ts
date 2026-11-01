import { NextResponse } from "next/server";
import { z } from "zod";

const enquirySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  companyName: z.string().min(2, "Company name must be at least 2 characters").max(120),
  email: z.string().email("Please provide a valid business email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits").max(20),
  service: z.enum([
    "Powder Coating",
    "Anodising",
    "Aluminium Ingots",
    "Aluminium Sales & Supply",
    "General Enquiry",
  ]),
  projectDescription: z
    .string()
    .min(10, "Please provide at least 10 characters describing your project or material requirement")
    .max(2000),
  specificationsNote: z.string().max(1000).optional(),
  consent: z.boolean().refine((val) => val === true, "You must consent to commercial communication"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request payload
    const parsedData = enquirySchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsedData.error.flatten().fieldErrors,
          message: "Validation failed. Please verify the submitted information.",
        },
        { status: 400 }
      );
    }

    const { fullName, companyName, email, service } = parsedData.data;

    // Simulation log for backend delivery / CRM webhook hook
    console.log(
      `[B2B ENQUIRY LOGGED] Received commercial enquiry from ${fullName} (${companyName}) for service: ${service} <${email}>`
    );

    // Return structured confirmation
    return NextResponse.json({
      success: true,
      message:
        "Your commercial inquiry has been recorded successfully. Our technical sales team will review your specifications and establish contact within 1 business day.",
      referenceId: `SMI-${Date.now().toString(36).toUpperCase()}`,
      receivedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal system error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

