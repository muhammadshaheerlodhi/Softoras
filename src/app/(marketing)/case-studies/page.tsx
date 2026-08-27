import Image from 'next/image'
import Link from 'next/link'
import { caseStudies } from '@/content/case-studies'

export default function CaseStudiesPage() {
  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-white pt-28">
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="card p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">Case studies</p>
          <h1 className="section-heading mt-3">Work, in cards you can open</h1>
          <p className="section-paragraph mt-5 max-w-3xl">
            Each card is a real engagement. Click through for the full story — pipeline, stack, and what changed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="card group overflow-hidden transition hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.client}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-sky-950/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">{study.industry}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{study.client}</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-sky-700">{study.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{study.oneLiner}</p>
                <p className="mt-4 text-sm font-semibold text-sky-700">Open case study →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
