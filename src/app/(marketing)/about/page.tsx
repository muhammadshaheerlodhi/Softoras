import Image from 'next/image'
import Link from 'next/link'
import { aboutBlocks, ceo, partner, stats, strengths, TAGLINE } from '@/content/site'
import TechGrid from '@/components/ui/tech-grid'
import ProcessTimeline from '@/components/home/process-timeline'
import SectionHeader from '@/components/ui/section-header'
import LocationCards from '@/components/ui/location-cards'

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

          <div className="about-leadership-grid">
            {[ceo, partner].map((person, index) => (
              <article key={person.name} className="about-ceo-card about-ceo-card-page">
                <div className="about-ceo-photo">
                  <Image
                    src={person.photo}
                    alt={`${person.name}, ${person.title} of Softoras`}
                    width={480}
                    height={480}
                    className="about-ceo-img"
                    sizes="(min-width: 900px) 280px, 80vw"
                    priority={index === 0}
                  />
                </div>
                <div className="about-ceo-copy">
                  <p className="kicker">Leadership</p>
                  <h2 className="about-ceo-name">{person.name}</h2>
                  <p className="about-ceo-title">{person.title} · Softoras</p>
                  {person.credentials ? <p className="about-ceo-credential">{person.credentials}</p> : null}
                  <p className="section-desc mt-4">{person.bio}</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {person.linkedin ? (
                      <a href={person.linkedin} className="btn btn-primary btn-compact" target="_blank" rel="noreferrer">
                        LinkedIn
                      </a>
                    ) : null}
                    <Link href="/contact" className="btn btn-secondary btn-compact">
                      Start a Project
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="about-bento">
            {beliefCards.map((item) => (
              <article key={item.title} className="card-feature about-bento-card">
                <h3 className="card-heading-sm">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
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
                <h3 className="card-heading-sm">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
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
