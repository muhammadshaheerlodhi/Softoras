import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getService, services } from '@/content/site'

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const index = services.findIndex((item) => item.slug === slug)
  const prev = services[index - 1]
  const next = services[index + 1]

  return (
    <div className="band band-paper pb-16 pt-14">
      <div className="wrap">
        <Link href="/services" className="text-sm font-semibold text-[var(--accent)]">
          ← All services
        </Link>
        <p className="kicker mt-6">Service</p>
        <h1 className="h2 mt-3 max-w-3xl">{service.title}</h1>
        <p className="lede mt-4">{service.description}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <article className="premium-card panel-hover p-6 md:p-8">
              <h2 className="text-lg font-semibold">What this covers</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.detail}</p>
            </article>

            <article className="premium-card panel-hover p-6 md:p-8">
              <h2 className="text-lg font-semibold">What you get</h2>
              <ul className="clean-list mt-4 space-y-2 text-sm text-[var(--muted)]">
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <aside className="space-y-5">
            <article className="premium-card card-accent p-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Includes</h2>
              <ul className="clean-list mt-4 space-y-2 text-sm text-[var(--muted)]">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>

            <article className="premium-card p-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Tools we use</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-[var(--line)] bg-[var(--bg-alt)] px-3 py-1 text-xs font-semibold">
                    {tool}
                  </span>
                ))}
              </div>
            </article>

            <div className="footer-cta">
              <p className="font-semibold">Ready to start?</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Tell us about your project and we will map the build.</p>
              <Link href="/contact" className="btn btn-primary mt-4 inline-flex">
                Contact Softoras
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-8">
          {prev ? (
            <Link href={`/services/${prev.slug}`} className="text-sm font-semibold text-[var(--accent)]">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/services/${next.slug}`} className="text-sm font-semibold text-[var(--accent)]">
              {next.title} →
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}
