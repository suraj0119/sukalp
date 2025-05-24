import Image from "next/image"
import Link from "next/link"

export function WhyContribute() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Contribute to Sukalp Foundation?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Direct Impact on Communities</h3>
              <p className="text-gray-700 mb-4">
                Your contribution directly supports our programs that create tangible change in communities across
                India. We focus on sustainable development and empowering individuals to break the cycle of poverty.
              </p>
              <p className="text-gray-700 mb-4">
                With low administrative costs, we ensure that the maximum amount of your contribution goes directly to
                our programs and the communities we serve.
              </p>
              <Link
                href="#contribution-form"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors inline-block"
              >
                Contribute Now
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?key=8uj2m"
                  alt="Children benefiting from Sukalp Foundation's education programs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?key=p9k4r"
                  alt="Transparency and accountability in Sukalp Foundation's operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Transparency and Accountability</h3>
              <p className="text-gray-700 mb-4">
                We believe in complete transparency about how your contributions are used. Regular updates and detailed
                reports ensure you can see the impact of your support.
              </p>
              <p className="text-gray-700 mb-4">
                Our financial statements and impact reports are available to all contributors, demonstrating our
                commitment to accountability and responsible stewardship of your contributions.
              </p>
              <Link href="/about-us" className="text-orange-500 font-medium hover:underline inline-flex items-center">
                Learn More About Our Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
