import { aboutBlocks, stats, strengths, TAGLINE } from '@/content/site'
import TechGrid from '@/components/ui/tech-grid'
import ProcessTimeline from '@/components/home/process-timeline'
import SectionHeader from '@/components/ui/section-header'
import LocationCards from '@/components/ui/location-cards'
import LeadershipCards from '@/components/ui/leadership-cards'

const beliefCards = [
  { title: 'What We Believe', text: aboutBlocks.whatWeBelieve },
  { title: 'How We Work', text: aboutBlocks.howWeWork },
  { title: 'What Makes Us Different', text: aboutBlocks.whatMakesUsDifferent },
  { title: 'Built With Purpose', text: aboutBlocks.builtWithPurpose },
]

export const metadata = {
  title: 'About',
  description: 'Softoras is an engineering-led technology company. Think SaaS. Think Softoras.',
}

export default function AboutPage() {
  return (
    <>
      <div className="band band-paper section-y">
        <div className="wrap about-showcase">
          <div className="section-intro-center">
            <p className="kicker">About Softoras</p>
            <h1 className="h2 mt-3">We turn complex ideas into working systems</h1>
            <p className="section-desc mx-auto mt-4">{aboutBlocks.intro}</p>
            <p className="mt-3 text-sm font-semibold text-[var(--accent)]">{TAGLINE}</p>
          </div>

          <LeadershipCards />

          <div className="about-bento">
            {beliefCards.map((item) => (
              <article key={item.title} className="card-feature about-bento-card">
                <h3 className="card-heading">{item.title}</h3>
                <p className="card-copy mt-3">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="about-stats-row">
            {stats.map((item) => (
              <div key={item.label} className="stat-pill">
                <strong>{item.value}</strong>
                <span className="text-xs text-[var(--muted)]">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <SectionHeader kicker="Offices" title="Where we work" align="center" />
            <LocationCards variant="row" className="mt-8" />
          </div>
        </div>
      </div>

      <section className="band band-mist section-y">
        <div className="wrap">
          <SectionHeader kicker="How We Work" title="From idea to production" align="center" />
          <div className="mt-10">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="band band-paper section-y">
        <div className="wrap">
          <SectionHeader kicker="Why Softoras" title="Why businesses choose Softoras" align="center" />
          <div className="card-grid-4 mt-10">
            {strengths.map((item) => (
              <article key={item.title} className="card-feature">
                <h3 className="card-heading">{item.title}</h3>
                <p className="card-copy mt-2">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-mist section-y">
        <div className="wrap">
          <SectionHeader
            kicker="Technology Ecosystem"
            title="One team. A complete technology ecosystem."
            align="center"
          />
          <div className="mt-10">
            <TechGrid />
          </div>
        </div>
      </section>
    </>
  )
}
