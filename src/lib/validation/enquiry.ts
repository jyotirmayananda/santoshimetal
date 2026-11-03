import { z } from 'zod';

export const serviceOptions = [
  'Aluminium Ingot',
  'Aluminium Profile',
  'Aluminium Scrap & Supply',
  'Aluminium Powder Coating',
  'Aluminium Anodising',
  'General Industrial Enquiry',
] as const;

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(100, { message: 'Full name cannot exceed 100 characters' }),
  companyName: z
    .string()
    .min(2, { message: 'Company name must be at least 2 characters' })
    .max(120, { message: 'Company name cannot exceed 120 characters' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid business email address' })
    .max(120),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(20, { message: 'Phone number cannot exceed 20 characters' })
    .regex(/^[+0-9\s\-()]+$/, { message: 'Please enter a valid phone number' }),
  serviceRequired: z.enum(serviceOptions, {
    errorMap: () => ({ message: 'Please select a service category' }),
  }),
  projectDetails: z
    .string()
    .min(15, { message: 'Please provide at least 15 characters of project details' })
    .max(2000, { message: 'Project details cannot exceed 2000 characters' }),
  estimatedQuantity: z.string().max(100).optional(),
  consent: z.literal(true, {
    errorMap: () => ({
      message: 'You must agree to the processing of your enquiry details',
    }),
  }),
  honeypot: z.string().max(0, { message: 'Spam detected' }).optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

