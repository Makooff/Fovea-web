import type { ElementType, ReactNode } from "react";

/**
 * Surface posée — la boîte de base de la DA (carte ou panneau).
 * Toute zone de contenu encadrée passe par ici plutôt que par un
 * `rounded-* border` écrit à la main.
 *
 * <Surface as="article" tone="accent">…</Surface>
 */
export default function Surface({
  children,
  as: Tag = "div",
  size = "card",
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  /** `card` = 16px de rayon, `panel` = 22px pour les grands blocs. */
  size?: "card" | "panel";
  tone?: "default" | "accent";
  className?: string;
}) {
  const base = size === "panel" ? "fv-panel" : "fv-card";
  const toneClass = tone === "accent" && size === "card" ? "fv-card--accent" : "";

  return <Tag className={`${base} ${toneClass} ${className}`.trim()}>{children}</Tag>;
}
