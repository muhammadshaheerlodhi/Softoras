import Link from 'next/link'
import { TAGLINE } from '@/content/site'

export default function FinalCta() {
  return (
    <section className="band band-cta section-y">
      <div className="wrap">
        <div className="cta-panel">
          <div className="cta-panel-glow" aria-hidden />
          <p className="kicker kicker-light">Ready when you are</p>
          <h2 className="h2 mt-3 text-white">Your next system starts with an idea.</h2>
          <p className="cta-desc mt-4">
            Whether you need a SaaS product, AI agent, CRM ecosystem, automation workflow, ERP solution or custom
            software, let&apos;s build something your business can actually run.
          </p>
          <p className="mt-3 text-sm font-semibold text-sky-200">{TAGLINE}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-light">
              Start a Project
            </Link>
            <Link href="/projects" className="btn btn-outline-light">
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
