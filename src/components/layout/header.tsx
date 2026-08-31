'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '@/components/layout/logo'
import ServicesNavDropdown from '@/components/layout/services-nav-dropdown'
import ThemeToggle from '@/components/theme/theme-toggle'
import { ERP_PATH, services } from '@/content/site'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const active = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href))

  const erpActive = pathname.startsWith('/products/erp')
  const servicesActive = pathname === '/services' || pathname.startsWith('/services/')

  useEffect(() => {
    const el = headerRef.current
    if (!el) return

    const setHeight = () => {
      document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`)
    }

    setHeight()
    const observer = new ResizeObserver(setHeight)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('nav-menu-lock', open)
    return () => document.body.classList.remove('nav-menu-lock')
  }, [open])

  return (
    <header ref={headerRef} className="site-header">
      <div className="wrap flex items-center justify-between gap-2 py-2 sm:gap-3 sm:py-2.5 md:py-3">
        <Logo compact />

        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex" aria-label="Primary">
          <Link href="/" className={`nav-link ${active('/') ? 'is-active' : ''}`}>
            Home
          </Link>

          <ServicesNavDropdown />

          <div className="group relative">
            <button
              type="button"
              className={`nav-link inline-flex items-center gap-1 ${erpActive ? 'is-active' : ''}`}
              aria-haspopup="true"
            >
              Products
              <ChevronDownIcon className="h-3.5 w-3.5 transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 min-w-48 pt-2 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="nav-dropdown">
                <Link
                  href={ERP_PATH}
                  className={`nav-dropdown-item ${erpActive ? 'is-active' : ''}`}
                >
                  <span className="font-semibold">ERP</span>
                  <span className="mt-0.5 block text-xs font-normal text-[var(--muted)]">Flagship cloud product</span>
                </Link>
              </div>
            </div>
          </div>

          {links.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link ${active(item.href) ? 'is-active' : ''}`}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary btn-compact">
            Start a Project
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary btn-compact hidden min-[420px]:inline-flex">
            Contact
          </Link>
          <button type="button" className="nav-menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="nav-mobile-drawer lg:hidden">
          <div className="nav-mobile-drawer-head wrap">
            <p className="text-sm font-semibold">Menu</p>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="nav-mobile-drawer-body wrap">
            <Link href="/" onClick={() => setOpen(false)} className="nav-mobile-link">
              Home
            </Link>

            <button
              type="button"
              className="nav-mobile-accordion-trigger"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((value) => !value)}
            >
              <span>Services</span>
              <ChevronDownIcon className={`h-4 w-4 transition ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen ? (
              <div className="nav-mobile-accordion-panel">
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className={`nav-mobile-link ${servicesActive ? 'is-active' : ''}`}
                >
                  All services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="nav-mobile-service-link"
                  >
                    <span className="font-semibold">{service.title}</span>
                    <span className="mt-0.5 block text-xs font-normal text-[var(--muted)]">{service.description}</span>
                  </Link>
                ))}
              </div>
            ) : null}

            <p className="nav-mobile-group-label">Products</p>
            <Link href={ERP_PATH} onClick={() => setOpen(false)} className={`nav-mobile-link ${erpActive ? 'is-active' : ''}`}>
              ERP
            </Link>

            {links.slice(1).map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="nav-mobile-link">
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary btn-compact mt-4 w-full">
              Start a Project
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
