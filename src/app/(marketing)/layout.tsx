import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/header'
import LogoSplash from '@/components/layout/logo-splash'
import { ThemeProvider } from '@/components/theme/theme-provider'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LogoSplash />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
