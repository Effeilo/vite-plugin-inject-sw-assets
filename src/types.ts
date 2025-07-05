/**
 * Configuration options for the vite-plugin-inject-sw-assets plugin.
 */

export interface InjectSWAssetsOptions {
  distDir?: string
  output?: string
  extensions?: string[]
  excludeFromManifest?: boolean
}

/**
 * Represents a static asset to be injected into the service worker.
 */

export interface AssetEntry {
  url: string
  revision: string | null
}