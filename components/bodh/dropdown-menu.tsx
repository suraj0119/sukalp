"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function BodhDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-800 hover:text-orange-500 font-medium"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Bodh
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-80 md:w-96 bg-white rounded-md shadow-lg py-1 z-10">
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Bodh Initiative</h3>
            <p className="text-sm text-gray-600 mb-4">
              Empowering communities through knowledge, awareness, and informed action
            </p>

            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="flex items-start p-2 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0 mr-3">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100">
              <Link
                href="/initiatives/bodh"
                className="text-orange-500 hover:text-orange-700 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                View All Bodh Programs →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
