/**
 * Writes a JavaScript file that defines a global variable with the list of assets to precache.
 * This file is intended to be imported or referenced by the service worker.
 *
 * @param {string} filePath - The path where the output file should be written (e.g., "dist/sw-assets.js")
 * @param {AssetEntry[]} assets - The list of assets to inject, each with a `url` and optional `revision`
 */

// Import Node's filesystem module to write files to disk
import fs from 'fs'

// Import the AssetEntry type to annotate the assets parameter
import type { AssetEntry } from '../types'

export function writeInjectedAssetsFile(filePath: string, assets: AssetEntry[]) {

  // Convert the assets list to a JS assignment as a global variable on the service worker scope
  const content = `self.__INJECTED_ASSETS__ = ${JSON.stringify(assets, null, 2)};`

  // Write the content to the specified file
  fs.writeFileSync(filePath, content)
}