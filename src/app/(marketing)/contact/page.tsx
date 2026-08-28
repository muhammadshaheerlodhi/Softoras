'use client'

import { useState } from 'react'
import { site } from '@/content/site'

const projectTypes = ['Website', 'SaaS / product', 'CRM / automation', 'ERP', 'Ecommerce', 'Other']
const budgets = ['To be scoped', 'Under $5k', '$5k to $15k', '$15k to $40k', '$40k+']

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    const form = new FormData(event.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('fail')
      setSuccess(true)
      event.currentTarget.reset()
    } catch {
      setError('Could not send. Email us directly and we will reply.')
    }
    setLoading(false)
  }

  return (
    <div className="band band-paper pb-24 pt-16">
      <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="kicker">Contact</p>
          <h1 className="h2 mt-4">Have an idea? Let’s build it.</h1>
          <p className="lede mt-4">
            Softoras works on websites, SaaS platforms, AI automation, CRM systems, and custom business software.
          </p>
          <div className="mt-8 space-y-2 text-sm">
            <p>
              <a className="font-semibold text-[var(--accent)]" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              Pakistan:{' '}
              <a href={site.phones.pakistan.href}>{site.phones.pakistan.label}</a>
            </p>
            <p>
              UAE: <a href={site.phones.uae.href}>{site.phones.uae.label}</a>
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="panel grid gap-4 p-6 md:p-8">
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
            Project type
            <select name="projectType" className="field mt-2" defaultValue="Website">
              {projectTypes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Budget
            <select name="budget" className="field mt-2" defaultValue="To be scoped">
              {budgets.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Message
            <textarea name="message" required rows={5} placeholder="What do you want to build?" className="field mt-2 min-h-32" />
          </label>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Sending…' : 'Send'}
          </button>
          {success ? <p className="text-sm font-semibold text-emerald-600">Received. We will get back to you.</p> : null}
          {error ? <p className="text-sm font-semibold text-red-500">{error}</p> : null}
        </form>
      </div>
    </div>
  )
}
