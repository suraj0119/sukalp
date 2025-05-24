import Image from "next/image"

export function AboutYuvaSpark() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Yuva Spark</h2>
            <p className="text-gray-700 mb-4">
              <strong>YuvaSpark – Flagship Annual Youth Development Program of Sukalp Foundation</strong>
            </p>
            <p className="text-gray-700 mb-4">
              YuvaSpark is the flagship annual event of the Sukalp Foundation, a transformative youth engagement
              initiative designed to ignite the potential of India's young minds. It is more than a conference or
              festival—it is a national movement towards creating conscious, skilled, and socially responsible youth who
              will be the architects of a better Bharat.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative h-64 w-full md:h-80 md:w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/yuva-spark/about-yuva-spark.jpeg"
                alt="Students attending a Yuva Spark program session - Youth development and leadership"
                fill
                className="object-cover object-[center_top]"
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
