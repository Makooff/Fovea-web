"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Chip,
  DashList,
  GlowBackdrop,
  PackCard,
  SectionBanner,
  StatCard,
  StepList,
  Surface,
  ToolCard,
  reveal,
  type Step,
} from "@/components/ui/ds";

const results: { value: string; caption: string }[] = [
  { value: "+ 4.5 ROAS", caption: "moyen sur vos comptes" },
  { value: "+ 116%", caption: "follow sur vos comptes" },
  { value: "+ 21,6%", caption: "réservation sur vos sites" },
  { value: "+ 1500", caption: "comptes qui vous découvrent" },
];

const figures: { value: string; caption: string }[] = [
  { value: "+ 100K EUR", caption: "de budget publicitaire géré" },
  { value: "+ 30 Entreprises", caption: "accompagnées" },
  { value: "3 ANS", caption: "d'expertise" },
  { value: "+ 4.5 ROAS", caption: "moyen sur vos comptes" },
];

const creations: { name: string; subtitle: string; desc: string }[] = [
  {
    name: "UGC",
    subtitle: "User Generated Content",
    desc: "Vidéos authentiques créées par des créateurs pour maximiser l'engagement et la confiance du client.",
  },
  {
    name: "Vidéo Promotion",
    subtitle: "Réels · TikTok",
    desc: "Courts formats vidéo conçus pour stopper le scroll et générer des conversions immédiates.",
  },
  {
    name: "Vidéo Communication",
    subtitle: "Visuels haute performance",
    desc: "Format servant à informer la clientèle d'un éventuel changement / nouveauté à lui conseiller.",
  },
];

const steps: Step[] = [
  {
    title: "Brief & Audit",
    desc: "Analyse de votre marché, vos concurrents et campagnes existantes pour définir la stratégie optimale.",
  },
  {
    title: "Stratégie & Création",
    desc: "Production de créatifs sur-mesure (UGC, vidéos, statiques) et structure de campagne adaptée.",
  },
  {
    title: "Lancement & A/B test",
    desc: "Déploiement avec tests systématiques des audiences, créatifs et messages clés.",
  },
  {
    title: "Optimisation & Scale",
    desc: "Ajustements quotidiens, scaling des campagnes rentables et reporting mensuel.",
  },
];

const tools: { name: string; subtitle: string; accent?: boolean }[] = [
  { name: "Meta Business Suite", subtitle: "Campagnes Meta & Instagram" },
  { name: "TikTok Ads Manager", subtitle: "Campagnes & analytics TikTok" },
  { name: "Google Ads", subtitle: "Search, Shopping & YouTube" },
  { name: "Google Analytics 4", subtitle: "Mesure & attribution" },
  { name: "Figma", subtitle: "Création de visuels & maquette" },
  { name: "Suite Adobe", subtitle: "Montage vidéo & contenu UGC" },
  { name: "Triple Whale", subtitle: "Attribution multi-touch" },
  { name: "Notion", subtitle: "Reporting & suivi de projet", accent: true },
];

