import Link from 'next/link'
import ErpEmbed from '@/components/products/erp-embed'

export const metadata = {
  title: 'ERP',
  description:
    'Softoras ERP — complete cloud ERP for CRM, sales, inventory, HR, payroll, accounting, and operations. Explore the live product.',
}

export default function ErpPage() {
  return (
    <div className="erp-page">
      <div className="erp-page-bar wrap">
        <nav className="erp-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden>/</span>
          <span>Products</span>
          <span aria-hidden>/</span>
          <span className="erp-breadcrumb-current">ERP</span>
        </nav>
      </div>
      <ErpEmbed />
    </div>
  )
}
