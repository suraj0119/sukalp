import { WhyPartner } from "@/components/partnerships/why-partner"

export default function PartnershipsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Why Partner With Us section - Left side */}
          <div className="flex flex-col justify-center">
            <WhyPartner />
          </div>

          {/* Google Form iframe - Right side */}
          <div className="bg-white rounded-lg shadow-md p-4 h-[600px] overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScda9UIv1DyWxM9TYP8WwIirwFk7PyT79X5TIhkkTqbTOGDLw/viewform?embedded=true"
              width="100%"
              height="100%"
              className="border-0"
              style={{ minHeight: "600px" }}
              title="Partnership Inquiry Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </main>
  )
}
