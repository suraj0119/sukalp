"use client"

import { useEffect } from "react"
import { initializeBlogSync } from "@/lib/blog/background-sync"

interface BlogSyncInitializerProps {
  syncIntervalMinutes?: number
}

export function BlogSyncInitializer({ syncIntervalMinutes = 60 }: BlogSyncInitializerProps) {
  useEffect(() => {
    initializeBlogSync(syncIntervalMinutes)
  }, [syncIntervalMinutes])

  // This component doesn't render anything
  return null
}
