import Link from "next/link"
import { Users, DollarSign, Building } from "lucide-react"

interface GetInvolvedSectionProps {
  className?: string
  variant?: "default" | "cta"
}

export function GetInvolvedSection({ className, variant = "default" }: GetInvolvedSectionProps) {
  if (variant === "cta") {
    return (
      <section className="py-12 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Join our mission to create positive change. There are many ways you can contribute to our initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/volunteer"
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/donate"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Contribute Now
            </Link>
            <Link
              href="/partnerships"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-16 bg-white ${className || ""}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Get Involved</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Join our mission to create positive change. There are many ways you can contribute to our initiatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Volunteer with Us */}
          <div className="border rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Volunteer with Us</h3>
            <p className="text-gray-600 mb-6">
              Join our team of passionate volunteers to make a difference in communities across India.
            </p>
            <Link
              href="/volunteer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors inline-block"
            >
              Volunteer
            </Link>
          </div>

          {/* Contribute */}
          <div className="border rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-orange-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Contribute</h3>
            <p className="text-gray-600 mb-6">Support our programs financially to expand our reach and impact.</p>
            <Link
              href="/donate"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors inline-block"
            >
              Contribute Now
            </Link>
          </div>

          {/* Corporate Partnerships */}
          <div className="border rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                <Building className="h-8 w-8 text-orange-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Corporate Partnerships</h3>
            <p className="text-gray-600 mb-6">
              Partner with us to create sustainable social impact through CSR initiatives.
            </p>
            <Link
              href="/partnerships"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors inline-block"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
