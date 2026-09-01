import Link from 'next/link'
import HeroRobotVisual from '@/components/home/hero-robot-visual'
import { TAGLINE } from '@/content/site'

export default function Hero() {
  return (
    <section className="band band-hero">
      <div className="hero-mesh" aria-hidden />
      <div className="wrap relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-20">
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
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <Link href="/projects" className="btn btn-secondary">
              Explore Our Work
            </Link>
          </div>
        </div>
        <div className="hero-visual-wrap rise">
          <HeroRobotVisual />
        </div>
      </div>
    </section>
  )
}
