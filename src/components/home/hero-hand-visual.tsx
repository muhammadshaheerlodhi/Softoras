'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const GLOBE = { cx: 472, cy: 356, r: 148 } as const

const LAND_MASSES = [
  'M392 316 C412 296 448 292 472 304 C492 328 484 356 460 368 C428 376 398 356 392 316 Z',
  'M536 324 C564 312 592 324 604 352 C598 380 572 392 548 384 C524 372 518 344 536 324 Z',
  'M420 372 C444 360 472 368 488 392 C480 420 456 432 432 424 C408 412 404 388 420 372 Z',
  'M524 392 C548 380 576 392 584 420 C576 444 552 452 528 440 C512 424 512 404 524 392 Z',
  'M448 420 C468 408 492 416 500 440 C492 464 468 472 448 460 C436 444 436 428 448 420 Z',
  'M508 448 C528 436 552 448 556 472 C548 492 524 496 508 484 C496 468 496 456 508 448 Z',
  'M396 404 C408 392 424 398 428 416 C420 432 404 436 396 424 C392 414 392 408 396 404 Z',
  'M560 360 C576 352 592 360 596 376 C588 392 572 396 560 388 C552 376 552 366 560 360 Z',
] as const

const ORBIT_PARTICLES = [
  { cx: 472, cy: 196, r: 2.5 }, { cx: 612, cy: 260, r: 2 }, { cx: 648, cy: 356, r: 2.5 },
  { cx: 612, cy: 452, r: 2 }, { cx: 472, cy: 516, r: 2.5 }, { cx: 332, cy: 452, r: 2 },
  { cx: 296, cy: 356, r: 2.5 }, { cx: 332, cy: 260, r: 2 }, { cx: 540, cy: 220, r: 1.8 },
  { cx: 404, cy: 220, r: 1.8 }, { cx: 404, cy: 492, r: 1.8 }, { cx: 540, cy: 492, r: 1.8 },
] as const

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
        <div className="hero-hand-ambient hero-hand-ambient-core" />

        <div className="hero-hand-composite">
          <div className="hero-hand-photo-layer">
            <Image
              src="/hero/hand-globe.png"
              alt=""
              width={960}
              height={1120}
              className="hero-hand-photo"
              priority
              quality={95}
              sizes="(min-width: 1024px) 576px, 90vw"
            />
            <div className="hero-hand-photo-shine" />
            <div className="hero-hand-photo-depth" />
          </div>

          <svg
            className="hero-hand-globe-svg"
            viewBox="0 0 960 1120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
          >
            <defs>
              <linearGradient id="globeEdge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.45" />
                <stop offset="42%" stopColor="#38bdf8" stopOpacity="1" />
                <stop offset="68%" stopColor="#a78bfa" stopOpacity="0.92" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.35" />
              </linearGradient>
              <radialGradient
                id="globeSphere"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform={`translate(${GLOBE.cx - 28} ${GLOBE.cy - 42}) rotate(58) scale(${GLOBE.r * 1.05} ${GLOBE.r * 0.92})`}
              >
                <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.55" />
                <stop offset="28%" stopColor="#0284c7" />
                <stop offset="62%" stopColor="#075985" />
                <stop offset="88%" stopColor="#0c4a6e" />
                <stop offset="100%" stopColor="#020617" />
              </radialGradient>
              <radialGradient
                id="globeHighlight"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform={`translate(${GLOBE.cx - 52} ${GLOBE.cy - 68}) rotate(35) scale(96 72)`}
              >
                <stop offset="0%" stopColor="#f0f9ff" stopOpacity="0.72" />
                <stop offset="55%" stopColor="#e0f2fe" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="globeAtmosphere"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform={`translate(${GLOBE.cx} ${GLOBE.cy}) rotate(90) scale(${GLOBE.r + 36})`}
              >
                <stop offset="72%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="88%" stopColor="#38bdf8" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.45" />
              </radialGradient>
              <linearGradient id="scanArc" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
              <clipPath id="globeClip">
                <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r} />
              </clipPath>
              <filter id="globeBloom" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g className="hero-hand-figure">
              <ellipse
                cx={GLOBE.cx}
                cy={GLOBE.cy}
                rx={GLOBE.r + 36}
                ry={GLOBE.r + 36}
                className="hero-hand-globe-halo"
              />

              <g className="hero-hand-globe-group" filter="url(#globeBloom)">
                <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r + 44} fill="url(#globeAtmosphere)" opacity="0.85" />

                <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r + 30} className="hero-hand-globe-ring-svg hero-hand-globe-ring-outer-svg" />
                <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r + 18} className="hero-hand-globe-ring-svg hero-hand-globe-ring-mid" />
                <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r + 6} className="hero-hand-globe-ring-svg hero-hand-globe-ring-inner" />

                <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r} fill="url(#globeSphere)" />
                <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r} fill="url(#globeHighlight)" />

                <g clipPath="url(#globeClip)" className="hero-hand-globe-grid">
                  {Array.from({ length: 14 }, (_, i) => {
                    const ry = 10 + i * 10
                    if (ry >= GLOBE.r) return null
                    return (
                      <ellipse
                        key={`lat-${i}`}
                        cx={GLOBE.cx}
                        cy={GLOBE.cy}
                        rx={GLOBE.r}
                        ry={ry}
                        className="hero-hand-globe-lat"
                      />
                    )
                  })}
                  {Array.from({ length: 18 }, (_, i) => {
                    const rx = 10 + i * 8
                    if (rx >= GLOBE.r) return null
                    return (
                      <ellipse
                        key={`lon-${i}`}
                        cx={GLOBE.cx}
                        cy={GLOBE.cy}
                        rx={rx}
                        ry={GLOBE.r}
                        className={`hero-hand-globe-lon${i === 12 ? ' hero-hand-globe-lon-main' : ''}`}
                      />
                    )
                  })}
                </g>

                <g clipPath="url(#globeClip)" className="hero-hand-globe-land">
                  {LAND_MASSES.map((d) => (
                    <path key={d.slice(0, 12)} d={d} />
                  ))}
                </g>

                <path
                  d={`M${GLOBE.cx - GLOBE.r} ${GLOBE.cy} A${GLOBE.r} ${GLOBE.r} 0 0 1 ${GLOBE.cx + GLOBE.r} ${GLOBE.cy}`}
                  className="hero-hand-globe-scan"
                />

                <text x={GLOBE.cx} y={GLOBE.cy + 14} textAnchor="middle" className="hero-hand-globe-label">
                  SAAS
                </text>

                <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r} className="hero-hand-globe-rim" />
              </g>

              <g className="hero-hand-orbit-particles">
                {ORBIT_PARTICLES.map((p, i) => (
                  <circle
                    key={`${p.cx}-${p.cy}`}
                    cx={p.cx}
                    cy={p.cy}
                    r={p.r}
                    className="hero-hand-particle"
                    style={{ animationDelay: `${-i * 0.35}s` }}
                  />
                ))}
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}
