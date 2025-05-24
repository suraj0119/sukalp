import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center">
      {/* Background Image with White Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-section.jpg"
          alt="Children with painted hands forming the map of India - Sukalp Foundation hero image"
          fill
          className="object-cover object-[center_70%]"
          priority
          sizes="100vw"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMEEQAFBhITFCExQf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAHBEAAQQDAQAAAAAAAAAAAAAAAQACAxEhBBIx/9oADAMBAAIRAxEAPwCVtO6Zq9SZlLUVGZyUcIXa0SIGLm/o3I9YUwxjGKnOOHFrDZUdBaW5Xf/Z"
        />
        {/* White Overlay with Reduced Opacity */}
        <div className="absolute inset-0 bg-white/70 z-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center py-16">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
            <Image
              src="/images/sukalp-logo-circular.jpeg"
              alt="Sukalp Foundation Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Empowering <span className="text-orange-500">communities</span>, igniting{" "}
          <span className="text-cyan-600">change</span>.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-700">
          Sukalp Foundation is a volunteer-driven nonprofit working across key sectors like education, health,
          environment, and skill development to uplift and empower marginalized communities. We believe in the power of
          volunteerism, where every individual has the potential to contribute towards building a brighter future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Contribute Now
          </Link>
          <Link
            href="/contact-us"
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </div>

      {/* Attribution overlay */}
      <div className="absolute bottom-2 right-2 z-20">
        <p className="text-xs text-gray-600">
          <span className="sr-only">Image attribution: </span>
          Seva is the only resolution
        </p>
      </div>
    </section>
  )
}
