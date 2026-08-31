'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '@/components/layout/logo'
import ThemeToggle from '@/components/theme/theme-toggle'
import { ERP_PATH } from '@/content/site'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const active = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href))

  const erpActive = pathname.startsWith('/products/erp')

  return (
    <header className="site-header">
      <div className="wrap flex items-center justify-between gap-3 py-2.5 md:py-3">
        <Logo />

        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label="Primary">
          {links.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link ${active(item.href) ? 'is-active' : ''}`}>
              {item.name}
            </Link>
          ))}

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

          {links.slice(2).map((item) => (
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
          <button type="button" className="nav-menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--line)] bg-[var(--panel)] lg:hidden">
          <div className="wrap flex items-center justify-between py-3">
            <p className="text-sm font-semibold">Menu</p>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="wrap space-y-1 pb-6">
            {links.slice(0, 2).map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="nav-mobile-link">
                {item.name}
              </Link>
            ))}
            <p className="px-3 pt-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Products</p>
            <Link href={ERP_PATH} onClick={() => setOpen(false)} className={`nav-mobile-link ${erpActive ? 'is-active' : ''}`}>
              ERP
            </Link>
            {links.slice(2).map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="nav-mobile-link">
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary btn-compact mt-3 w-full">
              Start a Project
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
