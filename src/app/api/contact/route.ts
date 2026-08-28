import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const kind = body.kind || 'contact'
  const { name, email, message, company, projectType, budget, phone, videoUrl } = body

  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }
  if (kind === 'contact' && (!name || !message)) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }
  if (kind === 'testimonial' && (!name || !videoUrl)) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
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

  if (!host || !user || !pass) {
    console.info('Form received (SMTP not configured):', { kind, name, email, videoUrl })
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
      html: `<pre style="font-family:Inter,sans-serif;white-space:pre-wrap">${text}</pre>`,
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Nodemailer error:', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
