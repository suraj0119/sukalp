import { type NextRequest, NextResponse } from "next/server"
import { FALLBACK_POSTS } from "@/lib/constants"
import { isLocalEnvironment } from "@/lib/environment"

export const dynamic = 'force-static'
export const revalidate = 3600

// Enhanced mock data with more realistic content
const ENHANCED_API_MOCK = {
  status: "ok",
  feed: {
    url: "https://medium.com/feed/@ed_49962",
    title: "Sukalp Foundation",
    link: "https://medium.com/@ed_49962",
    author: "Sukalp Foundation",
    description: "Stories and insights from Sukalp Foundation",
    image: "https://cdn-images-1.medium.com/fit/c/150/150/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
  },
  items: [
    {
      title: "Empowering Rural Education: Shiksha Vatika's Impact",
      excerpt:
        "Our Shiksha Vatika initiative has transformed educational outcomes in rural communities, providing quality education to over 500 children in the past year alone.",
      link: "https://medium.com/@ed_49962/empowering-rural-education-shiksha-vatikas-impact-dc173c99adac",
      pubDate: new Date().toISOString(),
      author: "Sukalp Foundation",
      categories: ["Education"],
      content:
        "<p>Our Shiksha Vatika initiative has transformed educational outcomes in rural communities, providing quality education to over 500 children in the past year alone.</p>",
      thumbnail: null,
    },
    {
      title: "Environmental Sustainability Through Traditional Wisdom",
      excerpt:
        "Combining ancient Indian environmental practices with modern conservation techniques has created sustainable solutions for communities facing climate challenges.",
      link: "https://medium.com/@ed_49962/environmental-sustainability-through-traditional-wisdom-920f271bbf08",
      pubDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      author: "Sukalp Foundation",
      categories: ["Environment"],
      content:
        "<p>Combining ancient Indian environmental practices with modern conservation techniques has created sustainable solutions for communities facing climate challenges.</p>",
      thumbnail: null,
    },
    {
      title: "Youth Leadership: Building Tomorrow's Change Makers",
      excerpt:
        "Our youth programs focus on developing leadership skills, civic responsibility, and cultural awareness to create the next generation of community leaders.",
      link: "https://medium.com/@ed_49962/youth-leadership-building-tomorrows-change-makers-f445383514a9",
      pubDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      author: "Sukalp Foundation",
      categories: ["Youth Development"],
      content:
        "<p>Our youth programs focus on developing leadership skills, civic responsibility, and cultural awareness to create the next generation of community leaders.</p>",
      thumbnail: null,
    },
    {
      title: "Digital Literacy in Rural Communities",
      excerpt:
        "Bridging the digital divide through targeted education programs that bring technology skills to underserved rural areas.",
      link: "https://medium.com/@ed_49962/digital-literacy-in-rural-communities-dc173c99adac",
      pubDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
      author: "Sukalp Foundation",
      categories: ["Technology"],
      content:
        "<p>Bridging the digital divide through targeted education programs that bring technology skills to underserved rural areas.</p>",
      thumbnail: null,
    },
    {
      title: "Women's Empowerment Through Skill Development",
      excerpt:
        "Our women-focused initiatives provide vocational training and entrepreneurship support, creating pathways to financial independence.",
      link: "https://medium.com/@ed_49962/womens-empowerment-through-skill-development-920f271bbf08",
      pubDate: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
      author: "Sukalp Foundation",
      categories: ["Women Empowerment"],
      content:
        "<p>Our women-focused initiatives provide vocational training and entrepreneurship support, creating pathways to financial independence.</p>",
      thumbnail: null,
    },
    {
      title: "Cultural Heritage Preservation in Modern India",
      excerpt:
        "Exploring the importance of maintaining cultural traditions while embracing progress in contemporary Indian society.",
      link: "https://medium.com/@ed_49962/cultural-heritage-preservation-in-modern-india-f445383514a9",
      pubDate: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
      author: "Sukalp Foundation",
      categories: ["Culture"],
      content:
        "<p>Exploring the importance of maintaining cultural traditions while embracing progress in contemporary Indian society.</p>",
      thumbnail: null,
    },
  ],
}

export async function GET(request: NextRequest) {
  // Check if we're in a local environment
  const isLocal = isLocalEnvironment()

  if (isLocal) {
    console.log("API: Running in local environment, returning mock data")

    // In local environment, return enhanced mock data after a short delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    return NextResponse.json(ENHANCED_API_MOCK)
  }

  try {
    const searchParams = request.nextUrl.searchParams
    const username = searchParams.get("username") || "ed_49962" // Default username as fallback

    // Try to fetch from Medium RSS feed
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      console.warn(`Failed to fetch from Medium API: ${response.status}`)
      return NextResponse.json({ status: "ok", items: FALLBACK_POSTS }, { status: 200 })
    }

    const data = await response.json()

    if (data.status !== "ok") {
      console.warn(`API returned error: ${data.message || "Unknown error"}`)
      return NextResponse.json({ status: "ok", items: FALLBACK_POSTS }, { status: 200 })
    }

    // Process the items to extract thumbnails and create excerpts
    const processedItems = data.items.map((item: any) => {
      // Create a simple excerpt by stripping HTML and limiting length
      const textContent = item.content.replace(/<[^>]*>/g, "")
      const excerpt = textContent.substring(0, 150) + (textContent.length > 150 ? "..." : "")

      return {
        ...item,
        thumbnail: null, // Set thumbnail to null to remove images
        excerpt,
      }
    })

    return NextResponse.json({
      status: "ok",
      feed: data.feed,
      items: processedItems,
    })
  } catch (error) {
    console.error("Error in medium-posts API route:", error)
    return NextResponse.json({ status: "ok", items: FALLBACK_POSTS }, { status: 200 })
  }
}
