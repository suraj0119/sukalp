"use client"

import { useState, useEffect } from "react"
import type { BlogPost } from "@/lib/blog/types"

interface BlogPostsContainerProps {
  title?: string
  sourceId?: string
  showRefreshButton?: boolean
  maxPosts?: number
}

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
        <a
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
        </a>
      </div>
    </div>
  )
}

function BlogPostSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full animate-pulse">
      <div className="h-3 bg-gray-200 w-full"></div>
      <div className="p-6">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  )
}

export function BlogPostsContainer({
  title,
  sourceId = "medium-main",
  showRefreshButton = false,
  maxPosts = 6,
}: BlogPostsContainerProps) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async (forceRefresh = false) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/blog/fetch?sourceId=${sourceId}&forceRefresh=${forceRefresh}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`)
      }

      const data = await response.json()
      if (!data.success) {
        throw new Error(data.error || "Failed to load posts")
      }

      setPosts(data.posts.slice(0, maxPosts))
    } catch (err) {
      console.error("Error fetching posts:", err)
      setError("Failed to load the latest articles. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [sourceId, maxPosts])

  return (
    <div className="w-full">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}

      {showRefreshButton && (
        <div className="flex justify-end mb-6">
          <button
            onClick={() => fetchPosts(true)}
            className="text-orange-500 hover:text-orange-700 font-medium flex items-center"
            disabled={loading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 mr-2 ${loading ? "animate-spin" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh
          </button>
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(maxPosts)].map((_, index) => (
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
    </div>
  )
}
