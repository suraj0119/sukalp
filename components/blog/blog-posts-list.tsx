"use client"

import { useState } from "react"
import { useBlogPosts } from "@/lib/blog/hooks/use-blog-posts"
import type { BlogPost } from "@/lib/blog/types"
import Link from "next/link"

interface BlogPostsListProps {
  sourceId?: string
  initialPosts?: BlogPost[]
  title?: string
  showRefreshButton?: boolean
  maxPosts?: number
}

export function BlogPostsList({
  sourceId,
  initialPosts,
  title = "Blog Posts",
  showRefreshButton = true,
  maxPosts = 6,
}: BlogPostsListProps) {
  const { posts, loading, error, lastUpdated, refreshPosts, clearCache } = useBlogPosts({
    sourceId,
    initialPosts,
    autoRefresh: false,
  })

  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await refreshPosts()
    setIsRefreshing(false)
  }

  const handleClearCache = async () => {
    await clearCache()
  }

  const displayPosts = posts.slice(0, maxPosts)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        {showRefreshButton && (
          <div className="flex space-x-2">
            <button
              onClick={handleRefresh}
              disabled={loading || isRefreshing}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50"
            >
              {isRefreshing ? "Refreshing..." : "Refresh Posts"}
            </button>
            <button
              onClick={handleClearCache}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Clear Cache
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      {lastUpdated && <p className="text-sm text-gray-500 mb-4">Last updated: {lastUpdated.toLocaleString()}</p>}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(maxPosts)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/3 mt-4"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {displayPosts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No blog posts found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {post.featuredImage && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.featuredImage || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      {post.categories.length > 0 && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{post.categories[0]}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-700 font-medium inline-flex items-center"
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
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
