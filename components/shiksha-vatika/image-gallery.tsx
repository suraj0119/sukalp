"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export function ShikshaVatikaGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images: GalleryImage[] = [
    {
      src: "/images/shiksha-vatika/hero-section.jpg",
      alt: "Children engaged in learning activities in a community setting",
      caption: "Our Shiksha Vatika program brings education directly to underserved communities",
    },
    {
      src: "/images/shiksha-vatika/flagship-programs.jpg",
      alt: "Volunteer teaching children in an outdoor setting",
      caption: "Dedicated volunteers provide quality education to children in need",
    },
    {
      src: "/images/shiksha-vatika/why-shiksha-vatika-matters.jpg",
      alt: "Children showing their colorful handprints during a patriotic activity",
      caption: "Building national pride and cultural awareness through creative activities",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % images.length)
    } else {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Shiksha Vatika in Action</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          See how our Shiksha Vatika initiative is making a difference in the lives of children across communities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={85}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity flex items-end">
                <div className="p-4 text-white w-full bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-sm">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="relative h-[80vh] w-[90vw] md:w-[80vw]">
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 80vw"
                quality={90}
              />
            </div>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2 px-4 mx-auto max-w-2xl">
              <p>{images[selectedImage].caption}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
