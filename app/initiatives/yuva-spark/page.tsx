import { YuvaSparkHero } from "@/components/yuva-spark/hero"
import { AboutYuvaSpark } from "@/components/yuva-spark/about"
import { KeyPillars } from "@/components/yuva-spark/key-pillars"
import { ImpactGoals } from "@/components/yuva-spark/impact-goals"
import { GetInvolvedSection } from "@/components/yuva-spark/get-involved"

export default function YuvaSparkPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <YuvaSparkHero />
      <AboutYuvaSpark />
      <KeyPillars />
      <ImpactGoals />
      <GetInvolvedSection />
    </main>
  )
}
