import { AboutHero } from "@/components/about-hero"
import { OurStory } from "@/components/our-story"
import { MissionVisionObjectives } from "@/components/mission-vision-objectives"
import { CoreValuesImage } from "@/components/core-values-image"
import { OurApproach } from "@/components/our-approach"
import { OurTeam } from "@/components/our-team"
import { GetInvolvedCTA } from "@/components/get-involved-cta"

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutHero />
      <OurStory />
      <MissionVisionObjectives />
      <CoreValuesImage />
      <OurApproach />
      <OurTeam />
      <GetInvolvedCTA />
    </main>
  )
}
