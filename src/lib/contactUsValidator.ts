import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, "الاسم مطلوب"),
  organization: z.string().optional(),
  projectType: z.string().optional(),
  subject: z.string().min(1, "الموضوع مطلوب"),
  contactNumber: z.string().min(1, "رقم التواصل مطلوب"),
  email: z.string().email("البريد الإلكتروني مطلوب"),
});

export type ContactFormFlattenedErrors = z.inferFlattenedErrors<
  typeof ContactFormSchema
>;

export enum ContactFormErrorType {
  Internal = "Internal",
  ZodFieldErrors = "ZodFieldErrors",
}

export type SendEmailResponse = {
  success: boolean | null;
  error?: string | ContactFormFlattenedErrors["fieldErrors"] | null;
  errorType?: ContactFormErrorType | null;
  message?: string | null;
};
