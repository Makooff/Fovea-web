import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/ui/RevealWrapper";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Campagnes Ads — Fovea | Google, Meta, TikTok & LinkedIn",
  description:
    "Gestion de campagnes publicitaires sur Google Ads, Meta Ads, TikTok et LinkedIn. Créatifs vidéo inclus. ROAS moyen 4×. Agence Fovea — BE & FR.",
};

const platforms = [
  {
    name: "Meta Ads",
    desc: "Facebook & Instagram — Reels, Stories, Carrousels. Ciblage audience précis, lookalike, retargeting. Créatifs vidéo optimisés pour le feed mobile.",
    metrics: [{ label: "ROAS moyen", value: "4.2×" }, { label: "CPM moyen", value: "6.40€" }],
    photo: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=800&auto=format&fit=crop",
  },
  {
    name: "Google Ads",
    desc: "Search, Display, YouTube, Performance Max. Campagnes axées intention d'achat avec créatifs vidéo adaptés à chaque format Google.",
    metrics: [{ label: "CTR moyen", value: "3.8%" }, { label: "CPC moyen", value: "0.72€" }],
    photo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  },
  {
    name: "TikTok Ads",
    desc: "TopView, In-Feed, Spark Ads. Contenus natifs conçus pour stopper le scroll. Production vidéo verticale incluse dans chaque campagne.",
    metrics: [{ label: "Taux de vue", value: "68%" }, { label: "CPM moyen", value: "4.10€" }],
    photo: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop",
  },
  {
    name: "LinkedIn Ads",
    desc: "Sponsored Content, Video Ads, Lead Gen. Idéal pour le B2B, les marques employeur et les lancements de produits SaaS ou services pro.",
    metrics: [{ label: "Taux conv.", value: "2.4%" }, { label: "CPL moyen", value: "18€" }],
    photo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
  },
];

const process = [
  { num: "01", title: "Audit & Stratégie", desc: "Analyse de vos campagnes existantes, identification des opportunités, définition des KPIs et du plan média." },
  { num: "02", title: "Production créative", desc: "Tournage et montage des vidéos publicitaires. Formats adaptés à chaque plateforme. Versions A/B prêtes au test." },
  { num: "03", title: "Lancement & Ciblage", desc: "Mise en ligne sur toutes les plateformes, paramétrage des audiences, bid strategy et budget allocation." },
  { num: "04", title: "Optimisation continue", desc: "Analyse hebdomadaire des performances, A/B testing créatifs, ajustement des audiences et reporting mensuel." },
];

