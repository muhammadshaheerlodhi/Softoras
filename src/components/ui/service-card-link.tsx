import Link from 'next/link'
import type { Service } from '@/content/site'

function excerptSentences(text: string, count = 2) {
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g)
  if (!sentences) return text
  return sentences.slice(0, count).join('').trim()
}

type ServiceCardLinkProps = {
  item: Service
  variant?: 'home' | 'page'
}

export default function ServiceCardLink({ item, variant = 'home' }: ServiceCardLinkProps) {
  const linkLabel = variant === 'page' ? 'View service details →' : 'Learn more →'
  const HeadingTag = variant === 'page' ? 'h2' : 'h3'

  return (
    <Link href={`/services/${item.slug}`} className="card-service">
      <span className="card-service-icon" aria-hidden>
        {item.icon}
      </span>
      <HeadingTag className="card-service-title">{item.title}</HeadingTag>
      <div className="card-service-body">
        <p className="card-service-desc">{item.description}</p>
        <p className="card-service-detail">{excerptSentences(item.detail, 2)}</p>
      </div>
      {variant === 'page' ? (
        <ul className="clean-list mt-4 space-y-1 text-sm text-[var(--muted)]">
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
      <span className="card-service-link">{linkLabel}</span>
    </Link>
  )
}
