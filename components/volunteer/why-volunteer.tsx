import Image from "next/image"

export function WhyVolunteer() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Volunteer With Us?</h2>
            <p className="text-gray-700 mb-4">
              Volunteering with Sukalp Foundation is an opportunity to be part of meaningful change. By sharing your
              time, skills, and passion, you can make a direct impact on the lives of individuals and communities across
              India.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you're interested in teaching children, organizing events, raising awareness about health issues,
              or simply giving back to society, volunteering with us offers a fulfilling and enriching experience.
            </p>
            <p className="text-gray-700">
              As a volunteer, you are the backbone of our organization, helping us extend our reach and deepen our
              impact. Join our community of dedicated individuals working together to create more equitable and just
              society.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/volunteer/why-volunteer-with-us.jpeg"
                alt="Volunteer engaging with community at a historical monument - Sukalp Foundation community outreach"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
