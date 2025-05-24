"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

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
    question: "What is the minimum commitment for a partnership?",
    answer:
      "We offer flexible partnership options to accommodate different budgets and timeframes. While some of our programs require a minimum commitment of 6 months to create sustainable impact, we also offer shorter-term engagement opportunities.",
  },
  {
    question: "How do you measure and report impact?",
    answer:
      "We use a robust monitoring and evaluation framework to track, measure and report outcomes. Our approach includes quantitative and qualitative metrics, stakeholder feedback, and case studies. We provide comprehensive impact reports customized to align with your specific goals and KPIs.",
  },
  {
    question: "Can partnerships be customized to our company's specific focus areas?",
    answer:
      "We take a collaborative approach to design partnerships that align with your company's CSR priorities, skill sets, and available resources. We work closely with you to create a tailored program that addresses specific social issues while leveraging your unique strengths.",
  },
  {
    question: "How do you handle branding and communications?",
    answer:
      "We develop a clear communications approach for each partnership, ensuring appropriate recognition while maintaining ethical standards. Our team can help plan and execute joint communications, CSR stories, and co-branded materials, with all plans reviewed and approved by both parties.",
  },
]

export function PartnershipFAQ() {
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
            Have more questions about partnering with Sukalp Foundation? Please{" "}
            <Link href="/contact-us" className="text-orange-500 hover:text-orange-700">
              contact us
            </Link>{" "}
            to schedule a consultation with our partnerships team.
          </p>
        </div>
      </div>
    </section>
  )
}
