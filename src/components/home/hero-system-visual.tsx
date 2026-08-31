'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const modules = [
  { label: 'CRM', value: '24 deals', detail: 'Pipeline live' },
  { label: 'AI', value: 'Voice + chat', detail: 'Agents running' },
  { label: 'Automation', value: '18 flows', detail: 'n8n connected' },
  { label: 'Cloud', value: 'AWS · Vercel', detail: 'Production' },
]

export default function HeroSystemVisual() {
  const [reduceMotion, setReduceMotion] = useState(true)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  return (
    <div className="hero-system" aria-hidden>
      <div className="hero-system-glow" />
      <div className="hero-system-bar">
        <span className="hero-system-dot" />
        <span className="hero-system-dot" />
        <span className="hero-system-dot hero-system-dot-live" />
        <span className="hero-system-url">softoras.systems</span>
        <span className="hero-system-badge">Live</span>
      </div>

      <div className="hero-system-body">
        <div className="hero-system-hub">
          <motion.div
            className="hero-system-ring hero-system-ring-outer"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="hero-system-ring hero-system-ring-inner"
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
          <div className="hero-system-core">
            <span className="hero-system-core-label">Softoras OS</span>
            <span className="hero-system-core-value">Systems online</span>
          </div>
        </div>

        <div className="hero-system-grid">
          {modules.map((item, index) => (
            <motion.article
              key={item.label}
              className="hero-system-card"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 * index, ease: 'easeOut' }}
            >
              <p className="hero-system-card-label">{item.label}</p>
              <p className="hero-system-card-value">{item.value}</p>
              <p className="hero-system-card-detail">{item.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="hero-system-flow">
          <span className="hero-system-flow-tag">API</span>
          <span className="hero-system-flow-text">POST /webhook → CRM → SMS → Cloud</span>
        </div>
      </div>
    </div>
  )
}
