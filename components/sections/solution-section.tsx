"use client";
import dynamic from "next/dynamic";

const RadialOrbitalTimeline = dynamic(
  () => import("@/components/ui/radial-orbital-timeline"),
  { ssr: false }
);

const agentsData = [
  {
    id: 1,
    title: "IA Amont",
    subtitle: "Gen AI Documentaire",
    content: "Préparation de mission automatisée — synthèses sectorielles, cadrage client, veille contextuelle.",
    icon: "⬆",
    relatedIds: [2, 3],
    color: "#1A3A5C",
    energy: 100,
  },
  {
    id: 2,
    title: "Produits structurés",
    subtitle: "Marque blanche",
    content: "Livrables conseil entièrement automatisés, livrés aux clients finaux via les consultants du cabinet.",
    icon: "📄",
    relatedIds: [1, 3],
    color: "#C0392B",
    energy: 90,
  },
  {
    id: 3,
    title: "Activités internes",
    subtitle: "Industrialisation",
    content: "Activités cabinet industrialisées — prospection, reporting, suivi de mission.",
    icon: "⚙",
    relatedIds: [1, 2, 4],
    color: "#C0392B",
    energy: 80,
  },
  {
    id: 4,
    title: "IA Aval",
    subtitle: "Post-production",
    content: "Mise en forme augmentée, red team IA, REX automatique, dashboards clients.",
    icon: "⬇",
    relatedIds: [3, 5],
    color: "#1A3A5C",
    energy: 85,
  },
  {
    id: 5,
    title: "Interface Mission",
    subtitle: "5 Agents spécialisés",
    content: "Orchestrateur contexte + agents Cabinet, Métiers, Clients, Marché/secteur, Redline — chaque réponse ancrée dans vos documents.",
    icon: "🤝",
    relatedIds: [4, 6],
    color: "#E8C47A",
    energy: 95,
  },
  {
    id: 6,
    title: "Montée compétence",
    subtitle: "Formation IA",
    content: "Formation continue générée depuis le savoir du cabinet. Tutor 24/7, podcasts, tests, suivi collaborateur.",
    icon: "📚",
    relatedIds: [5],
    color: "#E8C47A",
    energy: 70,
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 px-6 bg-[#0F1E2E]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#E8C47A" }}>
            Notre réponse
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-snug">
            Une infrastructure IA<br />conçue pour le conseil
          </h2>
          <p className="mt-4 text-[#595959] max-w-xl mx-auto">
            Cliquez sur un nœud pour explorer les composants. Chaque élément est connecté aux autres.
          </p>
        </div>

        <RadialOrbitalTimeline timelineData={agentsData} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-8 border" style={{ background: "rgba(26,58,92,0.3)", borderColor: "rgba(26,58,92,0.6)" }}>
            <h3 className="text-white font-bold text-xl mb-3">Infrastructure de Delivery</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Gen AI Documentaire en 3 niveaux (IA amont → produits + activités → IA aval) + Interface de mission augmentée avec 5 agents spécialisés gardiens du contexte.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ background: "rgba(232,196,122,0.06)", borderColor: "rgba(232,196,122,0.3)" }}>
            <h3 className="text-white font-bold text-xl mb-3">Infrastructure de Montée en Compétence</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Quand l'IA absorbe le travail junior, le cabinet préserve sa machine à former les séniors — tutor 24/7, podcasts, tests, suivi collaborateur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
