import Image from "next/image"

export function OurStory() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="order-2 md:order-1">
            <p className="text-gray-700 mb-4">
              Sukalp Foundation is a registered non-profit organization that empowers marginalized communities through
              education, healthcare, and skill development initiatives. We believe in the power of volunteerism to drive
              positive social change, breaking barriers of inequality and creating equal opportunities for everyone. Our
              work focuses particularly on children and youth in underserved communities, providing them with
              educational support and creative outlets for expression.
            </p>
            <p className="text-gray-700">
              Our foundation is built on the belief that meaningful connections and personal engagement are key to
              addressing the most pressing social issues. Through dedicated volunteers and community partnerships, we
              work at the grassroots level to create sustainable impact and lasting change in the lives of those we
              serve.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="/images/about/community-work.jpeg"
              alt="Sukalp Foundation volunteer working with children in the community - Our Story"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
