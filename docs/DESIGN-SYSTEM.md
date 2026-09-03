# Fovea — Direction artistique

Référence unique de la DA Fovea. Toute page, section ou composant du site doit
s'y conformer. En cas de doute entre ce document et un bout de code existant,
**ce document fait foi**.

Implémentation : tokens dans `app/globals.css` (`:root`) et `tailwind.config.ts`,
primitives dans `components/ui/ds/`.

---

## 1. Principe

Fond quasi noir neutre, un seul rouge de marque, typographie Poppins.
Le rouge n'est jamais une décoration : il signale (accent de marque, point du
logo, tiret de liste, halo d'ambiance, mise en avant d'une offre). Tout le reste
est gris. Une page qui utilise le rouge partout est une page hors DA.

Les trois gestes récurrents de la marque :

1. **La pilule** — un label en capitales dans une pilule arrondie annonce chaque
   bloc (`Chip`).
2. **La carte posée** — un rectangle 16 px de rayon, légèrement plus clair que le
   fond, bordure d'un cheveu (`Surface`, `StatCard`, `ToolCard`, `PackCard`).
3. **Le halo** — un cercle rouge très flou en arrière-plan qui réchauffe un coin
   de la section (`GlowBackdrop`).

---

## 2. Couleurs

Les deux couleurs de marque sont `#141519` (fond) et `#E5524A` (accent).
Le reste de la palette en dérive.

| Token           | Valeur      | Usage                                     |
| --------------- | ----------- | ----------------------------------------- |
| `--ink`         | `#141519`   | fond de page — la couleur de marque       |
| `--ink-2`       | `#191A1F`   | section alternée, panneau                 |
| `--ink-3`       | `#1F2027`   | carte posée                               |
| `--ink-4`       | `#262832`   | survol, surface élevée                    |
| `--cream`       | `#F4F4F6`   | texte principal, titres                   |
| `--cream-dim`   | `#A6A7B0`   | texte courant, légendes                   |
| `--cream-faint` | `#6C6E79`   | mentions légales, méta                    |
| `--red`         | `#E5524A`   | accent de marque — la couleur de marque   |
| `--red-soft`    | `#F0796F`   | survol, fin de dégradé                    |
| `--red-deep`    | `#8E2F2A`   | début de dégradé sombre                   |
| `--red-wash`    | `rgba(229,82,74,.12)` | fond d'état actif / accent      |
| `--red-glow`    | `rgba(229,82,74,.30)` | halos d'arrière-plan            |
| `--rule`        | `rgba(244,244,246,.10)` | bordure standard              |
| `--rule-2`      | `rgba(244,244,246,.06)` | séparateur discret            |
| `--rule-strong` | `rgba(244,244,246,.18)` | bordure de pilule             |

Dégradés (`--grad-accent`, `--grad-banner`, `--grad-card`) : voir `:root`.

**Règles**

- Jamais de hex en dur dans un composant. Utiliser `var(--token)` ou la classe
  Tailwind correspondante. Pour du JS (framer-motion, SVG), importer `color` de
  `@/components/ui/ds`.
- Un seul rouge. Pas de second accent, pas d'orange, pas de rose.
- Le texte sur fond sombre : `--cream` pour les titres, `--cream-dim` pour le
  corps. Ne jamais descendre sous `--cream-faint` pour du texte lisible.
- Le rouge ne porte pas de texte long : réservé aux traits, points, bordures,
  halos et fonds de bouton. Sur un bouton rempli de rouge, le texte est `--ink`.

---

## 3. Typographie

**Poppins pour tout** — c'est la police du logo et du texte. Sora, Jakarta et
DM Mono restent chargées pour les sections historiques mais ne doivent pas être
utilisées dans du code neuf.

| Rôle                   | Réglage                                                   |
| ---------------------- | --------------------------------------------------------- |
| Logo (`FOVEA`)         | Poppins 800, capitales, `letter-spacing: -0.02em`, + point rouge |
| Titre de page (h1)     | Poppins 800, `clamp(34px, 6vw, 60px)`, `-0.04em`          |
| Titre de bandeau       | Poppins 700, capitales, `clamp(17px, 2.4vw, 26px)`        |
| Titre de carte         | Poppins 700, 15–19 px, `-0.01em`                          |
| Chiffre-clé            | Poppins 700, `clamp(18px, 2.2vw, 24px)`, `-0.02em`        |
| Label de pilule        | Poppins 600, 12 px, capitales, `letter-spacing: 0.10em`   |
| Texte courant          | Poppins 400, 13 px, `line-height: 1.7`, `--cream-dim`     |
| Légende                | Poppins 400 **italique**, 13 px, `--cream-dim`            |

