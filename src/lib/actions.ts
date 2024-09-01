"use server";

import { createTransport } from "nodemailer";
import {
  SendEmailResponse,
  ContactFormSchema,
  ContactFormFlattenedErrors,
  ContactFormErrorType,
} from "../lib/contactUsValidator";

const transporter = createTransport({
  host: process.env.NODEMAILER_HOST,
  port: 465,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export async function sendEmail(
  currentState: SendEmailResponse,
  formData: FormData
): Promise<SendEmailResponse> {
  const name = formData.get("name") as string;
  const organization = formData.get("organization") as string;
  const projectType = formData.get("projectType") as string;
  const subject = formData.get("subject") as string;
  const contactNumber = formData.get("contactNumber") as string;
  const email = formData.get("email") as string;

  const validatedData = ContactFormSchema.safeParse({
    name,
    organization,
    projectType,
    subject,
    contactNumber,
    email,
  });

  if (!validatedData.success) {
    const flattenedErrors: ContactFormFlattenedErrors =
      validatedData.error.flatten();
    return {
      success: false,
      error: flattenedErrors.fieldErrors,
      errorType: ContactFormErrorType.ZodFieldErrors,
    };
  }

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    replyTo: email,
    subject: `رسالة من ${name} عبر نموذج التواصل`,
    text: `
    الأسم: ${name}
    الجهة: ${organization || "غير محدد"}
    نوع المشروع: ${projectType || "غير محدد"}
    الموضوع: ${subject}
    رقم التواصل: ${contactNumber}
    البريد الإلكتروني: ${email}
  `,
    html: `
      <div dir="rtl">
        <p><strong>الأسم:</strong> ${name}</p>
        <p><strong>الجهة:</strong> ${organization || "غير محدد"}</p>
        <p><strong>نوع المشروع:</strong> ${projectType || "غير محدد"}</p>
        <p><strong>الموضوع:</strong> ${subject.replace(/\n/g, "<br>")}</p>
        <p><strong>رقم التواصل:</strong> <span dir="ltr">${contactNumber}</span></p>
        <p><strong>البريد الإلكتروني:</strong> <span dir="ltr">${email}</span></p>
      </div>
    `,
  };

  try {
    const sentMessageInfo = await transporter.sendMail(mailOptions);
    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      errorType: ContactFormErrorType.Internal,
    };
  }
}
