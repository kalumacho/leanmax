"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

function FloatingPaths({ position }: { position: number }) {
  // Durées déterministes — pas de Math.random() pour éviter l'erreur d'hydratation
  const durations = [22,25,28,21,24,27,30,23,26,29,20,25,22,28,24,27,21,26,23,29,25,22,28,24,27,30,21,26,23,25,28,22,29,24,27,21];
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
    duration: durations[i],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["la delivery", "le savoir", "la méthode", "la valeur sénior", "la compétence"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2800);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0F1E2E]">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto flex flex-col items-center gap-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="gap-3 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80"
              asChild
            >
              <Link href="/pourquoi-leanmax">
                Vertical Conseil
              </Link>
            </Button>
          </motion.div>

          {/* Title — une seule ligne */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-center flex flex-wrap items-center justify-center gap-x-4">
            {/* "Scalez" */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Scalez
            </span>

            {/* Mot rotatif — hauteur et largeur fixes, overflow caché */}
            <span
              className="relative overflow-hidden inline-block"
              style={{ height: "1.2em", minWidth: "14ch", verticalAlign: "middle" }}
            >
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute inset-0 flex items-center justify-center font-bold text-transparent bg-clip-text whitespace-nowrap"
                  style={{ backgroundImage: "linear-gradient(to right, #E85D4A, #C0392B)" }}
                  initial={{ opacity: 0, y: 60 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -60 : 60, opacity: 0 }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-white/40 leading-relaxed font-light max-w-xl"
          >
            L'infrastructure IA des cabinets de conseil — pour produire plus vite, capitaliser le savoir et préserver la valeur sénior là où elle restera rare.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="inline-block group relative bg-gradient-to-b from-white/10 to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Button
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-black/95 hover:bg-black/100 text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/10 hover:shadow-md"
                asChild
              >
                <Link href="/contact">
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                    Diagnostic gratuit
                  </span>
                  <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                    →
                  </span>
                </Link>
              </Button>
            </div>

            <div className="inline-block group relative bg-gradient-to-b from-white/5 to-black/5 p-px rounded-2xl backdrop-blur-lg overflow-hidden transition-shadow duration-300">
              <Button
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-transparent hover:bg-white/5 text-white/50 hover:text-white/80 transition-all duration-300 group-hover:-translate-y-0.5 border border-white/10"
                asChild
              >
                <Link href="/solution">
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                    Voir la solution
                  </span>
                  <PhoneCall className="ml-3 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
