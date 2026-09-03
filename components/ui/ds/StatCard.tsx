/**
 * Carte chiffre-clé : valeur en gras, légende en italique.
 * C'est la seule façon d'afficher un résultat chiffré dans la DA.
 *
 * <StatCard value="+ 4.5 ROAS" caption="moyen sur vos comptes" />
 */
export default function StatCard({
  value,
  caption,
  accent = false,
  className = "",
}: {
  value: string;
  caption: string;
  /** Fond dégradé rouge, pour mettre une valeur en avant. */
  accent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`fv-card ${accent ? "fv-card--accent" : ""} px-5 py-6 text-center ${className}`.trim()}
    >
      <p
        className="font-poppins font-bold"
        style={{
          fontSize: "clamp(18px, 2.2vw, 24px)",
          letterSpacing: "-0.02em",
          color: "var(--cream)",
        }}
      >
        {value}
      </p>
      <p className="fv-caption mt-1.5">{caption}</p>
    </div>
  );
}
