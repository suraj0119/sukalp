"use client"

import { useState, useEffect, useCallback } from "react"
import type { BlogPost } from "../types"
import { blogService } from "../blog-service"

interface UseBlogPostsOptions {
  sourceId?: string
  initialPosts?: BlogPost[]
  autoRefresh?: boolean
  refreshInterval?: number // in minutes
}

export function useBlogPosts({
  sourceId,
  initialPosts = [],
  autoRefresh = false,
  refreshInterval = 60, // 1 hour default
}: UseBlogPostsOptions = {}) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchPosts = useCallback(
    async (force = false) => {
      try {
        setLoading(true)
        setError(null)

        let fetchedPosts: BlogPost[]

        if (sourceId) {
          // Fetch from specific source
          fetchedPosts = await blogService.fetchAndStoreFromSource(sourceId, force)
        } else {
          // Fetch from all sources
          const allSourcesMap = await blogService.fetchAndStoreFromAllSources(force)
          fetchedPosts = Array.from(allSourcesMap.values()).flat()
        }

        setPosts(fetchedPosts)
        setLastUpdated(new Date())
      } catch (err) {
        console.error("Error fetching blog posts:", err)
        setError(err instanceof Error ? err.message : "Unknown error fetching blog posts")

        // Try to load from cache if fetch fails
        try {
          let cachedPosts: BlogPost[]

          if (sourceId) {
            cachedPosts = await blogService.getPostsFromStorage(sourceId)
          } else {
            cachedPosts = await blogService.getAllPostsFromStorage()
          }

          if (cachedPosts.length > 0) {
            setPosts(cachedPosts)
          }
        } catch (cacheErr) {
          console.error("Error loading cached blog posts:", cacheErr)
        }
      } finally {
        setLoading(false)
      }
    },
    [sourceId],
  )

  const refreshPosts = useCallback(() => {
    return fetchPosts(true)
  }, [fetchPosts])

  // Initial fetch
  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  // Set up auto-refresh if enabled
  useEffect(() => {
    if (!autoRefresh) return

    const intervalId = setInterval(
      () => {
        fetchPosts(true)
      },
      refreshInterval * 60 * 1000,
    ) // Convert minutes to milliseconds

    return () => clearInterval(intervalId)
  }, [autoRefresh, fetchPosts, refreshInterval])

  return {
    posts,
    loading,
    error,
    lastUpdated,
    refreshPosts,
    clearCache: async () => {
      if (sourceId) {
        await blogService.clearStorage(sourceId)
      } else {
        await blogService.clearAllStorage()
      }
      await refreshPosts()
    },
  }
}
