'use client'

import { useState } from 'react'

export default function HomeLeadForm() {
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
    if (form) form.reset()
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
    if (form) form.reset()
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form onSubmit={onContact} className="panel grid gap-4 p-6 md:p-8">
        <p className="text-lg font-semibold">Start a project</p>
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
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Sending' : 'Send'}
        </button>
      </form>

      <form onSubmit={onSubscribe} className="panel grid content-start gap-4 p-6 md:p-8">
        <p className="text-lg font-semibold">Subscribe</p>
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
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Sending' : 'Subscribe'}
        </button>
      </form>
      {success ? <p className="text-sm font-semibold text-emerald-600 lg:col-span-2">Received. Thank you.</p> : null}
      {error ? <p className="text-sm font-semibold text-red-500 lg:col-span-2">{error}</p> : null}
    </div>
  )
}
