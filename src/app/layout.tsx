import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const themeScript = `(function(){try{var d=localStorage.getItem('softoras-theme')==='dark';var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';r.style.backgroundColor=d?'#000000':'#ffffff';}catch(e){}})();`

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
