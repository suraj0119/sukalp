import Image from "next/image"
import Link from "next/link"

export function CorporateGiving() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative h-64 w-full md:h-80 md:w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?key=9v7am"
                alt="Corporate volunteers engaged in community service projects - Sukalp Foundation corporate partnerships"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Corporate Giving</h2>
            <p className="text-gray-700 mb-4">
              Partner with Sukalp Foundation to align your CSR goals with meaningful social impact. We work with
              companies of all sizes to create customized partnerships that advance your business objectives while
              making a positive difference in communities.
            </p>
            <p className="text-gray-700 mb-6">
              Our corporate partnerships can include financial support, employee volunteering, skill-based volunteering,
              cause-related marketing, and more.
            </p>
            <Link
              href="/partnerships"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors inline-block"
            >
              Explore Corporate Partnerships
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
