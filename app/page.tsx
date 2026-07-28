import { HeroSection } from "@/components/hero-section"
import { LifestyleSection } from "@/components/lifestyle-section"
import { BenefitsSection } from "@/components/benefits-section"
import { BuyingProcessSection } from "@/components/buying-process-section"
import { GallerySection } from "@/components/gallery-section"
import { DetailsSection } from "@/components/details-section"
import { LocationSection } from "@/components/location-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <LifestyleSection />
      <BenefitsSection />
      <BuyingProcessSection />
      <GallerySection />
      <DetailsSection />
      <LocationSection />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
