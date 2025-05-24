import { BlogPostsContainer } from "@/components/blog/blog-posts-container"

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Sukalp Foundation Blog</h1>
        <BlogPostsContainer 
          title="Latest Articles" 
          sourceId="medium-main" 
          showRefreshButton={true} 
          maxPosts={6} 
        />
      </div>
    </main>
  )
}
