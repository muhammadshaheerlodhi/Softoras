import Link from 'next/link'
import { services } from '@/content/site'
import SectionHeader from '@/components/ui/section-header'

export const metadata = {
  title: 'Services',
  description: 'Custom software, AI agents, CRM, automation, cloud, and product development from Softoras.',
}

export default function ServicesPage() {
  return (
    <div className="band band-paper section-y">
      <div className="wrap">
        <SectionHeader
          kicker="What We Build"
          title="We build the systems behind modern businesses"
          description="Softoras combines engineering, automation and product thinking to create digital systems that solve real business problems."
        />
        <div className="card-grid-3 mt-10">
          {services.map((item) => (
            <Link key={item.slug} href={`/services/${item.slug}`} className="card-service">
              <span className="card-service-icon">{item.icon}</span>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              <ul className="clean-list mt-4 space-y-1 text-sm text-[var(--muted)]">
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
