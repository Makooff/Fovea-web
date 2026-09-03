/**
 * FOVEA Design System — point d'entrée unique.
 *
 *   import { Chip, StatCard, PackCard } from "@/components/ui/ds";
 *
 * Toute nouvelle page ou section se construit avec ces primitives.
 * Spec et règles d'usage : docs/DESIGN-SYSTEM.md
 */

export { default as Chip } from "./Chip";
export { default as ContactPills } from "./ContactPills";
export { default as DashList } from "./DashList";
export { default as GlowBackdrop } from "./GlowBackdrop";
export { default as Logo } from "./Logo";
export { default as PackCard } from "./PackCard";
export { default as SectionBanner } from "./SectionBanner";
export { default as StatCard } from "./StatCard";
export { default as StepList } from "./StepList";
export { default as Surface } from "./Surface";
export { default as ToolCard } from "./ToolCard";

export type { Step } from "./StepList";
export { color, gradient, radius, ease, duration, reveal } from "./tokens";
