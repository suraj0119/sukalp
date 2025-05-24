export function ImpactStats() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Impact of Unnati</h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Through our Unnati initiative, we have been able to create significant positive impact on students'
          educational journeys.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-black/30 p-6 rounded-lg text-center border border-gray-700">
            <h3 className="text-4xl font-bold text-orange-500 mb-2">500+</h3>
            <p className="text-gray-300">Students prepared for scholarships</p>
          </div>

          <div className="bg-black/30 p-6 rounded-lg text-center border border-gray-700">
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">75%</h3>
            <p className="text-gray-300">Success rate in scholarship exams</p>
          </div>

          <div className="bg-black/30 p-6 rounded-lg text-center border border-gray-700">
            <h3 className="text-4xl font-bold text-yellow-300 mb-2">₹50L+</h3>
            <p className="text-gray-300">Scholarship funds secured</p>
          </div>

          <div className="bg-black/30 p-6 rounded-lg text-center border border-gray-700">
            <h3 className="text-4xl font-bold text-green-400 mb-2">30%</h3>
            <p className="text-gray-300">Reduction in dropout rates</p>
          </div>
        </div>
      </div>
    </section>
  )
}
