import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import CtaSection from "@/components/sections/cta-section";
import Link from "next/link";

const niveaux = [
  {
    tag: "Niveau 1",
    title: "IA en amont",
    desc: "Préparation de mission automatisée — synthèses sectorielles, cadrage client, veille contextuelle. S'applique à tout produit ou activité du cabinet.",
    color: "#1A3A5C",
  },
  {
    tag: "Niveau 2a",
    title: "Produits structurés",
    desc: "Livrables conseil entièrement automatisés, livrés aux clients finaux en marque blanche via les consultants du cabinet.",
    color: "#C0392B",
  },
  {
    tag: "Niveau 2b",
    title: "Activités internes",
    desc: "Activités cabinet industrialisées — prospection, reporting, suivi de mission, capitalisation.",
    color: "#C0392B",
  },
  {
    tag: "Niveau 3",
    title: "IA en aval",
    desc: "Post-production augmentée — mise en forme, red team IA, REX automatique, dashboards clients. S'applique à tout produit ou activité.",
    color: "#1A3A5C",
  },
];

const agents = [
  { name: "Cabinet", desc: "Contexte organisationnel, méthodes, historique missions" },
  { name: "Métiers", desc: "Expertise sectorielle, référentiels, livrables types" },
  { name: "Clients", desc: "Historique client, enjeux, interlocuteurs clés" },
  { name: "Marché / Secteur", desc: "Veille sectorielle, benchmarks, tendances" },
  { name: "Redline", desc: "Contrôle qualité, relecture critique, alignement méthode" },
];

const formations = [
  "Tutor IA 24/7", "Instant Flashcards", "Audio Podcasts",
  "Written Tests", "Smart Paper Grading", "Suivi employé",
  "Plateforme RH", "Création automatique de formations (RAG)",
];

export default function SolutionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 px-6 bg-[#F8F9FA]">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C0392B" }}>Solution</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
              L'infrastructure produit LeanMax
            </h1>
            <p className="mt-6 text-xl text-[#595959] max-w-2xl leading-relaxed">
              Deux blocs complémentaires sur un socle Azure commun — delivery augmentée et montée en compétence automatisée.
            </p>
          </div>
        </section>

        {/* Bloc 1 — Delivery */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Bloc 1 — Infrastructure de Delivery</h2>
            <p className="text-[#595959] mb-12 max-w-xl">Gen AI Documentaire en 3 niveaux séquentiels, plus l'Interface de mission augmentée.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {niveaux.map((n) => (
                <div key={n.tag} className="rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#1A3A5C]/30 transition-colors">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: n.color }}>{n.tag}</span>
                  <h3 className="mt-2 text-xl font-bold text-[#1A1A1A] mb-3">{n.title}</h3>
                  <p className="text-[#595959] text-sm leading-relaxed">{n.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-10 border" style={{ background: "#0F1E2E", borderColor: "rgba(232,196,122,0.3)" }}>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#E8C47A" }}>Interface de mission augmentée</span>
              <h3 className="mt-2 text-2xl font-bold text-white mb-4">5 Agents spécialisés</h3>
              <p className="text-white/60 text-sm mb-8 max-w-xl">
                Une équipe d'agents intelligents, gardiens du contexte mission — chaque réponse ancrée dans vos documents et vos méthodes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {agents.map((a) => (
                  <div key={a.name} className="rounded-xl p-4 border" style={{ background: "rgba(232,196,122,0.06)", borderColor: "rgba(232,196,122,0.2)" }}>
                    <p className="text-white font-semibold mb-1">Agent {a.name}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{a.desc}</p>
                  </div>
                ))}
                <div className="rounded-xl p-4 border border-white/10" style={{ background: "rgba(26,58,92,0.3)" }}>
                  <p className="text-white font-semibold mb-1">Orchestrateur</p>
                  <p className="text-white/50 text-xs leading-relaxed">Coordonne les agents, gère le contexte global de la mission.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bloc 2 — Compétence */}
        <section className="py-20 px-6 bg-[#F8F9FA]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Bloc 2 — Infrastructure de Montée en Compétence</h2>
            <p className="text-[#595959] mb-12 max-w-2xl">
              Quand l'IA absorbe le travail junior, le cabinet perd sa machine à former ses séniors. LeanMax préserve cette machine — et l'automatise.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {formations.map((f) => (
                <div key={f} className="rounded-xl p-5 bg-white border border-[#E2E8F0] text-sm font-medium text-[#1A1A1A]">
                  {f}
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
