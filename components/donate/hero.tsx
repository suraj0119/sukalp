export function DonateHero() {
  return (
    <section
      className="relative w-full h-[500px] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1F2937" }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Make a Difference Today</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
          Your support helps us create lasting change in the lives of children and communities across India
        </p>
        <div className="bg-black/30 backdrop-blur-sm py-4 px-6 rounded-lg inline-block">
          <p className="text-xl font-semibold">
            Every contribution, no matter how small, brings hope and opportunity to those who need it most
          </p>
        </div>
      </div>
    </section>
  )
}
