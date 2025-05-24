import { UnnatiHero } from "@/components/unnati/hero"
import { AboutUnnati } from "@/components/unnati/about"
import { KeyBenefits } from "@/components/unnati/key-benefits"
import { OurApproach } from "@/components/unnati/our-approach"
import { ImpactStats } from "@/components/unnati/impact-stats"
import { GetInvolvedSection } from "@/components/unnati/get-involved"

export default function UnnatiPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <UnnatiHero />
      <AboutUnnati />
      <KeyBenefits />
      <OurApproach />
      <ImpactStats />
      <GetInvolvedSection />
    </main>
  )
}
