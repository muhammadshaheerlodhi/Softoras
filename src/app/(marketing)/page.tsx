import Link from 'next/link'
import Hero from '@/components/home/hero'
import BrowserFrame from '@/components/ui/browser-frame'
import TechGrid from '@/components/ui/tech-grid'
import { industries, process, services, strengths, TAGLINE } from '@/content/site'
import { projects } from '@/content/projects'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="band band-paper py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="kicker">About Softoras</p>
            <h2 className="h2 mt-4">We ship software companies can actually run</h2>
            <Link href="/about" className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]">
              Meet the CEO →
            </Link>
          </div>
          <p className="lede">
            Custom websites, SaaS products, AI agents, n8n automations, CRM, and servers. Led by Muhammad Shaheer Lodhi.{' '}
            {TAGLINE}
          </p>
        </div>
      </section>

      <section className="band band-mist py-20">
        <div className="wrap">
          <p className="kicker">Services</p>
          <h2 className="h2 mt-4 max-w-2xl">Websites, products, AI, CRM, and cloud — end to end</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <article key={item.slug} className="panel panel-hover p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                <ul className="mt-4 space-y-1 text-sm text-[var(--muted)]">
                  {item.points.map((point) => (
                    <li key={point}>— {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-paper py-16">
        <div className="wrap">
          <p className="kicker">Technology</p>
          <h2 className="h2 mt-4">Tools we actually ship with</h2>
          <p className="lede mt-3">Logos for the stack — React, Next.js, n8n, OpenAI, AWS, Shopify, and the rest.</p>
          <div className="mt-8">
            <TechGrid />
          </div>
        </div>
      </section>

      <section className="band band-paper py-20">
        <div className="wrap flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">Projects</p>
            <h2 className="h2 mt-4">Work you can open</h2>
          </div>
          <Link href="/projects" className="nav-link">
            All projects →
          </Link>
        </div>
        <div className="wrap mt-10 grid gap-8 lg:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <article key={project.slug} className="panel panel-hover space-y-4 p-4">
              <BrowserFrame src={project.image} alt={project.name} href={project.url} />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">{project.kind}</p>
                <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm font-semibold">{project.hook}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} className="mt-3 inline-block text-sm font-semibold text-[var(--accent)]">
                  Case study →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band band-mist py-20">
        <div className="wrap">
          <p className="kicker">Solutions</p>
          <h2 className="h2 mt-4">Industries we can build for</h2>
          <p className="lede mt-4">Capabilities, not unearned case volume. Softoras can deliver systems in these domains.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => (
              <article key={item.title} className="panel panel-hover p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-paper py-20">
        <div className="wrap">
          <p className="kicker">Process</p>
          <h2 className="h2 mt-4">How a system gets to production</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <article key={step.title} className="panel panel-hover p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-mist py-20">
        <div className="wrap">
          <p className="kicker">Why Softoras</p>
          <h2 className="h2 mt-4">What we bring to a build</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => (
              <article key={item.title} className="panel panel-hover p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-paper py-20">
        <div className="wrap panel p-8 md:p-12">
          <p className="kicker">Contact</p>
          <h2 className="h2 mt-4">Have an idea? Let’s build it.</h2>
          <p className="lede mt-4">
            Websites, products, AI agents, CRM, and cloud — start with a clear conversation.
          </p>
          <Link href="/contact" className="btn btn-primary mt-6">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  )
}
