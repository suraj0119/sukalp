"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { z } from "zod"

// Define validation schema
const formSchema = z.object({
  contributionType: z.enum(["one-time", "monthly", "quarterly", "annually"]),
  amount: z.string().min(1, { message: "Please select or enter an amount" }),
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  pincode: z.string().min(6, { message: "Please enter a valid PIN code" }),
  panNumber: z.string().optional(),
  message: z.string().optional(),
  paymentMethod: z.enum(["online", "bank-transfer", "check"]).optional(),
})

type FormData = z.infer<typeof formSchema>

const predefinedAmounts = ["1000", "2500", "5000", "10000"]

export function ContributionForm() {
  const [formData, setFormData] = useState<FormData>({
    contributionType: "one-time",
    amount: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    panNumber: "",
    message: "",
    paymentMethod: "online",
  })

  const [customAmount, setCustomAmount] = useState("")
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [showQrCode, setShowQrCode] = useState(false)

  const handleContributionTypeChange = (type: "one-time" | "monthly" | "quarterly" | "annually") => {
    setFormData((prev) => ({ ...prev, contributionType: type }))
  }

  const handleAmountSelect = (amount: string) => {
    setFormData((prev) => ({ ...prev, amount }))
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "")
    setCustomAmount(value)
    setFormData((prev) => ({ ...prev, amount: value }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handlePaymentMethodChange = (method: "online" | "bank-transfer" | "check") => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }))
    if (method === "online") {
      setShowQrCode(true)
    } else {
      setShowQrCode(false)
    }
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
        contributionType: "one-time",
        amount: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        panNumber: "",
        message: "",
        paymentMethod: "online",
      })
      setCustomAmount("")
      setShowQrCode(false)

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
        <h2 className="text-3xl font-bold text-center mb-4">Support Our Mission</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Your contribution helps us create lasting change in communities across India. Every contribution, regardless
          of size, makes a meaningful difference in the lives of those we serve.
        </p>

        {submitSuccess && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 max-w-3xl mx-auto"
            role="alert"
          >
            <p className="font-medium">Thank you for your generous contribution!</p>
            <p>Your support will help us make a meaningful impact in the communities we serve.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Contribution Type</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  formData.contributionType === "one-time"
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => handleContributionTypeChange("one-time")}
              >
                One-time
              </button>
              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  formData.contributionType === "monthly"
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => handleContributionTypeChange("monthly")}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  formData.contributionType === "quarterly"
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => handleContributionTypeChange("quarterly")}
              >
                Quarterly
              </button>
              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  formData.contributionType === "annually"
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => handleContributionTypeChange("annually")}
              >
                Annually
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Contribution Amount</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`py-2 px-4 rounded-md border ${
                    formData.amount === amount
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => handleAmountSelect(amount)}
                >
                  ₹{amount}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
              <input
                type="text"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className={`w-full pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.amount ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.amount && <p className="mt-1 text-sm text-red-600">{errors.amount}</p>}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Payment Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  formData.paymentMethod === "online"
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => handlePaymentMethodChange("online")}
              >
                Online Payment (UPI/QR)
              </button>
              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  formData.paymentMethod === "bank-transfer"
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => handlePaymentMethodChange("bank-transfer")}
              >
                Bank Transfer
              </button>
              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  formData.paymentMethod === "check"
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => handlePaymentMethodChange("check")}
              >
                Check/Cheque
              </button>
            </div>

            {showQrCode && (
              <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-center mb-2">Scan & Pay</h4>
                <div className="flex flex-col items-center">
                  <div className="relative w-64 h-64 mb-3">
                    <Image
                      src="/images/donate/payment-qr-code.jpeg"
                      alt="Sukalp Foundation Payment QR Code"
                      fill
                      sizes="(max-width: 768px) 100vw, 256px"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mb-1">UPI ID: yepay.bizacc2023@yesbank.in</p>
                  <p className="text-sm text-gray-600 text-center">
                    Scan this QR code with any UPI app (Google Pay, PhonePe, Paytm, etc.)
                  </p>
                </div>
              </div>
            )}

            {formData.paymentMethod === "bank-transfer" && (
              <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2">Bank Transfer Details</h4>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Account Name:</span> Sukalp Foundation
                  </p>
                  <p>
                    <span className="font-medium">Account Number:</span> 123456789012
                  </p>
                  <p>
                    <span className="font-medium">IFSC Code:</span> YESB0000001
                  </p>
                  <p>
                    <span className="font-medium">Bank:</span> Yes Bank
                  </p>
                  <p>
                    <span className="font-medium">Branch:</span> Mumbai Main Branch
                  </p>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Please include your name and phone number in the transfer reference for identification.
                </p>
              </div>
            )}

            {formData.paymentMethod === "check" && (
              <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2">Check/Cheque Payment</h4>
                <p className="mb-2">
                  Please make your check payable to: <span className="font-medium">Sukalp Foundation</span>
                </p>
                <p className="mb-2">Mail to:</p>
                <address className="not-italic">
                  Sukalp Foundation
                  <br />
                  123 Main Street
                  <br />
                  Mumbai, Maharashtra 400001
                  <br />
                  India
                </address>
                <p className="mt-3 text-sm text-gray-600">
                  Please include your name, phone number, and email on the check for identification.
                </p>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
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
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
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
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Billing Address</h3>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address*
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City*
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State*
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
              </div>

              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                  PIN Code*
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.pincode ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Additional Information</h3>
            <div className="mb-4">
              <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700 mb-1">
                PAN Number (for tax benefits)
              </label>
              <input
                type="text"
                id="panNumber"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Share why you're contributing or any specific program you'd like to support"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-colors disabled:opacity-70 text-lg"
            >
              {isSubmitting ? "Processing..." : "Contribute Now"}
            </button>
            <p className="mt-4 text-sm text-gray-600">
              Your contribution is secure and encrypted. You will receive a receipt via email.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