const packs: { name: string; price: string; features: string[]; featured?: boolean }[] = [
  {
    name: "Starter",
    price: "1 000 € / mois",
    features: [
      "Budget ads jusqu'à 500 € par mois",
      "1 tournage",
      "2 scripts",
      "2 vidéos",
      "Gestion ads",
      "1 réunion / bilan par mois",
    ],
  },
  {
    name: "Growth",
    price: "2 000 € / mois",
    features: [
      "Budget ads jusqu'à 1 000 € par mois",
      "2 tournages",
      "4 scripts",
      "4 vidéos",
      "Gestion ads",
      "1 réunion / bilan par mois",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "3 000 € / mois",
    features: [
      "Budget ads jusqu'à 2 000 € par mois",
      "3 tournages",
      "8 scripts",
      "8 vidéos",
      "Gestion ads",
      "1 réunion / bilan par mois",
    ],
  },
];

const leviers = ["Meta Ads", "TikTok Ads", "Google Ads"];

/** Bloc qui apparaît au scroll, avec le preset de reveal de la DA. */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={reveal.initial}
      whileInView={reveal.animate}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ ...reveal.transition, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Packs() {
  return (
    <>
      {/* ---------- Résultats ---------- */}
      <section className="relative overflow-hidden py-20 px-5" style={{ background: "var(--ink)" }}>
        <GlowBackdrop placement="right" />

        <div className="relative max-w-6xl mx-auto">
          <Reveal>
            <SectionBanner title="Ce que nous avons accompli" note="(moyennes trimestrielles)" />
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {results.map((stat, i) => (
              <Reveal key={stat.caption} delay={i * 0.08}>
                <StatCard value={stat.value} caption={stat.caption} className="h-full" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Surface size="panel" className="mt-6 p-6 md:p-8">
              <p
                className="font-poppins font-bold underline underline-offset-4 mb-3"
                style={{ fontSize: "13px", color: "var(--cream)" }}
              >
                FOVEA :
              </p>
              <p
                className="font-poppins mb-5"
                style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--cream-dim)" }}
              >
                L&apos;agence de communication spécialisée dans la publicité en ligne, où chaque
                décision est guidée par la donnée et chaque campagne pensée pour performer.
              </p>
              <p
                className="font-poppins mb-5"
                style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--cream-dim)" }}
              >
                Dans un écosystème publicitaire en constante évolution, Fovea accompagne ses clients
                avec une approche centrée sur les résultats concrets : visibilité qualifiée,
                acquisition maîtrisée et retour sur investissement mesurable. Pour chaque euro
                investi, un impact attendu, suivi et délivré.
              </p>
              <p
                className="font-poppins font-bold underline underline-offset-4 mb-3"
                style={{ fontSize: "13px", color: "var(--cream)" }}
              >
                NOS PLUS :
              </p>
              <DashList
                items={[
                  "Une mise en relation avec notre réseau d'influenceurs adapté à votre niche.",
                  "Un rendez-vous mensuel afin de garder un suivi complet et de vous soumettre l'analyse statistique la plus détaillée.",
                  "Une équipe à votre service, composée de profils compétents et divers afin de s'adapter parfaitement à vos besoins (développeur web, photographe).",
                ]}
              />
            </Surface>
          </Reveal>
        </div>
      </section>

      {/* ---------- Mission & chiffres ---------- */}
      <section className="relative overflow-hidden py-20 px-5" style={{ background: "var(--ink-2)" }}>
        <GlowBackdrop placement="corner" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <Reveal>
            <Surface size="panel" className="p-7 h-full">
              <Chip>Notre mission</Chip>
              <p
                className="font-poppins font-bold mt-5 mb-4"
                style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--cream)" }}
              >
                Fovea est une agence de publicité spécialisée dans la performance et l&apos;impact
                sur le chiffre d&apos;affaires.
              </p>
              <p
                className="font-poppins mb-7"
                style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--cream-dim)" }}
              >
                Nous aidons les marques à grandir sur Meta, TikTok et Google grâce à des campagnes
                ultra ciblées, des créatifs qui convertissent et une optimisation data continue.
              </p>

              <Chip>Nos leviers</Chip>
              <ul className="mt-5 space-y-3">
                {leviers.map((levier) => (
                  <li key={levier} className="flex items-center gap-3">
                    <span
                      className="inline-block w-[11px] h-[11px] rounded-full shrink-0"
                      style={{ border: "1px solid var(--red)" }}
                    />
                    <span
                      className="font-poppins font-bold"
                      style={{ fontSize: "14px", color: "var(--cream)" }}
                    >
                      {levier}
                    </span>
                  </li>
                ))}
              </ul>
            </Surface>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <Chip>Quelques chiffres</Chip>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 mt-5">
              {figures.map((fig, i) => (
                <Reveal key={fig.caption} delay={0.12 + i * 0.07}>
                  <StatCard value={fig.value} caption={fig.caption} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Types de créations ---------- */}
      <section className="relative overflow-hidden py-20 px-5" style={{ background: "var(--ink)" }}>
        <GlowBackdrop placement="right" />

        <div className="relative max-w-6xl mx-auto">
          <Reveal>
            <Chip>Nos types de créations</Chip>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {creations.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <Surface className="p-7 h-full text-center">
                  <p
                    className="font-poppins font-bold"
                    style={{ fontSize: "19px", letterSpacing: "-0.02em", color: "var(--cream)" }}
                  >
                    {item.name}
                  </p>
                  <p className="fv-caption mt-1">{item.subtitle}</p>
                  <p
                    className="font-poppins mt-5"
                    style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--cream-dim)" }}
                  >
                    {item.desc}
                  </p>
                </Surface>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Approche & outils ---------- */}
      <section className="relative overflow-hidden py-20 px-5" style={{ background: "var(--ink-2)" }}>
        <GlowBackdrop placement="both" />

        <div className="relative max-w-6xl mx-auto">
          <Reveal>
            <Chip>Notre approche et nos outils</Chip>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mt-9">
            <Reveal delay={0.08}>
              <StepList steps={steps} />
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, i) => (
                <Reveal key={tool.name} delay={0.12 + i * 0.05}>
                  <ToolCard
                    name={tool.name}
                    subtitle={tool.subtitle}
                    accent={tool.accent}
                    className="h-full"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Packs ---------- */}
      <section
        id="packs"
        className="relative overflow-hidden py-20 px-5"
        style={{ background: "var(--ink)" }}
      >
        <GlowBackdrop placement="corner" />

        <div className="relative max-w-6xl mx-auto">
          <Reveal>
            <SectionBanner title="Nos packs d'accompagnements" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 mt-9">
            {packs.map((pack, i) => (
              <Reveal key={pack.name} delay={i * 0.08}>
                <PackCard
                  name={pack.name}
                  price={pack.price}
                  features={pack.features}
                  featured={pack.featured}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <div className="flex justify-center mt-10">
              <Link
                href="/contact"
                className="fv-chip transition-transform duration-200 active:scale-[0.97]"
                style={{
                  background: "var(--grad-accent)",
                  borderColor: "transparent",
                  color: "var(--ink)",
                  padding: "12px 26px",
                }}
              >
                Discuter de votre pack
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
