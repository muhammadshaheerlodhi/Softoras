import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/home/hero'
import HomeLeadForm from '@/components/home/home-lead-form'
import TestimonialMarquee from '@/components/home/testimonial-marquee'
import VideoTestimonials from '@/components/home/video-testimonials'
import BrowserFrame from '@/components/ui/browser-frame'
import TechGrid from '@/components/ui/tech-grid'
import { industries, process, services, strengths, TAGLINE } from '@/content/site'
import { projects } from '@/content/projects'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="band band-paper section-y">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="space-y-5">
            <p className="kicker">About Softoras</p>
            <h2 className="h2">Engineering studio for SaaS, CRM, and automation</h2>
            <p className="text-sm leading-7 text-[var(--muted)]">
              Softoras is led by Muhammad Shaheer Lodhi — AWS Solutions Architect, full-stack engineer, and builder of
              live products including Softoras ERP. We work with founders and operators who need software that ships,
              connects to CRM, and stays online in production.
            </p>
            <p className="text-sm leading-7 text-[var(--muted)]">
              From custom Next.js sites and Shopify stores to GoHighLevel pipelines, n8n workflows, AI voice agents, and
              cloud deploys on AWS and Vercel — one team owns the path from idea to live. {TAGLINE}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="stat-pill">
                <strong>8+</strong>
                <span className="text-xs text-[var(--muted)]">Live projects</span>
              </div>
              <div className="stat-pill">
                <strong>8</strong>
                <span className="text-xs text-[var(--muted)]">Core services</span>
              </div>
              <div className="stat-pill">
                <strong>2</strong>
                <span className="text-xs text-[var(--muted)]">Global offices</span>
              </div>
            </div>
            <Link href="/about" className="inline-block text-sm font-semibold text-[var(--accent)]">
              Meet the CEO →
            </Link>
          </div>
          <div className="about-visual">
            <Image
              src="/about/shaheer-lodhi.png"
              alt="Muhammad Shaheer Lodhi, CEO of Softoras"
              width={600}
              height={600}
              className="h-auto w-full object-cover"
              unoptimized
            />
            <div className="grid grid-cols-3 gap-px border-t border-[var(--line)] bg-[var(--line)]">
              {projects.slice(0, 3).map((project) => (
                <div key={project.slug} className="bg-[var(--panel)] p-3 text-center">
                  <p className="truncate text-[10px] font-bold uppercase tracking-wide text-[var(--accent)]">{project.kind}</p>
                  <p className="mt-1 truncate text-xs font-semibold">{project.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band band-mist section-y">
        <div className="wrap">
          <p className="kicker">Services</p>
          <h2 className="h2 mt-3 max-w-2xl">Websites, products, AI, CRM, and cloud. End to end.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <article key={item.slug} className="panel panel-hover card-accent p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                <ul className="clean-list mt-4 space-y-1 text-sm text-[var(--muted)]">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-paper section-y">
        <div className="wrap">
          <p className="kicker">Technology</p>
          <h2 className="h2 mt-3">Tools we actually ship with</h2>
          <p className="lede mt-3">
            GoHighLevel, HubSpot, Follow Up Boss, n8n, Make, OpenAI, Cursor, AWS, Shopify, and the full modern stack.
          </p>
          <div className="mt-8">
            <TechGrid />
          </div>
        </div>
      </section>

      <section className="band band-mist section-y">
        <div className="wrap flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">Projects</p>
            <h2 className="h2 mt-3">Work you can open</h2>
          </div>
          <Link href="/projects" className="nav-link">
            All projects →
          </Link>
        </div>
        <div className="wrap mt-8 grid gap-6 lg:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <article key={project.slug} className="panel panel-hover card-accent flex flex-col overflow-hidden">
              <BrowserFrame src={project.image} alt={project.name} href={project.url} compact />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">{project.kind}</p>
                <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm font-semibold leading-6">{project.hook}</p>
                <p className="mt-2 flex-1 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--line)] bg-[var(--bg-alt)] px-2.5 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]">
                  Read the case →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band band-paper section-y">
        <div className="wrap">
          <p className="kicker">Testimonials</p>
          <h2 className="h2 mt-3">What partners say</h2>
        </div>
        <div className="mt-8">
          <TestimonialMarquee />
        </div>
      </section>

      <section className="band band-mist section-y">
        <div className="wrap">
          <p className="kicker">Video testimonials</p>
          <h2 className="h2 mt-3">Watch the work in their words</h2>
          <p className="lede mt-3">Add a YouTube or Vimeo link. We review it, then it shows here.</p>
          <div className="mt-8">
            <VideoTestimonials />
          </div>
        </div>
      </section>

      <section className="band band-paper section-y">
        <div className="wrap">
          <p className="kicker">Solutions</p>
          <h2 className="h2 mt-3">Industries we can build for</h2>
          <p className="lede mt-3">Capabilities across verticals — websites, CRM, automation, and custom software.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((item) => (
              <article key={item.title} className="panel panel-hover card-accent p-5">
                <div className="card-icon mb-3 text-sm font-bold">{item.title.charAt(0)}</div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
                {'tags' in item && item.tags ? (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[var(--line)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-mist section-y">
        <div className="wrap">
          <p className="kicker">Process</p>
          <h2 className="h2 mt-3">How a system gets to production</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <article key={step.title} className="panel panel-hover card-accent p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-paper section-y">
        <div className="wrap">
          <p className="kicker">Why Softoras</p>
          <h2 className="h2 mt-3">What we bring to a build</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => (
              <article key={item.title} className="panel panel-hover card-accent p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-mist section-y">
        <div className="wrap">
          <p className="kicker">Contact</p>
          <h2 className="h2 mt-3">Have an idea? Let&apos;s build it.</h2>
          <p className="lede mt-3">Send a project note or subscribe for updates.</p>
          <div className="mt-8">
            <HomeLeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
