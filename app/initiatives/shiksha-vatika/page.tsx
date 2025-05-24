import { ShikshaVatikaHero } from "@/components/shiksha-vatika/hero"
import { AboutShikshaVatika } from "@/components/shiksha-vatika/about"
import { WhatWeOffer } from "@/components/shiksha-vatika/what-we-offer"
import { WhyItMatters } from "@/components/shiksha-vatika/why-it-matters"
import { ImpactStats } from "@/components/shiksha-vatika/impact-stats"
import { GetInvolvedSection } from "@/components/shiksha-vatika/get-involved"

export default function ShikshaVatikaPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ShikshaVatikaHero />
      <AboutShikshaVatika />
      <WhatWeOffer />
      <WhyItMatters />
      <ImpactStats />
      <GetInvolvedSection />
    </main>
  )
}
