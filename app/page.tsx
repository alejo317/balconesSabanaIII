import { HeroSection } from "@/components/hero-section"
import { LifestyleSection } from "@/components/lifestyle-section"
import { BenefitsSection } from "@/components/benefits-section"
import { GallerySection } from "@/components/gallery-section"
import { DetailsSection } from "@/components/details-section"
import { LocationSection } from "@/components/location-section"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <LifestyleSection />
      <BenefitsSection />
      <GallerySection />
      <DetailsSection />
      <LocationSection />
    </main>
  )
}
