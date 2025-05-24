import Image from "next/image"

export function AboutUnnati() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Unnati</h2>
            <p className="text-gray-700 mb-4">
              <strong>UNNATI – Empowering Youth Through Educational Progress</strong>
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Overview:</strong> UNNATI, meaning "Progress" in Hindi, is an education-forward initiative led by
              Sukalp Foundation aimed at nurturing academic excellence and boosting opportunities for underprivileged
              and motivated students. This initiative focuses on equipping school-going children from diverse
              backgrounds with the knowledge, mentorship, and resources required to excel in various scholarship
              examinations and competitive entrance tests.
            </p>
            <p className="text-gray-700">
              By doing so, UNNATI strives not only to strengthen the academic foundation of students but also to instill
              a sense of purpose, achievement, and financial independence through scholarships. The long-term goal is to
              improve student retention in educational institutions and reduce drop-out rates due to financial hardship.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative h-64 w-full md:h-80 md:w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/unnati/about-unnati.jpeg"
                alt="Students participating in Unnati scholarship preparation program - Educational empowerment"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
