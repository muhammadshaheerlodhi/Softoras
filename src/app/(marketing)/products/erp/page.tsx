import ErpEmbed from '@/components/products/erp-embed'

export const metadata = {
  title: 'ERP',
  description:
    'Softoras ERP: complete cloud ERP for CRM, sales, inventory, HR, payroll, accounting, and operations. Explore the live product.',
}

export default function ErpPage() {
  return (
    <div className="erp-page">
      <ErpEmbed />
    </div>
  )
}
