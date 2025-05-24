export function MissionVisionObjectives() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Mission, Vision & Objectives</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-orange-500">Mission</h3>
            <p className="text-gray-700">
              To mobilize volunteers from diverse backgrounds to address social issues through innovative projects,
              advocacy, and partnerships.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-orange-500">Vision</h3>
            <p className="text-gray-700">
              To foster a global community empowered by volunteerism for sustainable and positive change by cultivating
              a culture of inclusiveness.
            </p>
          </div>

          {/* Objectives */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-orange-500">Objectives</h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li>
                Promote education and establish institutions for better access to learning, especially for the
                economically weaker sections of society
              </li>
              <li>Encourage skill-based training and create sustainable livelihood opportunities</li>
              <li>
                Promote charitable initiatives such as medical camps, skill development programs, and educational
                institutions for marginalized communities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
