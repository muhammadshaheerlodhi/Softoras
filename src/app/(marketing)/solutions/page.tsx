import Link from 'next/link'
import { industries } from '@/content/site'

export const metadata = {
  title: 'Solutions',
  description: 'Industries Softoras can build for: real estate, healthcare, education, ecommerce, professional services, and SaaS.',
}

export default function SolutionsPage() {
  return (
    <div className="band band-paper pb-16 pt-14">
      <div className="wrap">
        <p className="kicker">Solutions</p>
        <h1 className="h2 mt-3">Where Softoras can apply the same engineering</h1>
        <p className="lede mt-4">
          These are domains we can build for: websites, CRM, automation, and custom software. They are capabilities, not
          a claim that we have named logos in every vertical.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <article key={item.title} className="panel panel-hover card-accent p-6">
              <div className="card-icon mb-4 text-sm font-bold">{item.title.charAt(0)}</div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
              {'tags' in item && item.tags ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--line)] bg-[var(--bg-alt)] px-2.5 py-1 text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-xl border border-[var(--line)] bg-[var(--bg-alt)] p-6 md:p-8">
          <h2 className="text-lg font-semibold">Not sure which category fits?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            Most builds span more than one vertical — a real estate site with CRM, or a SaaS product with automation.
            Tell us the operation and we map the system.
          </p>
          <Link href="/contact" className="btn btn-primary mt-5 inline-flex">
            Start a conversation
          </Link>
        </div>
      </div>
    </div>
  )
}
