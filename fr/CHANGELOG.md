[EN](../CHANGELOG.md) | **FR**

<div>
  <img src="https://browserux.com/img/logos/logo-browserux-inject-sw-assets-300.png" alt="logo vite-plugin-inject-sw-assets"/>
</div>

# 📦 Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/)  
et ce projet suit les recommandations de versionnage [SemVer](https://semver.org/lang/fr/).

---

<br>

## [1.0.0] – 05-07-2025

### ✨ Ajouté

- Première version de `vite-plugin-inject-sw-assets`
- Analyse automatique du dossier `dist/` pour détecter les fichiers statiques à précacher
- Génération d’un fichier `sw-assets.js` à importer dans un service worker Workbox personnalisé
- Prise en charge de :
  - Extensions configurables (`png`, `svg`, `json`, etc.)
  - Exclusion optionnelle des icônes déjà référencées dans le `manifest.webmanifest`
  - Compatibilité complète avec `vite-plugin-pwa` en mode `injectManifest`

### 📚 Documentation

- README complet et multilingue (FR/EN)
- Exemples d’utilisation dans `vite.config.ts` et `sw.js`
- Tableau d’options documentées avec leurs valeurs par défaut
  
<br>

---