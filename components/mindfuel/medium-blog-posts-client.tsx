"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog/types"
import { isLocalEnvironment } from "@/lib/environment"

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="h-3 bg-gradient-to-r from-orange-500 to-orange-300 w-full"></div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-2">
          <span className="text-sm text-gray-500">{formatDate(post.publishedAt)}</span>
          {post.categories && post.categories.length > 0 && (
            <>
              <span className="mx-2">•</span>
              <span className="text-sm text-orange-500">{post.categories[0]}</span>
            </>
          )}
        </div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-gray-700 mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
        <Link
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-700 font-medium inline-flex items-center mt-auto"
        >
          Read More
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
  )
}

function BlogPostSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
      <div className="h-3 bg-gradient-to-r from-gray-300 to-gray-200 w-full"></div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-6 w-full bg-gray-200 rounded animate-pulse mb-3"></div>
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="h-5 w-28 bg-gray-200 rounded animate-pulse mt-auto"></div>
      </div>
    </div>
  )
}

export function MediumBlogPostsClient() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isLocal, setIsLocal] = useState(false)

  useEffect(() => {
    // Detect environment on component mount
    const localEnv = isLocalEnvironment()
    setIsLocal(localEnv)

    async function fetchPosts() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`/api/blog/fetch?sourceId=medium-main`)
        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`)
        }

        const data = await response.json()
        if (!data.success) {
          throw new Error(data.error || "Failed to load posts")
        }

        setPosts(data.posts)
      } catch (err) {
        console.error("Error fetching posts:", err)
        setError("Failed to load the latest articles. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Latest Articles</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore our latest insights, stories, and thought leadership on education, community development, and social
          impact.
        </p>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <BlogPostSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            {error && (
              <div className="text-center py-4 mb-8">
                <p className="text-gray-600">{error}</p>
              </div>
            )}
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">No articles found.</p>
              </div>
            )}
          </>
        )}

        <div className="text-center mt-12">
          <Link
            href="https://medium.com/@ed_49962"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors"
          >
            View All Articles on Medium
          </Link>
        </div>
      </div>
    </section>
  )
}
