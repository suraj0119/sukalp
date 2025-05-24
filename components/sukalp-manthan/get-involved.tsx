import Link from "next/link"
import { Users, DollarSign, Building } from "lucide-react"

export function GetInvolved() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Get Involved</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Join our mission to create positive change through policy advocacy and youth leadership. There are many ways
          you can contribute to Sukalp Manthan.
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
              Join our team of passionate volunteers to help organize policy discussions and leadership development
              programs.
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
            <p className="text-gray-600 mb-6">
              Support Sukalp Manthan financially to expand our policy advocacy initiatives and youth leadership
              programs.
            </p>
            <Link
              href="/donate"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors inline-block"
            >
              Contribute Now
            </Link>
          </div>

          {/* Partnerships */}
          <div className="border rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                <Building className="h-8 w-8 text-orange-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Institutional Partnerships</h3>
            <p className="text-gray-600 mb-6">
              Partner with us to create collaborative policy research and advocacy initiatives for sustainable social
              impact.
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
