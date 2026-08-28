import Link from 'next/link'
import HeroMolecule from '@/components/home/hero-molecule'
import { TAGLINE } from '@/content/site'

export default function Hero() {
  return (
    <section className="band band-hero">
      <div className="grid-bg" />
      <div className="wrap relative grid items-center gap-8 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20">
        <div className="rise space-y-4 sm:space-y-5">
          <p className="kicker">{TAGLINE}</p>
          <h1 className="display">Custom SaaS, AI Agents &amp; CRM Systems — Built to Ship</h1>
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
        <div className="rise w-full">
          <HeroMolecule />
        </div>
      </div>
    </section>
  )
}
