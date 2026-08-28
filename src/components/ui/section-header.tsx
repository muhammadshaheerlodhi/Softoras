import Link from 'next/link'

type SectionHeaderProps = {
  kicker: string
  title: string
  description?: string
  action?: { label: string; href: string }
  align?: 'left' | 'center'
}

export default function SectionHeader({
  kicker,
  title,
  description,
  action,
  align = 'left',
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <div
      className={`section-header ${centered ? 'section-header-center' : ''} ${action ? 'section-header-action' : ''}`}
    >
      <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
        <p className="kicker">{kicker}</p>
        <h2 className="h2 mt-3">{title}</h2>
        {description ? <p className="section-desc mt-3">{description}</p> : null}
      </div>
      {action ? (
        <Link href={action.href} className="section-link shrink-0">
          {action.label} →
        </Link>
      ) : null}
    </div>
  )
}
