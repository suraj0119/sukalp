import { Heart, Users, BookOpen, Smile } from "lucide-react"

const benefits = [
  {
    title: "Make a Difference",
    description: "Create tangible impact in the lives of individuals and communities facing challenges.",
    icon: <Heart className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Build Connections",
    description: "Meet like-minded individuals and build meaningful relationships with people who share your values.",
    icon: <Users className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Develop Skills",
    description:
      "Gain practical experience and develop new skills that can enhance your personal and professional growth.",
    icon: <BookOpen className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Personal Fulfillment",
    description: "Experience the joy and satisfaction that comes from giving back and contributing to positive change.",
    icon: <Smile className="h-6 w-6 text-orange-500" />,
  },
]

export function VolunteerBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-8">Benefits of Volunteering</h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4 flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-2 overflow-hidden">
            <div className="form-container" style={{ height: "600px", overflowY: "scroll" }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdMRdyRxB1tMFlpysPrzYSlgMdVOydQGDgwW5Sg44m7t7Lb9A/viewform?embedded=true"
                width="100%"
                height="4193"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Volunteer Interest Form"
                className="rounded-lg"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
