import type { BlogPost, FetchResult } from "../types"
import type { BlogSource } from "../config"

export async function fetchFromWordPress(source: BlogSource): Promise<FetchResult> {
  try {
    const { endpoint, maxPosts = 10, category } = source

    let url = `${endpoint}/wp-json/wp/v2/posts?_embed&per_page=${maxPosts}`

    if (category) {
      url += `&categories=${category}`
    }

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: source.refreshInterval ? source.refreshInterval * 60 : 3600 },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch from WordPress: ${response.status}`)
    }

    const items = await response.json()

    const posts: BlogPost[] = items.map((item: any) => {
      // Extract featured image if available
      let featuredImage = null
      if (
        item._embedded &&
        item._embedded["wp:featuredmedia"] &&
        item._embedded["wp:featuredmedia"][0] &&
        item._embedded["wp:featuredmedia"][0].source_url
      ) {
        featuredImage = item._embedded["wp:featuredmedia"][0].source_url
      }

      // Extract categories
      const categories: string[] = []
      if (item._embedded && item._embedded["wp:term"]) {
        item._embedded["wp:term"].forEach((terms: any[]) => {
          terms.forEach((term) => {
            if (term.taxonomy === "category") {
              categories.push(term.name)
            }
          })
        })
      }

      // Extract tags
      const tags: string[] = []
      if (item._embedded && item._embedded["wp:term"]) {
        item._embedded["wp:term"].forEach((terms: any[]) => {
          terms.forEach((term) => {
            if (term.taxonomy === "post_tag") {
              tags.push(term.name)
            }
          })
        })
      }

      // Create excerpt
      let excerpt = item.excerpt?.rendered ? item.excerpt.rendered.replace(/<[^>]*>/g, "").trim() : ""

      if (excerpt.length > 150) {
        excerpt = excerpt.substring(0, 150) + "..."
      }

      return {
        id: `wp-${item.id}`,
        sourceId: source.id,
        title: item.title.rendered,
        slug: item.slug,
        excerpt,
        content: item.content.rendered,
        author: item._embedded?.author?.[0]?.name || "Unknown",
        publishedAt: item.date,
        updatedAt: item.modified,
        url: item.link,
        featuredImage,
        categories,
        tags,
        metadata: {
          wpId: item.id,
        },
      }
    })

    return {
      success: true,
      posts,
    }
  } catch (error) {
    console.error("Error fetching from WordPress:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error fetching from WordPress",
    }
  }
}
