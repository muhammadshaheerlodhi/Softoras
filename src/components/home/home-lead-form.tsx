'use client'

import { useState } from 'react'

type Tab = 'contact' | 'subscribe'

export default function HomeLeadForm() {
  const [tab, setTab] = useState<Tab>('contact')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const send = async (payload: Record<string, string>) => {
    setLoading(true)
    setError('')
    setSuccess(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('fail')
      setSuccess(true)
    } catch {
      setError('Could not send. Email us directly and we will reply.')
    }
    setLoading(false)
  }

  const onContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    await send({
      kind: 'contact',
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      company: String(data.get('company') || ''),
      message: String(data.get('message') || ''),
    })
    form.reset()
  }

  const onSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    await send({
      kind: 'subscribe',
      name: String(data.get('subName') || 'Subscriber'),
      email: String(data.get('subEmail') || ''),
      message: 'Subscribe to Softoras updates',
    })
    form.reset()
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="space-y-5">
        <p className="text-sm leading-7 text-[var(--muted)]">
          Tell us what you want to build — a SaaS product, CRM setup, automation stack, or full website. We reply with
          next steps, not a generic pitch deck.
        </p>
        <ul className="clean-list space-y-2 text-sm text-[var(--muted)]">
          <li>Custom websites and SaaS products</li>
          <li>GoHighLevel, HubSpot, and Follow Up Boss CRM</li>
          <li>n8n, Make, Zapier, and AI agent workflows</li>
          <li>AWS, Vercel, and production deploys</li>
        </ul>
        <p className="text-sm font-semibold text-[var(--accent)]">admin@softoras.com</p>
      </div>

      <div className="contact-shell">
        <div className="contact-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'contact'}
            className={`contact-tab ${tab === 'contact' ? 'is-active' : ''}`}
            onClick={() => setTab('contact')}
          >
            Start a project
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'subscribe'}
            className={`contact-tab ${tab === 'subscribe' ? 'is-active' : ''}`}
            onClick={() => setTab('subscribe')}
          >
            Subscribe
          </button>
        </div>

        {tab === 'contact' ? (
          <form onSubmit={onContact} className="grid gap-4 p-6 md:p-7">
            <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Name
              <input name="name" required placeholder="Your name" className="field mt-2" />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Email
              <input name="email" type="email" required placeholder="you@company.com" className="field mt-2" />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Company
              <input name="company" placeholder="Company name" className="field mt-2" />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Message
              <textarea name="message" required rows={4} placeholder="What do you want to build?" className="field mt-2 min-h-28" />
            </label>
            <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={loading}>
              {loading ? 'Sending' : 'Send message'}
            </button>
          </form>
        ) : (
          <form onSubmit={onSubscribe} className="grid gap-4 p-6 md:p-7">
            <p className="text-sm leading-7 text-[var(--muted)]">
              Product notes, build updates, and new work. No noise.
            </p>
            <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Name
              <input name="subName" placeholder="Your name" className="field mt-2" />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Email
              <input name="subEmail" type="email" required placeholder="you@company.com" className="field mt-2" />
            </label>
            <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={loading}>
              {loading ? 'Sending' : 'Subscribe'}
            </button>
          </form>
        )}

        {success ? <p className="px-6 pb-6 text-sm font-semibold text-emerald-600">Received. Thank you.</p> : null}
        {error ? <p className="px-6 pb-6 text-sm font-semibold text-red-500">{error}</p> : null}
      </div>
    </div>
  )
}
