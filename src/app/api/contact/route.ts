import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { isRateLimited } from '@/lib/security/rate-limit'
import {
  containsSuspiciousPayload,
  escapeHtml,
  sanitizeEmail,
  sanitizeText,
  sanitizeUrl,
} from '@/lib/security/sanitize'

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'

  if (isRateLimited(`contact:${ip}`, 8, 60_000)) {
    return NextResponse.json({ error: 'Too many requests. Try again shortly.' }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const kind = sanitizeText(body.kind, 32) || 'contact'
  const name = sanitizeText(body.name, 120)
  const email = sanitizeEmail(body.email)
  const message = sanitizeText(body.message, 4000)
  const company = sanitizeText(body.company, 120)
  const projectType = sanitizeText(body.projectType, 80)
  const budget = sanitizeText(body.budget, 80)
  const phone = sanitizeText(body.phone, 40)
  const videoUrl = sanitizeUrl(body.videoUrl)

  if (!email) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
  }

  if (kind === 'contact' && (!name || !message)) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  if (kind === 'testimonial' && (!name || !videoUrl)) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const payloadSample = [name, email, message, company, projectType, budget, phone, videoUrl].join(' ')
  if (containsSuspiciousPayload(payloadSample)) {
    return NextResponse.json({ error: 'Request blocked.' }, { status: 400 })
  }

  const text = [
    `Kind: ${kind}`,
    `Name: ${name || 'n/a'}`,
    `Email: ${email}`,
    `Company: ${company || 'n/a'}`,
    `Project: ${projectType || 'n/a'}`,
    `Budget: ${budget || 'n/a'}`,
    `Phone: ${phone || 'n/a'}`,
    `Video: ${videoUrl || 'n/a'}`,
    '',
    message || '',
  ].join('\n')

  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    return NextResponse.json({ ok: true, queued: true })
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from: 'Softoras Contact <admin@softoras.com>',
      to: 'admin@softoras.com',
      subject: `${kind} from ${name || email}`,
      text,
      html: `<pre style="font-family:Inter,sans-serif;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
