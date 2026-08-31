import ServiceCardLink from '@/components/ui/service-card-link'
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
            <ServiceCardLink key={item.slug} item={item} variant="page" />
          ))}
        </div>
      </div>
    </div>
  )
}
