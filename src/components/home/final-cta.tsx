import Link from 'next/link'
import { ERP_URL, TAGLINE } from '@/content/site'

export default function FinalCta() {
  return (
    <section className="band band-cta section-y">
      <div className="wrap">
        <div className="cta-panel">
          <div className="cta-panel-glow" aria-hidden />
          <p className="kicker kicker-light">Ready when you are</p>
          <h2 className="h2 mt-3 text-white">Your next system starts with an idea.</h2>
          <p className="cta-desc mt-4">
            Softoras can build SaaS products, AI agents, CRM ecosystems, automation workflows, ERP solutions and
            custom software — from first conversation to production.
          </p>
          <p className="mt-3 text-sm font-semibold text-sky-200">{TAGLINE}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-light">
              Start a Project
            </Link>
            <Link href="/projects" className="btn btn-outline-light">
              Explore Our Work
            </Link>
            <a href={ERP_URL} target="_blank" rel="noreferrer" className="btn btn-outline-light">
              Open ERP
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
