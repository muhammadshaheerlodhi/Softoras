import ContactForm from '@/components/contact/contact-form'
import ContactVisual from '@/components/contact/contact-visual'
import LocationCards from '@/components/ui/location-cards'
import { site } from '@/content/site'

export default function ContactPage() {
  return (
    <div className="band band-paper section-y">
      <div className="wrap contact-layout contact-layout-page">
        <div className="contact-copy">
          <div className="section-intro-center section-intro-left-lg">
            <p className="kicker">Contact</p>
            <h1 className="h2 mt-3">Have a system in mind?</h1>
            <p className="section-desc mt-3">
              Tell us what you&apos;re building, what&apos;s slowing your business down, or what you want to automate.
              We&apos;ll help turn the idea into a practical digital solution.
            </p>
          </div>

          <ContactVisual />

          <div className="contact-email-block">
            <p className="text-center text-sm lg:text-left">
              <span className="font-semibold text-[var(--ink)]">Email · </span>
              <a className="font-semibold text-[var(--accent)]" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>

          <LocationCards variant="row" className="contact-locations-block" />
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
