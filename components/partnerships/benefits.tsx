import { Heart, Award, Users, BarChart3 } from "lucide-react"

const benefits = [
  {
    title: "Social Impact",
    description: "Create measurable positive change in communities through our evidence-based programs.",
    icon: <Heart className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Brand Enhancement",
    description: "Strengthen your brand reputation and demonstrate your commitment to social responsibility.",
    icon: <Award className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Employee Engagement",
    description:
      "Boost employee morale, retention, and skill development through meaningful volunteering opportunities.",
    icon: <Users className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Transparent Reporting",
    description: "Receive detailed impact reports and metrics to share with your stakeholders and demonstrate ROI.",
    icon: <BarChart3 className="h-6 w-6 text-orange-500" />,
  },
]

export function PartnershipBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Benefits for Corporate Partners</h2>
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
      </div>
    </section>
  )
}
