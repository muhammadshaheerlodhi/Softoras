import Link from 'next/link'
import Logo from '@/components/layout/logo'
import { site, TAGLINE } from '@/content/site'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-alt)]">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
            {TAGLINE} Software, SaaS, AI automation, CRM systems, and cloud infrastructure for companies that need
            production systems.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/services">Software development</Link></li>
            <li><Link href="/services">AI & automation</Link></li>
            <li><Link href="/services">CRM & GoHighLevel</Link></li>
            <li><Link href="/services">Cloud & DevOps</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Products</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/products/erp">ERP</Link></li>
          </ul>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Projects</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/projects">Selected work</Link></li>
            <li><Link href="/solutions">Solutions</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.phones.pakistan.href}>{site.phones.pakistan.label}</a></li>
            <li><a href={site.phones.uae.href}>{site.phones.uae.label}</a></li>
            <li><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap border-t border-[var(--line)] py-6 text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} Softoras. All rights reserved.
      </div>
    </footer>
  )
}
