import Link from 'next/link'
import { services } from '@/content/site'

export const metadata = {
  title: 'Services',
  description: 'Custom websites, software products, AI agents, n8n automation, CRM, cloud, and business systems from Softoras.',
}

export default function ServicesPage() {
  return (
    <div className="band band-paper pb-16 pt-14">
      <div className="wrap">
        <p className="kicker">Services</p>
        <h1 className="h2 mt-3">What Softoras can build and run</h1>
        <p className="lede mt-4">
          Custom websites, products, AI agents and bots, n8n automations, CRM, servers, and the admin behind it. Click
          any service for the full breakdown.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((item) => (
            <Link key={item.slug} href={`/services/${item.slug}`} className="service-card premium-card panel-hover card-accent p-7">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              <ul className="clean-list mt-5 space-y-2 text-sm text-[var(--muted)]">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <span className="service-card-link">View service details →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
