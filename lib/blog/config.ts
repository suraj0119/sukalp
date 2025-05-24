export type BlogSource = {
  id: string
  name: string
  type: "medium" | "wordpress" | "custom-api" | "rss"
  endpoint: string
  username?: string
  apiKey?: string
  category?: string
  maxPosts?: number
  refreshInterval?: number // in minutes
}

export type StorageConfig = {
  type: "localStorage" | "indexedDB" | "fileSystem"
  path?: string // For fileSystem
  dbName?: string // For indexedDB
  storageKey?: string // For localStorage
  maxAge?: number // in minutes
}

export const blogSources: BlogSource[] = [
  {
    id: "medium-main",
    name: "Sukalp Foundation Medium Blog",
    type: "medium",
    endpoint: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@",
    username: "ed_49962",
    maxPosts: 10,
    refreshInterval: 60, // Refresh every hour
  },
  // Add more sources as needed
]

export const storageConfig: StorageConfig = {
  type: "localStorage",
  storageKey: "sukalp_blog_posts",
  maxAge: 1440, // 24 hours
}
