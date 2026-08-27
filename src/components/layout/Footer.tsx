import Image from 'next/image'
import Link from 'next/link'
import { ERP_URL, services, site } from '@/content/site'

const nav = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/brand/softoras-logo.png"
                alt="Softoras"
                width={190}
                height={64}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Softoras builds SaaS platforms, CRM systems, AI automations, and Softoras ERP — a cloud ERP powered by
              Softoras.
            </p>
            <div className="mt-4 space-y-1 text-sm text-slate-600">
              <p>
                Email:{' '}
                <a className="font-semibold text-sky-700 hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>
                Pakistan:{' '}
                <a className="font-semibold text-sky-700 hover:underline" href={site.phones.pakistan.href}>
                  {site.phones.pakistan.label}
                </a>
              </p>
              <p>
                UAE:{' '}
                <a className="font-semibold text-sky-700 hover:underline" href={site.phones.uae.href}>
                  {site.phones.uae.label}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-600 hover:text-sky-700">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href={ERP_URL} className="text-sm text-slate-600 hover:text-sky-700">
                  Softoras ERP
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((item) => (
                <li key={item.title}>
                  <Link href="/services" className="text-sm text-slate-600 hover:text-sky-700">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sky-100 pt-8">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Softoras. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
