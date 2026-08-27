import Image from 'next/image'
import Link from 'next/link'
import AnimatedHero from '@/components/hero/AnimatedHero'
import { caseStudies } from '@/content/case-studies'
import { services } from '@/content/site'

const process = [
  { title: 'Discover', text: 'We map your business flows, goals, and bottlenecks before writing code.' },
  { title: 'Design', text: 'We shape clean system architecture, user flows, and delivery milestones.' },
  { title: 'Build', text: 'Your team gets iterative releases with measurable progress each sprint.' },
  { title: 'Scale', text: 'We optimize performance, automation coverage, and cloud readiness.' },
]

const testimonials = [
  {
    quote: 'Softoras redesigned our CRM and automations in weeks. Our response time and lead conversion improved immediately.',
    name: 'Ahsan R.',
    role: 'Operations Lead, Retail Group',
  },
  {
    quote: 'From planning to deployment, their process was structured and transparent. We finally have a scalable system.',
    name: 'Fatima S.',
    role: 'Co-Founder, Service Startup',
  },
  {
    quote: 'Their AI and workflow work removed repetitive tasks from our team and gave us cleaner reporting across departments.',
    name: 'Usman K.',
    role: 'Director, Growth Ops',
  },
]

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white text-slate-900">
      <AnimatedHero />

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Services</p>
          <h2 className="section-heading mt-3">Solutions engineered for measurable growth</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((card) => (
            <article key={card.title} className="card p-6 transition hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">Case studies</p>
              <h2 className="section-heading mt-3">Work you can open and read</h2>
            </div>
            <Link href="/case-studies" className="text-sm font-semibold text-sky-700 hover:underline">
              View all case studies
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="card group overflow-hidden transition hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-600">{study.industry}</p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{study.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{study.oneLiner}</p>
                  <p className="mt-4 text-sm font-semibold text-sky-700">Read case study →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="section-heading">How we deliver</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <article key={step.title} className="card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">Phase {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">Testimonials</p>
            <h2 className="section-heading mt-3">Trusted by teams that move fast</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="card p-6">
                <p className="text-sm leading-7 text-slate-600">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                    {item.name.split(' ').map((part) => part[0]).join('')}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-sky-600 to-sky-500 p-10 text-white shadow-xl shadow-sky-200">
          <h2 className="text-3xl font-bold">Ready to build your system?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-sky-50">
            Let Softoras design, build, and automate the technology backbone your business needs.
          </p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-sky-700">
            Contact us
          </Link>
        </div>
      </section>
    </div>
  )
}
