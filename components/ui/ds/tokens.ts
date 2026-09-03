/**
 * FOVEA — tokens de la direction artistique, côté TypeScript.
 *
 * Miroir des variables CSS de app/globals.css. À utiliser quand une valeur
 * doit être passée à une lib JS (framer-motion, SVG, canvas). Dans du JSX
 * classique, préférer `var(--red)` ou les classes Tailwind.
 *
 * Spec complète : docs/DESIGN-SYSTEM.md
 */

export const color = {
  ink: "#141519",
  ink2: "#191A1F",
  ink3: "#1F2027",
  ink4: "#262832",

  cream: "#F4F4F6",
  creamDim: "#A6A7B0",
  creamFaint: "#6C6E79",

  red: "#E5524A",
  redSoft: "#F0796F",
  redDeep: "#8E2F2A",
  redInk: "#2A1A1B",

  rule: "rgba(244, 244, 246, 0.10)",
  rule2: "rgba(244, 244, 246, 0.06)",
  ruleStrong: "rgba(244, 244, 246, 0.18)",
  redWash: "rgba(229, 82, 74, 0.12)",
  redGlow: "rgba(229, 82, 74, 0.30)",
} as const;

export const gradient = {
  accent: "linear-gradient(120deg, #E5524A 0%, #F0796F 100%)",
  banner: "linear-gradient(100deg, #1B1A1E 0%, #5E2A27 52%, #221C1E 100%)",
  card: "linear-gradient(150deg, #1F2027 0%, #2A1F21 100%)",
} as const;

export const radius = {
  chip: "999px",
  card: "16px",
  panel: "22px",
} as const;

/** Courbe d'animation unique de la marque. */
export const ease = [0.16, 1, 0.3, 1] as const;

/** Durées standard, en secondes. */
export const duration = {
  fast: 0.25,
  base: 0.6,
  slow: 0.9,
} as const;

/** Apparition au scroll : le seul preset de reveal de la DA. */
export const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.base, ease },
} as const;
