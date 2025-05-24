import type { BlogPost, FetchResult } from "../types"
import type { BlogSource } from "../config"

export async function fetchFromMedium(source: BlogSource): Promise<FetchResult> {
  try {
    const { endpoint, username, maxPosts = 10 } = source

    if (!username) {
      return {
        success: false,
        error: "Medium username is required",
      }
    }

    const response = await fetch(`${endpoint}${username}`, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: source.refreshInterval ? source.refreshInterval * 60 : 3600 },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch from Medium: ${response.status}`)
    }

    const data = await response.json()

    if (data.status !== "ok") {
      throw new Error(`API returned error: ${data.message || "Unknown error"}`)
    }

    const posts: BlogPost[] = data.items.slice(0, maxPosts).map((item: any) => {
      // Extract thumbnail from content if available
      let featuredImage = null
      const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/)
      if (imgMatch && imgMatch[1]) {
        featuredImage = imgMatch[1]
      }

      // Create a simple excerpt by stripping HTML and limiting length
      const textContent = item.content.replace(/<[^>]*>/g, "")
      const excerpt = textContent.substring(0, 150) + (textContent.length > 150 ? "..." : "")

      // Generate a slug from the title
      const slug = item.title
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-")

      return {
        id: `medium-${item.guid || item.link}`,
        sourceId: source.id,
        title: item.title,
        slug,
        excerpt,
        content: item.content,
        author: item.author,
        publishedAt: item.pubDate,
        url: item.link,
        featuredImage,
        categories: item.categories || [],
        tags: [],
        metadata: {
          mediumId: item.guid,
        },
      }
    })

    return {
      success: true,
      posts,
    }
  } catch (error) {
    console.error("Error fetching from Medium:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error fetching from Medium",
    }
  }
}
