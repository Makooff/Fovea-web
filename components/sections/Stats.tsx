"use client";

import { useEffect, useRef, useState, memo } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

const stats = [
  { value: 120, suffix: "+", label: "Vidéos produites" },
  { value: 85,  suffix: "+", label: "Clients satisfaits" },
  { value: 4,   suffix: "×", label: "ROAS moyen" },
  { value: 2,   suffix: "",  label: "Marchés BE & FR" },
];

const CountUp = memo(function CountUp({
  target, suffix, active,
}: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const totalFrames = 72;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = () => {
      frame++;
      const progress = easeOut(Math.min(frame / totalFrames, 1));
      setCount(Math.floor(progress * target));
      if (frame < totalFrames) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target]);

  return <span>{count}{suffix}</span>;
});

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const bgY = useSpring(rawY, { stiffness: 50, damping: 15 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* Subtle horizontal rule top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--ink-3)", y: bgY }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center py-14 px-6 relative"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid var(--ink-3)"
                    : undefined,
              }}
            >
              {/* Number */}
              <motion.p
                className="font-sora font-thin leading-none mb-2 tabular-nums"
                style={{
                  fontSize: "clamp(44px, 6vw, 64px)",
                  letterSpacing: "-0.04em",
                  color: "var(--cream)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: i * 0.12 + 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} active={inView} />
              </motion.p>

              {/* Label */}
              <p
                className="font-mono text-[11px] text-center uppercase tracking-wider"
                style={{ color: "var(--cream-faint)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle horizontal rule bottom */}
      <div className="h-px" style={{ background: "var(--ink-3)" }} />
    </section>
  );
}
