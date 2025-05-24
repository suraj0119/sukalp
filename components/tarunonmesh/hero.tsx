import Image from "next/image"

export function TarunonmeshHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tarunonmesh/hero-section.jpeg"
          alt="Young students participating in Tarunonmesh activities - Youth development program"
          fill
          className="object-cover object-center brightness-50"
          priority
          sizes="100vw"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMEEQAFBhITFCExQf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAHBEAAQQDAQAAAAAAAAAAAAAAAQACAxEhBBIx/9oADAMBAAIRAxEAPwCVtO6Zq9SZlLUVGZyUcIXa0SIGLm/o3I9YUwxjGKnOOHFrDZUdBaW5Xf/Z"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tarunonmesh</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Nurturing the next generation of leaders through education, mentorship, and experiential learning
        </p>
      </div>
    </section>
  )
}
