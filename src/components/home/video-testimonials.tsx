'use client'

import { useState } from 'react'
import { FormLabel, FormShell, FormStatus } from '@/components/ui/form-shell'
import { videoTestimonials } from '@/content/testimonials'

function embedSrc(url: string) {
  if (!url) return ''
  const youTube = url.match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/)
  if (youTube) return `https://www.youtube.com/embed/${youTube[1]}`
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`
  return url
}

export default function VideoTestimonials() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    const form = new FormData(event.currentTarget)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'testimonial',
          name: form.get('name'),
          email: form.get('email'),
          videoUrl: form.get('videoUrl'),
          message: form.get('message') || 'Video testimonial',
        }),
      })
      if (!res.ok) throw new Error('fail')
      setSuccess(true)
      event.currentTarget.reset()
    } catch {
      setError('Could not send. Email the video link to us and we will add it.')
    }
    setLoading(false)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
      <div className="grid gap-4 sm:grid-cols-2">
        {videoTestimonials.map((item) => (
          <article key={item.name} className="premium-card card-accent overflow-hidden">
            {item.url ? (
              <div className="aspect-video bg-[var(--bg-alt)]">
                <iframe
                  src={embedSrc(item.url)}
                  title={`${item.name} testimonial`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="video-slot flex aspect-video flex-col items-center justify-center gap-2 p-4 text-center">
                <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--accent)]">
                  Coming soon
                </span>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-[var(--muted)]">{item.role}</p>
              </div>
            )}
            <div className="p-3.5">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="mt-0.5 text-xs text-[var(--muted)]">{item.role}</p>
            </div>
          </article>
        ))}
      </div>

      <FormShell title="Submit a video" subtitle="YouTube or Vimeo link — we review, then publish.">
        <form onSubmit={onSubmit} className="form-body">
          <div className="form-row form-row-2">
            <div className="form-field">
              <FormLabel htmlFor="video-name">Name</FormLabel>
              <input id="video-name" name="name" required placeholder="Your name" className="field" />
            </div>
            <div className="form-field">
              <FormLabel htmlFor="video-email">Email</FormLabel>
              <input id="video-email" name="email" type="email" required placeholder="you@company.com" className="field" />
            </div>
          </div>
          <div className="form-field">
            <FormLabel htmlFor="video-url">Video link</FormLabel>
            <input id="video-url" name="videoUrl" type="url" required placeholder="https://youtube.com/watch?v=" className="field" />
          </div>
          <div className="form-field">
            <FormLabel htmlFor="video-note">Note</FormLabel>
            <textarea id="video-note" name="message" rows={2} placeholder="Optional" className="field" />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary btn-compact" disabled={loading}>
              {loading ? 'Sending…' : 'Submit video'}
            </button>
            {success ? <FormStatus type="success">Received. We will review and add it.</FormStatus> : null}
            {error ? <FormStatus type="error">{error}</FormStatus> : null}
          </div>
        </form>
      </FormShell>
    </div>
  )
}
