import { DollarSign, Users, Lightbulb } from "lucide-react"

const opportunities = [
  {
    title: "CSR Partnerships",
    description:
      "Align your CSR goals with our programs to create sustainable impact in education, health, and environment.",
    icon: <DollarSign className="h-8 w-8 text-orange-500" />,
    items: ["Program funding and sponsorship", "Infrastructure development", "Technology and resource support"],
  },
  {
    title: "Employee Engagement",
    description:
      "Engage your employees in meaningful volunteering with skill-sharing opportunities that strengthen team bonds.",
    icon: <Users className="h-8 w-8 text-cyan-500" />,
    items: ["Customized volunteering days", "Skill-based volunteering programs", "Mentorship opportunities"],
  },
  {
    title: "Strategic Initiatives",
    description: "Co-create innovative solutions to social challenges that align with your business expertise.",
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    items: ["Cause-related marketing", "Product innovation", "Research and knowledge partnerships"],
  },
]

export function PartnershipOpportunities() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {opportunity.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{opportunity.title}</h3>
              <p className="text-gray-700 mb-4">{opportunity.description}</p>
              <ul className="space-y-2">
                {opportunity.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
