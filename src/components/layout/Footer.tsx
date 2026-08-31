import Link from 'next/link'
import Logo from '@/components/layout/logo'
import LocationCards from '@/components/ui/location-cards'
import { ERP_URL, services, site, TAGLINE } from '@/content/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-grid">
        <div className="site-footer-brand">
          <Logo compact />
          <p className="site-footer-tagline">{TAGLINE}</p>
          <p className="site-footer-desc">
            Software, SaaS, AI automation, CRM systems, and cloud infrastructure. Systems your business can run.
          </p>
        </div>

        <div>
          <p className="footer-heading">Services</p>
          <ul className="footer-links">
            {services.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-heading">Products</p>
          <ul className="footer-links">
            <li>
              <a href={ERP_URL} target="_blank" rel="noreferrer">
                ERP
              </a>
            </li>
          </ul>
          <p className="footer-heading mt-5">Solutions</p>
          <ul className="footer-links">
            <li><Link href="/solutions">All solutions</Link></li>
          </ul>
          <p className="footer-heading mt-5">Projects</p>
          <ul className="footer-links">
            <li><Link href="/projects">Systems we&apos;ve built</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-heading">Company</p>
          <ul className="footer-links">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/services">Services</Link></li>
          </ul>
        </div>

        <div className="site-footer-contact">
          <p className="footer-heading">Contact</p>
          <ul className="footer-links">
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
          <LocationCards compact className="mt-5" />
        </div>
      </div>

      <div className="wrap site-footer-bar">
        <p>© {new Date().getFullYear()} Softoras. All rights reserved.</p>
        <Link href="/contact" className="footer-cta-link">
          Start a Project →
        </Link>
      </div>
    </footer>
  )
}
