import { type BlogSource, blogSources } from "./config"
import type { BlogPost, FetchResult } from "./types"
import { fetchFromMedium } from "./adapters/medium-adapter"

export class BlogService {
  private sources: BlogSource[]
  private fetchPromises: Map<string, Promise<FetchResult>> = new Map()

  constructor(sources: BlogSource[] = blogSources) {
    this.sources = sources
  }

  /**
   * Fetch posts from a specific source and update local storage
   */
  async fetchAndStoreFromSource(sourceId: string, forceRefresh = false): Promise<BlogPost[]> {
    const source = this.sources.find((s) => s.id === sourceId)
    if (!source) {
      throw new Error(`Source not found: ${sourceId}`)
    }

    try {
      const result = await this.fetchFromSource(source)
      if (!result.success) {
        throw new Error(result.error || "Failed to fetch posts")
      }
      return result.posts || []
    } catch (error) {
      console.error(`Error fetching from source ${sourceId}:`, error)
      return []
    }
  }

  /**
   * Fetch posts from all configured sources and update local storage
   */
  async fetchAndStoreFromAllSources(forceRefresh = false): Promise<Map<string, BlogPost[]>> {
    const results = new Map<string, BlogPost[]>()

    await Promise.all(
      this.sources.map(async (source) => {
        try {
          const posts = await this.fetchAndStoreFromSource(source.id, forceRefresh)
          results.set(source.id, posts)
        } catch (error) {
          console.error(`Error fetching from source ${source.id}:`, error)
          results.set(source.id, [])
        }
      })
    )

    return results
  }

  /**
   * Get posts from local storage for a specific source
   */
  async getPostsFromStorage(sourceId: string): Promise<BlogPost[]> {
    // Implementation needed
    throw new Error("Method not implemented")
  }

  /**
   * Get all posts from all sources in local storage
   */
  async getAllPostsFromStorage(): Promise<BlogPost[]> {
    // Implementation needed
    throw new Error("Method not implemented")
  }

  /**
   * Check if a collection needs to be refreshed
   */
  async needsRefresh(sourceId: string): Promise<boolean> {
    // Implementation needed
    throw new Error("Method not implemented")
  }

  /**
   * Clear local storage for a specific source
   */
  async clearStorage(sourceId: string): Promise<boolean> {
    // Implementation needed
    throw new Error("Method not implemented")
  }

  /**
   * Clear all local storage
   */
  async clearAllStorage(): Promise<boolean> {
    // Implementation needed
    throw new Error("Method not implemented")
  }

  /**
   * Fetch posts from a source based on its type
   */
  private async fetchFromSource(source: BlogSource): Promise<FetchResult> {
    switch (source.type) {
      case "medium":
        return fetchFromMedium(source)
      case "wordpress":
      case "custom-api":
      case "rss":
        return {
          success: false,
          error: `Source type "${source.type}" not implemented yet`,
        }
      default:
        return {
          success: false,
          error: `Unknown source type: ${(source as any).type}`,
        }
    }
  }
}

// Export a singleton instance for convenience
export const blogService = new BlogService()
