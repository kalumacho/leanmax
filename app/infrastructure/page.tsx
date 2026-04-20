import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import CtaSection from "@/components/sections/cta-section";

const stack = [
  {
    category: "IA & LLM",
    items: [
      { name: "Azure OpenAI", desc: "Modèles GPT-4o déployés dans le tenant Azure du cabinet" },
      { name: "Azure AI Search", desc: "Moteur RAG vectoriel — indexation des documents cabinet" },
      { name: "LangChain", desc: "Orchestration des agents et des chaînes de traitement" },
    ],
    color: "#1A3A5C",
  },
  {
    category: "Automatisation & Agents",
    items: [
      { name: "Copilot Studio", desc: "Déploiement des agents sur Teams et SharePoint" },
      { name: "n8n", desc: "Workflows d'automatisation no-code / low-code" },
      { name: "Docker / Kubernetes", desc: "Conteneurisation et orchestration des services" },
    ],
    color: "#C0392B",
  },
  {
    category: "Intégration M365",
    items: [
      { name: "Microsoft Teams", desc: "Point d'entrée principal pour les agents mission" },
      { name: "SharePoint / OneDrive", desc: "Source de vérité documentaire — indexée dans le RAG" },
      { name: "Python", desc: "Développements custom, scripts de traitement, API internes" },
    ],
    color: "#E8C47A",
  },
];

const raisons = [
  { title: "Déjà dans votre tenant", desc: "Les cabinets mid-market sont massivement équipés M365. L'infrastructure LeanMax s'intègre sans nouveau vendor." },
  { title: "Souveraineté des données", desc: "Les données restent dans votre environnement Azure. Aucun document cabinet ne sort de votre tenant." },
  { title: "Sécurité enterprise", desc: "Conformité aux politiques de sécurité Microsoft — SSO, Azure AD, RBAC, audit logs." },
  { title: "Pas d'intermédiaire", desc: "LeanMax est vertical et intégré — pas de couche supplémentaire entre vos données et le modèle." },
];

export default function InfrastructurePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 px-6" style={{ background: "#0F1E2E" }}>
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#E8C47A" }}>Infrastructure</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
              Full cloud Azure.<br />Zéro nouveau vendor.
            </h1>
            <p className="mt-6 text-xl text-white/60 max-w-2xl leading-relaxed">
              LeanMax s'appuie sur la stack Microsoft déjà en place dans votre cabinet — et la transforme en infrastructure IA.
            </p>
          </div>
        </section>

        {/* Stack */}
        <section className="py-20 px-6 bg-[#F8F9FA]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-12">Stack technique</h2>
            <div className="flex flex-col gap-12">
              {stack.map((s) => (
                <div key={s.category}>
                  <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: s.color }}>
                    {s.category}
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {s.items.map((item) => (
                      <div key={item.name} className="rounded-2xl p-6 bg-white border border-[#E2E8F0]">
                        <p className="font-bold text-[#1A1A1A] mb-2">{item.name}</p>
                        <p className="text-sm text-[#595959] leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Raisons Microsoft-first */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-12">Pourquoi Microsoft-first ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {raisons.map((r) => (
                <div key={r.title} className="rounded-2xl p-8 border border-[#E2E8F0]">
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-3">{r.title}</h3>
                  <p className="text-[#595959] text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Socle RAG */}
        <section className="py-20 px-6" style={{ background: "#0F1E2E" }}>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#E8C47A" }}>Socle commun</span>
            <h2 className="mt-3 text-3xl font-bold text-white mb-6">Infrastructure IA · Full Cloud Azure · RAG</h2>
            <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
              Un socle partagé entre les deux blocs — delivery et montée en compétence. La même base documentaire alimente les agents mission et les formations automatiques.
            </p>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
