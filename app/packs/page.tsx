import type { Metadata } from "next";
import Packs from "@/components/sections/Packs";
import { Chip, ContactPills, GlowBackdrop } from "@/components/ui/ds";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Nos packs d'accompagnement — Fovea | Starter, Growth & Scale",
  description:
    "Trois packs d'accompagnement publicitaire : tournages, scripts, vidéos et gestion de campagnes Meta, TikTok et Google Ads, à partir de 1 000 € par mois.",
};

export default function PacksPage() {
  return (
    <main className="pt-[64px]" style={{ background: "var(--ink)" }}>
      {/* En-tête de page */}
      <section className="relative overflow-hidden px-5 pt-16 pb-10">
        <GlowBackdrop placement="right" />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <Chip variant="ghost" dot>
                Communication Division
              </Chip>
              <h1
                className="font-poppins font-extrabold mt-5"
                style={{
                  fontSize: "clamp(34px, 6vw, 60px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  color: "var(--cream)",
                }}
              >
                Nos packs
                <br />
                d&apos;accompagnement
              </h1>
              <p
                className="font-poppins mt-5 max-w-[440px]"
                style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--cream-dim)" }}
              >
                {BRAND.baseline}. Production, diffusion et optimisation — un forfait mensuel clair,
                sans engagement caché.
              </p>
            </div>

            <ContactPills className="md:justify-end" />
          </div>
        </div>
      </section>

      <Packs />
    </main>
  );
}
