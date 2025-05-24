import Link from "next/link"

export function CurrentPartners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Corporate Partners</h2>

        <div className="text-center mb-8">
          <p className="text-gray-700 max-w-3xl mx-auto">
            We're proud to work with organizations that share our commitment to positive social impact.
          </p>
        </div>

        {/* Partner logos would go here in a real implementation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg flex items-center justify-center h-32">
              <p className="text-gray-500 text-sm">Partner {index}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact-us"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-colors"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  )
}
