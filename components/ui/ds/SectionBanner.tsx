/**
 * Bandeau de section pleine largeur — dégradé sombre → rouge, titre centré
 * en capitales, mention optionnelle alignée à droite.
 *
 * <SectionBanner title="Nos packs d'accompagnements" note="(moyennes trimestrielles)" />
 */
export default function SectionBanner({
  title,
  note,
  className = "",
}: {
  title: string;
  /** Petite mention en capitales, calée à droite. */
  note?: string;
  className?: string;
}) {
  return (
    <div className={`fv-banner relative flex items-center justify-center px-6 py-4 ${className}`.trim()}>
      <h2
        className="font-poppins font-bold uppercase text-center"
        style={{
          fontSize: "clamp(17px, 2.4vw, 26px)",
          letterSpacing: "0.01em",
          color: "var(--cream)",
        }}
      >
        {title}
      </h2>

      {note && (
        <span
          className="hidden md:block absolute right-6 font-poppins font-semibold uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.12em", color: "var(--cream-dim)" }}
        >
          {note}
        </span>
      )}
    </div>
  );
}
