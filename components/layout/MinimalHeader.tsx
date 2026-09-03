"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/ui/ds/Logo";

const navLinks = [
  { label: "Réalisations", href: "/realisations" },
  { label: "Packs", href: "/packs" },
];

export default function MinimalHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center px-5"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: scrolled ? "rgba(14, 11, 16, 0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="inline-flex">
          <Logo size={22} />
        </Link>

        <div className="flex items-center gap-2.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden sm:inline-flex items-center font-poppins font-medium text-[13px] transition-colors duration-200"
              style={{ color: "var(--cream-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream-dim)")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full font-poppins font-semibold text-[12px] uppercase tracking-wide px-4 py-[9px] transition-all duration-200 active:scale-[0.97]"
            style={{
              border: "1px solid var(--rule-strong)",
              color: "var(--cream)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--red)";
              e.currentTarget.style.background = "var(--red-wash)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--rule-strong)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
