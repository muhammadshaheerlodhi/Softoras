import { aboutBlocks, stats, TAGLINE } from '@/content/site'
import LeadershipCards from '@/components/ui/leadership-cards'

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
      </div>
    </section>
  )
}
