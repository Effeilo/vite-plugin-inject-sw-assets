/**
 * Vite plugin to inject additional static assets into a service worker
 * for precaching, especially for assets not handled automatically by Workbox.
 *
 * This plugin:
 * - Scans the build output directory (e.g., "dist") for asset files
 * - Excludes icon files already listed in the PWA manifest (optional)
 * - Writes a JS file declaring `self.__INJECTED_ASSETS__` for use in the service worker
 *
 * @param {InjectSWAssetsOptions} [options={}] - Plugin configuration options
 * @returns {Plugin} - Vite-compatible plugin object
 */

// Import the Vite plugin type for typing the return value
import { Plugin } from 'vite'

// Import Node's built-in filesystem module for reading/writing files
import fs from 'fs'

// Import Node's built-in path module for handling file and directory paths
import path from 'path'

// Import a helper function to extract icon paths from the PWA manifest
import { getIconsToExcludeFromManifest } from './utils/manifest-utils'

// Import a utility to recursively scan a directory for files matching given extensions
import { scanAssets } from './utils/file-scanner'

// Import a function that writes the scanned assets into a JavaScript file for injection
import { writeInjectedAssetsFile } from './utils/sw-assets-writer'

// Import the plugin configuration type definition (used only at compile time)
import type { InjectSWAssetsOptions } from './types'

export default function injectSWAssets(options: InjectSWAssetsOptions = {}): Plugin {

  // Destructure the plugin options with default values
  const {
    distDir = 'dist',
    output = 'sw-assets.js',
    extensions = ['png', 'jpg', 'jpeg', 'svg', 'webp', 'ico', 'json'],
    excludeFromManifest = true
  } = options

  return {
    name: 'vite-plugin-inject-sw-assets',

    // Limit the plugin to only run during the build process (not dev)
    apply: 'build',

    /**
     * Hook called after the Vite build has completed.
     * This is where asset scanning and file generation occur.
     */

    closeBundle() {

      // Validate that `extensions` is a proper array of strings
      // This prevents unexpected types or malformed config entries,
      // ensuring only valid file extensions are processed.
      if (!Array.isArray(extensions) || extensions.some(ext => typeof ext !== 'string')) {
        throw new Error('[vite-plugin-inject-sw-assets] Invalid "extensions" option: must be an array of strings');
      }

      // If exclusion is enabled and the manifest exists, parse it to extract icon paths
      const manifestPath = path.join(distDir, 'manifest.webmanifest')
      const excluded = excludeFromManifest && fs.existsSync(manifestPath)
        ? getIconsToExcludeFromManifest(manifestPath)
        : []

      // Scan for asset files matching the configured extensions, excluding manifest icons
      const entries = scanAssets(distDir, extensions, excluded)

      // Write the asset list to the output JS file as a global variable
      writeInjectedAssetsFile(path.join(distDir, output), entries)

      console.log(`✅ Injected ${entries.length} assets into ${output}`)

      // If manifest-based exclusion is enabled, log how many icons were skipped
      // This gives visibility to the user about automatic filtering,
      // helping debug or verify PWA manifest-related behavior.
      if (excludeFromManifest) {
        console.log(`🧹 Excluded ${excluded.length} icon${excluded.length === 1 ? '' : 's'} from precache (via manifest.webmanifest)`);
      }
    }
  }
}