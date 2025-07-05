**EN** | [FR](./fr/CHANGELOG.md)

<div>
  <img src="https://browserux.com/img/logos/logo-browserux-inject-sw-assets-300.png" alt="logo vite-plugin-inject-sw-assets"/>
</div>

# 📦 Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com)  
and this project adheres to [Semantic Versioning](https://semver.org).

---

<br>

## [1.0.2] – 2025-07-05

### 🛠️ Fixed

- All compiled `.js` files now include proper `.js` extensions in ESM `import` paths
- Fixed `ERR_MODULE_NOT_FOUND` in Node.js ESM projects

### 🔧 Added

- Post-build script `scripts/fix-extensions.js` to rewrite relative imports in `dist/**/*.js`
- Automatically adds `.js` extension to relative ESM imports like `import './utils/foo' → './utils/foo.js'`
- Updated `build` script in `package.json` to run the patch after `tsc`

### ✅ Improved

- Removed the need for `"module": "NodeNext"` by post-processing import paths
- Simplified ESM compatibility without changing development imports

<br>

---

<br>

## [1.0.0] – 2025-07-05

### ✨ Added

- Initial release of `vite-plugin-inject-sw-assets`
- Automatically scans the `dist/` folder for static assets to precache
- Generates a `sw-assets.js` file to be imported in a custom Workbox service worker
- Supports:
  - Configurable file extensions (`png`, `svg`, `json`, etc.)
  - Optional exclusion of icons already listed in `manifest.webmanifest`
  - Full compatibility with `vite-plugin-pwa` using the `injectManifest` strategy

### 📚 Documentation

- Complete multilingual README (FR/EN)
- Example usage in both `vite.config.ts` and `sw.js`
- Clearly documented options with default values

<br>

---