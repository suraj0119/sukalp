import { Suspense } from "react"
import { MindFuelHero } from "@/components/mindfuel/hero"
import { AboutMindFuel } from "@/components/mindfuel/about"
import { MediumBlogPosts } from "@/components/mindfuel/medium-blog-posts"

function LoadingBlogPosts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Latest Articles</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Loading our latest insights, stories, and thought leadership...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <div className="h-3 bg-gray-300 w-full"></div>
              <div className="p-6">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-6 w-full bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="h-5 w-28 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function MindFuelPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <MindFuelHero />
      <AboutMindFuel />
      <Suspense fallback={<LoadingBlogPosts />}>
        <MediumBlogPosts />
      </Suspense>
    </main>
  )
}
