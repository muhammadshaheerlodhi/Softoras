import Link from 'next/link'
import Image from 'next/image'
import { aboutBlocks, stats, TAGLINE } from '@/content/site'
import { clientProjects } from '@/content/projects'

export default function AboutSection() {
  return (
    <section className="band band-paper section-y">
      <div className="wrap about-grid">
        <div className="about-copy">
          <p className="kicker">About Softoras</p>
          <h2 className="h2 mt-3">We turn complex ideas into working systems</h2>
          <p className="section-desc mt-4">{aboutBlocks.intro}</p>

          <div className="about-blocks mt-6 space-y-5">
            <article>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--accent)]">What We Believe</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{aboutBlocks.whatWeBelieve}</p>
            </article>
            <article>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--accent)]">How We Work</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{aboutBlocks.howWeWork}</p>
            </article>
            <article>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--accent)]">What Makes Us Different</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{aboutBlocks.whatMakesUsDifferent}</p>
            </article>
            <article>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--accent)]">Built With Purpose</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{aboutBlocks.builtWithPurpose}</p>
            </article>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map((item) => (
              <div key={item.label} className="stat-pill">
                <strong>{item.value}</strong>
                <span className="text-xs text-[var(--muted)]">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-[var(--accent)]">{TAGLINE}</p>
          <Link href="/about" className="section-link mt-5 inline-flex">
            Meet the CEO →
          </Link>
        </div>
        <div className="about-visual ceo-home">
          <Image
            src="/about/shaheer-lodhi.png"
            alt="Muhammad Shaheer Lodhi, CEO of Softoras"
            width={480}
            height={480}
            className="about-photo"
            unoptimized
          />
          <div className="about-visual-strip">
            {clientProjects.slice(0, 3).map((project) => (
              <div key={project.slug} className="about-strip-item">
                <p className="about-strip-kind">{project.kind}</p>
                <p className="about-strip-name">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
