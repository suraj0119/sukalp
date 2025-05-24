import { BookOpen, Users, Lightbulb } from "lucide-react"

const opportunities = [
  {
    title: "Education Support",
    description:
      "Help children learn and grow by supporting our educational programs. Teach, mentor, or assist in various educational activities.",
    icon: <BookOpen className="h-8 w-8 text-orange-500" />,
    tasks: [
      "Teaching assistance in Shiksha Vatika",
      "Scholarship exam preparation for Unnati",
      "Developing educational content",
    ],
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    title: "Community Outreach",
    description:
      "Connect with communities to raise awareness, organize events, and facilitate workshops on various social and health issues.",
    icon: <Users className="h-8 w-8 text-cyan-500" />,
    tasks: ["Health awareness campaigns for Bodh", "Community mobilization", "Event organization and management"],
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  {
    title: "Skill-Based Volunteering",
    description: "Contribute your professional skills to strengthen our organization and programs.",
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    tasks: [
      "Content creation and social media",
      "Photography and videography",
      "Graphic design and animation",
      "IT support and web development",
    ],
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
]

export function VolunteerOpportunities() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Volunteering Opportunities</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Discover how you can contribute your skills and time to make a meaningful difference
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className={`${opportunity.bgColor} p-6 rounded-lg shadow-md border ${opportunity.borderColor} transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto">
                {opportunity.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{opportunity.title}</h3>
              <p className="text-gray-700 mb-4 text-center">{opportunity.description}</p>
              <ul className="space-y-2">
                {opportunity.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700">{task}</span>
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
