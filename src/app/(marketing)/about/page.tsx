import { site, TAGLINE } from '@/content/site'
import { stackGroups } from '@/content/stack'

export const metadata = {
  title: 'About',
  description: 'Softoras is an engineering-driven technology company. Think SaaS. Think Softoras.',
}

export default function AboutPage() {
  return (
    <div className="band band-paper pb-24 pt-16">
      <div className="wrap max-w-4xl">
        <p className="kicker">About</p>
        <h1 className="h2 mt-4">Softoras is an engineering-driven technology company</h1>
        <p className="lede mt-5">
          We design and ship software across SaaS, AI automation, CRM, web development, cloud, DevOps, and business
          systems. {TAGLINE} The work is specific: production apps, operational CRM, and infrastructure that can be
          released.
        </p>
      </div>

      <section className="wrap mt-14 grid gap-6 md:grid-cols-2">
        <article className="panel p-7">
          <h2 className="text-xl font-semibold">Engineering background</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            Softoras is led by Muhammad Shaheer Lodhi — software engineer and AWS Certified Solutions Architect
            Associate — with public experience in software engineering, web and backend development, cloud computing,
            DevOps, CRM automation, GoHighLevel operations, AI automation, and SaaS development.
          </p>
          <a href={site.linkedin} className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]" target="_blank" rel="noreferrer">
            LinkedIn →
          </a>
        </article>
        <article className="panel p-7">
          <h2 className="text-xl font-semibold">How the work shows up</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            Public roles include CRM operations for Vivacity Solutions North America (GoHighLevel, pipelines,
            automations) and earlier GoHighLevel work at Nexus95, plus frontend engineering at Teknotize. Softoras is
            the company vehicle for product and client systems built on that same stack.
          </p>
        </article>
      </section>

      <section className="wrap mt-10">
        <h2 className="h2">Capability map</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {stackGroups.map((group) => (
            <article key={group.title} className="panel p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{group.items.join(' · ')}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
