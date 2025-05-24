import Image from "next/image"

export function AboutTarunonmesh() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Tarunonmesh</h2>
            <p className="text-gray-700 mb-4">
              Tarunonmesh is a youth-centric program that inspires students to engage with nation-building activities.
              The event encourages students to hone their skills, increase their creativity, and take on leadership
              roles.
            </p>
            <p className="text-gray-700">
              Activities include educational talks, quiz competitions, and cultural showcases, all aimed at instilling a
              sense of national responsibility and patriotism.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative h-64 w-full md:h-80 md:w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/tarunonmesh/about-tarunonmesh.jpeg"
                alt="Sukalp Foundation team at Tarunonmesh program launch - Youth development initiative"
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
