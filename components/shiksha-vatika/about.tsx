import Image from "next/image"

export function AboutShikshaVatika() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Flagship Programs</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          At Sukalp Foundation, we believe in creating lasting impact through our various initiatives. Below are some of
          our key programs making a difference:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Shiksha Vatika</h3>
            <p className="text-gray-700 mb-4">
              Shiksha Vatika is our initiative to provide quality education to children in underprivileged communities.
              Through our learning centers, we offer an alternative to expensive education institutions, ensuring every
              child has access to educational opportunities.
            </p>
            <p className="text-gray-700">
              We focus on skill development, holistic learning, and career readiness, providing a strong foundation for
              students from elementary to higher levels.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative h-64 w-full md:h-80 md:w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/shiksha-vatika/flagship-programs.jpg"
                alt="Children in Shiksha Vatika educational program learning together - Sukalp Foundation"
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
