import Link from 'next/link'
import HeroHandVisual from '@/components/home/hero-hand-visual'
import { TAGLINE } from '@/content/site'

export default function Hero() {
  return (
    <section className="band band-hero">
      <div className="hero-mesh" aria-hidden />
      <div className="wrap hero-grid relative py-10 sm:py-14 lg:py-20">
        <div className="hero-copy rise">
          <p className="eyebrow">Software · AI · Automation · Cloud</p>
          <h1 className="display mt-4">{TAGLINE}</h1>
          <p className="lede mt-4">
            We build software, SaaS products, AI systems and business automation that move companies forward.
          </p>
          <p className="section-desc mt-3">
            From CRM ecosystems and AI agents to custom software, ERP platforms and cloud infrastructure, Softoras
            turns complex business ideas into reliable digital systems.
          </p>
        </div>

        <div className="hero-visual-wrap rise">
          <HeroHandVisual />
        </div>

        <div className="hero-actions rise flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Start a Project
          </Link>
          <Link href="/projects" className="btn btn-secondary">
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}
