import Image from "next/image"

export function CoreValuesImage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <Image
              src="/images/about/core-values-diagram.png"
              alt="Sukalp Foundation Core Values"
              width={1000}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
