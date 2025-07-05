/**
 * Scans the output directory for static assets to be injected into the service worker.
 *
 * @param {string} distDir - The build output directory to scan (e.g., "dist")
 * @param {string[]} extensions - List of file extensions to include (e.g., ["png", "json"])
 * @param {string[]} excluded - List of file URLs to exclude (e.g., icons from manifest)
 * @returns {AssetEntry[]} - List of asset entries with `url` and `revision`
 */

// Import globSync from the "glob" package to perform recursive file matching
import { globSync } from 'glob'

// Import the AssetEntry type definition used in the return value
import type { AssetEntry } from '../types'

export function scanAssets(distDir: string, extensions: string[], excluded: string[]): AssetEntry[] {

  // Build the glob pattern to match all files with the specified extensions
  const pattern = `${distDir}/**/*.{${extensions.join(',')}}`

  // Use globSync to find matching files recursively, excluding directories
  const files = globSync(pattern, { nodir: true })

  return files
    .map(file => {

      // Get a URL-friendly relative path (always with forward slashes)
      const relative = file.replace(new RegExp(`^${distDir}[\\\\/]?`), '').replace(/\\/g, '/')

      // Create an asset entry object with no revision (null)
      return { url: `/${relative}`, revision: null }
    })

    // Exclude any entries whose URLs are listed in the "excluded" array
    .filter(entry => !excluded.includes(entry.url))
}