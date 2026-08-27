'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ERP_URL } from '@/content/site'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  return (
    <header className="fixed top-0 z-50 w-full border-b border-sky-100 bg-white/90 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Softoras</span>
          <Image
            src="/brand/softoras-logo.png"
            alt="Softoras"
            width={180}
            height={60}
            className="h-12 w-auto object-contain sm:h-14"
            priority
          />
        </Link>

        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-slate-700 lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" />
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold ${isActive(item.href) ? 'text-sky-600' : 'text-slate-800 hover:text-sky-600'}`}
            >
              {item.name}
            </Link>
          ))}
          <a href={ERP_URL} className="text-sm font-semibold text-slate-800 hover:text-sky-600">
            Softoras ERP
          </a>
        </div>

        <div className="hidden lg:flex">
          <Link href="/contact" className="btn-primary">
            Book a Consultation
          </Link>
        </div>
      </nav>

      <Dialog open={mobileOpen} onClose={setMobileOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-slate-900/20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/brand/softoras-logo.png" alt="Softoras" width={150} height={52} className="h-10 w-auto" />
            </Link>
            <button type="button" className="-m-2.5 p-2.5 text-slate-700" onClick={() => setMobileOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-8 space-y-2">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-slate-800 hover:bg-sky-50"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={ERP_URL}
              className="block rounded-lg px-3 py-2 text-base font-semibold text-sky-700 hover:bg-sky-50"
            >
              Softoras ERP
            </a>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-4 w-full">
              Book a Consultation
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
