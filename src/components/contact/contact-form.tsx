'use client'

import { useState } from 'react'
import { FormLabel, FormShell, FormStatus } from '@/components/ui/form-shell'

const projectTypes = ['SaaS product', 'CRM / automation', 'AI agents', 'Website', 'ERP integration', 'Other']
const budgets = ['To be scoped', 'Under $5k', '$5k – $15k', '$15k – $40k', '$40k+']

export default function ContactForm() {
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
        body: JSON.stringify({ kind: 'contact', ...payload }),
      })
      if (!res.ok) throw new Error('fail')
      setSuccess(true)
      event.currentTarget.reset()
    } catch {
      setError('Could not send. Email admin@softoras.com directly.')
    }
    setLoading(false)
  }

  return (
    <FormShell title="Project inquiry" subtitle="We usually reply within one business day." className="contact-form-shell">
      <form onSubmit={onSubmit} className="form-body">
        <div className="form-row form-row-2">
          <div className="form-field">
            <FormLabel htmlFor="contact-name">Name</FormLabel>
            <input id="contact-name" name="name" required placeholder="Your name" className="field" />
          </div>
          <div className="form-field">
            <FormLabel htmlFor="contact-email">Work email</FormLabel>
            <input id="contact-email" name="email" type="email" required placeholder="you@company.com" className="field" />
          </div>
        </div>
        <div className="form-field">
          <FormLabel htmlFor="contact-company">Company</FormLabel>
          <input id="contact-company" name="company" placeholder="Company name" className="field" />
        </div>
        <div className="form-field">
          <FormLabel htmlFor="contact-build">What are you looking to build?</FormLabel>
          <select id="contact-build" name="projectType" className="field" defaultValue="SaaS product">
            {projectTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <FormLabel htmlFor="contact-budget">Budget / project scope</FormLabel>
          <select id="contact-budget" name="budget" className="field" defaultValue="To be scoped">
            {budgets.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <FormLabel htmlFor="contact-message">Message</FormLabel>
          <textarea id="contact-message" name="message" rows={3} placeholder="Tell us more…" className="field" />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary btn-compact" disabled={loading}>
            {loading ? 'Sending…' : 'Start a Conversation'}
          </button>
          {success ? <FormStatus type="success">Received. We will get back to you.</FormStatus> : null}
          {error ? <FormStatus type="error">{error}</FormStatus> : null}
        </div>
      </form>
    </FormShell>
  )
}
