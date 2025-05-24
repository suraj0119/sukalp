/**
 * Utility functions for environment detection
 */

/**
 * Determines if the application is running in a local development environment
 */
export function isLocalEnvironment(): boolean {
  // Check if window is defined (client-side)
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname
    return hostname === "localhost" || hostname === "127.0.0.1"
  }

  // Server-side detection (less reliable but helpful)
  return process.env.NODE_ENV === "development"
}

/**
 * Determines if the application is running in a production environment
 */
export function isProductionEnvironment(): boolean {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname
    return !["localhost", "127.0.0.1"].includes(hostname)
  }

  return process.env.NODE_ENV === "production"
}
