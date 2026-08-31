'use client'

import { useState } from 'react'
import { FormLabel, FormStatus } from '@/components/ui/form-shell'

type Tab = 'contact' | 'subscribe'

const budgets = ['To be scoped', 'Under $5k', '$5k – $15k', '$15k – $40k', '$40k+']

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
      setError('Could not send. Email admin@softoras.com directly.')
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
      projectType: String(data.get('projectType') || ''),
      budget: String(data.get('budget') || ''),
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
    <div className="contact-layout">
      <div className="contact-aside">
        <div className="section-intro-center section-intro-left-lg">
          <p className="kicker">Contact</p>
          <h2 className="h2 mt-3">Have a system in mind?</h2>
          <p className="section-desc mt-3">
            Tell us what you&apos;re building, what&apos;s slowing your business down, or what you want to automate.
          </p>
        </div>
        <p className="section-desc mt-4">
          SaaS products, CRM setups, automation stacks, AI agents, or full platforms. Tell us what you need and we
          will map the build.
        </p>
        <ul className="about-points mt-4">
          <li>Reply within one business day</li>
          <li>No generic pitch decks</li>
          <li>Engineering-led scoping call</li>
        </ul>
        <p className="mt-4 text-sm font-semibold text-[var(--accent)]">admin@softoras.com</p>
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
          <form onSubmit={onContact} className="form-body" noValidate>
            <div className="form-row form-row-2">
              <div className="form-field">
                <FormLabel htmlFor="home-name">Name</FormLabel>
                <input id="home-name" name="name" required placeholder="Your name" className="field" />
              </div>
              <div className="form-field">
                <FormLabel htmlFor="home-email">Work email</FormLabel>
                <input id="home-email" name="email" type="email" required placeholder="you@company.com" className="field" />
              </div>
            </div>
            <div className="form-field">
              <FormLabel htmlFor="home-company">Company</FormLabel>
              <input id="home-company" name="company" placeholder="Company name" className="field" />
            </div>
            <div className="form-field">
              <FormLabel htmlFor="home-project">What are you looking to build?</FormLabel>
              <input id="home-project" name="projectType" required placeholder="SaaS product, CRM, automation…" className="field" />
            </div>
            <div className="form-field">
              <FormLabel htmlFor="home-budget">Budget / project scope</FormLabel>
              <select id="home-budget" name="budget" className="field" defaultValue="To be scoped">
                {budgets.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <FormLabel htmlFor="home-message">Message</FormLabel>
              <textarea id="home-message" name="message" rows={3} placeholder="Tell us more about the project…" className="field" />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary btn-compact" disabled={loading}>
                {loading ? 'Sending…' : 'Start a Conversation'}
              </button>
              {success ? <FormStatus type="success">Received. Thank you. We will be in touch.</FormStatus> : null}
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
