import { services } from '@/content/site'

export const metadata = {
  title: 'Services',
  description: 'Custom websites, software products, AI agents, n8n automation, CRM, cloud, and business systems from Softoras.',
}

export default function ServicesPage() {
  return (
    <div className="band band-paper pt-16 pb-24">
      <div className="wrap">
        <p className="kicker">Services</p>
        <h1 className="h2 mt-4">What Softoras can build and run</h1>
        <p className="lede mt-4">
          Custom websites, products, AI agents and bots, n8n automations, CRM, servers, and the admin behind it.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((item) => (
            <article key={item.slug} className="panel panel-hover p-7">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                {item.points.map((point) => (
                  <li key={point}>— {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
