"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"
import { NavDropdown } from "./nav-dropdown"
import Image from "next/image"

const initiativeItems = [
  { name: "Shiksha Vatika", href: "/initiatives/shiksha-vatika" },
  { name: "Bodh", href: "/initiatives/bodh" },
  { name: "Unnati", href: "/initiatives/unnati" },
  { name: "Sukalp Manthan", href: "/initiatives/sukalp-manthan" },
  { name: "Tarunonmesh", href: "/initiatives/tarunonmesh" },
  { name: "Yuva Spark", href: "/initiatives/yuva-spark" },
]

const getInvolvedItems = [
  { name: "Contact Us", href: "/contact-us" },
  { name: "Volunteer With Us", href: "/volunteer" },
  { name: "Corporate Partnerships", href: "/partnerships" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-20 p-4">
          <div className="mb-4 flex justify-center">
            <Image
              src="/logo.png"
              alt="Sukalp Foundation Logo"
              width={180}
              height={60}
              className="h-auto w-auto max-h-12"
            />
          </div>
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-800 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-800 hover:text-orange-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <NavDropdown title="Our Initiatives" items={initiativeItems} mobile={true} />
            <Link
              href="/mindfuel"
              className="text-gray-800 hover:text-orange-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              MindFuel
            </Link>
            <NavDropdown title="Get Involved" items={getInvolvedItems} mobile={true} />
            <Link
              href="/donate"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Contribute Now
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
