'use client'

import { motion, useReducedMotion } from 'framer-motion'

const panels = [
  { label: 'CRM Pipeline', value: '24 active deals', x: '8%', y: '12%', delay: 0.1 },
  { label: 'AI Assistant', value: 'Voice + chat live', x: '52%', y: '8%', delay: 0.2 },
  { label: 'Automation', value: 'n8n · 18 flows', x: '6%', y: '48%', delay: 0.3 },
  { label: 'Analytics', value: 'Revenue + ops', x: '50%', y: '44%', delay: 0.4 },
  { label: 'Cloud Deploy', value: 'AWS · Vercel', x: '28%', y: '72%', delay: 0.5 },
]

export default function HeroCommandCenter() {
  const reduce = useReducedMotion()

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: 'easeOut' as const },
        }

  return (
    <div className="command-center" aria-hidden>
      <div className="command-center-glow" />
      <svg className="command-center-lines" viewBox="0 0 400 320" preserveAspectRatio="none">
        <path d="M90 60 L210 50 L320 110" className="command-line" />
        <path d="M70 170 L180 140 L280 200" className="command-line" />
        <path d="M200 250 L160 180 L240 120" className="command-line command-line-soft" />
        <circle cx="90" cy="60" r="4" className="command-node" />
        <circle cx="210" cy="50" r="4" className="command-node" />
        <circle cx="320" cy="110" r="4" className="command-node" />
        <circle cx="70" cy="170" r="3" className="command-node" />
        <circle cx="280" cy="200" r="3" className="command-node" />
        <circle cx="200" cy="250" r="4" className="command-node" />
      </svg>

      <div className="command-center-bar">
        <span className="command-dot command-dot-red" />
        <span className="command-dot command-dot-amber" />
        <span className="command-dot command-dot-green" />
        <span className="command-center-url">softoras.systems</span>
        <span className="command-center-status">Live</span>
      </div>

      <div className="command-center-body">
        {panels.map((panel) => (
          <motion.div
            key={panel.label}
            className="command-panel"
            style={{ left: panel.x, top: panel.y }}
            {...fade(panel.delay)}
          >
            <p className="command-panel-label">{panel.label}</p>
            <p className="command-panel-value">{panel.value}</p>
          </motion.div>
        ))}

        <motion.div className="command-api" {...fade(0.55)}>
          <span className="command-api-tag">API</span>
          POST /webhook → CRM → SMS → Cloud
        </motion.div>
      </div>
    </div>
  )
}
