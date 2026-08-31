'use client'

import { Toaster } from 'sonner'
import { LandingHero } from '@/features/landing/components/landing-hero'
import { LandingStats } from '@/features/landing/components/landing-stats'
import { LandingSections } from '@/features/landing/components/landing-sections'
import { LandingContactSection } from '@/features/landing/components/landing-contact-section'
import { useScrollAnimate } from '@/hooks/use-scroll-animate'

export function ErpLandingPage() {
  useScrollAnimate()

  return (
    <div className="erp-landing">
      <Toaster richColors position="top-center" />
      <LandingHero />
      <LandingStats />
      <LandingSections />
      <LandingContactSection />
    </div>
  )
}
