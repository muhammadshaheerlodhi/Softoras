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
      <div className="wrap relative grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="rise space-y-5">
          <p className="kicker">{TAGLINE}</p>
          <h1 className="display">
            Custom SaaS, AI Agents &amp; CRM Systems — Built to Ship
          </h1>
          <p className="lede">
            Softoras designs and builds production software: websites, SaaS products, GoHighLevel CRM, n8n and Make
            automations, AI voice agents, and cloud infrastructure. One team from discovery to deploy.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {['SaaS & Web Apps', 'GoHighLevel CRM', 'n8n Automation', 'AI Agents', 'AWS & Vercel'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              See Live Work
            </Link>
          </div>
        </div>
        <div className="browser rise">
          <div className="browser-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="ml-3 text-[11px] font-semibold tracking-wide text-[var(--muted)]">softoras.build</span>
          </div>
          <div className="grid gap-3 bg-[var(--bg-alt)] p-4 sm:grid-cols-2">
            {[
              ['New lead', 'GHL pipeline'],
              ['AI agent', 'Booking live'],
              ['n8n flow', '12 steps'],
              ['Deploy', 'Vercel + AWS'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-3.5">
                <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--accent)]">{label}</p>
                <p className="mt-1.5 text-base font-semibold">{value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2 bg-[var(--bg-alt)] px-4 pb-4">
            <div className="rounded-lg border border-[var(--line)] bg-[var(--panel)] px-3 py-2 font-mono text-[11px] text-[var(--accent)]">
              POST /webhook/lead → n8n → HubSpot → SMS follow-up
            </div>
            <div className="rounded-lg border border-[var(--line)] bg-[var(--panel)] px-3 py-2 font-mono text-[11px] text-[var(--muted)]">
              vapi.call.start → calendar.book → CRM.stage.update
            </div>
            <div className="flex items-center justify-between rounded-lg border border-[var(--line)] bg-[var(--panel)] px-3 py-2 text-xs">
              <span className="font-semibold text-[var(--muted)]">Production status</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-semibold text-emerald-600 dark:text-emerald-400">
                Live
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
