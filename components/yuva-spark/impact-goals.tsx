import Image from "next/image"

const goals = [
  'Enhance youth participation in nation-building aligned with the spirit of "Viksit Bharat"',
  "Promote the integration of traditional Indian values with modern global skills",
  "Build bridges between rural and urban youth through shared platforms",
  "Encourage collective ownership of societal challenges",
]

export function ImpactGoals() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative h-64 w-full md:h-80 md:w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/yuva-spark/impact-goals.jpeg"
                alt="Youth leader engaging with students during Yuva Spark program - Leadership development"
                fill
                className="object-cover object-[center_top]"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Impact Goals</h2>
            <ul className="space-y-4">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
