"use client"

import { blogService } from "./blog-service"

class BackgroundSync {
  private syncIntervalId: NodeJS.Timeout | null = null
  private isInitialized = false

  /**
   * Initialize background sync for blog posts
   * @param intervalMinutes How often to check for updates (in minutes)
   */
  initialize(intervalMinutes = 60) {
    if (this.isInitialized) return

    // Don't run in SSR
    if (typeof window === "undefined") return

    console.log("Initializing blog background sync")

    // Perform initial sync
    this.syncAll()

    // Set up periodic sync
    this.syncIntervalId = setInterval(
      () => {
        this.syncAll()
      },
      intervalMinutes * 60 * 1000,
    )

    this.isInitialized = true

    // Clean up on page unload
    window.addEventListener("beforeunload", () => {
      this.cleanup()
    })
  }

  /**
   * Manually trigger a sync of all blog sources
   */
  async syncAll() {
    console.log("Syncing all blog sources")
    try {
      await blogService.fetchAndStoreFromAllSources()
      console.log("Blog sync completed successfully")
    } catch (error) {
      console.error("Error during blog sync:", error)
    }
  }

  /**
   * Manually trigger a sync of a specific blog source
   */
  async syncSource(sourceId: string) {
    console.log(`Syncing blog source: ${sourceId}`)
    try {
      await blogService.fetchAndStoreFromSource(sourceId, true)
      console.log(`Blog source ${sourceId} synced successfully`)
    } catch (error) {
      console.error(`Error syncing blog source ${sourceId}:`, error)
    }
  }

  /**
   * Clean up background sync
   */
  cleanup() {
    if (this.syncIntervalId) {
      clearInterval(this.syncIntervalId)
      this.syncIntervalId = null
    }
    this.isInitialized = false
  }
}

// Export a singleton instance
export const backgroundSync = new BackgroundSync()

// Helper hook to initialize background sync in components
export function initializeBlogSync(intervalMinutes = 60) {
  if (typeof window !== "undefined") {
    // Use setTimeout to ensure this runs after component mount
    setTimeout(() => {
      backgroundSync.initialize(intervalMinutes)
    }, 0)
  }
}
