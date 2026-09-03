import { CONTACT } from "@/lib/brand";

/**
 * Coordonnées en pilules — le bloc contact récurrent de la DA
 * (en-tête de page interne, deck, bas de section).
 */
export default function ContactPills({ className = "" }: { className?: string }) {
  const items = [
    { label: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`.trim()}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="fv-chip fv-chip--ghost transition-colors duration-200 hover:!text-[var(--cream)]"
          style={{ textTransform: "none", letterSpacing: "0", fontWeight: 500, fontSize: "12px" }}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
