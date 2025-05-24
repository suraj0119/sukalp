"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function BodhMobileDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      title: "Awareness Programs",
      description: "Educational sessions on health, environment, and social issues",
      image: "/images/bodh/awareness-program.jpg",
      link: "/initiatives/bodh#awareness",
    },
    {
      title: "Community Outreach",
      description: "Engaging with local communities to create sustainable change",
      image: "/images/bodh/hero-section.jpg",
      link: "/initiatives/bodh#outreach",
    },
    {
      title: "Impact Stories",
      description: "Real stories of transformation and empowerment",
      image: "/images/bodh/impact.jpg",
      link: "/initiatives/bodh#impact",
    },
  ]

  return (
    <div className="pl-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full text-left py-2 text-gray-800 hover:text-orange-500 font-medium"
      >
        Bodh
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="pl-4 space-y-4 mt-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex items-start py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0 mr-3">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="48px"
                  quality={75}
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            </Link>
          ))}

          <Link
            href="/initiatives/bodh"
            className="block py-2 text-orange-500 hover:text-orange-700 text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            View All Bodh Programs →
          </Link>
        </div>
      )}
    </div>
  )
}
