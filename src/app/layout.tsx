import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const themeScript = `(function(){try{if(localStorage.getItem('softoras-theme')==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark'}}catch(e){}})();`

export const metadata: Metadata = {
  title: {
    default: 'Softoras | Think SaaS. Think Softoras.',
    template: '%s | Softoras',
  },
  description:
    'Softoras builds SaaS products, AI automation, CRM systems, websites, and cloud infrastructure. Think SaaS. Think Softoras.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
