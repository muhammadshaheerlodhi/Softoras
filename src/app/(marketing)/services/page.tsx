import { services } from '@/content/site'

export const metadata = {
  title: 'Services',
  description: 'Software development, AI automation, CRM, web, cloud, and business systems from Softoras.',
}

export default function ServicesPage() {
  return (
    <div className="band band-paper pt-16 pb-24">
      <div className="wrap">
        <p className="kicker">Services</p>
        <h1 className="h2 mt-4">Engineering services for production systems</h1>
        <p className="lede mt-4">Six practices we deliver end to end — from first architecture sketch to a live environment.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((item) => (
            <article key={item.slug} className="panel p-7">
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
