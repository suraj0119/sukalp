import Image from "next/image"

interface HeroSectionProps {
  title: string
  description?: string
  imageSrc: string
  imageAlt: string
  height?: string
}

export function HeroSection({
  title,
  description,
  imageSrc,
  imageAlt,
  height = "h-[300px] md:h-[400px]",
}: HeroSectionProps) {
  return (
    <section className={`relative w-full ${height} flex items-center justify-center`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg md:text-xl max-w-3xl mx-auto">{description}</p>}
      </div>
    </section>
  )
}
