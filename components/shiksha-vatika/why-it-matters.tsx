import Image from "next/image"

const reasons = [
  "Education at the doorstep of underserved communities",
  "Empowers first-generation learners",
  "Builds confidence and curiosity in children",
  "Prepares youth for a brighter, self-reliant future",
  "Strengthens community engagement through learning",
]

export function WhyItMatters() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative h-64 w-full md:h-80 md:w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/shiksha-vatika/why-shiksha-vatika-matters.jpg"
                alt="Children showing their colorful handprints during a Shiksha Vatika activity - Education impact"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Why Shiksha Vatika Matters</h2>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
