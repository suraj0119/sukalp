import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { NavDropdown } from "@/components/nav-dropdown"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

const description =
  "Sukalp Foundation is a volunteer-driven nonprofit working across key sectors like education, health, environment, and skill development to uplift and empower marginalized communities."

export const metadata: Metadata = {
  title: "Sukalp Foundation - Empowering Communities, Igniting Change",
  description: description,
  keywords: ["nonprofit", "education", "health", "environment", "skill development", "volunteer", "India"],
  authors: [{ name: "Sukalp Foundation" }],
  openGraph: {
    title: "Sukalp Foundation - Empowering Communities, Igniting Change",
    description,
    type: "website",
    locale: "en_IN",
    url: "https://sukalpfoundation.org",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderWithNavigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function HeaderWithNavigation() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Sukalp Foundation Logo"
              width={220}
              height={70}
              className="h-auto w-auto max-h-14 md:max-h-16"
              priority
              quality={90}
            />
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-800 hover:text-orange-500 font-medium">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-800 hover:text-orange-500 font-medium">
              About Us
            </Link>
            <div className="flex space-x-8 items-center">
              <NavDropdown
                title="Our Initiatives"
                items={[
                  { name: "Shiksha Vatika", href: "/initiatives/shiksha-vatika" },
                  { name: "Bodh", href: "/initiatives/bodh" },
                  { name: "Unnati", href: "/initiatives/unnati" },
                  { name: "Sukalp Manthan", href: "/initiatives/sukalp-manthan" },
                  { name: "Tarunonmesh", href: "/initiatives/tarunonmesh" },
                  { name: "Yuva Spark", href: "/initiatives/yuva-spark" },
                ]}
              />
            </div>
            <Link href="/mindfuel" className="text-gray-800 hover:text-orange-500 font-medium">
              MindFuel
            </Link>
            <NavDropdown
              title="Get Involved"
              items={[
                { name: "Contact Us", href: "/contact-us" },
                { name: "Volunteer With Us", href: "/volunteer" },
                { name: "Corporate Partnerships", href: "/partnerships" },
              ]}
            />
          </nav>

          <div className="hidden md:block">
            <Link
              href="/donate"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors"
            >
              Contribute Now
            </Link>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}
