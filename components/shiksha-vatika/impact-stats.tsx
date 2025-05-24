export function ImpactStats() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-black/30 p-8 rounded-lg text-center border border-gray-700">
            <h3 className="text-4xl font-bold text-orange-500 mb-2">25</h3>
            <p className="text-xl">Volunteers Engaged</p>
          </div>

          <div className="bg-black/30 p-8 rounded-lg text-center border border-gray-700">
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">250</h3>
            <p className="text-xl">Direct Beneficiaries</p>
          </div>

          <div className="bg-black/30 p-8 rounded-lg text-center border border-gray-700">
            <h3 className="text-4xl font-bold text-yellow-300 mb-2">1000</h3>
            <p className="text-xl">Indirect Beneficiaries</p>
          </div>
        </div>
      </div>
    </section>
  )
}
