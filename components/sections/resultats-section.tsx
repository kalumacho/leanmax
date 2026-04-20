const casUsages = [
  { label: "Note de cadrage sectorielle", avant: "3 jours", apres: "4 heures" },
  { label: "Étude de marché", avant: "2 semaines", apres: "3 jours" },
  { label: "Mapping des flux Invoicing", avant: "2 mois", apres: "2 semaines" },
  { label: "Cahier des charges", avant: "1 mois", apres: "1 semaine" },
  { label: "Target Operating Model (TOM)", avant: "2 mois", apres: "2 semaines" },
  { label: "Cas d'usages fonctionnels", avant: "3 mois", apres: "1 mois" },
];

const kpis = [
  { value: "−60%", label: "de temps de production documentaire" },
  { value: "+35%", label: "de productivité sénior sur la delivery" },
  { value: "90j", label: "pour un premier ROI mesurable" },
];

export default function ResultatsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C0392B" }}>
            Ce que ça donne
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Résultats concrets
          </h2>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {kpis.map((k) => (
            <div key={k.value} className="text-center rounded-2xl p-8 border border-[#E2E8F0] bg-[#F8F9FA]">
              <div className="text-5xl font-bold tabular-nums mb-3" style={{ color: "#1A3A5C" }}>
                {k.value}
              </div>
              <p className="text-sm text-[#595959] leading-snug">{k.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#E2E8F0]" style={{ background: "#F8F9FA" }}>
                <th className="text-left px-6 py-4 font-semibold text-[#1A1A1A]">Cas d'usage</th>
                <th className="text-center px-6 py-4 font-semibold text-[#595959]">Avant</th>
                <th className="text-center px-6 py-4 font-semibold" style={{ color: "#1A3A5C" }}>Après LeanMax</th>
              </tr>
            </thead>
            <tbody>
              {casUsages.map((row, i) => (
                <tr key={i} className="border-b border-[#E2E8F0] last:border-0 hover:bg-[#F8F9FA] transition-colors">
                  <td className="px-6 py-4 text-[#1A1A1A]">{row.label}</td>
                  <td className="px-6 py-4 text-center text-[#595959] line-through">{row.avant}</td>
                  <td className="px-6 py-4 text-center font-semibold" style={{ color: "#C0392B" }}>{row.apres}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
