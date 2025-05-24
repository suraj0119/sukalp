"use client"

import type React from "react"

import Image from "next/image"
import { motion } from "framer-motion"

interface StatItem {
  value: string
  label: string
  color?: string
  icon?: React.ReactNode
}

interface ImpactStatsProps {
  title?: string
  description?: string
  stats: StatItem[]
  imageSrc?: string
  imageAlt?: string
  columns?: number
  className?: string
}

export function ImpactStats({
  title = "Our Impact",
  description,
  stats,
  imageSrc,
  imageAlt = "Impact statistics visualization",
  columns = 3,
  className = "",
}: ImpactStatsProps) {
  return (
    <section className={`py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            {title}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-orange-500 rounded-full"></span>
          </h2>
          {description && <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">{description}</p>}
        </div>

        <div
          className={`grid grid-cols-1 gap-8 ${
            imageSrc ? "lg:grid-cols-2 items-center" : `md:grid-cols-${Math.min(columns, stats.length)}`
          } max-w-6xl mx-auto`}
        >
          {imageSrc && (
            <div className="flex justify-center">
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  loading="lazy"
                />
              </div>
            </div>
          )}

          <div
            className={`grid grid-cols-1 ${
              stats.length > 1 ? `sm:grid-cols-${Math.min(columns, stats.length)}` : ""
            } gap-6`}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/30 p-8 rounded-xl text-center border border-gray-700 shadow-lg hover:shadow-orange-500/20 transition-shadow duration-300 flex flex-col items-center"
              >
                {stat.icon && <div className="mb-4 text-4xl">{stat.icon}</div>}
                <h3 className={`text-4xl md:text-5xl font-bold ${stat.color || "text-orange-500"} mb-3`}>
                  {stat.value}
                </h3>
                <p className="text-lg text-gray-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
