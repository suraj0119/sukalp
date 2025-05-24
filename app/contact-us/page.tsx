import { ContactHero } from "@/components/contact/hero"
import { ContactForm } from "@/components/contact/form"
import { ContactInfo } from "@/components/contact/info"
import { GetInvolvedCTA } from "@/components/get-involved-cta"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <GetInvolvedCTA />
    </main>
  )
}
