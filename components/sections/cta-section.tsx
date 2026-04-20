import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#1A3A5C" }}>
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Prêt à scaler par la puissance ?
        </h2>
        <p className="text-white/60 text-lg max-w-xl leading-relaxed">
          Diagnostic gratuit sur une business line — identification des 3 cas d'usage à ROI immédiat.
          Pilote 90 jours · Forfait fixe · Pas de TJM.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact"
            className="px-10 py-4 rounded-xl text-sm font-semibold text-[#1A3A5C] transition-opacity hover:opacity-90"
            style={{ background: "#E8C47A" }}>
            Diagnostic gratuit
          </Link>
          <Link href="/solution"
            className="px-10 py-4 rounded-xl text-sm font-semibold text-white border border-white/30 transition-colors hover:border-white/60">
            Voir la solution →
          </Link>
        </div>
        <p className="text-white/30 text-xs">Vertical conseil · Microsoft Azure · Pas de TJM</p>
      </div>
    </section>
  );
}
