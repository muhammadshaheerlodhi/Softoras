import Image from 'next/image'
import Link from 'next/link'
import AnimatedHero from '@/components/hero/AnimatedHero'
import SectionBackdrop from '@/components/visual/SectionBackdrop'
import { caseStudies } from '@/content/case-studies'
import { featuredProjects, founder, stats, techStack } from '@/content/portfolio'
import { services } from '@/content/site'

const serviceIcons = ['⚡', '🔄', '🤖', '🌐', '📱', '☁️']

const process = [
  { title: 'Discover', text: 'We map your business flows, goals, and bottlenecks before writing code.', icon: '🔍' },
  { title: 'Design', text: 'We shape clean system architecture, user flows, and delivery milestones.', icon: '✏️' },
  { title: 'Build', text: 'Your team gets iterative releases with measurable progress each sprint.', icon: '🔧' },
  { title: 'Scale', text: 'We optimize performance, automation coverage, and cloud readiness.', icon: '🚀' },
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
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-sky-100/40 to-sky-50 text-slate-900">
      <AnimatedHero />

      {/* Stats strip */}
      <section className="relative border-y border-sky-200/60 bg-gradient-to-r from-sky-100 via-sky-50 to-sky-100 py-10">
        <SectionBackdrop pattern="dots" intensity="light" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="stat-value">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20">
        <SectionBackdrop pattern="boxes" intensity="light" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="eyebrow">Services</p>
            <h2 className="section-heading mt-4">Solutions engineered for measurable growth</h2>
            <p className="section-paragraph mt-3 max-w-2xl">
              From CRM automation to full SaaS platforms — we build systems that your team actually uses every day.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((card, i) => (
              <article key={card.title} className="card-elevated p-6">
                <div className="service-icon">{serviceIcons[i]}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.offerings.slice(0, 2).map((tag) => (
                    <span key={tag} className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack marquee */}
      <section className="relative overflow-hidden border-y border-sky-200/60 bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 py-8">
        <SectionBackdrop pattern="grid" intensity="light" />
        <div className="relative">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
            Technologies we build with
          </p>
          <div className="overflow-hidden">
            <div className="tech-marquee">
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={`${tech.name}-${i}`} className="tech-pill">
                  <Image src={tech.icon} alt={tech.name} width={22} height={22} />
                  <span className="text-sm font-semibold text-slate-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="relative py-20">
        <SectionBackdrop pattern="bricks" intensity="medium" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Case studies</p>
              <h2 className="section-heading mt-4">Work you can open and read</h2>
            </div>
            <Link href="/case-studies" className="text-sm font-semibold text-sky-700 hover:underline">
              View all case studies →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="project-card group block overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-sky-900/30 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-sky-500/90 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {study.industry}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{study.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{study.oneLiner}</p>
                  <p className="mt-4 text-sm font-semibold text-sky-700">Read case study →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="relative bg-gradient-to-br from-sky-100 via-sky-50 to-cyan-50 py-20">
        <SectionBackdrop pattern="boxes" intensity="medium" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="eyebrow justify-center">Portfolio</p>
            <h2 className="section-heading mt-4">Projects & products we&apos;ve built</h2>
            <p className="section-paragraph mx-auto mt-3 max-w-2xl">
              Real production systems — from our own SaaS product to CRM infrastructure for international teams.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => {
              const isExternal = project.url.startsWith('http')
              const inner = (
                <>
                  <div className="relative h-auto w-32 shrink-0 overflow-hidden sm:w-40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                      sizes="160px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600">{project.tag}</span>
                    <h3 className="mt-2 text-base font-bold text-slate-900">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                    <p className="mt-3 text-xs font-semibold text-sky-700">
                      {isExternal ? 'Open live product →' : 'View case study →'}
                    </p>
                  </div>
                </>
              )

              return isExternal ? (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glass group flex overflow-hidden transition hover:-translate-y-1"
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={project.title}
                  href={project.url}
                  className="card-glass group flex overflow-hidden transition hover:-translate-y-1"
                >
                  {inner}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20">
        <SectionBackdrop pattern="grid" intensity="light" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="eyebrow justify-center">Our process</p>
            <h2 className="section-heading mt-4">How we deliver</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <article key={step.title} className="process-step card-elevated p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 text-2xl shadow-lg shadow-sky-200">
                  {step.icon}
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-sky-600">Phase {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder / About */}
      <section className="relative bg-gradient-to-br from-sky-800 via-sky-700 to-cyan-800 py-20 text-white">
        <SectionBackdrop pattern="bricks" intensity="light" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Leadership</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">{founder.name}</h2>
              <p className="mt-2 text-lg font-medium text-sky-200">{founder.title}</p>
              <p className="mt-1 text-sm text-sky-300">{founder.credentials}</p>
              <ul className="mt-6 space-y-3">
                {founder.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-sky-100">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500 text-xs font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-sky-800 transition hover:bg-sky-50"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
                <Link href="/about" className="inline-flex items-center rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  About Softoras
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'CRM Systems', value: 'GoHighLevel · HubSpot · Zoho' },
                { label: 'Cloud', value: 'AWS Certified Architect' },
                { label: 'Product', value: 'Softoras ERP — Live SaaS' },
                { label: 'Clients', value: 'Vivacity NA · UTCLI · Nexus95' },
              ].map((item) => (
                <div key={item.label} className="card-dark p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-300">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20">
        <SectionBackdrop pattern="dots" intensity="light" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow justify-center">Testimonials</p>
            <h2 className="section-heading mt-4">Trusted by teams that move fast</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="card-glass p-6">
                <p className="quote-mark">&ldquo;</p>
                <p className="text-sm leading-7 text-slate-600">{item.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-sm font-bold text-white shadow-md">
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

      {/* CTA */}
      <section className="relative px-6 py-20 lg:px-8">
        <SectionBackdrop pattern="boxes" intensity="light" />
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 p-10 text-white shadow-2xl shadow-sky-300/40">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="relative">
            <h2 className="text-3xl font-bold">Ready to build your system?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-sky-50">
              Let Softoras design, build, and automate the technology backbone your business needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50">
                Contact us
              </Link>
              <Link href="/case-studies" className="inline-flex rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                View our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
