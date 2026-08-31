import { MISSION, stats, TAGLINE } from '@/content/site'

export default function TrustSection() {
  return (
    <section className="band band-mist section-y-sm">
      <div className="wrap">
        <div className="trust-panel">
          <p className="kicker">Experience</p>
          <h2 className="h2 mt-3 max-w-2xl">{MISSION}</h2>
          <p className="section-desc mt-3 max-w-2xl">
            SaaS products, ERP systems, CRM ecosystems, AI agents, business automation, custom software, web
            applications, and cloud infrastructure — built as systems your team can run.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 sm:max-w-md">
            {stats.map((item) => (
              <div key={item.label} className="stat-pill">
                <strong>{item.value}</strong>
                <span className="text-xs text-[var(--muted)]">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm font-semibold text-[var(--accent)]">{TAGLINE}</p>
        </div>
      </div>
    </section>
  )
}
