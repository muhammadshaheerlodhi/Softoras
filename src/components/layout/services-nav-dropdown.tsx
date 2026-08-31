'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { services } from '@/content/site'

export default function ServicesNavDropdown() {
  const pathname = usePathname()
  const servicesActive = pathname === '/services' || pathname.startsWith('/services/')

  return (
    <div className="nav-mega group relative">
      <Link
        href="/services"
        className={`nav-link inline-flex items-center gap-1 ${servicesActive ? 'is-active' : ''}`}
        aria-haspopup="true"
      >
        Services
        <ChevronDownIcon className="h-3.5 w-3.5 transition duration-200 group-hover:rotate-180" />
      </Link>

      <div className="nav-mega-panel pointer-events-none invisible absolute left-1/2 top-full z-50 w-[min(92vw,26rem)] -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <div className="nav-services-dropdown">
          <div className="nav-services-dropdown-head">
            <p className="nav-services-dropdown-kicker">What we build</p>
            <Link href="/services" className="nav-services-all-link">
              View all services →
            </Link>
          </div>

          <ul className="nav-services-list">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`nav-service-item${pathname === `/services/${service.slug}` ? ' is-active' : ''}`}
                >
                  <span className="nav-service-icon" aria-hidden>
                    {service.icon}
                  </span>
                  <span className="nav-service-copy">
                    <span className="nav-service-title">{service.title}</span>
                    <span className="nav-service-oneliner">{service.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-services-dropdown-foot">
            <Link href="/contact" className="btn btn-primary btn-compact w-full">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
