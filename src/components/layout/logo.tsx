import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  className?: string
  compact?: boolean
}

export default function Logo({ className = '', compact = false }: LogoProps) {
  return (
    <Link href="/" className={`logo-link ${compact ? 'logo-link-compact' : ''} ${className}`} aria-label="Softoras home">
      <Image
        src="/brand/softoras-mark.png"
        alt="Softoras"
        width={640}
        height={476}
        className="logo-img"
        quality={90}
        sizes="(max-width: 768px) 140px, 168px"
        priority
      />
    </Link>
  )
}
