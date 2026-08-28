import Link from 'next/link'
import { ERP_URL } from '@/content/site'
import BrowserFrame from '@/components/ui/browser-frame'

export const metadata = {
  title: 'ERP',
  description: 'Cloud ERP from Softoras for CRM, operations, finance, and people systems.',
}

const modules = ['CRM', 'Sales', 'Inventory', 'Purchasing', 'HR', 'Payroll', 'Accounting', 'Projects']

export default function ErpPage() {
  return (
    <div className="band band-paper pb-24 pt-16">
      <div className="wrap grid items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="kicker">Products</p>
          <h1 className="h2 mt-4">ERP</h1>
          <p className="lede mt-4">
            Cloud ERP for CRM, ops, money, and people in one product. Open it. Try it. No six month circus.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={ERP_URL} className="btn btn-primary">
              Open ERP
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Talk to us
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {modules.map((item) => (
              <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-semibold">
                {item}
              </span>
            ))}
          </div>
        </div>
        <BrowserFrame src="/projects/erp.png" alt="ERP product" href={ERP_URL} />
      </div>
    </div>
  )
}
