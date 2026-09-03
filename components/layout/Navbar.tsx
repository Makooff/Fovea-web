"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Ads", href: "/campagne-ads" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/apropos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 z-[60] h-[2px] origin-left"
        style={{ scaleX: scrollYProgress, background: "var(--cream)" }}
      />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 h-[56px] flex items-center"
        initial={{ y: -56 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: scrolled ? "rgba(20, 21, 25, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--ink-3)" : "1px solid transparent",
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div className="max-w-6xl mx-auto w-full px-5 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-nova.png"
              alt="Nova"
              width={72}
              height={24}
              style={{ filter: "brightness(0) invert(1)" }}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sora font-light text-sm transition-colors duration-200"
                style={{ color: "var(--cream-dim)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream-dim)")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center rounded-full font-sora font-medium text-[12px] px-4 py-[7px] transition-all duration-200 active:scale-[0.97]"
              style={{ background: "var(--cream)", color: "var(--ink)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cream-dim)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--cream)")}
            >
              Contact
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-[5px] p-1 z-50 relative"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <span
                className="block w-5 h-px transition-all duration-300"
                style={{
                  background: "var(--cream)",
                  transform: menuOpen ? "rotate(45deg) translate(0, 4px)" : "none",
                }}
              />
              <span
                className="block w-5 h-px transition-all duration-300"
                style={{ background: "var(--cream)", opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-px transition-all duration-300"
                style={{
                  background: "var(--cream)",
                  transform: menuOpen ? "rotate(-45deg) translate(0, -4px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
