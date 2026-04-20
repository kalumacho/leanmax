import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A3A5C] text-white/70 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="flex items-center gap-1 font-bold text-xl text-white mb-3">
            <span>LEAN</span>
            <span style={{ color: "#C0392B" }}>Max</span>
          </div>
          <p className="text-sm italic text-white/50">Scalez par la puissance, pas par la masse.</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/solution" className="hover:text-white transition-colors">Solution</Link>
          <Link href="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link>
          <Link href="/pourquoi-leanmax" className="hover:text-white transition-colors">Pourquoi LeanMax</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a href="mailto:ilan.s.bek@gmail.com" className="hover:text-white transition-colors">ilan.s.bek@gmail.com</a>
          <a href="tel:+33687565179" className="hover:text-white transition-colors">06 87 56 51 79</a>
          <span className="text-white/30">Leanmax.fr</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/30 text-center">
        © {new Date().getFullYear()} LeanMax. Tous droits réservés.
      </div>
    </footer>
  );
}
