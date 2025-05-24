"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface NavDropdownProps {
  title: string
  items: {
    name: string
    href: string
  }[]
  mobile?: boolean
}

export function NavDropdown({ title, items, mobile = false }: NavDropdownProps) {
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

  if (mobile) {
    return (
      <div className="pl-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center w-full text-left py-2 text-gray-800 hover:text-orange-500 font-medium"
        >
          {title}
          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && (
          <div className="pl-4 space-y-2 mt-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-800 hover:text-orange-500 font-medium"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
