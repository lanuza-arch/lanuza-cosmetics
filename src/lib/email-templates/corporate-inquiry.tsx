import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  fullName?: string
  company?: string
  email?: string
  message?: string
}

const CorporateInquiryEmail = ({
  fullName = 'Unknown',
  company = 'Unknown',
  email = 'unknown@example.com',
  message = '(no message)',
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New corporate inquiry from {fullName} at {company}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Corporate Inquiry</Heading>
        <Text style={subtitle}>Lanuza Cosmetics — Corporate Contact Form</Text>
        <Hr style={divider} />
        <Section>
          <Text style={label}>Full Name</Text>
          <Text style={value}>{fullName}</Text>

          <Text style={label}>Company / Organization</Text>
          <Text style={value}>{company}</Text>

          <Text style={label}>Corporate Email</Text>
          <Text style={value}>{email}</Text>

          <Text style={label}>Message</Text>
          <Text style={{ ...value, whiteSpace: 'pre-wrap' }}>{message}</Text>
        </Section>
        <Hr style={divider} />
        <Text style={footer}>
          This message was sent from the Lanuza Cosmetics website corporate contact form.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: CorporateInquiryEmail,
  subject: 'New Corporate Inquiry — Lanuza Cosmetics',
  displayName: 'Corporate Inquiry Notification',
  to: 'lanuza@lanuzacosmetics.com',
  previewData: {
    fullName: 'Jane Doe',
    company: 'Example Beauty Co.',
    email: 'jane@example.com',
    message: 'We would like to discuss a partnership opportunity.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  color: '#0A0A0A',
}
const container = { padding: '32px 28px', maxWidth: '600px' }
const h1 = { fontSize: '22px', fontWeight: 600, margin: '0 0 4px', color: '#0A0A0A' }
const subtitle = { fontSize: '13px', color: '#4B525A', margin: '0 0 8px', letterSpacing: '0.04em', textTransform: 'uppercase' as const }
const divider = { borderColor: '#e10600', borderWidth: '1px', margin: '20px 0' }
const label = { fontSize: '11px', color: '#4B525A', letterSpacing: '0.08em', textTransform: 'uppercase' as const, margin: '14px 0 4px' }
const value = { fontSize: '15px', color: '#0A0A0A', margin: '0 0 6px', lineHeight: '1.5' }
const footer = { fontSize: '12px', color: '#4B525A', margin: '16px 0 0' }
