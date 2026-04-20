"use client";

import { motion, type Variants } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.12]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.06)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function HeroGeometric({
  badge = "Infrastructure IA · Vertical Conseil",
  title1 = "Scalez par la puissance,",
  title2 = "pas par la masse.",
  description = "L'infrastructure IA des cabinets de conseil — industrialisez la delivery, capitalisez le savoir, préservez la valeur sénior.",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  description?: string;
}) {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ background: "#0A1628" }}>
      {/* Ambient gradient */}
      <div className="absolute inset-0 blur-3xl"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(26,58,92,0.4), transparent), radial-gradient(ellipse 40% 30% at 80% 80%, rgba(192,57,43,0.15), transparent)" }} />

      {/* Shapes — NAVY + RED + GOLD */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.3} width={600} height={140} rotate={12}
          gradient="from-[#1A3A5C]/[0.25]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15}
          gradient="from-[#C0392B]/[0.2]"
          className="right-[-5%] md:right-[0%] top-[65%] md:top-[70%]" />
        <ElegantShape delay={0.4} width={300} height={80} rotate={-8}
          gradient="from-[#1A3A5C]/[0.2]"
          className="left-[5%] md:left-[10%] bottom-[10%] md:bottom-[15%]" />
        <ElegantShape delay={0.6} width={200} height={60} rotate={20}
          gradient="from-[#E8C47A]/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
        <ElegantShape delay={0.7} width={150} height={40} rotate={-25}
          gradient="from-[#C0392B]/[0.12]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 md:mb-12"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Circle className="h-2 w-2" style={{ fill: "#C0392B", color: "#C0392B" }} />
            <span className="text-sm text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          {/* Title */}
          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to bottom, #FFFFFF, rgba(255,255,255,0.75))" }}>
                {title1}
              </span>
              <br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #7BA3C8, #FFFFFF, #E8A09A)" }}>
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {description}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact"
              className="px-8 py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "#C0392B" }}>
              Diagnostic gratuit
            </Link>
            <Link href="/solution"
              className="px-8 py-3.5 rounded-xl text-sm font-semibold border transition-colors"
              style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)" }}>
              Voir la solution →
            </Link>
          </motion.div>

          {/* Metrics */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto"
          >
            {[
              { value: "−60%", label: "temps de production" },
              { value: "+35%", label: "productivité sénior" },
              { value: "90j", label: "premier ROI" },
            ].map((m) => (
              <div key={m.value} className="text-center">
                <div className="text-2xl font-bold tabular-nums" style={{ color: "#E8C47A" }}>{m.value}</div>
                <div className="text-xs text-white/30 mt-1 leading-snug">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Top/bottom fades */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(10,22,40,0.6) 0%, transparent 30%, transparent 70%, rgba(10,22,40,0.8) 100%)" }} />
    </div>
  );
}
