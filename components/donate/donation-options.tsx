"use client"

import Image from "next/image"

export function DonationOptions() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Support Our Mission</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Bank Details and QR Code */}
          <div className="w-full lg:w-1/3 space-y-8">
            {/* Bank Details Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Bank Transfer Details</h3>
              <div className="space-y-3">
                <p>
                  <span className="font-medium">Account Name:</span> Sukalp Foundation
                </p>
                <p>
                  <span className="font-medium">Account Number:</span> 051494600000681
                </p>
                <p>
                  <span className="font-medium">IFSC Code:</span> YESB0000514
                </p>
                <p>
                  <span className="font-medium">Bank:</span> YES Bank
                </p>
                <p>
                  <span className="font-medium">Branch:</span> East of Kailash, New Delhi
                </p>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Please include your name and contact information in the transfer reference.
              </p>
            </div>

            {/* QR Code Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Scan & Pay</h3>
              <div className="flex flex-col items-center">
                <div className="relative w-64 h-64 mb-4 bg-white rounded-md flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/donate/sukalp-qr-code.jpeg"
                    alt="Sukalp Foundation Payment QR Code"
                    width={256}
                    height={256}
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

            {/* Additional Information */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Need Assistance?</h3>
              <p className="mb-4">
                If you have any questions about contributing or need assistance, please contact us:
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:info@sukalpfoundation.org" className="text-orange-500 hover:underline">
                  info@sukalpfoundation.org
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span> +91 7011645759
              </p>
            </div>
          </div>

          {/* Right Column - Google Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Contribution Form</h3>
              <div className="iframe-container overflow-hidden rounded-md">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSc64iyx-FJQpAlsNnBUurtsY3wUDqnyswfJG4ylJPz4QwjPXw/viewform?embedded=true"
                  width="100%"
                  height={800}
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Sukalp Foundation Contribution Form"
                  className="mx-auto"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
