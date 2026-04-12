import PricingCard from "./PricingCard";

// ─────────────────────────────────────────────────────────────────────────────
// EOLYALABS — PricingTable
// Tableau comparatif des 3 forfaits. La carte Métabolique est mise en valeur
// (highlighted). Inclut l'en-tête de section, les marqueurs biologiques complets
// et une barre de garanties bas de page.
// ─────────────────────────────────────────────────────────────────────────────

const PLANS = [
  {
    name: "Vitalité",
    tagline: "Focus carences, énergie et récupération",
    price: "597 $",
    description:
      "Le point de départ pour comprendre vos fondations biologiques. Identifiez vos carences critiques et mettez fin à la fatigue chronique.",
    markers: [
      "Formule sanguine complète (FSC)",
      "Ferritine & fer sérique",
      "Vitamine D (25-OH)",
      "Vitamine B12 & folates",
      "Magnésium sérique",
      "Zinc",
      "TSH — fonction thyroïdienne de base",
      "Glycémie à jeun & HbA1c",
      "CRP — marqueur d'inflammation",
      "Bilan hépatique (ALT, AST, GGT)",
    ],
    ideal:
      "Vous êtes épuisé sans raison apparente, manquez de concentration ou récupérez difficilement après vos efforts.",
    highlighted: false,
    animationDelay: 0,
  },
  {
    badge: "Best-Seller",
    name: "Métabolique",
    tagline: "Focus perte de gras, insuline et thyroïde",
    price: "897 $",
    description:
      "Notre protocole le plus demandé. Décryptez votre métabolisme profond et transformez votre composition corporelle avec précision clinique.",
    markers: [
      "Tout du forfait Vitalité, plus :",
      "Insuline à jeun",
      "HOMA-IR (résistance à l'insuline)",
      "Bilan lipidique complet (LDL, HDL, TG, ApoB)",
      "T3 libre + T4 libre (thyroïde étendue)",
      "Cortisol matinal",
      "DHEA-S",
      "Leptine & ghréline",
      "Acide urique",
      "Homocystéine",
      "Adiponectine",
    ],
    ideal:
      "Vous luttez contre la prise de gras persistante, avez des fringales incontrôlables ou un métabolisme qui semble bloqué malgré vos efforts.",
    highlighted: true,
    animationDelay: 120,
  },
  {
    name: "Élite",
    tagline: "Focus hormones, performance et longévité",
    price: "1 297 $",
    description:
      "Le protocole ultime pour les performeurs exigeants. Optimisez votre capital hormonal complet et repoussez les limites de votre potentiel biologique.",
    markers: [
      "Tout du forfait Métabolique, plus :",
      "Testostérone totale & libre",
      "SHBG (Sex Hormone Binding Globulin)",
      "Oestradiol (E2)",
      "Progestérone",
      "LH & FSH",
      "Prolactine",
      "IGF-1 (axe hormone de croissance)",
      "Cortisol soir (cycle circadien)",
      "Anti-TPO & anti-thyroglobuline",
      "Oméga-3 Index",
      "Panel acides aminés essentiels",
    ],
    ideal:
      "Vous êtes un athlète, entrepreneur ou individu exigeant qui refuse de fonctionner en dessous de son maximum biologique.",
    highlighted: false,
    animationDelay: 240,
  },
];

const GUARANTEES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12a11.955 11.955 0 00-.598-6 11.959 11.959 0 01-7.402 2.036A12.001 12.001 0 0112 2.964z" />
      </svg>
    ),
    label: "Requête officielle émise par nos soins",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: "Analysé par les deux experts ensemble",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    label: "Protocole remis sous 48–72h",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
      </svg>
    ),
    label: "Appel de remise de résultats inclus",
  },
];

