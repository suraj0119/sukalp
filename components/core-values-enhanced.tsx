import { Check } from "lucide-react"
import Image from "next/image"

interface CoreValue {
  name: string
  description: string
  iconPath: string
}

export function CoreValuesEnhanced() {
  const coreValues: CoreValue[] = [
    {
      name: "SUCHITA",
      description:
        "Suggests the moral or ethical purity, adhering to integrity, righteousness, and ethical ways of working that are considered.",
      iconPath: "/people-icon.png",
    },
    {
      name: "SANGATHAN",
      description:
        "Implies mobilizing and structuring community members, resources and efforts into a coherent whole, to address common issues and enhance social welfare.",
      iconPath: "/community-icon.png",
    },
    {
      name: "SASHAKTIKARAN",
      description:
        "Means empowerment and here it implies the idea of building capabilities and enhancing skills and abilities to form a competent society.",
      iconPath: "/empowerment-icon.png",
    },
    {
      name: "SAMARPAN",
      description: "Means a complete devotion to the greater cause which indicates our deep and unwavering commitment.",
      iconPath: "/handshake-icon.png",
    },
    {
      name: "SARTHAK",
      description:
        "Implies meaningfulness and describes efforts that bring to the successful achievement of a purpose.",
      iconPath: "/placeholder.svg?key=sqeh1",
    },
    {
      name: "SAMMAN",
      description:
        "Is the due respect and honor of one's abilities and contributions; fostering the mutual respect while maintaining the dignity.",
      iconPath: "/placeholder.svg?key=83e6r",
    },
    {
      name: "SAMBHAAV",
      description:
        "Depicts our idea of equal-mindedness or impartiality while treating all situations, people and outcomes with an equal mind.",
      iconPath: "/balance-scale-icon.png",
    },
    {
      name: "SAMANYABHAVA",
      description:
        "Means having a universal state of mind by keeping equal and same feelings unaffected by individual differences.",
      iconPath: "/meditation-icon.png",
    },
    {
      name: "VISHWAS",
      description:
        "Means trust, implying the collective belief in the integrity and ability of an organization and its people.",
      iconPath: "/placeholder.svg?key=1pprn",
    },
  ]

  return (
    <section className="py-16 bg-[#111827] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#ff6b35]">Core</span> <span className="text-white">Values</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 flex flex-col h-full border border-gray-700 transform transition-all duration-300 hover:border-[#ff6b35] hover:shadow-lg hover:shadow-[#ff6b35]/10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mr-4 shadow-md">
                    <Image
                      src={value.iconPath || "/placeholder.svg"}
                      alt={value.name}
                      width={40}
                      height={40}
                      className="text-gray-800"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#ff6b35]">{value.name}</h3>
                </div>
                <div className="flex mt-2">
                  <div className="mr-2 mt-1 flex-shrink-0">
                    <div className="w-5 h-5 bg-[#ff6b35] rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-gray-800" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
