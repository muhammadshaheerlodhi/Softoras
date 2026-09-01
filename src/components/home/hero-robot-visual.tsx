'use client'

import { useEffect, useState } from 'react'

export default function HeroRobotVisual() {
  const [reduceMotion, setReduceMotion] = useState(true)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  return (
    <div className={`hero-robot${reduceMotion ? ' is-static' : ''}`} aria-hidden>
      <div className="hero-robot-stage">
        <div className="hero-robot-glow-field" />
        <svg className="hero-robot-svg" viewBox="0 0 420 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroRobotMetal" x1="120" y1="40" x2="320" y2="460" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--robot-metal-a)" />
              <stop offset="42%" stopColor="var(--robot-metal-b)" />
              <stop offset="100%" stopColor="var(--robot-metal-c)" />
            </linearGradient>
            <linearGradient id="heroRobotMetalSoft" x1="180" y1="80" x2="260" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--robot-metal-highlight)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="var(--robot-metal-b)" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="heroRobotVisor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--robot-accent)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="var(--robot-accent-bright)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--robot-accent)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="heroRobotTraceGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.15" />
            </linearGradient>
            <filter id="heroRobotVisorGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="heroRobotTraceGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="hero-robot-figure">
            <ellipse cx="210" cy="488" rx="88" ry="10" className="hero-robot-ground" />

            <path
              d="M118 430 C118 360 142 312 168 286 L168 262 C168 228 186 206 210 206 C234 206 252 228 252 262 L252 286 C278 312 302 360 302 430 Z"
              fill="url(#heroRobotMetal)"
            />
            <path
              d="M152 286 L152 248 C152 214 176 188 210 188 C244 188 268 214 268 248 L268 286"
              fill="var(--robot-neck)"
            />

            <path
              d="M132 248 C132 176 162 118 210 118 C258 118 288 176 288 248 L288 278 C288 304 270 322 246 328 L174 328 C150 322 132 304 132 278 Z"
              fill="url(#heroRobotMetal)"
            />
            <path
              d="M156 236 L156 188 C156 156 178 134 210 134 C242 134 264 156 264 188 L264 236"
              fill="url(#heroRobotMetalSoft)"
              opacity="0.85"
            />

            <rect x="148" y="196" width="124" height="22" rx="10" fill="url(#heroRobotVisor)" filter="url(#heroRobotVisorGlow)" />
            <rect x="148" y="196" width="124" height="22" rx="10" stroke="var(--robot-accent-bright)" strokeWidth="0.6" strokeOpacity="0.45" fill="none" />

            <path
              d="M268 278 L312 296 L322 360 L286 372 L268 322 Z"
              fill="url(#heroRobotMetal)"
            />
            <path
              d="M152 278 L108 296 L98 360 L134 372 L152 322 Z"
              fill="url(#heroRobotMetal)"
            />

            <path
              d="M286 308 L318 286 L338 248 L352 210 L328 196 L302 218 L284 248 L276 278 Z"
              fill="url(#heroRobotMetal)"
            />
            <ellipse cx="328" cy="202" rx="16" ry="20" fill="url(#heroRobotMetalSoft)" />

            <path
              d="M198 318 L188 356 L176 392 L198 398 L214 360 L220 318 Z"
              fill="var(--robot-chest-core)"
              opacity="0.9"
            />
            <rect x="188" y="334" width="28" height="3" rx="1.5" fill="var(--robot-accent-bright)" opacity="0.55" />
            <rect x="192" y="344" width="20" height="2" rx="1" fill="var(--robot-accent-bright)" opacity="0.35" />

            <path
              className="hero-robot-trace hero-robot-trace-a"
              pathLength="1000"
              d="M132 248 C132 176 162 118 210 118 C258 118 288 176 288 248 L288 278 C288 304 270 322 246 328 L174 328 C150 322 132 304 132 278 Z"
            />
            <path
              className="hero-robot-trace hero-robot-trace-b"
              pathLength="1000"
              d="M118 430 C118 360 142 312 168 286 L168 262 C168 228 186 206 210 206 C234 206 252 228 252 262 L252 286 C278 312 302 360 302 430 Z"
            />
            <path
              className="hero-robot-trace hero-robot-trace-c"
              pathLength="1000"
              d="M286 308 L318 286 L338 248 L352 210 L328 196 L302 218 L284 248 L276 278 L286 308 Z"
            />
            <path
              className="hero-robot-trace hero-robot-trace-d"
              pathLength="1000"
              d="M152 278 L108 296 L98 360 L134 372 L152 322 Z"
            />
            <path
              className="hero-robot-trace hero-robot-trace-e"
              pathLength="1000"
              d="M268 278 L312 296 L322 360 L286 372 L268 322 Z"
            />

            <path
              className="hero-robot-trace hero-robot-trace-f"
              pathLength="1000"
              d="M158 207 H262 A10 10 0 0 0 272 218 V207 A10 10 0 0 0 262 197 H158 A10 10 0 0 0 148 207 V218 A10 10 0 0 0 158 207 Z"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}
