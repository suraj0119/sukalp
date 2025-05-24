export interface MediumPost {
  title: string
  link: string
  pubDate: string
  content: string
  author: string
  categories: string[]
  thumbnail: string | null
  excerpt: string
}

export async function getMediumPosts(username: string): Promise<MediumPost[]> {
  try {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch Medium posts: ${response.status}`)
    }

    const data = await response.json()

    if (data.status !== "ok") {
      throw new Error(`API returned error: ${data.message || "Unknown error"}`)
    }

    return data.items.map((item: any) => {
      // Extract thumbnail from content if available
      let thumbnail = null
      const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/)
      if (imgMatch && imgMatch[1]) {
        thumbnail = imgMatch[1]
      }

      // Create a simple excerpt by stripping HTML and limiting length
      // Use regex to strip HTML tags for server-side compatibility
      const textContent = item.content.replace(/<[^>]*>/g, "")
      const excerpt = textContent.substring(0, 150) + (textContent.length > 150 ? "..." : "")

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        content: item.content,
        author: item.author,
        categories: item.categories,
        thumbnail,
        excerpt,
      }
    })
  } catch (error) {
    console.error("Error fetching Medium posts:", error)
    return []
  }
}
