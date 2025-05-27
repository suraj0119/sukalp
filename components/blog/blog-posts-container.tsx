"use client"

import { useState, useEffect } from "react"
import type { BlogPost } from "@/lib/blog/types"

interface BlogPostsContainerProps {
  title?: string
  initialPosts?: BlogPost[]
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
  initialPosts = [],
  maxPosts = 6,
}: BlogPostsContainerProps) {
  return (
    <div className="w-full">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}

      {initialPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialPosts.slice(0, maxPosts).map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600">No articles found.</p>
        </div>
      )}
    </div>
  )
}
