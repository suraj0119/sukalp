"use client"

import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Error</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Something went wrong</h2>
        <p className="text-lg text-gray-600 mb-8">We apologize for the inconvenience. Please try again later.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-md transition duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
