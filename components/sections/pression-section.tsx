const points = [
  {
    number: "01",
    text: "Le conseil ne pourra plus défendre durablement un modèle fondé sur le temps humain.",
  },
  {
    number: "02",
    text: "L'IA compresse les marges : production commoditisée, middle management en recul, livrables réplicables par des modèles.",
  },
  {
    number: "03",
    text: "Ce qui était rare devient commun. Ce qui était junior devient automatisable. Le nombre de consultants n'est plus un levier de performance.",
  },
  {
    number: "04",
    text: "La valeur se déplace vers ce qui restera rare : le jugement, la méthode, la gouvernance — pas le livrable.",
  },
];

export default function PressionSection() {
  return (
    <section className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C0392B" }}>
            Le contexte
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-snug">
            Le conseil sous pression
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {points.map((p) => (
            <div key={p.number} className="flex gap-6 items-start">
              <span className="text-3xl font-bold tabular-nums shrink-0"
                style={{ color: "#E2E8F0" }}>
                {p.number}
              </span>
              <p className="text-lg text-[#1A1A1A] leading-relaxed pt-1">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
