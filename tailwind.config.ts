import type { Config } from "tailwindcss";

/**
 * FOVEA — tokens Tailwind.
 * Miroir de :root dans app/globals.css. Source de vérité : docs/DESIGN-SYSTEM.md.
 * Toute nouvelle couleur doit d'abord exister comme variable CSS.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Encres
        ink: "#141519",
        "ink-2": "#191A1F",
        "ink-3": "#1F2027",
        "ink-4": "#262832",
        // Textes
        cream: "#F4F4F6",
        "cream-dim": "#A6A7B0",
        "cream-faint": "#6C6E79",
        // Accent
        red: "#E5524A",
        "red-soft": "#F0796F",
        "red-deep": "#8E2F2A",
        "red-ink": "#2A1A1B",
        // Alias historiques (anciennes sections)
        "sun-1": "#E5524A",
        "sun-2": "#F0796F",
        black: "#141519",
        dark: "#191A1F",
        mid: "#6C6E79",
        light: "#A6A7B0",
        border: "rgba(244, 244, 246, 0.10)",
        ghost: "#191A1F",
        offwhite: "#F4F4F6",
      },
      fontFamily: {
        // Poppins porte le logo et le texte courant : c'est la police par défaut.
        poppins: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
        sora: ["var(--font-sora)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wider: "0.1em",
        widest: "0.14em",
      },
      borderRadius: {
        card: "16px",
        panel: "22px",
      },
      boxShadow: {
        card: "0 1px 0 rgba(244,244,246,0.04) inset, 0 18px 40px -24px rgba(0,0,0,0.9)",
        glow: "0 0 60px -12px rgba(229, 82, 74, 0.30)",
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(120deg, #E5524A 0%, #F0796F 100%)",
        "grad-banner": "linear-gradient(100deg, #1B1A1E 0%, #5E2A27 52%, #221C1E 100%)",
        "grad-card": "linear-gradient(150deg, #1F2027 0%, #2A1F21 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
