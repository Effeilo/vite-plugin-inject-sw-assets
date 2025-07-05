/**
 * Extracts the list of icon file paths from a PWA manifest file.
 * These paths are typically used to avoid re-caching them in the service worker.
 *
 * @param {string} manifestPath - Absolute or relative path to the manifest.webmanifest file
 * @returns {string[]} - Array of icon paths (prefixed with a slash if needed)
 */

// Import Node's filesystem module to read files from disk
import fs from 'fs'

export function getIconsToExcludeFromManifest(manifestPath: string): string[] {

  // Read and parse the manifest file as JSON
  const content = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))

  // Map each icon to its "src" field, ensuring it starts with a leading slash
  return (content.icons || []).map((icon: { src: string }) =>
    icon.src.startsWith('/') ? icon.src : `/${icon.src}`
  )
}