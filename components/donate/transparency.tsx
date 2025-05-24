export function Transparency() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Commitment to Transparency</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          We believe in complete transparency about how your contributions are used. We are committed to ensuring that
          your support creates the maximum possible impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Financial Transparency */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Financial Transparency</h3>
            <p className="text-gray-600">
              We publish annual reports and financial statements that detail our income, expenditures, and program
              outcomes. These documents are available to all contributors and the public.
            </p>
          </div>

          {/* Impact Reporting */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Impact Reporting</h3>
            <p className="text-gray-600">
              We regularly share updates on our programs and their impact. Contributors receive reports that show how
              their support is making a difference in the communities we serve.
            </p>
          </div>

          {/* Accountability */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Accountability</h3>
            <p className="text-gray-600">
              We maintain rigorous internal controls and governance practices. Our board of directors provides oversight
              to ensure that all contributions are used effectively and ethically.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-3xl mx-auto">
            We are committed to maintaining the highest standards of integrity and accountability. If you have any
            questions about our financial practices or how your contribution will be used, please{" "}
            <a href="/contact-us" className="text-orange-500 hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
