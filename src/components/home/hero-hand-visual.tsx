'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function HeroHandVisual() {
  const [reduceMotion, setReduceMotion] = useState(true)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  return (
    <div className={`hero-hand${reduceMotion ? ' is-static' : ''}`} aria-hidden>
      <div className="hero-hand-stage">
        <div className="hero-hand-ambient" />
        <div className="hero-hand-ambient hero-hand-ambient-violet" />

        <div className="hero-hand-figure">
          <div className="hero-hand-globe-glow" />
          <div className="hero-hand-globe-ring" />
          <div className="hero-hand-globe-ring hero-hand-globe-ring-outer" />
          <Image
            src="/hero/hand-globe.png"
            alt=""
            width={900}
            height={900}
            className="hero-hand-photo"
            priority
            sizes="(min-width: 1024px) 480px, 90vw"
          />
        </div>
      </div>
    </div>
  )
}
