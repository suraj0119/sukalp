import { HeroSection } from "@/components/hero-section"
import { FeaturedInitiatives } from "@/components/featured-initiatives"
import { ImpactStats } from "@/components/shared/impact-stats"
import { MindFuelSpotlight } from "@/components/mindfuel-spotlight"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { PartnerOrganizations } from "@/components/partner-organizations"
import { Users, GraduationCap, Building } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturedInitiatives />
      <ImpactStats
        title="Making a Difference"
        description="Through our initiatives, we've created meaningful change in communities across India. Here's our impact by the numbers:"
        stats={[
          {
            value: "2500+",
            label: "Indirect Beneficiaries from communities",
            color: "text-yellow-400",
            icon: <Building className="text-yellow-400" />,
          },
          {
            value: "250+",
            label: "Students directly impacted",
            color: "text-cyan-400",
            icon: <GraduationCap className="text-cyan-400" />,
          },
          {
            value: "25+",
            label: "Volunteers actively engaged",
            color: "text-orange-500",
            icon: <Users className="text-orange-500" />,
          },
        ]}
        imageSrc="/images/about/community-work.jpeg"
        imageAlt="Sukalp Foundation community impact"
      />
      <MindFuelSpotlight />
      <TestimonialsSection />
      <PartnerOrganizations />
      <GetInvolvedSection />
    </main>
  )
}
