'use client'

import { useEffect, useState } from 'react'

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
        <svg className="hero-hand-svg" viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroHandSurface" x1="140" y1="80" x2="360" y2="540" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--hand-surface-a)" />
              <stop offset="55%" stopColor="var(--hand-surface-b)" />
              <stop offset="100%" stopColor="var(--hand-surface-c)" />
            </linearGradient>
            <radialGradient id="heroHandPalmGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(240 340) rotate(90) scale(140 110)">
              <stop offset="0%" stopColor="var(--hand-glow-core)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="var(--hand-glow-core)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="heroHandRim" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.2" />
              <stop offset="45%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="75%" stopColor="#a78bfa" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.25" />
            </linearGradient>
            <filter id="heroHandSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="14" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="hero-hand-figure">
            <path
              d="M118 468 C96 468 82 446 88 418 C94 392 118 372 142 362 L148 330 C118 318 98 292 104 258 C110 226 142 210 168 228 L176 252 C160 220 168 182 196 162 C224 142 252 158 262 188 L268 212 C258 168 284 132 318 128 C352 124 378 152 382 188 L388 248 C408 228 442 236 454 264 C466 292 452 324 424 336 L418 362 C448 378 462 412 450 444 C438 476 404 494 368 484 L338 478 C322 512 286 528 240 528 C194 528 158 512 142 478 L118 468 Z"
              fill="url(#heroHandSurface)"
            />
            <path
              d="M118 468 C96 468 82 446 88 418 C94 392 118 372 142 362 L148 330 C118 318 98 292 104 258 C110 226 142 210 168 228 L176 252 C160 220 168 182 196 162 C224 142 252 158 262 188 L268 212 C258 168 284 132 318 128 C352 124 378 152 382 188 L388 248 C408 228 442 236 454 264 C466 292 452 324 424 336 L418 362 C448 378 462 412 450 444 C438 476 404 494 368 484 L338 478 C322 512 286 528 240 528 C194 528 158 512 142 478 L118 468 Z"
              fill="url(#heroHandPalmGlow)"
              opacity="0.55"
            />

            <path
              className="hero-hand-trace hero-hand-trace-a"
              pathLength="1000"
              d="M196 162 C224 142 252 158 262 188 L268 212 L272 248 L278 290 L284 328 L290 368 L296 408 L302 448"
            />
            <path
              className="hero-hand-trace hero-hand-trace-b"
              pathLength="1000"
              d="M262 188 C258 168 284 132 318 128 C352 124 378 152 382 188 L388 248 L392 298 L396 348 L400 398 L404 448"
            />
            <path
              className="hero-hand-trace hero-hand-trace-c"
              pathLength="1000"
              d="M382 188 C408 228 442 236 454 264 C466 292 452 324 424 336 L418 362 L410 402 L402 442 L394 478"
            />
            <path
              className="hero-hand-trace hero-hand-trace-d"
              pathLength="1000"
              d="M168 228 C160 220 168 182 196 162"
            />
            <path
              className="hero-hand-trace hero-hand-trace-e"
              pathLength="1000"
              d="M104 258 C110 226 142 210 168 228 L176 252 L182 292 L188 332 L194 372 L200 412 L206 452"
            />
            <path
              className="hero-hand-trace hero-hand-trace-f"
              pathLength="1000"
              d="M118 468 C96 468 82 446 88 418 C94 392 118 372 142 362 L168 378 L210 392 L240 398 L270 392 L312 378 L338 362 L368 384 L404 398 L438 410 L450 444"
            />
            <path
              className="hero-hand-trace hero-hand-trace-g"
              pathLength="1000"
              d="M142 362 L148 330 C118 318 98 292 104 258"
            />

            <circle cx="248" cy="248" r="28" className="hero-hand-orb hero-hand-orb-main" filter="url(#heroHandSoftGlow)" />
            <circle cx="302" cy="210" r="14" className="hero-hand-orb hero-hand-orb-secondary" filter="url(#heroHandSoftGlow)" />
          </g>
        </svg>
      </div>
    </div>
  )
}
