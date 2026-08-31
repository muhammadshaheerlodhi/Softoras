import Link from 'next/link'
import Image from 'next/image'
import { erpModules } from '@/content/site'
import { ERP_REGISTER } from '@/lib/erp/paths'

export default function ProductSpotlight() {
  return (
    <section className="band band-mist section-y">
      <div className="wrap">
        <div className="product-spotlight">
          <div className="product-spotlight-copy">
            <p className="kicker">Softoras Product</p>
            <h2 className="h2 mt-3">Meet Softoras ERP</h2>
            <p className="text-base font-medium text-[var(--accent)] mt-2">
              One intelligent system for your entire business.
            </p>
            <p className="section-desc mt-4">
              Softoras ERP is a Softoras-built business management product designed to bring operations into one
              connected system. CRM, sales, inventory, purchasing, HR, payroll, accounting, and projects, with
              role-based access and a live product you can open today.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {erpModules.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={ERP_REGISTER} className="btn btn-primary">
                Explore Softoras ERP →
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Talk to us
              </Link>
            </div>
          </div>
          <div className="product-spotlight-visual">
            <div className="browser browser-lift">
              <div className="browser-bar">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="ml-2 truncate text-[11px] text-[var(--muted)]">softoras.com/products/erp</span>
              </div>
              <div className="project-shot-wrap">
                <Image
                  src="/projects/erp.png"
                  alt="Softoras ERP product interface"
                  width={1440}
                  height={900}
                  className="project-shot"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
