import Link from "next/link"

const articles = [
  {
    title: "Happy World Book Day",
    excerpt:
      "Books are the gateway to knowledge and wisdom. They are the most accessible and reliable of resources, and the most potent tools for intellectual growth.",
    link: "https://medium.com/@ed_49962/happy-world-book-day-dc173c99adac",
    color: "bg-pink-100",
    textColor: "text-pink-800",
    buttonColor: "bg-pink-600 hover:bg-pink-700",
  },
  {
    title: "World Earth Day: A Call from Bharat's Conscience",
    excerpt:
      "Traditional Indian wisdom combined with modern sustainability practices can create a powerful framework for environmental conservation and regeneration.",
    link: "https://medium.com/@ed_49962/world-earth-day-a-call-from-bharats-conscience-920f271bbf08",
    color: "bg-green-100",
    textColor: "text-green-800",
    buttonColor: "bg-green-600 hover:bg-green-700",
  },
  {
    title: "STEM Education in India's NEP",
    excerpt:
      "The National Education Policy recognizes STEM education as a cornerstone for developing critical thinking and innovation capabilities among students.",
    link: "https://medium.com/@ed_49962/stem-education-in-indias-nep-f445383514a9",
    color: "bg-blue-100",
    textColor: "text-blue-800",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
  },
]

export function MindFuelSpotlight() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">MindFuel Spotlight</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore our latest insights, stories, and thought leadership on education, community development, and social
          impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className={`rounded-lg overflow-hidden shadow-md ${article.color}`}>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${article.textColor}`}>{article.title}</h3>
                <p className="mb-4 text-gray-700">{article.excerpt}</p>
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white font-medium py-2 px-4 rounded inline-flex items-center ${article.buttonColor}`}
                >
                  Read on Medium
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/mindfuel"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
