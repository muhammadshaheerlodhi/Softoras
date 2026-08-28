import Link from 'next/link'

type LogoProps = {
  className?: string
  compact?: boolean
}

export default function Logo({ className = '', compact = false }: LogoProps) {
  return (
    <Link href="/" className={`logo-link ${compact ? 'logo-link-compact' : ''} ${className}`} aria-label="Softoras home">
      <span className="logo-mark" aria-hidden>
        S
      </span>
      <span className="logo-word">
        <span className="logo-s">S</span>
        <span className="logo-rest">oftoras</span>
      </span>
    </Link>
  )
}
