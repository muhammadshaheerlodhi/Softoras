import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Softoras | SaaS, CRM, AI & Softoras ERP',
    template: '%s | Softoras',
  },
  description:
    'Softoras builds SaaS platforms, CRM systems, AI automations, and Softoras ERP — a cloud ERP powered by Softoras.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
