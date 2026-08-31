import dynamic from 'next/dynamic'
import Hero from '@/components/home/hero'
import ServiceCardLink from '@/components/ui/service-card-link'
import FinalCta from '@/components/home/final-cta'
import ProductSpotlight from '@/components/home/product-spotlight'
import ProcessTimeline from '@/components/home/process-timeline'
import AboutSection from '@/components/home/about-section'
import TrustSection from '@/components/home/trust-section'
import SectionHeader from '@/components/ui/section-header'
import ProjectCard from '@/components/ui/project-card'
import { MISSION, services, solutionAreas, strengths } from '@/content/site'
import { homeFaqs } from '@/content/faqs'
import { clientProjects } from '@/content/projects'

const TechGrid = dynamic(() => import('@/components/ui/tech-grid'), {
  loading: () => <div className="section-load-placeholder section-load-placeholder-lg" aria-hidden />,
})

const FaqSection = dynamic(() => import('@/components/ui/faq-section'), {
  loading: () => <div className="section-load-placeholder" aria-hidden />,
})

const TestimonialCarousel = dynamic(() => import('@/components/home/testimonial-carousel'), {
  loading: () => <div className="section-load-placeholder" aria-hidden />,
})

const HomeLeadForm = dynamic(() => import('@/components/home/home-lead-form'), {
  loading: () => <div className="section-load-placeholder section-load-placeholder-sm" aria-hidden />,
})

export default function Home() {
  const featuredProjects = clientProjects.slice(0, 4)

  return (
    <>
      <Hero />

      <section className="band band-mist section-y">
        <div className="wrap">
          <SectionHeader
            kicker="What We Build"
            title="We build the systems behind modern businesses"
            description="Softoras combines engineering, automation and product thinking to create digital systems that solve real business problems. We do not just build websites. We build SaaS products, ERP systems, CRM ecosystems, AI agents, automation, custom software, and cloud infrastructure."
          />
          <p className="mission-line mt-4">{MISSION}</p>
          <div className="card-grid-3 mt-10">
            {services.map((item) => (
              <ServiceCardLink key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <ProductSpotlight />

      <section className="band band-paper section-y">
        <div className="wrap">
          <SectionHeader
            kicker="Solutions"
            title="Technology built around the way your business works"
            description="We explain solutions in business language: what Softoras can solve for your operation, not just which tools we use."
            action={{ label: 'All solutions', href: '/solutions' }}
          />
          <div className="card-grid-4 mt-10">
            {solutionAreas.map((item) => (
              <article key={item.title} className="card-minimal">
                <span className="card-minimal-icon">{item.title.charAt(0)}</span>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-mist section-y">
        <div className="wrap">
          <SectionHeader
            kicker="Technology Ecosystem"
            title="One team. A complete technology ecosystem."
            description="Softoras works across CRM, AI, automation, software engineering, cloud and business operations, integrating the tools your business already relies on."
            align="center"
          />
          <div className="mt-10">
            <TechGrid />
          </div>
        </div>
      </section>

      <section className="band band-paper section-y">
        <div className="wrap">
          <SectionHeader
            kicker="Projects"
            title="Systems we've built"
            description="A selection of digital products, platforms and business systems built for real-world use."
            action={{ label: 'All projects', href: '/projects' }}
          />
          <div className="card-grid-2 mt-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      <section className="band band-mist section-y">
        <div className="wrap">
          <SectionHeader
            kicker="How We Work"
            title="From idea to production"
            description="A connected process from understanding your business to shipping and improving the system in production."
            align="center"
          />
          <div className="mt-10">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="band band-paper section-y">
        <div className="wrap">
          <SectionHeader
            kicker="Why Softoras"
            title="Why businesses choose Softoras"
            align="center"
          />
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

      <TrustSection />

      <section className="band band-mist section-y">
        <div className="wrap">
          <FaqSection
            items={homeFaqs}
            kicker="FAQ"
            title="Top questions about Softoras"
            description="What we do, how ERP fits in, how systems connect, and how we work with teams in production."
          />
        </div>
      </section>

      <section className="band band-paper section-y-sm">
        <div className="wrap">
          <SectionHeader
            kicker="Partner Feedback"
            title="What partners say about the work"
            description="Feedback from people who have worked with Softoras on live systems."
            align="center"
          />
          <div className="mt-10">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <section className="band band-mist section-y">
        <div className="wrap">
          <HomeLeadForm />
        </div>
      </section>

      <FinalCta />
    </>
  )
}
