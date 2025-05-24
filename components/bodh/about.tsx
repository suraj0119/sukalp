import Image from "next/image"

export function AboutBodh() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">Bodh - Awareness Program</h2>
            <p className="text-gray-700 mb-4">
              Bodh is an initiative aimed at raising awareness across all age groups on crucial topics such as
              Environment, Health, Education, Skill Development, and Moral Responsibilities.
            </p>
            <p className="text-gray-700">
              Through interactive activities like nukkad nataks (street plays) and environmental awareness sessions,
              Bodh educates communities about sustainable living, pollution control, and personal health, empowering
              individuals to make positive changes in their lives and society.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative h-64 w-full md:h-80 md:w-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/bodh/awareness-program.jpg"
                alt="Community awareness session on environmental issues - Bodh program by Sukalp Foundation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
