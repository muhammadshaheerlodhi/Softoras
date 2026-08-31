'use client'

import { useState } from 'react'
import type { FaqItem } from '@/content/faqs'
import SectionHeader from '@/components/ui/section-header'

type FaqSectionProps = {
  items: FaqItem[]
  kicker?: string
  title?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function FaqSection({
  items,
  kicker = 'FAQ',
  title = 'Questions, answered clearly',
  description,
  align = 'center',
  className = '',
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!items.length) return null

  return (
    <section className={`faq-section ${className}`.trim()}>
      <SectionHeader kicker={kicker} title={title} description={description} align={align} />
      <div className="faq-list mt-10">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <article
              key={item.q}
              className={`faq-item${isOpen ? ' is-open' : ''}`}
            >
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="faq-question-text">{item.q}</span>
                <span className="faq-icon" aria-hidden>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div className={`faq-answer${isOpen ? ' is-open' : ''}`}>
                <p>{item.a}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
