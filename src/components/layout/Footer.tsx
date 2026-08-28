import Link from 'next/link'
import Logo from '@/components/layout/logo'
import { ERP_URL, services, site, TAGLINE } from '@/content/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-grid">
        <div className="site-footer-brand">
          <Logo compact />
          <p className="site-footer-tagline">{TAGLINE}</p>
          <p className="site-footer-desc">
            Software, SaaS, AI automation, CRM systems, and cloud infrastructure for companies that need production
            systems.
          </p>
        </div>

        <div>
          <p className="footer-heading">Services</p>
          <ul className="footer-links">
            {services.slice(0, 4).map((item) => (
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
          <p className="footer-heading mt-5">Explore</p>
          <ul className="footer-links">
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-heading">Company</p>
          <ul className="footer-links">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/services">All services</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-heading">Contact</p>
          <ul className="footer-links">
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.phones.pakistan.href}>{site.phones.pakistan.label}</a></li>
            <li><a href={site.phones.uae.href}>{site.phones.uae.label}</a></li>
            <li><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
          <p className="mt-4 text-xs leading-5 text-[var(--muted)]">{site.offices.pakistan}</p>
          <p className="text-xs leading-5 text-[var(--muted)]">{site.offices.uae}</p>
        </div>
      </div>

      <div className="wrap site-footer-bar">
        <p>© {new Date().getFullYear()} Softoras. All rights reserved.</p>
        <Link href="/contact" className="text-sm font-semibold text-[var(--accent)]">
          Start a Project →
        </Link>
      </div>
    </footer>
  )
}
