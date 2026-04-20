"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const solutionItems = [
  {
    href: "/solution#delivery",
    label: "Infrastructure de Delivery",
    desc: "Gen AI Documentaire + Interface Mission",
  },
  {
    href: "/solution#gen-ai",
    label: "Gen AI Documentaire",
    desc: "IA amont · Produits structurés · IA aval",
  },
  {
    href: "/solution#interface",
    label: "Interface de Mission",
    desc: "Orchestrateur + 5 agents spécialisés",
  },
  {
    href: "/solution#competence",
    label: "Montée en Compétence",
    desc: "Formation IA générée depuis votre savoir",
  },
];

const links = [
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/pourquoi-leanmax", label: "Pourquoi LeanMax" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(e.target as Node)) {
        setSolutionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-[#E2E8F0]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5 font-bold text-xl tracking-tight">
          <span style={{ color: "#1A3A5C" }}>LEAN</span>
          <span style={{ color: "#C0392B" }}>Max</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {/* Solution avec sous-menu */}
          <li className="relative" ref={dropdownRef as React.RefObject<HTMLLIElement>}>
            <button
              className="flex items-center gap-1 text-sm font-medium text-[#595959] hover:text-[#1A3A5C] transition-colors"
              onClick={() => setSolutionOpen(!solutionOpen)}
              onMouseEnter={() => setSolutionOpen(true)}
            >
              Solution
              <ChevronDown
                size={14}
                className="transition-transform duration-200"
                style={{ transform: solutionOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            {/* Dropdown */}
            {solutionOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl overflow-hidden"
                onMouseLeave={() => setSolutionOpen(false)}
              >
                <div className="p-2">
                  {solutionItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-[#F8F9FA] transition-colors group"
                      onClick={() => setSolutionOpen(false)}
                    >
                      <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#1A3A5C] transition-colors">
                        {item.label}
                      </span>
                      <span className="text-xs text-[#595959]">{item.desc}</span>
                    </Link>
                  ))}
                  <div className="mx-4 my-2 border-t border-[#E2E8F0]" />
                  <Link
                    href="/solution"
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors hover:bg-[#F8F9FA]"
                    style={{ color: "#C0392B" }}
                    onClick={() => setSolutionOpen(false)}
                  >
                    Vue d'ensemble
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            )}
          </li>

          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm font-medium text-[#595959] hover:text-[#1A3A5C] transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "#1A3A5C" }}
        >
          Diagnostic gratuit
        </Link>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0] px-6 py-4 flex flex-col gap-2">
          {/* Solution expandable */}
          <button
            className="flex items-center justify-between w-full py-2 text-sm font-medium text-[#595959]"
            onClick={() => setMobileSolutionOpen(!mobileSolutionOpen)}
          >
            Solution
            <ChevronDown
              size={14}
              className="transition-transform duration-200"
              style={{ transform: mobileSolutionOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
          {mobileSolutionOpen && (
            <div className="pl-4 flex flex-col gap-2 pb-2">
              {solutionItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#595959] py-1"
                  onClick={() => { setOpen(false); setMobileSolutionOpen(false); }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-2 text-sm font-medium text-[#595959]"
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}

          <Link href="/contact" className="mt-2 py-2 text-sm font-semibold" style={{ color: "#C0392B" }}
            onClick={() => setOpen(false)}>
            Diagnostic gratuit →
          </Link>
        </div>
      )}
    </header>
  );
}
