import Image from "next/image"

export function ImpactStats() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative h-64 w-full md:h-80 md:w-full rounded-lg overflow-hidden">
              <Image
                src="/images/sukalp-manthan/impact.jpg"
                alt="Sukalp Manthan participants in discussion - Impact of policy advocacy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/30 p-6 rounded-lg text-center border border-gray-700">
              <h3 className="text-3xl font-bold text-orange-500 mb-2">30</h3>
              <p className="text-xl">Volunteers Engaged</p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg text-center border border-gray-700">
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">100</h3>
              <p className="text-xl">Number of Participants</p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg text-center border border-gray-700">
              <h3 className="text-3xl font-bold text-yellow-300 mb-2">22</h3>
              <p className="text-xl">Number of Institutions Involved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
