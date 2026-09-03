/**
 * Halos rouges d'arrière-plan — la seule source de couleur d'ambiance de la DA.
 * À poser dans un conteneur `relative overflow-hidden`, avant le contenu.
 *
 * <GlowBackdrop placement="corner" />
 */
export default function GlowBackdrop({
  placement = "corner",
}: {
  /** `corner` : halo bas-gauche. `right` : halo droit. `both` : les deux. */
  placement?: "corner" | "right" | "both";
}) {
  const showCorner = placement === "corner" || placement === "both";
  const showRight = placement === "right" || placement === "both";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {showCorner && (
        <span className="fv-glow" style={{ left: "-14%", bottom: "-24%", width: "48vw", height: "48vw", opacity: 0.55 }} />
      )}
      {showRight && (
        <span className="fv-glow" style={{ right: "-16%", top: "-18%", width: "52vw", height: "52vw", opacity: 0.4 }} />
      )}
    </div>
  );
}
