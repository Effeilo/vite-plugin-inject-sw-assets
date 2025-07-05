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