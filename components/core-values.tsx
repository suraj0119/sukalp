import { Check } from "lucide-react"

interface CoreValue {
  name: string
  description: string
  icon: string
}

export function CoreValues() {
  const coreValues: CoreValue[] = [
    {
      name: "SUCHITA",
      description:
        "Suggests the moral or ethical purity, adhering to integrity, righteousness, and ethical ways of working that are considered.",
      icon: "👥",
    },
    {
      name: "SANGATHAN",
      description:
        "Implies mobilizing and structuring community members, resources and efforts into a coherent whole, to address common issues and enhance social welfare.",
      icon: "🔄",
    },
    {
      name: "SASHAKTIKARAN",
      description:
        "Means empowerment and here it implies the idea of building capabilities and enhancing skills and abilities to form a competent society.",
      icon: "💪",
    },
    {
      name: "SAMARPAN",
      description: "Means a complete devotion to the greater cause which indicates our deep and unwavering commitment.",
      icon: "🤝",
    },
    {
      name: "SARTHAK",
      description:
        "Implies meaningfulness and describes efforts that bring to the successful achievement of a purpose.",
      icon: "🎯",
    },
    {
      name: "SAMMAN",
      description:
        "Is the due respect and honor of one's abilities and contributions; fostering the mutual respect while maintaining the dignity.",
      icon: "🙏",
    },
    {
      name: "SAMBHAAV",
      description:
        "Depicts our idea of equal-mindedness or impartiality while treating all situations, people and outcomes with an equal mind.",
      icon: "⚖️",
    },
    {
      name: "SAMANYABHAVA",
      description:
        "Means having a universal state of mind by keeping equal and same feelings unaffected by individual differences.",
      icon: "🧘",
    },
    {
      name: "VISHWAS",
      description:
        "Means trust, implying the collective belief in the integrity and ability of an organization and its people.",
      icon: "🤲",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-yellow-400">Core</span> Values
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="bg-teal-800 bg-opacity-30 rounded-lg p-6 flex flex-col h-full transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold">{value.name}</h3>
                </div>
                <div className="flex mt-2">
                  <div className="mr-2 mt-1 flex-shrink-0">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-teal-800" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-100">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
