"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { submitContactForm, contactFormSchema } from "@/lib/contact";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);

  const clearErrorIfValid = (field: keyof FieldErrors, value: string) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const check = contactFormSchema.shape[field].safeParse(value);
      if (!check.success) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactFormSchema.safeParse({ name, email, message });
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error(t("formInvalid"));
      return;
    }

    setErrors({});
    setSending(true);
    try {
      await submitContactForm(result.data);
      toast.success(t("sentMessage"));
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error(t("errorMessage"));
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="mb-5">
        <Input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            clearErrorIfValid("name", e.target.value);
          }}
          placeholder={t("namePlaceholder")}
          className="w-full p-3 border border-gray-[#E6E6E6] rounded bg-[#F9FAFB]"
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1">{t(errors.name)}</p>
        )}
      </div>

      <div className="mb-5">
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            clearErrorIfValid("email", e.target.value);
          }}
          placeholder={t("emailPlaceholder")}
          className="w-full p-3 border border-gray-[#E6E6E6] rounded bg-[#F9FAFB]"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{t(errors.email)}</p>
        )}
      </div>

      <div className="mb-5">
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            clearErrorIfValid("message", e.target.value);
          }}
          placeholder={t("messagePlaceholder")}
          className="w-full h-55 p-3 border border-gray-[#E6E6E6] rounded bg-[#F9FAFB]"
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{t(errors.message)}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={sending}
        className="bg-black text-white px-6 py-3 rounded-[10px] w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-1"
      >
        {sending ? t("sending") : t("send")}
      </button>
    </form>
  );
}
