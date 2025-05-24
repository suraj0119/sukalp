import { WhyVolunteer } from "@/components/volunteer/why-volunteer"
import { VolunteerBenefits } from "@/components/volunteer/benefits"

export default function VolunteerPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <WhyVolunteer />
      <VolunteerBenefits />
    </main>
  )
}
