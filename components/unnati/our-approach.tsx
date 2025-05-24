import Image from "next/image"

const approaches = [
  {
    title: "Comprehensive Study Material",
    description:
      "We provide carefully curated study materials that cover all aspects of scholarship examinations, making complex concepts accessible to students.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-orange-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Expert Guidance",
    description:
      "Our team of experienced educators provides personalized guidance to students, helping them navigate the scholarship application process.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-cyan-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Regular Practice Tests",
    description:
      "We conduct regular mock tests and practice sessions to familiarize students with the examination pattern and help them improve their performance.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
]

export function OurApproach() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative h-64 w-full md:h-80 md:w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/unnati/our-approach.jpeg"
                alt="Unnati training session for scholarship preparation - Educational methodology"
                fill
                className="object-cover object-[center_top]"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <div className="space-y-6">
              {approaches.map((approach, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{approach.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{approach.title}</h3>
                    <p className="text-gray-700">{approach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