const results = [
  { client: "Groupe Belux", sector: "Retail BE", stat: "+347%", label: "ROAS en 3 mois", photo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&auto=format&fit=crop" },
  { client: "TechStart Brussels", sector: "SaaS B2B", stat: "2.3M", label: "Vues organiques", photo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&auto=format&fit=crop" },
  { client: "ModeMarket", sector: "E-commerce FR", stat: "−62%", label: "CPA vs avant Fovea", photo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&auto=format&fit=crop" },
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

export default function CampagneAdsPage() {
  return (
    <main className="pt-[56px]" style={{ background: "var(--ink)" }}>

      {/* Hero */}
      <section className="py-16 sm:py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <RevealWrapper>
              <p className="font-mono text-[10px] uppercase tracking-wider mb-4" style={{ color: "var(--cream-faint)" }}>
                Campagnes publicitaires
              </p>
              <h1
                className="font-sora font-thin tracking-tighter mb-6"
                style={{ fontSize: "clamp(36px, 5.5vw, 68px)", letterSpacing: "-0.04em", color: "var(--cream)" }}
              >
                Chaque euro investi doit rapporter davantage.
              </h1>
              <p className="font-sora font-light text-base leading-relaxed mb-8" style={{ color: "var(--cream-dim)" }}>
                Nous lançons et gérons vos campagnes Google, Meta, TikTok et LinkedIn.
                Les créatifs vidéo sont inclus — ce qui garantit une cohérence totale
                entre le message et son exécution publicitaire.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads", "YouTube Ads", "Display"].map((p) => (
                  <Pill key={p} label={p} />
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full font-sora font-medium text-sm px-6 py-3 transition-colors"
                style={{ background: "var(--cream)", color: "var(--ink)" }}
              >
                Lancer une campagne
              </Link>
            </RevealWrapper>

            <RevealWrapper delay={100}>
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{ aspectRatio: "4/3", background: "var(--ink-2)", border: "1px solid var(--ink-3)" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop"
                  alt="Campagnes Ads Fovea"
                  fill
                  className="object-cover"
                />
                {/* Stat overlay */}
                <div
                  className="absolute bottom-5 left-5 right-5 p-5 rounded-xl"
                  style={{ background: "rgba(20, 21, 25, 0.85)", border: "1px solid var(--ink-4)", backdropFilter: "blur(12px)" }}
                >
                  <p className="font-mono text-[9px] uppercase tracking-wider mb-1" style={{ color: "var(--cream-faint)" }}>
                    Performance moyenne clients Fovea
                  </p>
                  <p className="font-sora font-thin text-3xl" style={{ color: "var(--cream)", letterSpacing: "-0.04em" }}>
                    ROAS 4.2×
                  </p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-5" style={{ background: "var(--ink)" }}>
        <div className="max-w-6xl mx-auto">
          <RevealWrapper className="mb-14">
            <p className="font-mono text-[10px] uppercase tracking-wider mb-3" style={{ color: "var(--cream-faint)" }}>
              Plateformes
            </p>
            <h2
              className="font-sora font-thin tracking-tighter"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.04em", color: "var(--cream)" }}
            >
              Toutes les plateformes, un seul interlocuteur
            </h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {platforms.map((p, i) => (
              <RevealWrapper key={i} delay={i * 80}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--ink-3)" }}
                >
                  <div className="relative w-full" style={{ aspectRatio: "16/7", background: "var(--ink-2)" }}>
                    <Image
                      src={p.photo}
                      alt={p.name}
                      fill
                      className="object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-end p-5">
                      <h3 className="font-sora font-thin text-2xl" style={{ color: "var(--cream)", letterSpacing: "-0.03em" }}>
                        {p.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6" style={{ background: "var(--ink)" }}>
                    <p className="font-sora font-light text-sm leading-relaxed mb-5" style={{ color: "var(--cream-dim)" }}>
                      {p.desc}
                    </p>
                    <div className="flex gap-6">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="font-sora font-thin text-2xl" style={{ color: "var(--cream)", letterSpacing: "-0.03em" }}>
                            {m.value}
                          </p>
                          <p className="font-mono text-[9px] uppercase tracking-wider" style={{ color: "var(--cream-faint)" }}>
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-5" style={{ background: "var(--ink)" }}>
        <div className="max-w-3xl mx-auto">
          <RevealWrapper className="mb-14">
            <p className="font-mono text-[10px] uppercase tracking-wider mb-3" style={{ color: "var(--cream-faint)" }}>
              Notre méthode
            </p>
            <h2
              className="font-sora font-thin tracking-tighter"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.04em", color: "var(--cream)" }}
            >
              Du brief au ROAS
            </h2>
          </RevealWrapper>

          <div style={{ borderTop: "1px solid var(--ink-3)" }}>
            {process.map((step, i) => (
              <RevealWrapper
                key={i}
                className="grid gap-6 py-8"
                style={{ gridTemplateColumns: "56px 1fr", borderBottom: "1px solid var(--ink-3)" }}
                delay={i * 80}
              >
                <span className="font-mono text-[11px]" style={{ color: "var(--cream-faint)", paddingTop: "3px" }}>
                  {step.num}
                </span>
                <div>
                  <h3
                    className="font-sora font-light text-lg mb-2"
                    style={{ color: "var(--cream)", letterSpacing: "-0.02em" }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-sora font-light text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
                    {step.desc}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-5" style={{ background: "var(--ink)" }}>
        <div className="max-w-6xl mx-auto">
          <RevealWrapper className="mb-14">
            <p className="font-mono text-[10px] uppercase tracking-wider mb-3" style={{ color: "var(--cream-faint)" }}>
              Résultats clients
            </p>
            <h2
              className="font-sora font-thin tracking-tighter"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.04em", color: "var(--cream)" }}
            >
              Des chiffres qui parlent
            </h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {results.map((r, i) => (
              <RevealWrapper key={i} delay={i * 80}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--ink-3)" }}
                >
                  <div className="relative w-full" style={{ aspectRatio: "16/9", background: "var(--ink-2)" }}>
                    <Image
                      src={r.photo}
                      alt={r.client}
                      fill
                      className="object-cover opacity-50"
                    />
                  </div>
                  <div className="p-6" style={{ background: "var(--ink)" }}>
                    <p className="font-mono text-[9px] uppercase tracking-wider mb-1" style={{ color: "var(--cream-faint)" }}>
                      {r.client} · {r.sector}
                    </p>
                    <p
                      className="font-sora font-thin mb-1"
                      style={{ fontSize: "38px", letterSpacing: "-0.04em", color: "var(--cream)" }}
                    >
                      {r.stat}
                    </p>
                    <p className="font-sora font-light text-sm" style={{ color: "var(--cream-dim)" }}>
                      {r.label}
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
