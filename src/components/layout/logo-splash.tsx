'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function LogoSplash() {
  const pathname = usePathname()
  const [phase, setPhase] = useState<'idle' | 'in' | 'out' | 'done'>('idle')

  useEffect(() => {
    if (pathname !== '/') {
      setPhase('done')
      return
    }

    setPhase('in')
    document.body.classList.add('logo-splash-lock')

    const outTimer = window.setTimeout(() => setPhase('out'), 1800)
    const doneTimer = window.setTimeout(() => {
      setPhase('done')
      document.body.classList.remove('logo-splash-lock')
    }, 2400)

    return () => {
      window.clearTimeout(outTimer)
      window.clearTimeout(doneTimer)
      document.body.classList.remove('logo-splash-lock')
    }
  }, [pathname])

  if (phase === 'done' || phase === 'idle') return null

  return (
    <div
      className={`logo-splash${phase === 'out' ? ' is-out' : ''}`}
      aria-hidden={phase === 'out'}
    >
      <div className="logo-splash-backdrop" />
      <div className="logo-splash-stage">
        <div className="logo-splash-lines" aria-hidden>
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className="logo-splash-line" style={{ '--line-i': index } as React.CSSProperties} />
          ))}
        </div>
        <div className="logo-splash-ring logo-splash-ring-outer" aria-hidden />
        <div className="logo-splash-ring logo-splash-ring-inner" aria-hidden />
        <Image
          src="/brand/softoras-mark.png"
          alt=""
          width={320}
          height={105}
          className="logo-splash-mark"
          priority
        />
      </div>
    </div>
  )
}
