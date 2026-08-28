import Link from 'next/link'
import { TAGLINE } from '@/content/site'

export default function Hero() {
  return (
    <section className="band band-hero">
      <div className="grid-bg" />
      <svg className="node-canvas" viewBox="0 0 1200 640" fill="none" aria-hidden>
        <circle cx="180" cy="120" r="4" fill="#0ea5e9" opacity="0.7" />
        <circle cx="320" cy="210" r="3" fill="#38bdf8" />
        <circle cx="980" cy="140" r="4" fill="#0ea5e9" />
        <circle cx="1080" cy="280" r="3" fill="#38bdf8" />
        <path d="M180 120 L320 210 L260 340" stroke="#0ea5e9" strokeOpacity="0.28" />
        <path d="M980 140 L1080 280 L920 360" stroke="#0ea5e9" strokeOpacity="0.22" />
      </svg>
      <div className="wrap relative grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="rise space-y-6">
          <p className="kicker">{TAGLINE}</p>
          <h1 className="display">We Build Software That Moves Businesses Forward</h1>
          <p className="lede">
            SaaS products, custom websites, AI agents, n8n automations, CRM, and cloud servers. Built to go live, not
            sit in a deck.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              Explore Our Work
            </Link>
          </div>
        </div>
        <div className="browser rise">
          <div className="browser-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="ml-3 text-[11px] font-semibold tracking-wide text-[var(--muted)]">operations.softoras</span>
          </div>
          <div className="grid gap-3 bg-[var(--bg-alt)] p-5 sm:grid-cols-3">
            {[
              ['Pipeline', 'Qualified'],
              ['Automations', 'Live'],
              ['Deploy', 'AWS / Vercel'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">{label}</p>
                <p className="mt-2 text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2 bg-[var(--bg-alt)] px-5 pb-5">
            {['Lead in to CRM stage', 'Webhook to n8n / Make', 'Release to cloud'].map((row) => (
              <div key={row} className="rounded-lg border border-[var(--line)] bg-[var(--panel)] px-3 py-2 font-mono text-xs text-[var(--accent)]">
                {row}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
