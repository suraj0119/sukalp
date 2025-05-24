import Image from "next/image"
import Link from "next/link"
import { INITIATIVES } from "@/lib/constants"

export function FeaturedInitiatives() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Initiatives</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIATIVES.map((initiative, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image
                  src={initiative.image || "/placeholder.svg"}
                  alt={`${initiative.title} - ${initiative.description} - Sukalp Foundation initiative`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{initiative.description}</p>
                <p className="mb-4 flex-grow text-gray-700 text-sm">{initiative.longDescription}</p>
                <Link
                  href={initiative.link}
                  className="text-orange-500 hover:text-orange-700 font-medium inline-flex items-center mt-auto group"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
