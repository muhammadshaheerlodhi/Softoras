'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
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
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link ${active(item.href) ? 'is-active' : ''}`}>
              {item.name}
            </Link>
          ))}

          <Menu as="div" className="relative">
            <MenuButton className={`nav-link inline-flex items-center gap-1 ${pathname.startsWith('/products') ? 'is-active' : ''}`}>
              Products
              <ChevronDownIcon className="h-3.5 w-3.5" />
            </MenuButton>
            <MenuItems className="absolute left-0 mt-3 w-40 rounded-xl border border-[var(--line)] bg-[var(--panel)] p-1.5 shadow-xl">
              <MenuItem>
                <Link href="/products/erp" className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-[var(--bg-alt)]">
                  ERP
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>

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
          <button type="button" className="rounded-lg p-2" onClick={() => setOpen(true)} aria-label="Open menu">
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
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 font-semibold">
                {item.name}
              </Link>
            ))}
            <p className="px-3 pt-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Products</p>
            <Link href="/products/erp" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 font-semibold">
              ERP
            </Link>
            {links.slice(2).map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 font-semibold">
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
