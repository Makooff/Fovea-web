import type { Metadata } from "next";
import Link from "next/link";
import RevealWrapper from "@/components/ui/RevealWrapper";
import QwillioLogo from "@/components/ui/QwillioLogo";
import QwillioName from "@/components/ui/QwillioName";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Partenaire Qwillio — Fovea | Email AI, Payments AI & Sites sur mesure",
  description:
    "Qwillio est le partenaire exclusif de Fovea. Réceptionniste IA, Email AI, Payments AI disponibles sur Qwillio.com — et des sites web sur mesure exclusivement pour les clients Fovea.",
};

const features = [
  {
    title: "Réceptionniste IA",
    desc: "Agent vocal et textuel disponible 24h/24 pour accueillir, qualifier et rediriger vos prospects. Zéro appel manqué, zéro opportunité perdue.",
    pills: ["Vocal", "Textuel", "24h/24", "Qualification"],
    public: true,
  },
  {
    title: "Email AI",
    desc: "Votre boîte mail entièrement automatisée. L'IA lit, classe, répond et relance — confirmations de rendez-vous, séquences de suivi, détection de spam.",
    pills: ["Gmail & Outlook", "Classification IA", "Réponses auto", "Analytics"],
    public: true,
  },
  {
    title: "Payments AI",
    desc: "Liens de paiement SMS via Stripe, dépôts automatiques, enforcement des no-shows, facturation automatique et dashboard revenus en temps réel.",
    pills: ["Stripe natif", "SMS payment", "Facturation auto", "Dashboard"],
    public: true,
  },
  {
    title: "Sites web sur mesure",
    desc: "Qwillio conçoit des sites web performants — mais cette prestation n'est pas proposée sur Qwillio.com. Elle est réservée exclusivement aux clients Fovea.",
    pills: ["Design sur mesure", "Performance", "SEO", "Exclusif Fovea"],
    public: false,
  },
];

function Pill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider"
      style={{ border: "1px solid var(--ink-4)", color: "var(--cream-dim)" }}
    >
      {label}
    </span>
  );
}

export default function PartenairePage() {
  return (
    <main className="pt-[52px]" style={{ background: "var(--ink)" }}>
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <RevealWrapper className="mb-16 text-center">
            <p
              className="font-mono text-[10px] uppercase tracking-wider mb-6"
              style={{ color: "var(--cream-faint)" }}
            >
              Partenaire exclusif
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <QwillioLogo size={56} />
              <QwillioName size="56px" />
            </div>
            <p
              className="font-sora font-light text-sm max-w-xl mx-auto leading-relaxed mb-6"
              style={{ color: "var(--cream-dim)" }}
            >
              Qwillio propose au grand public une réceptionniste IA, un agent Email AI
              et un agent Payments AI. En plus de ça, Qwillio conçoit des sites web
              sur mesure — uniquement pour les clients Fovea, sans les proposer sur
              Qwillio.com. Un avantage exclusif inclus dans votre partenariat Fovea.
            </p>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{ background: "var(--ink-2)", border: "1px solid var(--ink-4)" }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--cream)" }}
              />
              <span
                className="font-sora font-light text-xs"
                style={{ color: "var(--cream-dim)" }}
              >
                Sites web accessibles uniquement aux clients Fovea
              </span>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://qwillio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-sora font-light text-sm transition-colors"
                style={{ color: "var(--cream)" }}
              >
                Visiter Qwillio.com
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="inline-block ml-1.5 shrink-0">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <RevealWrapper key={i} delay={i * 100}>
                <div
                  className="p-7 rounded-2xl h-full flex flex-col"
                  style={{
                    background: "var(--ink-2)",
                    border: "1px solid var(--ink-4)",
                  }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--cream)", border: "1px solid var(--cream)" }}
                    >
                      <QwillioLogo size={18} />
                    </div>
                    {f.public ? (
                      <span
                        className="font-mono text-[9px] uppercase tracking-wider rounded-full px-2.5 py-1"
                        style={{ border: "1px solid var(--ink-4)", color: "var(--cream-faint)" }}
                      >
                        Qwillio.com
                      </span>
                    ) : (
                      <span
                        className="font-mono text-[9px] uppercase tracking-wider rounded-full px-2.5 py-1"
                        style={{ background: "var(--cream)", color: "var(--ink)" }}
                      >
                        Exclusif Fovea
                      </span>
                    )}
                  </div>
                  <h3
                    className="font-sora font-light text-[20px] mb-3 leading-snug"
                    style={{ color: "var(--cream)" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="font-sora font-light text-sm leading-relaxed mb-5 flex-1"
                    style={{ color: "var(--cream-dim)" }}
                  >
                    {f.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {f.pills.map((p) => (
                      <Pill key={p} label={p} />
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 px-5"
        style={{ background: "var(--ink)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <RevealWrapper>
            <p
              className="font-mono text-[10px] uppercase tracking-wider mb-4"
              style={{ color: "var(--cream-faint)" }}
            >
              Comment y accéder
            </p>
            <h2
              className="font-sora font-thin tracking-tighter mb-5"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                letterSpacing: "-0.04em",
                color: "var(--cream)",
              }}
            >
              Un avantage inclus dans votre partenariat Fovea
            </h2>
            <p
              className="font-sora font-light text-sm leading-relaxed mb-8 max-w-md mx-auto"
              style={{ color: "var(--cream-dim)" }}
            >
              La réceptionniste IA, l&apos;Email AI et le Payments AI sont disponibles
              sur Qwillio.com. Les sites web sur mesure, eux, sont réservés aux
              clients Fovea — un avantage que vous activez dès le début de votre projet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full font-sora font-medium text-sm px-6 py-3 transition-colors"
              style={{
                background: "var(--cream)",
                color: "var(--ink)",
              }}
            >
              Démarrer avec Fovea
            </Link>
          </RevealWrapper>
        </div>
      </section>

      <CTA />
    </main>
  );
}
