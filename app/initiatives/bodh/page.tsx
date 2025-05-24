import { HeroSection } from "@/components/shared/hero-section"
import { FeatureSection } from "@/components/shared/feature-section"
import { KeyFeatures } from "@/components/bodh/key-features"
import { ImpactStats } from "@/components/shared/impact-stats"
import { GetInvolvedSection } from "@/components/shared/get-involved-section"

export default function BodhPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        title="Bodh"
        description="Empowering communities through knowledge, awareness, and informed action"
        imageSrc="/images/bodh/hero-section.jpg"
        imageAlt="Community awareness session for Bodh program - Sukalp Foundation"
      />
      <FeatureSection
        title="Bodh - Awareness Program"
        description="Bodh is an initiative aimed at raising awareness across all age groups on crucial topics such as Environment, Health, Education, Skill Development, and Moral Responsibilities. Through interactive activities like nukkad nataks (street plays) and environmental awareness sessions, Bodh educates communities about sustainable living, pollution control, and personal health, empowering individuals to make positive changes in their lives and society."
        imageSrc="/images/bodh/awareness-program.jpg"
        imageAlt="Community awareness session on environmental issues - Bodh program by Sukalp Foundation"
        imagePosition="right"
      />
      <KeyFeatures />
      <ImpactStats
        stats={[
          { value: "20", label: "Volunteers Engaged", color: "text-orange-500" },
          { value: "2,500", label: "Direct Beneficiaries", color: "text-cyan-400" },
          { value: "5,000", label: "Indirect Beneficiaries", color: "text-yellow-300" },
        ]}
        imageSrc="/images/bodh/impact.jpg"
        imageAlt="Bodh awareness session impact on community members - Sukalp Foundation"
      />
      <GetInvolvedSection />
    </main>
  )
}
