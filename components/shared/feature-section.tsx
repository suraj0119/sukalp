import Image from "next/image"

interface FeatureSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition?: "left" | "right"
  bgColor?: string
}

export function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  bgColor = "bg-white",
}: FeatureSectionProps) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className={`order-2 ${imagePosition === "left" ? "md:order-2" : "md:order-1"}`}>
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <div className="text-gray-700">{typeof description === "string" ? <p>{description}</p> : description}</div>
          </div>

          <div className={`order-1 ${imagePosition === "left" ? "md:order-1" : "md:order-2"} flex justify-center`}>
            <div className="relative h-64 w-full md:h-80 md:w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
