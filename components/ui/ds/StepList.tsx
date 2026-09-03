/**
 * Étapes numérotées avec filet vertical — la mise en page « approche » de la DA.
 *
 * <StepList steps={[{ title: "Brief & Audit", desc: "…" }]} />
 */
export type Step = { title: string; desc: string };

export default function StepList({
  steps,
  className = "",
}: {
  steps: Step[];
  className?: string;
}) {
  return (
    <ol className={`relative pl-7 ${className}`.trim()}>
      {/* Filet vertical qui relie les étapes */}
      <span
        className="absolute left-0 top-1 bottom-1 w-px"
        style={{ background: "var(--rule)" }}
        aria-hidden
      />

      {steps.map((step, i) => (
        <li key={step.title} className={i === steps.length - 1 ? "" : "mb-7"}>
          <div className="flex gap-3">
            <span
              className="font-poppins font-semibold shrink-0"
              style={{ fontSize: "13px", color: "var(--red)" }}
            >
              {i + 1}.
            </span>
            <div>
              <p
                className="font-poppins font-bold mb-1"
                style={{ fontSize: "15px", letterSpacing: "-0.01em", color: "var(--cream)" }}
              >
                {step.title}
              </p>
              <p
                className="font-poppins"
                style={{ fontSize: "12.5px", lineHeight: 1.65, color: "var(--cream-dim)" }}
              >
                {step.desc}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
