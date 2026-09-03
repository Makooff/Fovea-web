import type { ReactNode } from "react";

type ChipVariant = "solid" | "accent" | "ghost";

/**
 * Pilule de label — le marqueur de section de la DA Fovea.
 * Toujours en capitales, toujours au-dessus du contenu qu'elle annonce.
 *
 * <Chip>Notre mission</Chip>
 */
export default function Chip({
  children,
  variant = "solid",
  dot = false,
  className = "",
}: {
  children: ReactNode;
  variant?: ChipVariant;
  /** Point rouge de marque à gauche du label. */
  dot?: boolean;
  className?: string;
}) {
  const variantClass =
    variant === "accent" ? "fv-chip--accent" : variant === "ghost" ? "fv-chip--ghost" : "";

  return (
    <span className={`fv-chip ${variantClass} ${className}`.trim()}>
      {dot && (
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ background: "var(--red)" }}
        />
      )}
      {children}
    </span>
  );
}
