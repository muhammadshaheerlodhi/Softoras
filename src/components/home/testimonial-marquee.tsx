'use client'

import { quotes } from '@/content/testimonials'

export default function TestimonialMarquee() {
  const items = [...quotes, ...quotes]
  return (
    <div className="overflow-hidden">
      <div className="marquee">
        {items.map((item, index) => (
          <article key={`${item.text}-${index}`} className="quote-card">
            <p className="text-sm leading-7">{item.text}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{item.name}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
