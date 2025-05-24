import Image from "next/image"

export function AboutSukalpManthan() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Sukalp Manthan</h2>
            <p className="text-gray-700 mb-4">
              Sukalp Manthan 2024 was an annual conference aimed at fostering collaboration between voluntary
              organizations, corporates, and academia. The event brings together stakeholders from various sectors to
              share knowledge, ideas, and resources in a bid to address pressing social challenges and drive inclusive
              growth.
            </p>
            <p className="text-gray-700">
              The conference's theme for 2024 was "Mutual Cooperation Between Voluntary Organizations, Academia, and
              Corporates for the Future of Bharat".
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative h-64 w-full md:h-80 md:w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/sukalp-manthan/about-sukalp-manthan.jpg"
                alt="Sukalp Manthan conference session with speakers and audience - Policy dialogue"
                fill
                className="object-cover"
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
