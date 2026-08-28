import Link from 'next/link'
import Hero from '@/components/home/hero'
import BrowserFrame from '@/components/ui/browser-frame'
import { industries, process, services, strengths, TAGLINE } from '@/content/site'
import { projects } from '@/content/projects'
import { stackGroups } from '@/content/stack'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="band band-paper py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="kicker">About Softoras</p>
            <h2 className="h2 mt-4">An engineering company that ships production systems</h2>
          </div>
          <p className="lede">
            Softoras builds software for companies that need more than a brochure site: SaaS products, CRM and
            GoHighLevel operations, AI automation, custom applications, and cloud infrastructure. {TAGLINE}
          </p>
        </div>
      </section>

      <section className="band band-mist py-20">
        <div className="wrap">
          <p className="kicker">Services</p>
          <h2 className="h2 mt-4 max-w-2xl">Capability, not a catalog of buzzwords</h2>
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

      <section className="band band-ink py-16">
        <div className="wrap">
          <p className="kicker text-sky-300">Technology ecosystem</p>
          <h2 className="h2 mt-4 text-white">The stack we actually deliver on</h2>
        </div>
        <div className="mt-10 overflow-hidden">
          <div className="marquee px-4">
            {[...stackGroups.flatMap((g) => g.items), ...stackGroups.flatMap((g) => g.items)].map((item, i) => (
              <span key={`${item}-${i}`} className="rounded-full border border-white/15 px-4 py-2 text-sm text-sky-100">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="wrap mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-white/10 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{group.items.join(' · ')}</p>
            </article>
          ))}
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
            <article key={project.slug} className="space-y-4">
              <BrowserFrame src={project.image} alt={project.name} href={project.url} />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">{project.kind}</p>
                <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
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
              <article key={item.title} className="panel p-5">
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
              <article key={step.title} className="panel p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-ink py-20">
        <div className="wrap">
          <p className="kicker text-sky-300">Why Softoras</p>
          <h2 className="h2 mt-4 text-white">What we actually bring to a build</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
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
            Websites, SaaS platforms, AI automation, CRM systems, and custom business software — start with a scoped
            conversation.
          </p>
          <Link href="/contact" className="btn btn-primary mt-6">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  )
}
