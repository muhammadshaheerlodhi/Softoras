import Link from 'next/link'
import Image from 'next/image'
import { ERP_URL } from '@/content/site'

export default function ProductSpotlight() {
  return (
    <section className="band band-slate section-y">
      <div className="wrap">
        <div className="product-spotlight">
          <div className="product-spotlight-copy">
            <p className="kicker">Flagship Product</p>
            <h2 className="h2 mt-3">Softoras ERP</h2>
            <p className="section-desc mt-3">
              Cloud ERP for CRM, sales, inventory, HR, accounting and operations — designed, built and operated by
              Softoras. A live product, not a portfolio mockup.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['CRM', 'Sales', 'Inventory', 'HR', 'Accounting', 'Cloud SaaS'].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={ERP_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                Open ERP
              </a>
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
                <span className="ml-2 truncate text-[11px] text-[var(--muted)]">softoras-erp.vercel.app</span>
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
