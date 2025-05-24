const objectives = [
  {
    title: "Facilitate Cross-Sector Dialogue",
    description:
      "To provide a common platform where NGOs, corporates, academia, and policymakers can engage in meaningful dialogue, exchange ideas, and understand each other's perspectives to address complex societal challenges.",
  },
  {
    title: "Strengthen Collaboration & Partnerships",
    description:
      "To create opportunities for strategic alliances between grassroots organizations and institutional bodies (CSR, academia, government) that can lead to impactful projects through pooled resources and collective strengths.",
  },
  {
    title: "Promote Knowledge Sharing & Innovation",
    description:
      "To enable sharing of best practices, indigenous solutions, research insights, and grassroots innovations that can be adapted or scaled in different geographies and contexts.",
  },
  {
    title: "Bridge Gaps in Policy & Practice",
    description:
      "To identify gaps between what policies prescribe and what is implemented at ground level, and to co-create actionable pathways that ensure better alignment between intention and execution.",
  },
  {
    title: "Encourage Problem-Solving Mindsets",
    description:
      "To foster a culture of critical thinking and solution-oriented dialogue by analyzing real-world issues and brainstorming sustainable, scalable interventions.",
  },
  {
    title: "Support Grassroots Changemakers",
    description:
      "To highlight and support the work of community-based organizations, especially from remote and underserved regions, and provide them visibility, mentorship, and potential avenues for funding or technical support.",
  },
  {
    title: "Integrate Youth, Research & Field Realities",
    description:
      "To engage young minds, researchers, and field practitioners together so that fresh academic insights can be aligned with practical implementation strategies and real-time community needs.",
  },
  {
    title: "Align with National Missions & SDGs",
    description:
      "To connect grassroots and organizational efforts with national initiatives (like Jal Jeevan Mission, Poshan Abhiyan, Digital Bharat) and global frameworks such as the Sustainable Development Goals (SDGs), ensuring long-term relevance and impact.",
  },
  {
    title: "Build a Repository of Actionable Ideas",
    description:
      "To compile the takeaways, proposed solutions, and collaborative models from each edition into a living knowledge repository that can guide future projects, research, and collaborations.",
  },
  {
    title: "Sustain a Cycle of Learning & Impact",
    description:
      "To ensure that each year's MANTHAN builds upon the outcomes of the previous year, evolving continuously while sustaining the momentum of change, learning, and impact across Bharat.",
  },
]

export function KeyObjectives() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Key Features (Objectives)</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Sukalp Manthan aims to achieve the following objectives through collaborative efforts
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {objectives.map((objective, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{objective.title}</h3>
                  <p className="text-gray-700">{objective.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
