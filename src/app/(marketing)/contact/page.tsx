'use client'

import { useState } from 'react'
import { site } from '@/content/site'

const MAP_EMBED_URL = 'https://www.google.com/maps?q=Rawalpindi%20Pakistan&output=embed'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      })
      if (res.ok) {
        setSuccess(true)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      } else {
        setError('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white px-4 py-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row">
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="card p-8">
            <h3 className="text-sm font-semibold text-sky-700">Pakistan office</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{site.offices.pakistan}</p>
            <p className="mt-2 text-sm text-slate-600">
              Phone:{' '}
              <a className="font-semibold text-sky-700 hover:underline" href={site.phones.pakistan.href}>
                {site.phones.pakistan.label}
              </a>
            </p>
          </div>
          <div className="card p-8">
            <h3 className="text-sm font-semibold text-sky-700">UAE office</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{site.offices.uae}</p>
            <p className="mt-2 text-sm text-slate-600">
              Phone:{' '}
              <a className="font-semibold text-sky-700 hover:underline" href={site.phones.uae.href}>
                {site.phones.uae.label}
              </a>
            </p>
          </div>
          <div className="card p-8">
            <h3 className="text-sm font-semibold text-sky-700">Email</h3>
            <a href={`mailto:${site.email}`} className="mt-2 block text-sm font-semibold text-sky-700 hover:underline">
              {site.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:w-1/2">
          <form onSubmit={handleSubmit} className="card mx-auto w-full max-w-md space-y-5 p-8">
            <div>
              <h2 className="text-xl font-semibold">Book a consultation</h2>
              <p className="mt-2 text-sm text-slate-600">Tell us your goals. We will reply with a tailored plan.</p>
            </div>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-sky-100 bg-sky-50/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg border border-sky-100 bg-sky-50/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Your phone"
              className="w-full rounded-lg border border-sky-100 bg-sky-50/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-400"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              placeholder="Tell us more about the project"
              className="w-full rounded-lg border border-sky-100 bg-sky-50/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            />
            <button type="submit" className="btn-primary w-full" disabled={loading}>
              {loading ? 'Sending…' : 'Get in touch'}
            </button>
            {success ? <p className="text-center text-sm font-semibold text-green-600">Message sent. We will get back to you soon.</p> : null}
            {error ? <p className="text-center text-sm font-semibold text-red-600">{error}</p> : null}
          </form>
          <div className="h-64 overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Softoras location"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
