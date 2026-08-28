'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FormLabel, FormShell, FormStatus } from '@/components/ui/form-shell'
import { site } from '@/content/site'

const projectTypes = ['SaaS product', 'CRM / automation', 'AI agents', 'Website', 'ERP integration', 'Other']
const budgets = ['To be scoped', 'Under $5k', '$5k – $15k', '$15k – $40k', '$40k+']

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
    <div className="band band-paper section-y">
      <div className="wrap contact-layout">
        <div className="space-y-5">
          <div>
            <p className="kicker">Contact</p>
            <h1 className="h2 mt-3">Have a system in mind?</h1>
            <p className="section-desc mt-3">
              Tell us what you&apos;re building, what&apos;s slowing your business down, or what you want to automate.
              We&apos;ll help turn the idea into a practical digital solution.
            </p>
          </div>

          <div className="about-visual overflow-hidden">
            <Image
              src="/projects/vivacity.png"
              alt="Softoras project preview"
              width={800}
              height={500}
              className="h-44 w-full object-cover object-top sm:h-52"
              unoptimized
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <article className="stat-pill">
              <strong>8+</strong>
              <span className="text-xs text-[var(--muted)]">Live projects</span>
            </article>
            <article className="stat-pill">
              <strong>2</strong>
              <span className="text-xs text-[var(--muted)]">Offices · PK &amp; UAE</span>
            </article>
          </div>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Email · </span>
              <a className="font-semibold text-[var(--accent)]" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <span className="font-semibold">Pakistan · </span>
              <a href={site.phones.pakistan.href}>{site.phones.pakistan.label}</a>
            </p>
            <p>
              <span className="font-semibold">UAE · </span>
              <a href={site.phones.uae.href}>{site.phones.uae.label}</a>
            </p>
            <p className="text-[var(--muted)]">{site.offices.pakistan}</p>
            <p className="text-[var(--muted)]">{site.offices.uae}</p>
          </div>
        </div>

        <FormShell title="Project inquiry" subtitle="We usually reply within one business day." className="lg:ml-auto">
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
      </div>
    </div>
  )
}
