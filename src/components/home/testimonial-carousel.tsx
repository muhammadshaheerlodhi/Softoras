'use client'

import { useCallback, useEffect, useState } from 'react'
import { quotes } from '@/content/testimonials'

function initials(label: string) {
  return label
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)

  const goTo = useCallback((next: number) => {
    setIndex((current) => {
      setPrevIndex(current)
      return (next + quotes.length) % quotes.length
    })
  }, [])

  const goPrev = () => goTo(index - 1)
  const goNext = () => goTo(index + 1)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => {
        setPrevIndex(current)
        return (current + 1) % quotes.length
      })
    }, 5500)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (prevIndex === null) return
    const timer = window.setTimeout(() => setPrevIndex(null), 420)
    return () => window.clearTimeout(timer)
  }, [prevIndex])

  return (
    <div className="testimonial-carousel reveal-section">
      <div className="testimonial-viewport" aria-live="polite">
        {quotes.map((item, i) => {
          const isActive = i === index
          const isExiting = prevIndex !== null && i === prevIndex && !isActive

          return (
            <div
              key={item.text}
              className={`testimonial-slide${isActive ? ' is-active' : ''}${isExiting ? ' is-exiting' : ''}`}
              aria-hidden={!isActive}
            >
              <article className="testimonial-card">
                <span className="testimonial-quote-mark" aria-hidden>
                  &ldquo;
                </span>
                <blockquote className="testimonial-text">{item.text}</blockquote>
                <footer className="testimonial-author">
                  <span className="testimonial-avatar" aria-hidden>
                    {initials(item.name)}
                  </span>
                  <div>
                    <cite className="testimonial-role">{item.name}</cite>
                    <span className="testimonial-context">Partner feedback</span>
                  </div>
                </footer>
              </article>
            </div>
          )
        })}
      </div>

      <div className="testimonial-nav">
        <button type="button" className="testimonial-nav-btn" onClick={goPrev} aria-label="Previous testimonial">
          ←
        </button>
        <div className="testimonial-dots" role="tablist" aria-label="Testimonials">
          {quotes.map((item, i) => (
            <button
              key={item.text}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}`}
              className={`testimonial-dot${i === index ? ' is-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button type="button" className="testimonial-nav-btn" onClick={goNext} aria-label="Next testimonial">
          →
        </button>
      </div>
    </div>
  )
}
