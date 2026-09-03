/**
 * Signature Fovea — mot-symbole Poppins 800 en capitales + point rouge.
 * C'est la seule écriture autorisée du logo : ne jamais le retaper à la main.
 *
 * <Logo size={26} />
 */
export default function Logo({
  size = 22,
  className = "",
}: {
  /** Taille du mot-symbole en px ; le point suit proportionnellement. */
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 select-none ${className}`.trim()}>
      <span
        style={{
          fontFamily: "var(--font-poppins)",
          fontWeight: 800,
          fontSize: `${size}px`,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          color: "var(--cream)",
        }}
      >
        FOVEA
      </span>
      <span
        className="inline-block rounded-full shrink-0"
        style={{
          width: `${Math.max(5, Math.round(size * 0.3))}px`,
          height: `${Math.max(5, Math.round(size * 0.3))}px`,
          background: "var(--red)",
        }}
      />
    </span>
  );
}
