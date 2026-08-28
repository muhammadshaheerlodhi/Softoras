import Link from 'next/link'
import { TAGLINE } from '@/content/site'

export default function Hero() {
  return (
    <section className="band band-ink">
      <div className="grid-bg" />
      <svg className="node-canvas" viewBox="0 0 1200 640" fill="none" aria-hidden>
        <circle cx="180" cy="120" r="4" fill="#38bdf8" opacity="0.7" />
        <circle cx="320" cy="210" r="3" fill="#7dd3fc" />
        <circle cx="980" cy="140" r="4" fill="#38bdf8" />
        <circle cx="1080" cy="280" r="3" fill="#7dd3fc" />
        <path d="M180 120 L320 210 L260 340" stroke="#38bdf8" strokeOpacity="0.25" />
        <path d="M980 140 L1080 280 L920 360" stroke="#38bdf8" strokeOpacity="0.2" />
        <rect x="760" y="300" width="280" height="170" rx="14" stroke="#38bdf8" strokeOpacity="0.28" />
        <rect x="780" y="328" width="70" height="18" rx="4" fill="#38bdf8" fillOpacity="0.35" />
        <rect x="780" y="360" width="230" height="8" rx="4" fill="#38bdf8" fillOpacity="0.18" />
        <rect x="780" y="378" width="180" height="8" rx="4" fill="#38bdf8" fillOpacity="0.12" />
        <rect x="780" y="410" width="48" height="28" rx="6" fill="#38bdf8" fillOpacity="0.22" />
        <rect x="838" y="410" width="48" height="28" rx="6" fill="#38bdf8" fillOpacity="0.14" />
      </svg>
      <div className="wrap relative grid items-center gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="rise space-y-6">
          <p className="kicker text-sky-300">{TAGLINE}</p>
          <h1 className="display text-white">We Build Software That Moves Businesses Forward</h1>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            SaaS platforms, AI automation, CRM systems, business applications, high-performance websites, and cloud
            infrastructure — engineered for production, not decks.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <Link href="/projects" className="btn btn-ghost text-white">
              Explore Our Work
            </Link>
          </div>
        </div>
        <div className="browser rise">
          <div className="browser-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="ml-3 text-[11px] font-semibold tracking-wide text-slate-400">operations.softoras</span>
          </div>
          <div className="grid gap-3 bg-[#070b10] p-5 sm:grid-cols-3">
            {[
              ['Pipeline', 'Qualified'],
              ['Automations', 'Live'],
              ['Deploy', 'AWS / Vercel'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-white/10 p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-sky-400">{label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2 bg-[#070b10] px-5 pb-5">
            {['Lead in → CRM stage', 'Webhook → n8n / Make', 'Release → cloud'].map((row) => (
              <div key={row} className="rounded-lg border border-white/10 px-3 py-2 font-mono text-xs text-sky-200/80">
                {row}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
