import { BlogPostsContainer } from "@/components/blog/blog-posts-container";
import type { BlogPost } from "@/lib/blog/types";

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  author: string;
  categories: string[];
  content: string;
  thumbnail: string | null;
}

const FALLBACK_POSTS: BlogPost[] = [
  {
    id: "1",
    sourceId: "medium",
    title: "Empowering Rural Education: Shiksha Vatika's Impact",
    slug: "empowering-rural-education",
    excerpt: "Our Shiksha Vatika initiative has transformed educational outcomes in rural communities, providing quality education to over 500 children in the past year alone.",
    content: "Our Shiksha Vatika initiative has transformed educational outcomes in rural communities, providing quality education to over 500 children in the past year alone.",
    author: "Sukalp Foundation",
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    url: "https://medium.com/@ed_49962/empowering-rural-education-shiksha-vatikas-impact-dc173c99adac",
    featuredImage: null,
    categories: ["Education"],
    tags: ["Education", "Rural Development"],
    metadata: {}
  },
  {
    id: "2",
    sourceId: "medium",
    title: "Environmental Sustainability Through Traditional Wisdom",
    slug: "environmental-sustainability",
    excerpt: "Combining ancient Indian environmental practices with modern conservation techniques has created sustainable solutions for communities facing climate challenges.",
    content: "Combining ancient Indian environmental practices with modern conservation techniques has created sustainable solutions for communities facing climate challenges.",
    author: "Sukalp Foundation",
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    url: "https://medium.com/@ed_49962/environmental-sustainability-through-traditional-wisdom-920f271bbf08",
    featuredImage: null,
    categories: ["Environment"],
    tags: ["Environment", "Sustainability"],
    metadata: {}
  }
];

async function getMediumPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ed_49962',
      {
        headers: {
          'Accept': 'application/json',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error(data.message || 'Failed to load posts');
    }

    // Transform Medium posts to match our format
    return data.items.map((post: MediumPost) => ({
      id: post.link,
      sourceId: "medium",
      title: post.title,
      slug: post.link.split('/').pop() || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      excerpt: post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
      content: post.content,
      author: post.author,
      publishedAt: post.pubDate,
      updatedAt: post.pubDate,
      url: post.link,
      featuredImage: post.thumbnail,
      categories: post.categories || [],
      tags: post.categories || [],
      metadata: {}
    }));
  } catch (err) {
    console.error('Error fetching Medium posts:', err);
    return FALLBACK_POSTS;
  }
}

export default async function BlogPage() {
  const posts = await getMediumPosts();

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Sukalp Foundation Blog</h1>
        <BlogPostsContainer 
          title="Latest Articles" 
          sourceId="medium-main" 
          showRefreshButton={true} 
          maxPosts={6} 
          initialPosts={posts}
        />
      </div>
    </main>
  );
}
