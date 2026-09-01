'use client'

import { useEffect, useState } from 'react'

const hudLabels = [
  { id: 'core', text: 'AI.CORE', x: '8%', y: '22%' },
  { id: 'sync', text: 'SYS.SYNC', x: '72%', y: '18%' },
  { id: 'link', text: 'CRM.LINK', x: '76%', y: '48%' },
  { id: 'cloud', text: 'CLOUD.OK', x: '10%', y: '62%' },
]

export default function HeroRobotVisual() {
  const [reduceMotion, setReduceMotion] = useState(true)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  return (
    <div className={`hero-robot${reduceMotion ? ' is-static' : ''}`} aria-hidden>
      <div className="hero-robot-scene">
        <div className="hero-robot-ambient" />
        <div className="hero-robot-grid" />
        <div className="hero-robot-floor-glow" />

        {hudLabels.map((label) => (
          <div key={label.id} className={`hero-robot-hud hero-robot-hud-${label.id}`} style={{ top: label.y, left: label.x }}>
            <span className="hero-robot-hud-line" />
            <span className="hero-robot-hud-text">{label.text}</span>
          </div>
        ))}

        <div className="hero-robot-float">
          <svg className="hero-robot-svg" viewBox="0 0 360 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="robot-body-grad" x1="120" y1="40" x2="280" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="var(--robot-grad-a)" />
                <stop offset="55%" stopColor="var(--robot-grad-b)" />
                <stop offset="100%" stopColor="var(--robot-grad-c)" />
              </linearGradient>
              <linearGradient id="robot-visor-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--robot-visor-a)" stopOpacity="0.15" />
                <stop offset="45%" stopColor="var(--robot-visor-b)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--robot-visor-a)" stopOpacity="0.15" />
              </linearGradient>
              <filter id="robot-glow-filter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <ellipse cx="180" cy="390" rx="95" ry="14" className="hero-robot-shadow" />

            <path
              d="M72 330 C72 290 95 255 130 240 L130 220 C130 195 148 175 175 168 L185 168 C212 175 230 195 230 220 L230 240 C265 255 288 290 288 330 Z"
              fill="url(#robot-body-grad)"
              stroke="var(--robot-stroke)"
              strokeWidth="1.2"
            />

            <path
              d="M118 250 L118 210 C118 182 142 160 180 160 C218 160 242 182 242 210 L242 250"
              fill="var(--robot-neck)"
              stroke="var(--robot-stroke)"
              strokeWidth="1"
            />

            <rect x="138" y="188" width="84" height="8" rx="4" className="hero-robot-neck-seam" />
            <rect x="148" y="202" width="64" height="6" rx="3" className="hero-robot-neck-seam" />

            <path
              d="M108 175 C108 118 138 78 180 78 C222 78 252 118 252 175 L252 198 C252 218 236 232 216 236 L144 236 C124 232 108 218 108 198 Z"
              fill="url(#robot-body-grad)"
              stroke="var(--robot-stroke)"
              strokeWidth="1.2"
            />

            <path
              d="M128 168 L128 132 C128 108 150 92 180 92 C210 92 232 108 232 132 L232 168"
              fill="var(--robot-helmet-inner)"
              stroke="var(--robot-stroke)"
              strokeWidth="0.8"
            />

            <rect x="122" y="138" width="116" height="28" rx="8" fill="url(#robot-visor-grad)" className="hero-robot-visor" filter="url(#robot-glow-filter)" />

            <rect x="122" y="138" width="116" height="28" rx="8" fill="none" stroke="var(--robot-visor-b)" strokeWidth="0.6" strokeOpacity="0.5" />

            <path d="M108 198 L92 210 L88 248 L108 248 Z" fill="var(--robot-shoulder)" stroke="var(--robot-stroke)" strokeWidth="1" />
            <path d="M252 198 L268 210 L272 248 L252 248 Z" fill="var(--robot-shoulder)" stroke="var(--robot-stroke)" strokeWidth="1" />

            <circle cx="180" cy="152" r="3" className="hero-robot-sensor" />
            <path d="M156 118 L164 126 M204 126 L212 118" stroke="var(--robot-stroke)" strokeWidth="1" strokeLinecap="round" opacity="0.45" />

            <rect x="158" y="268" width="44" height="36" rx="6" fill="var(--robot-chest)" stroke="var(--robot-stroke)" strokeWidth="0.8" />
            <rect x="168" y="278" width="24" height="4" rx="2" className="hero-robot-chest-line" />
            <rect x="168" y="288" width="18" height="3" rx="1.5" className="hero-robot-chest-line" opacity="0.6" />
          </svg>
        </div>

        <div className="hero-robot-status">
          <span className="hero-robot-status-dot" />
          <span className="hero-robot-status-text">Softoras agent online</span>
        </div>
      </div>
    </div>
  )
}
