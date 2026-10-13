import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const LeadSchema = z.object({
  full_name: z.string().trim().min(1, "Full name is required").max(120),
  company: z.string().trim().min(1, "Company is required").max(160),
  email: z.string().trim().email("Enter a valid corporate email").max(255),
  message: z.string().trim().min(10, "Please provide a short message").max(2500),
});

export type CorporateLeadInput = z.infer<typeof LeadSchema>;

export const submitCorporateLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) {
      throw new Error("Backend is not configured.");
    }

    const supabase = createClient<Database>(url, key, {
      auth: {
        storage: undefined,
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { error } = await supabase.from("corporate_leads" as never).insert(data as never);
    if (error) {
      console.error("[corporate_leads] insert failed:", error);
      throw new Error("We couldn't submit your inquiry. Please try again shortly.");
    }

    // Fire notification email (non-blocking for the user — log if it fails).
    // Uses Resend when RESEND_API_KEY is set (Vercel hosting); otherwise falls
    // back to Lovable's managed email API (Lovable hosting).
    try {
      const emailOptions = {
        templateData: {
          fullName: data.full_name,
          company: data.company,
          email: data.email,
          message: data.message,
        },
        replyTo: data.email,
        idempotencyKey: `corporate-inquiry-${data.email}-${Date.now()}`,
      };
      if (process.env.RESEND_API_KEY) {
        const { sendTemplateEmailWithResend } = await import(
          "@/lib/email-templates/send-email-resend"
        );
        await sendTemplateEmailWithResend(
          "corporate-inquiry",
          "lanuza@lanuzacosmetics.com",
          emailOptions,
        );
      } else {
        const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
        await sendTemplateEmail("corporate-inquiry", "lanuza@lanuzacosmetics.com", emailOptions);
      }
    } catch (emailError) {
      console.error("[corporate_leads] notification email failed:", emailError);
    }

    return { ok: true as const };
  });
