"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "My monthly contribution to Sukalp Foundation gives me immense satisfaction knowing that I'm contributing to sustainable change. The regular updates I receive show exactly how my support is making a difference.",
    name: "Priya Sharma",
    role: "Regular Contributor since 2020",
    image: "/indian-woman-professional-headshot.png",
  },
  {
    quote:
      "As a corporate partner, we've seen firsthand how effectively Sukalp Foundation utilizes contributions. Their transparent reporting and measurable impact metrics give us confidence that our CSR funds are creating real change.",
    name: "Rajesh Mehta",
    role: "CSR Head, Tech Innovations Ltd",
    image: "/indian-man-headshot.png",
  },
  {
    quote:
      "I started with a small monthly contribution, but seeing the impact reports and success stories inspired me to increase my contribution. It's rewarding to be part of such meaningful work.",
    name: "Ananya Gupta",
    role: "Recurring Contributor",
    image: "/placeholder.svg?key=trx93",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contributor Stories</h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="text-orange-500 text-6xl font-serif mb-4 text-center">"</div>
            <blockquote className="text-lg text-center mb-6">{testimonials[activeIndex].quote}</blockquote>
            <div className="flex items-center justify-center">
              <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={`${testimonials[activeIndex].name} - ${testimonials[activeIndex].role}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                  quality={80}
                />
              </div>
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
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
