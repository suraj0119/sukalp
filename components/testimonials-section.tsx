"use client"

import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Sukalp Foundation's initiatives have not only changed my life but also made me realize the power of youth-led change. The volunteer opportunities have given me a chance to contribute to society in meaningful ways.",
    name: "Ayesha Khan",
    role: "Volunteer",
    image: "/images/testimonials/ayesha-khan.jpeg"
  },
  {
    quote:
      "Sukalp's health camps and educational initiatives have directly impacted my community. I am proud to be a part of this transformative journey.",
    name: "Rajesh Gupta",
    role: "Community Leader",
    image: "/images/testimonials/rajesh-gupta.jpeg"
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Voices of Change</h2>
        <p className="text-center text-gray-600 mb-12">
          Hear from the people whose lives have been transformed through our initiatives
        </p>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white p-8 rounded-lg shadow-md flex gap-4">
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image
                src={testimonials[activeIndex].image || "/placeholder.svg"}
                alt={`${testimonials[activeIndex].name}, ${testimonials[activeIndex].role}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100px, 64px"
                quality={80}
              />
            </div>
            <div>
              <div className="text-orange-500 text-6xl font-serif mb-4 text-center">"</div>
              <blockquote className="text-lg text-center mb-6">{testimonials[activeIndex].quote}</blockquote>
              <div className="text-center">
                <p className="font-bold">{testimonials[activeIndex].name}</p>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-orange-500" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
