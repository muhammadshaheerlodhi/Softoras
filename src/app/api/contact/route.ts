import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    console.info('Contact form received (SMTP not configured):', { name, email, phone, message })
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
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\n\n${message}`,
      html: `<h2>Contact form</h2><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone || '-'}</p><p>${message}</p>`,
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Nodemailer error:', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
