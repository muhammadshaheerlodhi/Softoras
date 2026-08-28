import Link from 'next/link'
import { industries, solutionAreas } from '@/content/site'
import SectionHeader from '@/components/ui/section-header'

export const metadata = {
  title: 'Solutions',
  description: 'Business solutions from Softoras: CRM, automation, AI, cloud, and custom software systems.',
}

export default function SolutionsPage() {
  return (
    <div className="band band-paper section-y">
      <div className="wrap">
        <SectionHeader
          kicker="Solutions"
          title="Technology built around the way your business works"
          description="Softoras solves business problems with systems — lead management, sales ops, automation, internal tools, cloud infrastructure, and digital products."
        />

        <div className="card-grid-4 mt-10">
          {solutionAreas.map((item) => (
            <article key={item.title} className="card-minimal">
              <span className="card-minimal-icon">{item.title.charAt(0)}</span>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="h2">Industries we build for</h2>
          <p className="section-desc mt-3">
            These are domains we can deliver in — capabilities, not a claim of named logos in every vertical.
          </p>
          <div className="card-grid-3 mt-8">
            {industries.map((item) => (
              <article key={item.title} className="card-feature">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="footer-cta mt-12">
          <h2 className="text-lg font-semibold">Not sure where your project fits?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            Most builds span more than one area — a CRM with automation, or a SaaS product with cloud infrastructure.
            Tell us the operation and we map the system.
          </p>
          <Link href="/contact" className="btn btn-primary btn-compact mt-4 inline-flex">
            Start a Conversation
          </Link>
        </div>
      </div>
    </div>
  )
}
