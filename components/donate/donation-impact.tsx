export function ContributionImpact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Your Contribution Creates Impact</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Every contribution you make directly supports our programs and initiatives, creating meaningful change in the
          lives of those we serve.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <p className="text-gray-600">
              Your contribution helps provide quality education to underprivileged children, including school supplies,
              scholarships, and educational programs.
            </p>
            <div className="mt-4">
              <div className="text-sm font-medium text-gray-500">₹1,000 provides:</div>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-1.5 mt-1 text-orange-500">•</span>
                  School supplies for 5 children
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 mt-1 text-orange-500">•</span>
                  Educational materials for a classroom
                </li>
              </ul>
            </div>
          </div>

          {/* Health */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Health</h3>
            </div>
            <p className="text-gray-600">
              Support health initiatives including medical camps, nutrition programs, and health education for
              vulnerable communities.
            </p>
            <div className="mt-4">
              <div className="text-sm font-medium text-gray-500">₹2,500 provides:</div>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-1.5 mt-1 text-orange-500">•</span>
                  Basic health check-ups for 10 children
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 mt-1 text-orange-500">•</span>
                  Nutritional supplements for a month
                </li>
              </ul>
            </div>
          </div>

          {/* Skill Development */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Skill Development</h3>
            </div>
            <p className="text-gray-600">
              Help provide vocational training and skill development programs for youth and women to enhance their
              employability.
            </p>
            <div className="mt-4">
              <div className="text-sm font-medium text-gray-500">₹5,000 provides:</div>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-1.5 mt-1 text-orange-500">•</span>
                  Vocational training for 2 youth
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 mt-1 text-orange-500">•</span>
                  Computer literacy program for a group
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Your contributions are tax-deductible under Section 80G of the Income Tax Act. We provide complete
            transparency in how your funds are utilized.
          </p>
        </div>
      </div>
    </section>
  )
}
