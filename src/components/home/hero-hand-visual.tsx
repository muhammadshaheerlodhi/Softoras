'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

/** Globe sits in the cupped hollow between the palms */
const GLOBE = { cx: 480, cy: 268, r: 108 } as const

const ORBIT_PARTICLES = [
  { cx: 480, cy: 108, r: 2.5 }, { cx: 620, cy: 172, r: 2 }, { cx: 656, cy: 268, r: 2.5 },
  { cx: 620, cy: 364, r: 2 }, { cx: 480, cy: 428, r: 2.5 }, { cx: 340, cy: 364, r: 2 },
  { cx: 304, cy: 268, r: 2.5 }, { cx: 340, cy: 172, r: 2 }, { cx: 548, cy: 132, r: 1.8 },
  { cx: 412, cy: 132, r: 1.8 }, { cx: 412, cy: 404, r: 1.8 }, { cx: 548, cy: 404, r: 1.8 },
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
              src="/hero/hands-cupped.png"
              alt=""
              width={960}
              height={720}
              className="hero-hand-photo"
              priority
              quality={100}
              sizes="(min-width: 1024px) 576px, 90vw"
            />
            <div className="hero-hand-photo-shine" />
            <div className="hero-hand-photo-depth" />
            <div className="hero-hand-photo-clarity" />
          </div>

          <svg
            className="hero-hand-globe-svg"
            viewBox="0 0 960 720"
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
                gradientTransform={`translate(${GLOBE.cx - 52} ${GLOBE.cy - 68}) rotate(35) scale(88 64)`}
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
                    const ry = 8 + i * 8
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
                    const rx = 8 + i * 6
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

                <path
                  d={`M${GLOBE.cx - GLOBE.r} ${GLOBE.cy} A${GLOBE.r} ${GLOBE.r} 0 0 1 ${GLOBE.cx + GLOBE.r} ${GLOBE.cy}`}
                  className="hero-hand-globe-scan"
                />

                <text x={GLOBE.cx} y={GLOBE.cy + 12} textAnchor="middle" className="hero-hand-globe-label">
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
