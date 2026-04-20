"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["la delivery", "le savoir", "la méthode", "la valeur sénior", "la compétence"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">

          {/* Badge */}
          <div>
            <Button
              variant="secondary"
              size="sm"
              className="gap-4 text-xs font-semibold uppercase tracking-widest"
              style={{ background: "rgba(192,57,43,0.06)", color: "#C0392B", border: "1px solid rgba(192,57,43,0.2)" }}
              asChild
            >
              <Link href="/pourquoi-leanmax">
                Infrastructure IA · Vertical Conseil <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Title */}
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-bold leading-tight">
              <span style={{ color: "#1A3A5C" }}>Industrialisez</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1" style={{ minHeight: "1.2em" }}>
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold"
                    style={{ color: "#C0392B" }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-[#595959] max-w-2xl text-center">
              L'infrastructure IA des cabinets de conseil — pour produire plus vite, capitaliser le savoir et préserver la valeur sénior là où elle restera rare.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-row gap-3">
            <Button
              size="lg"
              className="gap-4 font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ background: "#1A3A5C" }}
              asChild
            >
              <Link href="/contact">
                Diagnostic gratuit <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="gap-4 font-semibold border-[#E2E8F0] text-[#1A3A5C] hover:bg-[#F8F9FA]"
              variant="outline"
              asChild
            >
              <Link href="/contact">
                Prendre contact <PhoneCall className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Metrics */}
          <div className="flex gap-12 pt-4">
            {[
              { value: "−60%", label: "temps de production" },
              { value: "+35%", label: "productivité sénior" },
              { value: "90j", label: "premier ROI" },
            ].map((m) => (
              <div key={m.value} className="text-center">
                <div className="text-2xl font-bold tabular-nums" style={{ color: "#1A3A5C" }}>{m.value}</div>
                <div className="text-xs text-[#595959] mt-1">{m.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export { Hero };
