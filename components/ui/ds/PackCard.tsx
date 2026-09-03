import DashList from "./DashList";

/**
 * Carte d'offre : nom dans une pilule, prix en italique, inclusions à tirets.
 *
 * <PackCard name="Growth" price="2 000 € / mois" features={["2 tournages"]} />
 */
export default function PackCard({
  name,
  price,
  features,
  featured = false,
  className = "",
}: {
  name: string;
  price: string;
  features: string[];
  /** Met le pack en avant (bordure rouge + halo). */
  featured?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`fv-card ${featured ? "fv-card--accent" : ""} p-6 h-full flex flex-col ${className}`.trim()}
      style={featured ? { boxShadow: "var(--shadow-glow)" } : undefined}
    >
      <div className="flex justify-center">
        <span
          className="fv-chip w-full justify-center"
          style={{ fontSize: "16px", letterSpacing: "-0.01em", textTransform: "none", fontWeight: 700 }}
        >
          {name}
        </span>
      </div>

      <p
        className="fv-caption text-center mt-3 mb-6"
        style={{ fontSize: "14px", color: "var(--cream)" }}
      >
        {price}
      </p>

      <DashList items={features} className="flex-1" />
    </article>
  );
}
