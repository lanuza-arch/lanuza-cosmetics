import * as React from 'react'
import { render } from '@react-email/render'
import { TEMPLATES } from './registry'

// Server-only: reads RESEND_API_KEY. Never import from client components.
//
// Sends a registered email template through Resend (https://resend.com).
// Used when the site is hosted outside Lovable (e.g. on Vercel), where the
// Lovable email API key is not available.
//
// Environment variables:
//   RESEND_API_KEY  (required) API key created in the Resend dashboard.
//   RESEND_FROM     (optional) From header. The domain must be verified in
//                   Resend. Defaults to "Lanuza Cosmetics <noreply@mail.lanuzacosmetics.com>".

const DEFAULT_FROM = 'Lanuza Cosmetics <noreply@mail.lanuzacosmetics.com>'
const RESEND_ENDPOINT = 'https://api.resend.com/emails'

export interface SendResendEmailOptions {
  templateData?: Record<string, any>
  idempotencyKey?: string
  replyTo?: string
}

export async function sendTemplateEmailWithResend(
  templateName: string,
  to: string,
  options: SendResendEmailOptions = {}
): Promise<{ sent: true; id?: string }> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }

  const template = TEMPLATES[templateName]
  if (!template) {
    throw new Error(
      `Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(', ')}`
    )
  }

  // Template-level `to` takes precedence — notification templates always
  // send to their fixed address.
  const recipient = template.to || to
  if (!recipient) {
    throw new Error('Recipient is required (the template defines no fixed recipient)')
  }

  const templateData = options.templateData ?? {}
  const element = React.createElement(template.component, templateData)
  const html = await render(element)
  const text = await render(element, { plainText: true })
  const subject =
    typeof template.subject === 'function'
      ? template.subject(templateData)
      : template.subject

  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  }
  if (options.idempotencyKey) {
    headers['Idempotency-Key'] = options.idempotencyKey
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      from: process.env.RESEND_FROM || DEFAULT_FROM,
      to: [recipient],
      subject,
      html,
      text,
      ...(options.replyTo ? { reply_to: options.replyTo } : {}),
    }),
  })

  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    throw new Error(`Resend API error ${response.status}: ${detail}`)
  }

  const body = (await response.json().catch(() => ({}))) as { id?: string }
  return { sent: true, id: body.id }
}
