import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies, getCaseStudy } from '@/content/case-studies'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return { title: 'Case study' }
  return { title: study.title, description: study.oneLiner }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-white pt-28">
      <article className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <Link href="/case-studies" className="text-sm font-semibold text-sky-700 hover:underline">
          ← All case studies
        </Link>

        <div className="mt-6 overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-xl shadow-sky-100">
          <div className="relative h-64 sm:h-80">
            <Image src={study.image} alt={study.client} fill className="object-cover" sizes="100vw" priority />
          </div>
          <div className="bg-gradient-to-r from-sky-600 to-sky-500 p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">{study.industry}</p>
            <p className="mt-2 text-sm font-medium">{study.client}</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{study.title}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-sky-50">{study.oneLiner}</p>
          </div>
        </div>

        <p className="mt-10 text-base leading-8 text-slate-700">{study.summary}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="card p-6">
            <h2 className="text-lg font-semibold text-sky-700">Challenge</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{study.challenge}</p>
          </section>
          <section className="card p-6">
            <h2 className="text-lg font-semibold text-sky-700">Solution</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{study.solution}</p>
          </section>
        </div>

        <section className="mt-8 card p-6">
          <h2 className="text-lg font-semibold text-sky-700">Results</h2>
          <ul className="mt-4 space-y-2">
            {study.results.map((item) => (
              <li key={item} className="text-sm leading-7 text-slate-700">
                – {item}
              </li>
            ))}
          </ul>
        </section>

        {study.sections.map((section) => (
          <section key={section.heading} className="mt-8 card p-6">
            <h2 className="text-lg font-semibold text-sky-700">{section.heading}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
          </section>
        ))}

        <div className="mt-8 flex flex-wrap gap-2">
          {study.stack.map((item) => (
            <span key={item} className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
              {item}
            </span>
          ))}
        </div>

        {study.pdf ? (
          <a href={study.pdf} className="btn-secondary mt-8" target="_blank" rel="noreferrer">
            Download source PDF
          </a>
        ) : null}

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-sky-600 to-sky-500 p-8 text-white">
          <h2 className="text-2xl font-bold">Want a system like this?</h2>
          <p className="mt-2 text-sm text-sky-50">Tell us the workflow. Softoras will map, build, and automate it.</p>
          <Link href="/contact" className="mt-5 inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-sky-700">
            Book a consultation
          </Link>
        </div>
      </article>
    </div>
  )
}
