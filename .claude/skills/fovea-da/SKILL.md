---
name: fovea-da
description: Direction artistique Fovea — palette #141519 / #E5524A, typographie Poppins, primitives de composants. À utiliser pour toute création ou modification visuelle du site Fovea : nouvelle page, nouvelle section, composant UI, refonte d'un bloc, choix de couleurs, de typographie ou d'animation. Se déclenche aussi sur "DA", "charte", "design system", "au style Fovea", "comme les packs".
---

# DA Fovea

Applique la direction artistique Fovea à tout travail visuel sur ce dépôt.

## Marche à suivre

1. Lire `docs/DESIGN-SYSTEM.md` — c'est la spec complète et elle fait foi.
2. Pour un support de présentation (deck client, one-pager), suivre la
   section « Anatomie d'une planche » du même document.
3. Construire avec les primitives de `@/components/ui/ds` avant d'écrire du
   markup neuf. Si une primitive manque, l'ajouter dans `components/ui/ds/` et
   l'exporter depuis `index.ts` — ne pas dupliquer une carte dans une section.
4. Vérifier avec la checklist ci-dessous, puis `npm run build`.

## Les invariants

**Couleurs** — fond `#141519` (`--ink`), accent `#E5524A` (`--red`), un seul
accent. Les nuances (`--ink-2/3/4`, `--cream`, `--cream-dim`, `--cream-faint`,
`--red-soft`, `--red-wash`, `--red-glow`, `--rule`) sont dans `:root`
(`app/globals.css`). Aucune couleur en dur, jamais.

**Typographie** — Poppins partout. Logo et titres 800 avec interlettrage négatif,
texte courant 400 à 13 px `line-height 1.7` en `--cream-dim`, labels de pilule
600 en capitales `letter-spacing 0.10em`, légendes en **italique**
(`.fv-caption`). Le logo passe toujours par `<Logo />`.

**Formes** — rayons 999 px (pilule), 16 px (carte), 22 px (panneau) et rien
d'autre. Bordures 1 px en `--rule`. Cartes légèrement plus claires que leur fond.

**Mouvement** — courbe `[0.16, 1, 0.3, 1]`, preset `reveal` (opacité + 24 px de
translation, 0.6 s), déclenché une fois au scroll, cascade de 0.05–0.08 s.

**Structure de section** — `relative overflow-hidden py-20 px-5`, contenu
`relative max-w-6xl mx-auto`, `<GlowBackdrop />` en arrière-plan, fonds alternés
`--ink` / `--ink-2`, chaque bloc annoncé par un `<Chip>`.

## Primitives disponibles

`Logo` · `Chip` · `SectionBanner` · `Surface` · `StatCard` · `ToolCard` ·
`PackCard` · `StepList` · `DashList` · `ContactPills` · `GlowBackdrop`
— toutes exportées par `@/components/ui/ds`, avec les tokens `color`,
`gradient`, `radius`, `ease`, `duration`, `reveal`.

Équivalents CSS quand le composant ne convient pas : `.fv-chip`, `.fv-card`,
`.fv-panel`, `.fv-banner`, `.fv-glow`, `.fv-caption`, `.fv-list`.

## Checklist avant de rendre

- [ ] Aucun hex, `rgb()` ou `oklch()` en dur dans le code ajouté.
- [ ] Aucune police autre que Poppins.
- [ ] Rayons limités à 999 px / 16 px / 22 px.
- [ ] Les cartes, pilules et listes viennent de `components/ui/ds`.
- [ ] Le rouge sert d'accent, pas de fond de section ni de texte courant.
- [ ] Les légendes sous les chiffres et les titres sont en italique.
- [ ] Une seule courbe d'animation, apparitions déclenchées une fois.
- [ ] `npm run build` passe.
