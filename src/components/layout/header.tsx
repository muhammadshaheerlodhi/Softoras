'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '@/components/layout/logo'
import ThemeToggle from '@/components/theme/theme-toggle'

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

  return (
    <header className="site-header">
      <div className="wrap flex items-center justify-between gap-4 py-2 md:py-3">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link ${active(item.href) ? 'is-active' : ''}`}>
              {item.name}
            </Link>
          ))}

          <div className="group relative">
            <Link
              href="/products/erp"
              className={`nav-link inline-flex items-center gap-1 ${pathname.startsWith('/products') ? 'is-active' : ''}`}
            >
              Products
              <ChevronDownIcon className="h-3.5 w-3.5 transition group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full z-50 min-w-44 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-1.5 shadow-xl">
                <Link
                  href="/products/erp"
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold transition hover:bg-[var(--bg-alt)] hover:text-[var(--accent)]"
                >
                  ERP
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

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary">
            Start a Project
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button type="button" className="rounded-lg p-2 hover:bg-[var(--bg-alt)]" onClick={() => setOpen(true)} aria-label="Open menu">
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
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 font-semibold hover:bg-[var(--bg-alt)]">
                {item.name}
              </Link>
            ))}
            <p className="px-3 pt-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Products</p>
            <Link href="/products/erp" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 font-semibold hover:bg-[var(--bg-alt)]">
              ERP
            </Link>
            {links.slice(2).map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 font-semibold hover:bg-[var(--bg-alt)]">
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary mt-3 w-full">
              Start a Project
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
