"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#1A3A5C"
            strokeWidth={path.width}
            strokeOpacity={0.06 + path.id * 0.018}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "Scalez par la puissance pas par la masse",
  subtitle = "L'infrastructure IA des cabinets de conseil — industrialisez la delivery, capitalisez le savoir, préservez la valeur sénior.",
  ctaLabel = "Diagnostic gratuit",
  ctaHref = "/contact",
  badge = "Infrastructure IA · Vertical Conseil",
}: {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  badge?: string;
}) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Subtle red accent bottom-right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(192,57,43,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 border text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#C0392B", borderColor: "rgba(192,57,43,0.25)", background: "rgba(192,57,43,0.04)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C0392B" }} />
            {badge}
          </motion.div>

          {/* Animated title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        wordIndex < 3
                          ? "linear-gradient(to bottom right, #1A3A5C, #2D5F8A)"
                          : "linear-gradient(to bottom right, #C0392B, #E85D4A)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg text-[#595959] mb-12 leading-relaxed max-w-xl mx-auto font-light"
          >
            {subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <div className="inline-block group relative p-px rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ background: "linear-gradient(to bottom, rgba(26,58,92,0.15), rgba(255,255,255,0.1))" }}>
              <Button
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white text-[#1A3A5C] transition-all duration-300 group-hover:-translate-y-0.5 border border-[#1A3A5C]/10 hover:shadow-md"
                asChild
              >
                <Link href={ctaHref}>
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">{ctaLabel}</span>
                  <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">→</span>
                </Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <Button variant="ghost" className="px-8 py-6 text-lg text-[#595959] hover:text-[#1A3A5C] transition-colors" asChild>
                <Link href="/solution">Voir la solution →</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-3 gap-8 max-w-sm mx-auto"
          >
            {[
              { value: "−60%", label: "temps de production" },
              { value: "+35%", label: "productivité sénior" },
              { value: "90j", label: "premier ROI" },
            ].map((m) => (
              <div key={m.value} className="text-center">
                <div className="text-2xl font-bold tabular-nums" style={{ color: "#1A3A5C" }}>{m.value}</div>
                <div className="text-xs text-[#595959] mt-1 leading-snug">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
