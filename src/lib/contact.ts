import { z } from "zod";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "nameInvalid"),
  email: z.email("emailInvalid").trim(),
  message: z.string().trim().min(1, "messageInvalid"),
});

export type ContactFormPayload = z.infer<typeof contactFormSchema>;

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<void> {
  const res = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  if (!res.ok || text.trim() !== "success") {
    throw new Error(`Unexpected response: ${text}`);
  }
}
