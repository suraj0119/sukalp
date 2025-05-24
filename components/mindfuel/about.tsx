import Image from "next/image"

export function AboutMindFuel() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">About MindFuel</h2>
            <p className="text-gray-700 mb-4">
              MindFuel is our platform for knowledge sharing, offering articles, blogs, and resources related to social
              issues, education, and community development. It's a space to stay informed and engaged with Sukalp's
              initiatives and broader societal challenges.
            </p>
            <p className="text-gray-700">
              Through thought-provoking content, expert insights, and community stories, we aim to inspire action,
              foster dialogue, and promote a deeper understanding of the complex issues facing our society today.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative h-auto w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/mindfuel/mindfuel-concept.png"
                alt="MindFuel - Igniting minds, fueling change through knowledge sharing - Sukalp Foundation"
                width={600}
                height={450}
                className="object-contain"
                priority
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
