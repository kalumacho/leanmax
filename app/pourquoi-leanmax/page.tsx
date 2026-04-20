import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import CtaSection from "@/components/sections/cta-section";

const differenciants = [
  {
    title: "Vertical conseil — pas horizontal",
    desc: "Dust et Mistral sont horizontaux : leurs agents s'appliquent à n'importe quelle entreprise. LeanMax est vertical — la logique métier cabinet est dans le produit, pas plaquée dessus.",
    vs: "Dust · Mistral",
  },
  {
    title: "Intégré, pas intermédiaire",
    desc: "Pas de couche supplémentaire entre votre infrastructure et le modèle. LeanMax s'intègre à votre tenant Azure existant sans rajouter de vendor.",
    vs: "Solutions stand-alone",
  },
  {
    title: "Forfait, jamais TJM",
    desc: "Notre rémunération n'est pas indexée sur votre temps — elle est indexée sur votre valeur. Pilote 90 jours · forfait fixe · ROI mesurable.",
    vs: "Consulting classique",
  },
  {
    title: "Scope mid-market strict",
    desc: "50 à 500 consultants. Pas d'extension à d'autres secteurs. La profondeur sectorielle que nous apportons n'est possible que parce que nous ne nous éparpillons pas.",
    vs: "Plateformes génériques",
  },
];

const philosophie = [
  "Le conseil ne peut plus défendre un modèle fondé sur le volume de ressources.",
  "Nous construisons l'infrastructure qui déplace la valeur vers ce qui restera rare : le jugement, la méthode, la gouvernance.",
  "Nous scalons par l'addition de puissance, pas de masse — cohérent avec ce que nous prêchons chez nos clients.",
];

export default function PourquoiLeanMaxPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 px-6 bg-[#F8F9FA]">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C0392B" }}>Différenciation</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Pourquoi LeanMax
            </h1>
            <p className="mt-6 text-xl text-[#595959] max-w-2xl leading-relaxed">
              Vertical conseil. Intégré. Sans TJM. Ce qui nous distingue des solutions horizontales du marché.
            </p>
          </div>
        </section>

        {/* Différenciants */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-6">
              {differenciants.map((d, i) => (
                <div key={i} className="rounded-2xl p-8 border border-[#E2E8F0] flex flex-col md:flex-row gap-6 hover:border-[#1A3A5C]/30 transition-colors">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{d.title}</h3>
                    <p className="text-[#595959] text-sm leading-relaxed">{d.desc}</p>
                  </div>
                  <div className="shrink-0 flex items-center">
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full border" style={{ color: "#595959", borderColor: "#E2E8F0" }}>
                      vs {d.vs}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophie */}
        <section className="py-20 px-6" style={{ background: "#0F1E2E" }}>
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#E8C47A" }}>Philosophie</span>
            <h2 className="mt-3 text-3xl font-bold text-white mb-12">Ce que nous croyons</h2>
            <div className="flex flex-col gap-8">
              {philosophie.map((p, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-4xl font-bold tabular-nums shrink-0" style={{ color: "rgba(255,255,255,0.1)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/80 text-lg leading-relaxed pt-2">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
