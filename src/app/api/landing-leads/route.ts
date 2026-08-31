import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase/server'

const OWNER_EMAIL = 'lodhishaheer@gmail.com'

async function sendLeadEmail(payload: {
  name: string
  email: string
  company?: string | null
  phone?: string | null
  country?: string | null
  plan_interest?: string
  payment_method?: string | null
  payment_details?: Record<string, string> | null
  message?: string | null
  source?: string
}) {
  const paymentDetailsHtml = payload.payment_details
    ? Object.entries(payload.payment_details)
        .map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`)
        .join('')
    : ''
  const subject = `New Softoras ERP Lead — ${payload.plan_interest || 'trial'} — ${payload.name}`
  const html = `
    <h2>New landing page lead</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Company:</strong> ${payload.company || '—'}</p>
    <p><strong>Phone:</strong> ${payload.phone || '—'}</p>
    <p><strong>Country:</strong> ${payload.country || '—'}</p>
    <p><strong>Plan:</strong> ${payload.plan_interest || 'trial'}</p>
    <p><strong>Payment method:</strong> ${payload.payment_method || '—'}</p>
    ${paymentDetailsHtml}
    <p><strong>Source:</strong> ${payload.source || 'softoras_website_erp'}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.message || '—'}</p>
  `

  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'Softoras ERP <onboarding@resend.dev>',
        to: [OWNER_EMAIL],
        subject,
        html,
      }),
    })
    if (!res.ok) {
      const err = await res.text()
      console.error('[landing-leads] Resend error:', err)
    }
    return
  }

  console.log(`[landing-leads] Email to ${OWNER_EMAIL}:`, subject, payload)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, country, plan_interest, payment_method, payment_details, message, source } =
      body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const supabase = createSupabaseServerClient()
    if (supabase) {
      const { error } = await supabase.from('landing_leads').insert({
        name,
        email,
        company: company || null,
        phone: phone || null,
        country: country || null,
        plan_interest: plan_interest || 'trial',
        message:
          [
            message,
            payment_method ? `Payment: ${payment_method}` : null,
            payment_details ? `Details: ${JSON.stringify(payment_details)}` : null,
          ]
            .filter(Boolean)
            .join('\n') || null,
        source: source || 'softoras_website_erp',
      })

      if (error) {
        console.error('landing_leads insert:', error.message)
      }
    }

    await sendLeadEmail({
      name,
      email,
      company,
      phone,
      country,
      plan_interest,
      payment_method,
      payment_details,
      message,
      source,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('landing-leads:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
