import { ErpLandingPage } from '@/features/landing/components/landing-page-content'
import '@/app/erp-landing.css'

export const metadata = {
  title: 'ERP',
  description:
    'Softoras ERP — complete cloud ERP for CRM, sales, inventory, HR, payroll, accounting, and operations. Start your 15-day free trial.',
}

export default function ErpPage() {
  return <ErpLandingPage />
}
