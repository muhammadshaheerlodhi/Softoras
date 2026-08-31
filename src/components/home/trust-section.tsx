import { MISSION, stats, TAGLINE } from '@/content/site'

export default function TrustSection() {
  return (
    <section className="band band-mist section-y-sm">
      <div className="wrap">
        <div className="trust-panel section-intro-center">
          <p className="kicker">Experience</p>
          <h2 className="h2 mt-3">{MISSION}</h2>
          <p className="section-desc mx-auto mt-3">
            SaaS products, ERP systems, CRM ecosystems, AI agents, business automation, custom software, web
            applications, and cloud infrastructure, built as systems your team can run.
          </p>
          <div className="about-stats-row mt-6">
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
