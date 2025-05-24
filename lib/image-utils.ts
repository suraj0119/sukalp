/**
 * Utility functions for image optimization
 */

// Generate responsive image sizes for different viewports
export const getResponsiveSizes = (defaultSize = "100vw") => {
  return {
    sizes: {
      default: defaultSize,
      sm: "100vw",
      md: "50vw",
      lg: "33vw",
      xl: "25vw",
    },
  }
}

// Format for consistent image alt text
export const formatAltText = (text: string, context?: string) => {
  const baseText = text.trim()
  return context ? `${baseText} - ${context}` : baseText
}

// Common image quality settings
export const imageQuality = {
  low: 65,
  medium: 75,
  high: 85,
  hero: 90,
}
