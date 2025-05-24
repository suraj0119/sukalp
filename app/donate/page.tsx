import { DonateHero } from "@/components/donate/hero"
import { DonationOptions } from "@/components/donate/donation-options"

export default function ContributePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <DonateHero />
      <DonationOptions />
    </main>
  )
}
