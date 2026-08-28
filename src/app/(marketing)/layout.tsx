import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/header'
import { ThemeProvider } from '@/components/theme/theme-provider'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
