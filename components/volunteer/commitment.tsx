import { Clock, Calendar, CheckCircle } from "lucide-react"

const commitments = [
  {
    title: "Time Commitment",
    description:
      "We offer flexible volunteering options, from one-time events to regular weekly commitments. You can choose what works best for your schedule.",
    icon: <Clock className="h-8 w-8 text-orange-500" />,
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    title: "Duration",
    description:
      "Volunteer opportunities range from short-term projects (1-3 months) to long-term engagements (6 months or more).",
    icon: <Calendar className="h-8 w-8 text-cyan-500" />,
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  {
    title: "Requirements",
    description:
      "A passion for social change, reliability, and a willingness to learn. Specific requirements vary by volunteer role.",
    icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
]

export function VolunteerCommitment() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Volunteer Commitment</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          We understand that everyone has different availability and preferences. Here's what you can expect:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className={`${commitment.bgColor} p-6 rounded-lg shadow-md border ${commitment.borderColor} text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm mx-auto">
                {commitment.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{commitment.title}</h3>
              <p className="text-gray-700">{commitment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
