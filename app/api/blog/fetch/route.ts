import { type NextRequest, NextResponse } from "next/server"
import { BlogService } from "@/lib/blog/blog-service"
import { blogSources } from "@/lib/blog/config"

// Create a server-side instance of the blog service
const serverBlogService = new BlogService(blogSources)

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const sourceId = searchParams.get("sourceId")
    const forceRefresh = searchParams.get("forceRefresh") === "true"

    if (sourceId) {
      // Fetch from specific source
      const posts = await serverBlogService.fetchAndStoreFromSource(sourceId, forceRefresh)
      return NextResponse.json({ success: true, posts })
    } else {
      // Fetch from all sources
      const allSourcesMap = await serverBlogService.fetchAndStoreFromAllSources(forceRefresh)
      const posts = Array.from(allSourcesMap.values()).flat()
      return NextResponse.json({ success: true, posts })
    }
  } catch (error) {
    console.error("Error in blog fetch API:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error fetching blog posts",
      },
      { status: 500 },
    )
  }
}
