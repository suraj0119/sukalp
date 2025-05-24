import { SukalpManthanHero } from "@/components/sukalp-manthan/hero"
import { AboutSukalpManthan } from "@/components/sukalp-manthan/about"
import { KeyObjectives } from "@/components/sukalp-manthan/key-objectives"
import { ImpactStats } from "@/components/sukalp-manthan/impact-stats"
import { GetInvolved } from "@/components/sukalp-manthan/get-involved"

export default function SukalpManthanPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SukalpManthanHero />
      <AboutSukalpManthan />
      <KeyObjectives />
      <ImpactStats />
      <GetInvolved />
    </main>
  )
}