export default function PricingTable({ onSelectPlan }) {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "#0A192F" }}
      id="forfaits"
      aria-label="Tableau des forfaits Eolyalabs"
    >
      {/* ── Bruit de texture ──────────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* ── Halo central ──────────────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── En-tête de section ────────────────────────────────────────────── */}
        <div className="text-center mb-20">
          <p
            className="font-sans text-xs tracking-widest2 uppercase font-medium mb-4"
            style={{ color: "#C9A96E" }}
          >
            Nos Forfaits
          </p>
          <h2
            className="font-serif text-5xl sm:text-6xl font-semibold text-white mb-6 leading-tight"
          >
            Choisissez votre niveau
            <br />
            <em className="not-italic" style={{ color: "#C9A96E" }}>
              d&apos;optimisation biologique.
            </em>
          </h2>
          <div
            className="w-12 h-px mx-auto mb-8"
            style={{ backgroundColor: "rgba(201,169,110,0.4)" }}
          />
          <p
            className="font-sans text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#8492A6" }}
          >
            Chaque forfait inclut la requête officielle, le prélèvement privé
            via Biron ou CDL, l&apos;analyse par les deux experts, et un protocole
            complet de 4 semaines — entièrement personnalisé.
          </p>
        </div>

        {/* ── Grille des 3 cartes ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start lg:items-stretch">
          {PLANS.map((plan) => (
            <PricingCard
              key={plan.name}
              {...plan}
              onSelect={onSelectPlan}
            />
          ))}
        </div>

        {/* ── Tableau comparatif rapide ─────────────────────────────────────── */}
        <div
          className="mt-16 overflow-x-auto rounded-sm"
          style={{ border: "1px solid rgba(132,146,166,0.1)" }}
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr style={{ backgroundColor: "#0D2040" }}>
                <th
                  className="text-left px-6 py-4 font-sans text-xs tracking-widest uppercase font-semibold"
                  style={{ color: "rgba(132,146,166,0.7)", width: "40%" }}
                >
                  Ce qui est inclus
                </th>
                {["Vitalité", "Métabolique", "Élite"].map((col) => (
                  <th
                    key={col}
                    className="px-6 py-4 font-sans text-xs tracking-widest uppercase font-semibold text-center"
                    style={{
                      color: col === "Métabolique" ? "#C9A96E" : "rgba(132,146,166,0.7)",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Requête officielle d'analyses", true, true, true],
                ["Prélèvement Biron / CDL", true, true, true],
                ["Analyse par les deux experts", true, true, true],
                ["Protocole nutrition personnalisé", true, true, true],
                ["Protocole suppléments dosé", true, true, true],
                ["Appel de remise de résultats", true, true, true],
                ["Panel bilan hormonal complet", false, false, true],
                ["Analyse axe GH (IGF-1)", false, false, true],
                ["Bilan thyroïdien étendu (Anti-TPO)", false, false, true],
                ["Insuline & résistance insulinique", false, true, true],
                ["Cortisol (matin & soir)", false, true, true],
                ["Bilan lipidique avancé (ApoB)", false, true, true],
              ].map(([feature, vitalite, metabolique, elite], idx) => (
                <tr
                  key={feature}
                  style={{
                    backgroundColor:
                      idx % 2 === 0 ? "rgba(13,32,64,0.4)" : "rgba(10,25,47,0.6)",
                    borderBottom: "1px solid rgba(132,146,166,0.06)",
                  }}
                >
                  <td
                    className="px-6 py-3.5 font-sans text-sm"
                    style={{ color: "#A8B8CC" }}
                  >
                    {feature}
                  </td>
                  {[vitalite, metabolique, elite].map((included, i) => (
                    <td key={i} className="px-6 py-3.5 text-center">
                      {included ? (
                        <svg
                          className="w-4 h-4 mx-auto"
                          style={{ color: "#C9A96E" }}
                          fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span
                          className="block w-4 h-px mx-auto"
                          style={{ backgroundColor: "rgba(132,146,166,0.3)" }}
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Barre de garanties ────────────────────────────────────────────── */}
        <div
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {GUARANTEES.map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-3 px-4 py-6 rounded-sm"
              style={{ backgroundColor: "rgba(13,32,64,0.5)", border: "1px solid rgba(132,146,166,0.08)" }}
            >
              <span style={{ color: "#C9A96E" }}>{icon}</span>
              <span
                className="font-sans text-xs leading-snug"
                style={{ color: "#8492A6" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Note légale discrète ──────────────────────────────────────────── */}
        <p
          className="mt-10 text-center font-sans text-xs leading-relaxed max-w-2xl mx-auto"
          style={{ color: "rgba(132,146,166,0.45)" }}
        >
          Les analyses sont réalisées par des laboratoires partenaires certifiés (Biron / CDL).
          Eolyalabs n&apos;est pas un service médical. Les protocoles fournis sont à titre
          informatif et préventif — ils ne remplacent pas l&apos;avis d&apos;un médecin.
        </p>
      </div>
    </section>
  );
}
