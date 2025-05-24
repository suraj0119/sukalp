export function ImpactSection() {
  return (
    <section className="py-16 bg-gray-900 text-white relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2">OUR IMPACT</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>

        <h3 className="text-2xl font-semibold text-center mb-12">Lives Impacted</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/30 p-8 rounded-lg text-center border border-gray-700">
            <h4 className="text-4xl font-bold text-yellow-300 mb-4">2500+</h4>
            <p className="text-gray-300">Indirect Beneficiaries from communities</p>
          </div>

          <div className="bg-black/30 p-8 rounded-lg text-center border border-gray-700">
            <h4 className="text-4xl font-bold text-cyan-400 mb-4">250+</h4>
            <p className="text-gray-300">Students directly impacted</p>
          </div>

          <div className="bg-black/30 p-8 rounded-lg text-center border border-gray-700">
            <h4 className="text-4xl font-bold text-orange-500 mb-4">25+</h4>
            <p className="text-gray-300">Volunteers actively engaged in driving change</p>
          </div>
        </div>
      </div>
    </section>
  )
}
