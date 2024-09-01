"use client";

import React, { useRef } from "react";
import localFont from "next/font/local";
import { cn, isObject } from "@/lib/utils";
import { sendEmail } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "./ui/use-toast";
import { SendEmailResponse } from "@/lib/contactUsValidator";
import { Loader2 } from "lucide-react";

const TajawalRegular = localFont({
  src: "../../public/fonts/Tajawal_Regular.ttf",
});

const initialState: SendEmailResponse = {
  success: null,
  error: null,
  errorType: null,
  message: null,
};

const ContactUsForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [{ success, message, error, errorType }, formAction] = useFormState(
    sendEmail,
    initialState
  );

  if (success === true) {
    toast({
      title: "!تم الإرسال بنجاح",
      description: "شكراً لتواصلك معنا",
      variant: "default",
      className: `justify-end text-end ${TajawalRegular.className}`,
    });
    ref.current?.reset();
  } else if (success === false && errorType === "Internal") {
    toast({
      title: "!حدث خطأ بالإرسال",
      description: "الرجاء المحاولة مرة اخرى",
      variant: "destructive",
      className: `justify-end text-end ${TajawalRegular.className}`,
    });
  }

  return (
    <form
      ref={ref}
      action={formAction}
      className={cn(
        TajawalRegular.className,
        "flex flex-col justify-between text-nowrap gap-4 text-lg"
      )}
    >
      {/* Name Field */}
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2">
          <input
            className="bg-[#a08e6c] rounded-full px-4 [direction:rtl]"
            type="text"
            name="name"
            id="name"
          />
          {isObject(error) && error.name && (
            <small className="text-destructive text-sm font-light leading-none">
              {error.name}
            </small>
          )}
        </div>
        <label className="text-end w-1/3" htmlFor="name">
          الأسم
        </label>
      </div>

      {/* Organization Field */}
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2">
          <input
            className="bg-[#a08e6c] rounded-full px-4 [direction:rtl]"
            type="text"
            name="organization"
            id="organization"
          />
          {isObject(error) && error.organization && (
            <small className="text-destructive text-sm font-light leading-none">
              {error.organization}
            </small>
          )}
        </div>
        <label className="text-end w-1/3" htmlFor="organization">
          الجهة
        </label>
      </div>

      {/* Project Type Field */}
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2">
          <input
            className="bg-[#a08e6c] rounded-full px-4 [direction:rtl]"
            type="text"
            name="projectType"
            id="projectType"
          />
          {isObject(error) && error.projectType && (
            <small className="text-destructive text-sm font-light leading-none">
              {error.projectType}
            </small>
          )}
        </div>
        <label className="text-end w-1/3" htmlFor="projectType">
          نوع المشروع
        </label>
      </div>

      {/* Subject Field */}
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2">
          <input
            className="bg-[#a08e6c] rounded-full px-4 [direction:rtl]"
            type="text"
            name="subject"
            id="subject"
          />
          {isObject(error) && error.subject && (
            <small className="text-destructive text-sm font-light leading-none">
              {error.subject}
            </small>
          )}
        </div>
        <label className="text-end w-1/3" htmlFor="subject">
          الموضوع
        </label>
      </div>

      {/* Contact Number Field */}
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2">
          <input
            className="bg-[#a08e6c] rounded-full px-4 text-end"
            type="text"
            name="contactNumber"
            id="contactNumber"
          />
          {isObject(error) && error.contactNumber && (
            <small className="text-destructive text-sm font-light leading-none">
              {error.contactNumber}
            </small>
          )}
        </div>
        <label className="text-end w-1/3" htmlFor="contactNumber">
          رقم التواصل
        </label>
      </div>

      {/* Email Field */}
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2">
          <input
            className="bg-[#a08e6c] rounded-full px-4 text-end"
            type="email"
            name="email"
            id="email"
          />
          {isObject(error) && error.email && (
            <small className="text-destructive text-sm font-light leading-none">
              {error.email}
            </small>
          )}
        </div>
        <label className="text-end w-1/3" htmlFor="email">
          البريد الإلكتروني
        </label>
      </div>

      <SubmitButton />
    </form>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex justify-center items-center border h-8 border-[#f3f2f0] bg-[#a08e6c]  hover:bg-[#817357]  rounded-full"
    >
      {pending ? <Loader2 className="animate-spin h-full" /> : "إرسال"}
    </button>
  );
}

export default ContactUsForm;
