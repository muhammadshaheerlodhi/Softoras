import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/home/hero'
import HomeLeadForm from '@/components/home/home-lead-form'
import TestimonialMarquee from '@/components/home/testimonial-marquee'
import VideoTestimonials from '@/components/home/video-testimonials'
import FinalCta from '@/components/home/final-cta'
import ProductSpotlight from '@/components/home/product-spotlight'
import ProcessTimeline from '@/components/home/process-timeline'
import SectionHeader from '@/components/ui/section-header'
import TechGrid from '@/components/ui/tech-grid'
import ProjectCard from '@/components/ui/project-card'
import { industries, services, strengths, TAGLINE } from '@/content/site'
import { clientProjects } from '@/content/projects'

export default function Home() {
  const featuredProjects = clientProjects.slice(0, 4)

  return (
    <>
      <Hero />

      {/* About */}
      <section className="band band-paper section-y">
        <div className="wrap about-grid">
          <div className="about-copy">
            <p className="kicker">About Softoras</p>
            <h2 className="h2 mt-3">A technology company that builds systems companies run on</h2>
            <p className="section-desc mt-4">
              Softoras is led by Muhammad Shaheer Lodhi — AWS Solutions Architect, full-stack engineer, and builder of
              live products including Softoras ERP. We partner with founders and operators who need software that ships,
              connects to CRM, and stays online in production.
            </p>
            <p className="section-desc mt-3">
              From SaaS products and AI agents to GoHighLevel pipelines, n8n workflows, and cloud deploys on AWS and
              Vercel — one team owns the path from idea to live. {TAGLINE}
            </p>
            <ul className="about-points mt-5">
              <li>Engineering-first builds — architecture before decoration</li>
              <li>Product mindset — systems people log into daily</li>
              <li>End-to-end delivery — discovery through production deploy</li>
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3">
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
            <Link href="/about" className="section-link mt-5 inline-flex">
              Meet the CEO →
            </Link>
          </div>
          <div className="about-visual ceo-home">
            <Image
              src="/about/shaheer-lodhi.png"
              alt="Muhammad Shaheer Lodhi, CEO of Softoras"
              width={480}
              height={480}
              className="about-photo"
              unoptimized
            />
            <div className="about-visual-strip">
              {clientProjects.slice(0, 3).map((project) => (
                <div key={project.slug} className="about-strip-item">
                  <p className="about-strip-kind">{project.kind}</p>
                  <p className="about-strip-name">{project.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="band band-mist section-y">
        <div className="wrap">
          <SectionHeader
            kicker="Services"
            title="Capabilities built for modern software companies"
            description="Custom software, AI, CRM, automation, cloud, and product development — delivered as one engineering team."
            action={{ label: 'All services', href: '/services' }}
          />
          <div className="card-grid-3 mt-10">
            {services.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="card-service">
                <span className="card-service-icon">{item.icon}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                <span className="card-service-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship product */}
      <ProductSpotlight />

      {/* Technology */}
      <section className="band band-paper section-y">
        <div className="wrap">
          <SectionHeader
            kicker="Technology Ecosystem"
            title="The stack behind every Softoras build"
            description="CRM, AI, development, cloud, operations, and commerce — integrated into systems that actually ship."
            align="center"
          />
          <div className="mt-10">
            <TechGrid />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="band band-mist section-y">
        <div className="wrap">
          <SectionHeader
            kicker="Projects"
            title="Case studies you can open live"
            description="Real client systems and platforms — with screenshots, stack tags, and live URLs."
            action={{ label: 'All projects', href: '/projects' }}
          />
          <div className="card-grid-2 mt-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="band band-paper section-y-sm">
        <div className="wrap">
          <SectionHeader kicker="Testimonials" title="What partners say" align="center" />
          <div className="mt-8">
            <TestimonialMarquee />
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="band band-slate section-y">
        <div className="wrap">
          <SectionHeader
            kicker="Video Testimonials"
            title="Watch the work in their words"
            description="Video stories from partners — more coming soon."
          />
          <div className="mt-8">
            <VideoTestimonials />
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="band band-paper section-y">
        <div className="wrap">
          <SectionHeader
            kicker="Solutions"
            title="Industries we build for"
            description="Capabilities across verticals — not unearned logo claims."
            action={{ label: 'All solutions', href: '/solutions' }}
          />
          <div className="card-grid-4 mt-10">
            {industries.slice(0, 8).map((item) => (
              <article key={item.title} className="card-minimal">
                <span className="card-minimal-icon">{item.title.charAt(0)}</span>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="band band-mist section-y">
        <div className="wrap">
          <SectionHeader
            kicker="How We Work"
            title="From discovery to production"
            description="A connected process — not seven disconnected cards."
            align="center"
          />
          <div className="mt-10">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* Why Softoras */}
      <section className="band band-paper section-y">
        <div className="wrap">
          <SectionHeader kicker="Why Softoras" title="What we bring to every build" align="center" />
          <div className="card-grid-4 mt-10">
            {strengths.map((item) => (
              <article key={item.title} className="card-feature">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="band band-mist section-y">
        <div className="wrap">
          <SectionHeader
            kicker="Contact"
            title="Start a conversation"
            description="Tell us what you want to build. We reply with next steps — not a generic pitch deck."
          />
          <div className="mt-8">
            <HomeLeadForm />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
