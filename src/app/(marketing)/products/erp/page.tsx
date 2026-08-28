import { redirect } from 'next/navigation'
import { ERP_URL } from '@/content/site'

export default function ErpPage() {
  redirect(ERP_URL)
}
