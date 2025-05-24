import type { BlogPostCollection, StorageResult } from "../types"
import type { StorageConfig } from "../config"

export class StorageService {
  private config: StorageConfig

  constructor(config: StorageConfig) {
    this.config = config
  }

  async saveCollection(collection: BlogPostCollection): Promise<StorageResult> {
    try {
      switch (this.config.type) {
        case "localStorage":
          return this.saveToLocalStorage(collection)
        case "indexedDB":
          return this.saveToIndexedDB(collection)
        case "fileSystem":
          return this.saveToFileSystem(collection)
        default:
          throw new Error(`Unsupported storage type: ${this.config.type}`)
      }
    } catch (error) {
      console.error(`Error saving blog posts for source ${collection.sourceId}:`, error)
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error saving blog posts",
      }
    }
  }

  async getCollection(sourceId: string): Promise<BlogPostCollection | null> {
    try {
      switch (this.config.type) {
        case "localStorage":
          return this.getFromLocalStorage(sourceId)
        case "indexedDB":
          return this.getFromIndexedDB(sourceId)
        case "fileSystem":
          return this.getFromFileSystem(sourceId)
        default:
          throw new Error(`Unsupported storage type: ${this.config.type}`)
      }
    } catch (error) {
      console.error(`Error retrieving blog posts for source ${sourceId}:`, error)
      return null
    }
  }

  async getAllCollections(): Promise<BlogPostCollection[]> {
    try {
      switch (this.config.type) {
        case "localStorage":
          return this.getAllFromLocalStorage()
        case "indexedDB":
          return this.getAllFromIndexedDB()
        case "fileSystem":
          return this.getAllFromFileSystem()
        default:
          throw new Error(`Unsupported storage type: ${this.config.type}`)
      }
    } catch (error) {
      console.error("Error retrieving all blog post collections:", error)
      return []
    }
  }

  async clearCollection(sourceId: string): Promise<StorageResult> {
    try {
      switch (this.config.type) {
        case "localStorage":
          return this.clearFromLocalStorage(sourceId)
        case "indexedDB":
          return this.clearFromIndexedDB(sourceId)
        case "fileSystem":
          return this.clearFromFileSystem(sourceId)
        default:
          throw new Error(`Unsupported storage type: ${this.config.type}`)
      }
    } catch (error) {
      console.error(`Error clearing blog posts for source ${sourceId}:`, error)
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error clearing blog posts",
      }
    }
  }

  async clearAllCollections(): Promise<StorageResult> {
    try {
      switch (this.config.type) {
        case "localStorage":
          return this.clearAllFromLocalStorage()
        case "indexedDB":
          return this.clearAllFromIndexedDB()
        case "fileSystem":
          return this.clearAllFromFileSystem()
        default:
          throw new Error(`Unsupported storage type: ${this.config.type}`)
      }
    } catch (error) {
      console.error("Error clearing all blog post collections:", error)
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error clearing all blog posts",
      }
    }
  }

  isCollectionExpired(collection: BlogPostCollection): boolean {
    if (!this.config.maxAge) return false

    const now = Date.now()
    const maxAgeMs = this.config.maxAge * 60 * 1000 // Convert minutes to milliseconds
    return now - collection.lastFetched > maxAgeMs
  }

  // LocalStorage implementations
  private saveToLocalStorage(collection: BlogPostCollection): StorageResult {
    try {
      const key = this.getLocalStorageKey(collection.sourceId)
      localStorage.setItem(key, JSON.stringify(collection))
      return { success: true }
    } catch (error) {
      throw error
    }
  }

  private getFromLocalStorage(sourceId: string): BlogPostCollection | null {
    const key = this.getLocalStorageKey(sourceId)
    const data = localStorage.getItem(key)

    if (!data) return null

    try {
      return JSON.parse(data) as BlogPostCollection
    } catch {
      return null
    }
  }

  private getAllFromLocalStorage(): BlogPostCollection[] {
    const collections: BlogPostCollection[] = []
    const prefix = this.config.storageKey || "blog_posts"

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith(`${prefix}_`)) {
        const data = localStorage.getItem(key)
        if (data) {
          try {
            const collection = JSON.parse(data) as BlogPostCollection
            collections.push(collection)
          } catch {
            // Skip invalid data
          }
        }
      }
    }

    return collections
  }

  private clearFromLocalStorage(sourceId: string): StorageResult {
    const key = this.getLocalStorageKey(sourceId)
    localStorage.removeItem(key)
    return { success: true }
  }

  private clearAllFromLocalStorage(): StorageResult {
    const prefix = this.config.storageKey || "blog_posts"

    const keysToRemove: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith(`${prefix}_`)) {
        keysToRemove.push(key)
      }
    }

    keysToRemove.forEach((key) => localStorage.removeItem(key))
    return { success: true }
  }

  private getLocalStorageKey(sourceId: string): string {
    const prefix = this.config.storageKey || "blog_posts"
    return `${prefix}_${sourceId}`
  }

  // IndexedDB implementations (stubs - would need actual implementation)
  private async saveToIndexedDB(collection: BlogPostCollection): Promise<StorageResult> {
    // This would be implemented with actual IndexedDB code
    console.warn("IndexedDB storage not fully implemented")
    return {
      success: false,
      error: "IndexedDB storage not implemented",
    }
  }

  private async getFromIndexedDB(sourceId: string): Promise<BlogPostCollection | null> {
    // This would be implemented with actual IndexedDB code
    console.warn("IndexedDB storage not fully implemented")
    return null
  }

  private async getAllFromIndexedDB(): Promise<BlogPostCollection[]> {
    // This would be implemented with actual IndexedDB code
    console.warn("IndexedDB storage not fully implemented")
    return []
  }

  private async clearFromIndexedDB(sourceId: string): Promise<StorageResult> {
    // This would be implemented with actual IndexedDB code
    console.warn("IndexedDB storage not fully implemented")
    return {
      success: false,
      error: "IndexedDB storage not implemented",
    }
  }

  private async clearAllFromIndexedDB(): Promise<StorageResult> {
    // This would be implemented with actual IndexedDB code
    console.warn("IndexedDB storage not fully implemented")
    return {
      success: false,
      error: "IndexedDB storage not implemented",
    }
  }

  // FileSystem implementations (server-side only, stubs for now)
  private async saveToFileSystem(collection: BlogPostCollection): Promise<StorageResult> {
    // This would be implemented with Node.js fs module for server-side storage
    console.warn("FileSystem storage not fully implemented")
    return {
      success: false,
      error: "FileSystem storage not implemented in browser",
    }
  }

  private async getFromFileSystem(sourceId: string): Promise<BlogPostCollection | null> {
    // This would be implemented with Node.js fs module for server-side storage
    console.warn("FileSystem storage not fully implemented")
    return null
  }

  private async getAllFromFileSystem(): Promise<BlogPostCollection[]> {
    // This would be implemented with Node.js fs module for server-side storage
    console.warn("FileSystem storage not fully implemented")
    return []
  }

  private async clearFromFileSystem(sourceId: string): Promise<StorageResult> {
    // This would be implemented with Node.js fs module for server-side storage
    console.warn("FileSystem storage not fully implemented")
    return {
      success: false,
      error: "FileSystem storage not implemented in browser",
    }
  }

  private async clearAllFromFileSystem(): Promise<StorageResult> {
    // This would be implemented with Node.js fs module for server-side storage
    console.warn("FileSystem storage not fully implemented")
    return {
      success: false,
      error: "FileSystem storage not implemented in browser",
    }
  }
}
