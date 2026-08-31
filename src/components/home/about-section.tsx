import Link from 'next/link'
import Image from 'next/image'
import { aboutBlocks, ceo, stats, TAGLINE } from '@/content/site'

const beliefCards = [
  { title: 'What We Believe', text: aboutBlocks.whatWeBelieve },
  { title: 'How We Work', text: aboutBlocks.howWeWork },
  { title: 'What Makes Us Different', text: aboutBlocks.whatMakesUsDifferent },
  { title: 'Built With Purpose', text: aboutBlocks.builtWithPurpose },
]

export default function AboutSection() {
  return (
    <section className="band band-paper section-y">
      <div className="wrap about-showcase">
        <div className="section-intro-center">
          <p className="kicker">About Softoras</p>
          <h2 className="h2 mt-3">We turn complex ideas into working systems</h2>
          <p className="section-desc mx-auto mt-4">{aboutBlocks.intro}</p>
          <p className="mt-3 text-sm font-semibold text-[var(--accent)]">{TAGLINE}</p>
        </div>

        <div className="about-ceo-card">
          <div className="about-ceo-photo">
            <Image
              src={ceo.photo}
              alt={`${ceo.name}, ${ceo.title} of Softoras`}
              width={320}
              height={320}
              className="about-ceo-img"
              unoptimized
            />
          </div>
          <div className="about-ceo-copy">
            <p className="kicker">Leadership</p>
            <h3 className="about-ceo-name">{ceo.name}</h3>
            <p className="about-ceo-title">
              {ceo.title} · Softoras
            </p>
            <p className="about-ceo-credential">{ceo.credentials}</p>
            <p className="section-desc mx-auto mt-3">{ceo.bio}</p>
            <Link href="/about" className="section-link mt-5 inline-flex">
              Full profile →
            </Link>
          </div>
        </div>

        <div className="about-bento">
          {beliefCards.map((item) => (
            <article key={item.title} className="card-feature about-bento-card">
              <h3 className="card-heading-sm">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
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
      </div>
    </section>
  )
}
