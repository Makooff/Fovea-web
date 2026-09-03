# Fovea — site web

Site Next.js 14 (App Router) + TypeScript + Tailwind de l'agence Fovea.

## Direction artistique — à appliquer par défaut

**Toute création ou modification visuelle suit la DA décrite dans
[`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md).** Lire ce fichier avant
d'écrire une page, une section ou un composant — sans attendre que la demande
mentionne le design.

En résumé, non négociable :

- **Couleurs de marque** : fond `#141519` (`--ink`), accent `#E5524A` (`--red`).
  Un seul accent. Jamais de couleur en dur : `var(--token)`, classe Tailwind, ou
  `color` importé de `@/components/ui/ds`.
- **Typographie** : Poppins pour tout. Logo et titres en 800 (`-0.02em` à
  `-0.04em`), texte courant en 400 à 13 px, légendes en **italique**.
  Sora / Jakarta / DM Mono sont historiques — ne pas les utiliser dans du code neuf.
- **Primitives** : composer avec `@/components/ui/ds` (`Chip`, `Surface`,
  `StatCard`, `ToolCard`, `PackCard`, `StepList`, `DashList`, `SectionBanner`,
  `GlowBackdrop`, `ContactPills`, `Logo`) plutôt que de réécrire des cartes et
  pilules à la main.
- **Rayons** : 999 px / 16 px / 22 px. **Mouvement** : courbe `[0.16, 1, 0.3, 1]`,
  preset `reveal`, déclenché une fois au scroll.
- **Section type** : `relative overflow-hidden py-20 px-5`, contenu en
  `max-w-6xl mx-auto`, fonds alternés `--ink` / `--ink-2`.

Modèle de référence : `components/sections/Packs.tsx` et `app/packs/page.tsx`.

Si une demande impose de sortir de la DA, le signaler plutôt que de dériver en
silence.

## Structure

- `app/` — routes App Router ; `app/(fullscreen)/` échappe au header/footer.
- `components/sections/` — sections de page composables.
- `components/ui/ds/` — primitives de la DA (source unique).
- `components/ui/` — composants utilitaires historiques.
- `components/layout/` — header, footer, shell.
- `lib/brand.ts` — nom, baseline, coordonnées.

## Commandes

```bash
npm run dev     # développement
npm run build   # build de production — à faire passer avant tout commit
npm run lint    # ESLint (next/core-web-vitals)
```

## Conventions

- Composants en français côté contenu, code et commentaires en français.
- `"use client"` uniquement quand un hook ou une animation l'exige ; les pages
  restent des Server Components pour exporter `metadata`.
- Toute nouvelle route publique s'ajoute à `app/sitemap.ts`.
