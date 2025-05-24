export interface BlogPost {
  id: string
  sourceId: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  url: string
  featuredImage: string | null
  categories: string[]
  tags: string[]
  metadata: Record<string, any>
}

export interface BlogPostCollection {
  sourceId: string
  posts: BlogPost[]
  lastFetched: number
  error?: string
}

export interface FetchResult {
  success: boolean
  posts?: BlogPost[]
  error?: string
}

export interface StorageResult {
  success: boolean
  error?: string
}
