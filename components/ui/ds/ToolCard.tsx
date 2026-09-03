/**
 * Carte outil / offre : nom en gras, sous-titre en italique.
 * Utilisée en grille de 2 colonnes (outils, plateformes, formats).
 *
 * <ToolCard name="Meta Business Suite" subtitle="Campagnes Meta & Instagram" />
 */
export default function ToolCard({
  name,
  subtitle,
  accent = false,
  className = "",
}: {
  name: string;
  subtitle?: string;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`fv-card ${accent ? "fv-card--accent" : ""} px-5 py-5 text-center ${className}`.trim()}
    >
      <p
        className="font-poppins font-bold"
        style={{ fontSize: "15px", letterSpacing: "-0.01em", color: "var(--cream)" }}
      >
        {name}
      </p>
      {subtitle && <p className="fv-caption mt-1">{subtitle}</p>}
    </div>
  );
}
