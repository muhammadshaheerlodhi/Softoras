import Link from 'next/link'
import { notFound } from 'next/navigation'
import FaqSection from '@/components/ui/faq-section'
import ServiceToolsStrip from '@/components/ui/service-tools-strip'
import { getServiceFaqs } from '@/content/faqs'
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
  const faqs = getServiceFaqs(slug)

  return (
    <div className="band band-paper pb-16 pt-14">
      <div className="wrap service-detail">
        <Link href="/services" className="text-sm font-semibold text-[var(--accent)]">
          ← All services
        </Link>
        <div className="section-intro-center mt-8">
          <p className="kicker">Service</p>
          <h1 className="h2 mt-3">{service.title}</h1>
          <p className="lede mx-auto mt-4">{service.description}</p>
        </div>

        <div className="service-detail-grid mt-10">
          <article className="card-feature service-detail-main">
            <h2 className="card-heading">Overview</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.overview}</p>
            <h2 className="card-heading mt-8">What this covers</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.detail}</p>
          </article>

          <article className="card-feature">
            <h2 className="card-heading-sm">Includes</h2>
            <ul className="clean-list mt-4 space-y-2 text-sm text-[var(--muted)]">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="card-feature">
            <h2 className="card-heading-sm">Common use cases</h2>
            <ul className="clean-list mt-4 space-y-2 text-sm text-[var(--muted)]">
              {service.useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card-feature">
            <h2 className="card-heading-sm">What you get</h2>
            <ul className="clean-list mt-4 space-y-2 text-sm text-[var(--muted)]">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card-feature">
            <h2 className="card-heading-sm">Outcomes</h2>
            <ul className="clean-list mt-4 space-y-2 text-sm text-[var(--muted)]">
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <ServiceToolsStrip tools={service.tools} />

          <div className="service-detail-cta card-feature">
            <h2 className="card-heading-sm">Ready to start?</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Tell us about your project and we will map scope, integrations, and a practical first release.
            </p>
            <Link href="/contact" className="btn btn-primary mt-5 inline-flex">
              Contact Softoras
            </Link>
          </div>
        </div>

        <div className="service-detail-faq">
          <FaqSection
            items={faqs}
            kicker="Service FAQ"
            title={`${service.title} questions`}
            description="Common questions about this service, how we deliver it, and what you can expect."
            align="left"
          />
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
