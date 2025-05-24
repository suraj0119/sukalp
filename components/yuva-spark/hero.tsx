import Image from "next/image"

export function YuvaSparkHero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/yuva-spark/hero-new.jpeg"
          alt="Yuva Spark participants gathered in front of a brick building, showcasing youth engagement and community building"
          fill
          className="object-cover object-center brightness-75"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABBAICAwAAAAAAAAAAAAABAAIDBAUREiEGMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABsRAAICAwEAAAAAAAAAAAAAAAECAAMEESEx/9oADAMBAAIRAxEAPwCnxuJt5K9LJYqMZI2Muc97tAD0P3pERAcmjqZzUbJlRQqgfTsREqTP/9k="
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Yuva Spark</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Igniting the potential of youth through creative expression, social innovation, and civic engagement
        </p>
      </div>
    </section>
  )
}
