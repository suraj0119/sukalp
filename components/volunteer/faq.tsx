"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-orange-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-orange-500" />
        )}
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
    </div>
  )
}

const faqs = [
  {
    question: "Do I need specific qualifications to volunteer?",
    answer:
      "Most of our volunteer roles don't require specific qualifications, just enthusiasm and commitment. For specialized roles like teaching or counseling, relevant qualifications and experience may be beneficial. Our application process will help determine the best fit for your skills and interests.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "Our volunteer opportunities offer flexible time commitments. You can choose to volunteer for one-time events, weekly commitments, or project-based engagements. We work with you to find a schedule that fits your availability.",
  },
  {
    question: "Can I volunteer remotely?",
    answer:
      "Yes, we offer remote volunteering opportunities, especially for roles involving content creation, social media management, and digital marketing. Other roles may require in-person presence.",
  },
  {
    question: "Will I receive training?",
    answer:
      "Yes, all volunteers receive an orientation and role-specific training. We provide the necessary guidance, knowledge and resources needed to be effective in your volunteer role.",
  },
]

export function VolunteerFAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <p className="text-center mt-8 text-gray-600">
            Have questions about volunteering with Sukalp Foundation? Find answers to commonly asked questions below.
          </p>
        </div>
      </div>
    </section>
  )
}
