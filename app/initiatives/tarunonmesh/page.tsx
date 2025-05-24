import { TarunonmeshHero } from "@/components/tarunonmesh/hero"
import { AboutTarunonmesh } from "@/components/tarunonmesh/about"
import { KeyFeatures } from "@/components/tarunonmesh/key-features"
import { ImpactStats } from "@/components/tarunonmesh/impact-stats"
import { GetInvolvedSection } from "@/components/tarunonmesh/get-involved"

export default function TarunonmeshPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <TarunonmeshHero />
      <AboutTarunonmesh />
      <KeyFeatures />
      <ImpactStats />
      <GetInvolvedSection />
    </main>
  )
}
