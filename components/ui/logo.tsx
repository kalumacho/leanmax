import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({
  className,
  size = "md",
  variant = "light",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}) {
  const scales = {
    sm: { mark: 18, text: "text-base", gap: "gap-2" },
    md: { mark: 22, text: "text-xl", gap: "gap-2.5" },
    lg: { mark: 28, text: "text-2xl", gap: "gap-3" },
  };
  const s = scales[size];

  return (
    <Link href="/" className={cn("flex items-center", s.gap, className)}>
      {/* Geometric mark — two stacked chevrons suggesting upward scaling */}
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        {/* Top chevron — RED */}
        <path
          d="M4 10L12 4L20 10"
          stroke="#C0392B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bottom chevron — NAVY on light, white on dark */}
        <path
          d="M4 16L12 10L20 16"
          stroke={variant === "dark" ? "#ffffff" : "#1A3A5C"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={variant === "dark" ? 0.5 : 0.65}
        />
      </svg>

      {/* Wordmark */}
      <span className={cn("font-bold tracking-tight leading-none", s.text)}>
        <span
          className="font-extrabold"
          style={{ color: variant === "dark" ? "#ffffff" : "#1A3A5C", letterSpacing: "-0.02em" }}
        >
          Lean
        </span>
        <span
          className="font-black"
          style={{ color: "#C0392B", letterSpacing: "-0.03em" }}
        >
          Max
        </span>
      </span>
    </Link>
  );
}
