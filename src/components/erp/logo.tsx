'use client'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoVariant = 'landing' | 'footer' | 'auth' | 'compact'

const variantStyles: Record<LogoVariant, string> = {
  landing: 'h-20 w-auto sm:h-24',
  footer: 'h-16 w-auto sm:h-20',
  auth: 'h-16 w-auto sm:h-20',
  compact: 'h-10 w-auto',
}

type ErpLogoProps = {
  variant?: LogoVariant
  className?: string
  href?: string
  onClick?: () => void
}

export function ErpLogo({ variant = 'landing', className, href, onClick }: ErpLogoProps) {
  const img = (
    <Image
      src="/erp-logo.png"
      alt="Softoras ERP"
      width={480}
      height={144}
      className={cn('pointer-events-none object-contain object-left', variantStyles[variant], className)}
      priority={variant === 'landing'}
    />
  )

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="inline-flex shrink-0">
        {img}
      </button>
    )
  }

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0">
        {img}
      </Link>
    )
  }

  return <span className="inline-flex shrink-0">{img}</span>
}
