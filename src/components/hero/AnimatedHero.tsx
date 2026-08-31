'use client'

import Link from 'next/link'
import { ERP_URL } from '@/content/site'
import FloatingBricks from '@/components/visual/FloatingBricks'

const metrics = [
  { label: 'Lead response', value: '38s', note: 'avg first reply' },
  { label: 'Pipeline', value: '+27%', note: 'qualified leads' },
  { label: 'Ops load', value: '−41%', note: 'manual work' },
]

const stages = ['New', 'Contacted', 'Qualified', 'Won']

export default function AnimatedHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 lg:px-8">
      <div className="hero-orb left-[-90px] top-10 h-72 w-72 bg-sky-200" />
      <div className="hero-orb right-[-80px] top-40 h-80 w-80 bg-cyan-100" />
      <div className="hero-orb left-[30%] bottom-[-40px] h-64 w-64 bg-sky-100" style={{ animationDelay: '3s' }} />
      <div className="hero-grid" />
      <div className="hero-bricks" />
      <FloatingBricks />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="reveal-up space-y-7">
          <p className="inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
            SaaS · CRM · AI · Cloud ERP
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Systems that sell, operate, and scale.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Softoras designs revenue-ready platforms, automations, and cloud software for growing companies, including
            Softoras ERP.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Book a Consultation
            </Link>
            <Link href="/case-studies" className="btn-secondary">
              View case studies
            </Link>
          </div>
        </div>

        <div className="hero-stage reveal-up">
          <div className="hero-screen">
            <div className="flex items-center gap-2 border-b border-sky-100 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-sky-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-sky-100" />
              <p className="ml-3 text-xs font-semibold tracking-wide text-sky-700">Live operations view</p>
            </div>

            <div className="grid gap-3 p-5 sm:grid-cols-3">
              {metrics.map((item, index) => (
                <article
                  key={item.label}
                  className="hero-metric"
                  style={{ animationDelay: `${index * 180}ms` }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-600">{item.label}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.note}</p>
                </article>
              ))}
            </div>

            <div className="px-5 pb-5">
              <div className="grid grid-cols-4 gap-2">
                {stages.map((stage, index) => (
                  <div key={stage} className="rounded-xl bg-sky-50 p-2">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-sky-700">{stage}</p>
                    <div className={`hero-chip hero-chip-${index + 1}`}>Lead #{index + 12}</div>
                    {index < 3 ? <div className={`hero-chip delayed hero-chip-${index + 2}`}>Lead #{index + 19}</div> : null}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex h-16 items-end gap-1.5 rounded-xl bg-white px-3 py-2">
                {[28, 44, 36, 62, 48, 78, 55, 88, 70, 96].map((height, index) => (
                  <span
                    key={index}
                    className="hero-bar"
                    style={{ height: `${height}%`, animationDelay: `${index * 90}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <a href={ERP_URL} className="hero-float-card left-[-12px] top-10 hidden sm:block">
            Softoras ERP live
          </a>
          <div className="hero-float-card right-[-8px] bottom-16 hidden sm:block">Automation running</div>
          <div className="hero-float-card left-[20%] bottom-[-8px] hidden md:block" style={{ animationDelay: '2s' }}>
            CRM synced
          </div>
        </div>
      </div>
    </section>
  )
}