L'italique est un marqueur fort de la DA : sous un chiffre, sous un nom d'outil,
sous un titre de carte, la précision se met toujours en italique (`.fv-caption`).

Le logo s'écrit avec `<Logo />` — jamais retapé à la main.

---

## 4. Espacement, rayons, mouvement

- **Rythme vertical** : sections en `py-20`, `px-5`, contenu en
  `max-w-6xl mx-auto`.
- **Grilles** : `gap-4` entre cartes chiffres, `gap-5` entre cartes de contenu,
  `gap-6` entre panneaux.
- **Rayons** : `999px` (pilule), `16px` (carte), `22px` (panneau). Rien d'autre.
- **Bordures** : toujours 1 px.
- **Mouvement** : une seule courbe, `[0.16, 1, 0.3, 1]`, et un seul preset
  d'apparition (`reveal` : `opacity 0→1`, `y 24→0`, 0.6 s), déclenché une fois au
  scroll. Décalage en cascade de 0.05 à 0.08 s par élément. Pas de rebond, pas de
  rotation, pas d'animation en boucle en dehors des halos et du grain.
- Le grain global (`body::before`) et les halos sont les seuls effets d'ambiance.

---

## 5. Primitives

Importer depuis `@/components/ui/ds` — ne pas réécrire ces boîtes à la main.

| Composant       | Rôle                                                        |
| --------------- | ----------------------------------------------------------- |
| `Logo`          | Mot-symbole `FOVEA` + point rouge                           |
| `Chip`          | Pilule de label (`solid` / `accent` / `ghost`, `dot`)       |
| `SectionBanner` | Bandeau pleine largeur, dégradé rouge, titre centré         |
| `Surface`       | Carte (16 px) ou panneau (22 px)                            |
| `StatCard`      | Chiffre-clé + légende italique                              |
| `ToolCard`      | Nom d'outil + sous-titre italique                           |
| `PackCard`      | Offre : nom en pilule, prix italique, inclusions à tirets   |
| `StepList`      | Étapes numérotées reliées par un filet vertical             |
| `DashList`      | Liste à tirets rouges                                       |
| `ContactPills`  | Téléphone + e-mail en pilules                               |
| `GlowBackdrop`  | Halos rouges d'arrière-plan                                 |

Classes CSS équivalentes si un composant n'est pas adapté : `.fv-chip`,
`.fv-card`, `.fv-panel`, `.fv-banner`, `.fv-glow`, `.fv-caption`, `.fv-list`.

---

## 6. Recette d'une section

```tsx
<section className="relative overflow-hidden py-20 px-5" style={{ background: "var(--ink)" }}>
  <GlowBackdrop placement="right" />

  <div className="relative max-w-6xl mx-auto">
    <Chip>Notre approche</Chip>

    <div className="grid md:grid-cols-3 gap-5 mt-8">
      {items.map((item) => (
        <Surface key={item.name} className="p-7 h-full">…</Surface>
      ))}
    </div>
  </div>
</section>
```

Les sections alternent `--ink` et `--ink-2` d'un bloc à l'autre.
`GlowBackdrop` exige un parent `relative overflow-hidden`, et le contenu qui
suit doit être `relative` pour passer au-dessus.

Référence vivante : `components/sections/Packs.tsx` et `app/packs/page.tsx`
appliquent la DA de bout en bout.

---

## 7. À ne pas faire

- Écrire `#fff`, `#000`, `oklch(...)` ou un rouge en dur.
- Introduire une police, un rayon ou une courbe d'animation supplémentaires.
- Utiliser le rouge comme couleur de texte courant ou de fond de section.
- Recréer une carte ou une pilule à la main quand la primitive existe.
- Empiler plusieurs effets (halo + dégradé + ombre colorée) sur un même élément.
- Mettre un titre en capitales ailleurs que dans une pilule ou un bandeau.
