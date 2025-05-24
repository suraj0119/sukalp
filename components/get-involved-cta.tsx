import Link from "next/link"

export function GetInvolvedCTA() {
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
