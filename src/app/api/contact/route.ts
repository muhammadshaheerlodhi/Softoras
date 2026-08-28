import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, message, company, projectType, budget, phone } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\nProject: ${projectType || '-'}\nBudget: ${budget || '-'}\nPhone: ${phone || '-'}\n\n${message}`

  if (!host || !user || !pass) {
    console.info('Contact form received (SMTP not configured):', { name, email, company, projectType, budget })
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
      subject: `Contact form from ${name}`,
      text,
      html: `<pre style="font-family:Inter,sans-serif;white-space:pre-wrap">${text}</pre>`,
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Nodemailer error:', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
