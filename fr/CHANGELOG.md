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

## [1.0.1] – 05-07-2025

### 🛠️ Corrigé

- Les fichiers compilés `.js` dans `dist/` utilisent désormais correctement l’extension `.js` dans les chemins `import`
- Correction de l’erreur `ERR_MODULE_NOT_FOUND` dans les projets Node.js en ESM

### 🔧 Ajouté

- Script post-build `scripts/fix-extensions.js` pour corriger automatiquement les chemins d'import relatifs
- Ajoute `.js` aux imports relatifs de type `import './utils/foo' → './utils/foo.js'`
- Mise à jour du script `build` dans `package.json` pour exécuter le correctif après `tsc`

### ✅ Amélioré

- Plus besoin de `"module": "NodeNext"` dans `tsconfig.json` pour la compatibilité ESM
- Rend la compatibilité ESM transparente sans modifier les imports en développement

<br>

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