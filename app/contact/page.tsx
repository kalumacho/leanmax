import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

const etapes = [
  { num: "01", title: "Diagnostic gratuit", desc: "Un appel de 45 min pour identifier les 3 cas d'usage à ROI immédiat sur votre business line." },
  { num: "02", title: "Accès démo", desc: "Démonstration live des composants sur un cas d'usage réel de votre cabinet." },
  { num: "03", title: "Pilote 90 jours", desc: "Déploiement sur une business line. Forfait fixe. Premier ROI mesurable garanti." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-24 px-6 bg-[#F8F9FA]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C0392B" }}>Contact</span>
              <h1 className="mt-3 text-4xl font-bold text-[#1A1A1A] leading-tight mb-6">
                Premier pas
              </h1>
              <p className="text-[#595959] leading-relaxed mb-12">
                Diagnostic gratuit sur une business line — identification des 3 cas d'usage à ROI immédiat. Ou accès démo.
              </p>

              <div className="flex flex-col gap-8">
                {etapes.map((e) => (
                  <div key={e.num} className="flex gap-5">
                    <span className="text-2xl font-bold tabular-nums shrink-0" style={{ color: "#E2E8F0" }}>{e.num}</span>
                    <div>
                      <p className="font-bold text-[#1A1A1A] mb-1">{e.title}</p>
                      <p className="text-sm text-[#595959] leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col gap-3">
                <a href="mailto:ilan.s.bek@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-[#1A1A1A] font-medium hover:text-[#1A3A5C] transition-colors">
                  ilan.s.bek@gmail.com
                </a>
                <a href="tel:+33687565179"
                  className="inline-flex items-center gap-2 text-sm text-[#1A1A1A] font-medium hover:text-[#1A3A5C] transition-colors">
                  06 87 56 51 79
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm">
              <h2 className="font-bold text-[#1A1A1A] text-xl mb-6">Prendre contact</h2>
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1A1A1A]">Nom & prénom *</label>
                  <input type="text" className="rounded-lg border border-[#E2E8F0] px-4 py-3 text-sm outline-none focus:border-[#1A3A5C] transition-colors" placeholder="Jean Dupont" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1A1A1A]">Email professionnel *</label>
                  <input type="email" className="rounded-lg border border-[#E2E8F0] px-4 py-3 text-sm outline-none focus:border-[#1A3A5C] transition-colors" placeholder="jean.dupont@cabinet.fr" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1A1A1A]">Cabinet</label>
                  <input type="text" className="rounded-lg border border-[#E2E8F0] px-4 py-3 text-sm outline-none focus:border-[#1A3A5C] transition-colors" placeholder="Nom du cabinet" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1A1A1A]">Taille du cabinet</label>
                  <select className="rounded-lg border border-[#E2E8F0] px-4 py-3 text-sm outline-none focus:border-[#1A3A5C] transition-colors bg-white text-[#595959]">
                    <option value="">Sélectionner</option>
                    <option>50–100 consultants</option>
                    <option>100–250 consultants</option>
                    <option>250–500 consultants</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1A1A1A]">Message</label>
                  <textarea rows={4} className="rounded-lg border border-[#E2E8F0] px-4 py-3 text-sm outline-none focus:border-[#1A3A5C] transition-colors resize-none" placeholder="Décrivez votre contexte ou la business line à diagnostiquer..." />
                </div>
                <button type="submit"
                  className="rounded-xl py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: "#1A3A5C" }}>
                  Envoyer
                </button>
                <p className="text-xs text-[#595959] text-center">Pilote 90 jours · Forfait fixe · Pas de TJM</p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
