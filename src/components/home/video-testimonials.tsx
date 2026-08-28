'use client'

import { useState } from 'react'
import { videoTestimonials } from '@/content/testimonials'

function embedSrc(url: string) {
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
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        {videoTestimonials.length ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {videoTestimonials.map((item) => (
              <article key={item.url} className="panel overflow-hidden">
                <div className="aspect-video bg-[var(--bg-alt)]">
                  <iframe
                    src={embedSrc(item.url)}
                    title={`${item.name} testimonial`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="panel flex min-h-56 items-center p-8">
            <p className="lede">
              Video stories will show here. Send a YouTube or Vimeo link with the form and we will add it.
            </p>
          </div>
        )}
      </div>

      <form onSubmit={onSubmit} className="panel grid gap-4 p-6 md:p-8">
        <p className="text-lg font-semibold">Add a video testimonial</p>
        <p className="text-sm leading-6 text-[var(--muted)]">Paste a YouTube or Vimeo link. We review it, then it goes live.</p>
        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          Name
          <input name="name" required placeholder="Your name" className="field mt-2" />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          Email
          <input name="email" type="email" required placeholder="you@company.com" className="field mt-2" />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          Video link
          <input name="videoUrl" type="url" required placeholder="https://www.youtube.com/watch?v=" className="field mt-2" />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          Note
          <textarea name="message" rows={3} placeholder="Optional note" className="field mt-2 min-h-24" />
        </label>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Sending' : 'Submit video'}
        </button>
        {success ? <p className="text-sm font-semibold text-emerald-600">Received. We will review and add it.</p> : null}
        {error ? <p className="text-sm font-semibold text-red-500">{error}</p> : null}
      </form>
    </div>
  )
}
