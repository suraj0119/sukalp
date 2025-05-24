"use client"

import type React from "react"

import { useState } from "react"
import { z } from "zod"

// Define validation schema
const formSchema = z.object({
  partnershipType: z.enum(["csr", "employee", "strategic"], {
    required_error: "Please select partnership type",
  }),
  companyName: z.string().min(2, { message: "Company name is required" }),
  industry: z.string().min(2, { message: "Industry is required" }),
  contactPerson: z.string().min(2, { message: "Contact person name is required" }),
  designation: z.string().min(2, { message: "Designation is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  csrFocusArea: z.string().optional(),
  approximateBudget: z.string().min(1, { message: "Please select an approximate budget range" }),
  partnershipGoals: z.string().min(10, { message: "Please provide your partnership goals and expectations" }),
})

type FormData = z.infer<typeof formSchema>

export function PartnershipInquiry() {
  const [formData, setFormData] = useState<FormData>({
    partnershipType: "csr",
    companyName: "",
    industry: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    csrFocusArea: "",
    approximateBudget: "",
    partnershipGoals: "",
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleRadioChange = (value: "csr" | "employee" | "strategic") => {
    setFormData((prev) => ({ ...prev, partnershipType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      // Validate form data
      const validatedData = formSchema.parse(formData)

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Form submitted:", validatedData)
      setSubmitSuccess(true)

      // Reset form after successful submission
      setFormData({
        partnershipType: "csr",
        companyName: "",
        industry: "",
        contactPerson: "",
        designation: "",
        email: "",
        phone: "",
        csrFocusArea: "",
        approximateBudget: "",
        partnershipGoals: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more usable format
        const fieldErrors: Partial<Record<keyof FormData, string>> = {}
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof FormData
          fieldErrors[field] = err.message
        })
        setErrors(fieldErrors)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Partnership Inquiry</h2>

        {submitSuccess && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 max-w-3xl mx-auto"
            role="alert"
          >
            <p>
              Thank you for your interest in partnering with us! Our team will contact you shortly to discuss next
              steps.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="partnershipType"
                  checked={formData.partnershipType === "csr"}
                  onChange={() => handleRadioChange("csr")}
                  className="mr-2"
                />
                CSR Partnership
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="partnershipType"
                  checked={formData.partnershipType === "employee"}
                  onChange={() => handleRadioChange("employee")}
                  className="mr-2"
                />
                Employee Engagement
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="partnershipType"
                  checked={formData.partnershipType === "strategic"}
                  onChange={() => handleRadioChange("strategic")}
                  className="mr-2"
                />
                Strategic Initiative
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.companyName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your company name"
              />
              {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                Industry
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.industry ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your industry"
              />
              {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Person
              </label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.contactPerson ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your name"
              />
              {errors.contactPerson && <p className="mt-1 text-sm text-red-600">{errors.contactPerson}</p>}
            </div>

            <div>
              <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.designation ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your role"
              />
              {errors.designation && <p className="mt-1 text-sm text-red-600">{errors.designation}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your email address"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your phone number"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
          </div>

          {formData.partnershipType === "csr" && (
            <div className="mb-6">
              <label htmlFor="csrFocusArea" className="block text-sm font-medium text-gray-700 mb-1">
                CSR Focus Areas
              </label>
              <select
                id="csrFocusArea"
                name="csrFocusArea"
                value={formData.csrFocusArea}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.csrFocusArea ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select primary focus area</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Environment">Environment</option>
                <option value="Skill Development">Skill Development</option>
                <option value="Women Empowerment">Women Empowerment</option>
                <option value="Rural Development">Rural Development</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="approximateBudget" className="block text-sm font-medium text-gray-700 mb-1">
              Approximate Budget Range
            </label>
            <select
              id="approximateBudget"
              name="approximateBudget"
              value={formData.approximateBudget}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.approximateBudget ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select budget range</option>
              <option value="Under ₹5 Lakhs">Under ₹5 Lakhs</option>
              <option value="₹5 Lakhs - ₹10 Lakhs">₹5 Lakhs - ₹10 Lakhs</option>
              <option value="₹10 Lakhs - ₹25 Lakhs">₹10 Lakhs - ₹25 Lakhs</option>
              <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
              <option value="Above ₹50 Lakhs">Above ₹50 Lakhs</option>
              <option value="To be discussed">To be discussed</option>
            </select>
            {errors.approximateBudget && <p className="mt-1 text-sm text-red-600">{errors.approximateBudget}</p>}
          </div>

          <div className="mb-8">
            <label htmlFor="partnershipGoals" className="block text-sm font-medium text-gray-700 mb-1">
              Partnership Goals & Expectations
            </label>
            <textarea
              id="partnershipGoals"
              name="partnershipGoals"
              value={formData.partnershipGoals}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.partnershipGoals ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Tell us about your CSR goals, expectations, and any specific requirements"
            />
            {errors.partnershipGoals && <p className="mt-1 text-sm text-red-600">{errors.partnershipGoals}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-colors disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
