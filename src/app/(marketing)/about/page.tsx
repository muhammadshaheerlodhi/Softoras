import Image from 'next/image'
import Link from 'next/link'
import { site, TAGLINE } from '@/content/site'
import { stackGroups } from '@/content/stack'
import TechGrid from '@/components/ui/tech-grid'

export const metadata = {
  title: 'About',
  description: 'Softoras is led by Muhammad Shaheer Lodhi, CEO. Think SaaS. Think Softoras.',
}

export default function AboutPage() {
  return (
    <div className="band band-paper pb-24 pt-16">
      <div className="wrap">
        <p className="kicker">About</p>
        <h1 className="h2 mt-4 max-w-3xl">A technology company that builds, ships, and runs real systems</h1>
        <p className="lede mt-5">
          Softoras designs custom websites, SaaS products, AI agents, n8n automations, CRM, and cloud — then puts them
          live. {TAGLINE}
        </p>
      </div>

      <section className="wrap mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="ceo-frame mx-auto w-full max-w-sm">
          <Image
            src="/about/shaheer-lodhi.png"
            alt="Muhammad Shaheer Lodhi, CEO of Softoras"
            width={640}
            height={640}
            className="h-auto w-full object-contain"
            quality={100}
            unoptimized
            priority
          />
        </div>
        <div>
          <p className="kicker">CEO</p>
          <h2 className="h2 mt-3">Muhammad Shaheer Lodhi</h2>
          <p className="mt-2 text-sm font-semibold text-[var(--accent)]">CEO &amp; Founder · Softoras</p>
          <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
            Shaheer is a software engineer and AWS Certified Solutions Architect Associate. He builds and runs product
            work across software, web, backend, cloud, DevOps, CRM, GoHighLevel, AI automation, and SaaS.
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Public work includes CRM operations for Vivacity Solutions North America, earlier GoHighLevel work at
            Nexus95, and frontend engineering at Teknotize. Softoras is the company that turns that same stack into
            products and client systems.
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Offices in Rawalpindi, Pakistan and Khor Fakkan, Sharjah, UAE.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={site.linkedin} className="btn btn-primary" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap mt-16">
        <h2 className="h2">What we work with</h2>
        <p className="lede mt-3">The tools we ship on — logos, not a résumé dump.</p>
        <div className="mt-8">
          <TechGrid />
        </div>
      </section>

      <section className="wrap mt-16">
        <h2 className="h2">Capability map</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {stackGroups.map((group) => (
            <article key={group.title} className="panel panel-hover p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{group.items.join(' · ')}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
