"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface Partner {
  name: string
  logo: string
  website?: string
}

export function PartnerOrganizations() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const partners: Partner[] = [
    {
      name: "REACHA",
      logo: "/images/partners/reacha-logo.png",
      website: "https://reacha.org",
    },
    {
      name: "Lakshyaa",
      logo: "/images/partners/lakshyaa-logo.png",
      website: "https://lakshyaa.org",
    },
    {
      name: "Agarwal Packers & Movers Ltd.",
      logo: "/images/partners/apml-logo.png",
      website: "https://agarwalpackers.com",
    },
    {
      name: "Patanjali Wellness",
      logo: "/images/partners/patanjali-logo.png",
      website: "https://patanjaliayurved.org",
    },
    // Duplicate partners to create continuous scrolling effect
    {
      name: "REACHA",
      logo: "/images/partners/reacha-logo.png",
      website: "https://reacha.org",
    },
    {
      name: "Lakshyaa",
      logo: "/images/partners/lakshyaa-logo.png",
      website: "https://lakshyaa.org",
    },
    {
      name: "Agarwal Packers & Movers Ltd.",
      logo: "/images/partners/apml-logo.png",
      website: "https://agarwalpackers.com",
    },
    {
      name: "Patanjali Wellness",
      logo: "/images/partners/patanjali-logo.png",
      website: "https://patanjaliayurved.org",
    },
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    // Only animate if there's enough content to scroll
    if (scrollWidth <= clientWidth) return

    let scrollPosition = 0
    const speed = 0.5 // pixels per frame

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += speed

      // Reset position when we've scrolled through half the duplicated items
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      requestAnimationFrame(scroll)
    }

    const animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Partner Organizations</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          We collaborate with these amazing organizations to create meaningful impact across communities.
        </p>

        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex overflow-x-hidden" style={{ WebkitOverflowScrolling: "touch" }}>
            <div className="flex space-x-8 py-4">
              {partners.map((partner, index) => (
                <a
                  key={`${partner.name}-${index}`}
                  href={partner.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-[170px] w-[200px] flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={200}
                      height={170}
                      className="object-contain"
                      priority={index < 4} // Prioritize loading the first set of images
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Gradient overlays for better visual effect */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}
