'use client'

import { useState } from 'react'
import { FormLabel, FormStatus } from '@/components/ui/form-shell'

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
    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
      <div className="space-y-4">
        <p className="text-sm leading-6 text-[var(--muted)]">
          Tell us what you want to build — SaaS, CRM, automation, or a full website. We reply with next steps.
        </p>
        <ul className="clean-list space-y-1.5 text-sm text-[var(--muted)]">
          <li>Custom websites and SaaS products</li>
          <li>GoHighLevel, HubSpot, and Follow Up Boss CRM</li>
          <li>n8n, Make, Zapier, and AI agent workflows</li>
        </ul>
        <p className="text-sm font-semibold text-[var(--accent)]">admin@softoras.com</p>
      </div>

      <div className="contact-shell w-full">
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
          <form onSubmit={onContact} className="form-body">
            <div className="form-row form-row-2">
              <div className="form-field">
                <FormLabel htmlFor="home-name">Name</FormLabel>
                <input id="home-name" name="name" required placeholder="Your name" className="field" />
              </div>
              <div className="form-field">
                <FormLabel htmlFor="home-email">Email</FormLabel>
                <input id="home-email" name="email" type="email" required placeholder="you@company.com" className="field" />
              </div>
            </div>
            <div className="form-field">
              <FormLabel htmlFor="home-company">Company</FormLabel>
              <input id="home-company" name="company" placeholder="Optional" className="field" />
            </div>
            <div className="form-field">
              <FormLabel htmlFor="home-message">Message</FormLabel>
              <textarea id="home-message" name="message" required rows={3} placeholder="What do you want to build?" className="field" />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary btn-compact" disabled={loading}>
                {loading ? 'Sending…' : 'Send message'}
              </button>
              {success ? <FormStatus type="success">Received. Thank you.</FormStatus> : null}
              {error ? <FormStatus type="error">{error}</FormStatus> : null}
            </div>
          </form>
        ) : (
          <form onSubmit={onSubscribe} className="form-body">
            <p className="text-xs leading-5 text-[var(--muted)]">Product notes and build updates. No noise.</p>
            <div className="form-field">
              <FormLabel htmlFor="sub-name">Name</FormLabel>
              <input id="sub-name" name="subName" placeholder="Your name" className="field" />
            </div>
            <div className="form-field">
              <FormLabel htmlFor="sub-email">Email</FormLabel>
              <input id="sub-email" name="subEmail" type="email" required placeholder="you@company.com" className="field" />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary btn-compact" disabled={loading}>
                {loading ? 'Sending…' : 'Subscribe'}
              </button>
              {success ? <FormStatus type="success">Subscribed. Thank you.</FormStatus> : null}
              {error ? <FormStatus type="error">{error}</FormStatus> : null}
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
