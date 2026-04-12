// ─────────────────────────────────────────────────────────────────────────────
// EOLYALABS — EolyaPricingTable.jsx
// Composant Framer : Tableau complet des 3 forfaits (autonome, sans imports
// locaux). Tout est contenu dans ce seul fichier.
// Instructions : Assets → Code → New Code File → coller ce fichier
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

// ── Tokens ────────────────────────────────────────────────────────────────────
const T = {
  midnight:     "#0A192F",
  midnightCard: "#0D2040",
  midnightHigh: "#112240",
  midnightDeep: "#050A14",
  steel:        "#8492A6",
  steelLight:   "#A8B8CC",
  gold:         "#C9A96E",
  goldLight:    "#DFC28E",
  white:        "#F7F8FA",
  fontSerif:    "'Cormorant Garamond', Georgia, serif",
  fontSans:     "'Inter', system-ui, sans-serif",
}

// ── Données des 3 forfaits ────────────────────────────────────────────────────
const PLANS = [
  {
    name:     "Vitalité",
    tagline:  "Focus carences, énergie et récupération",
    price:    "597 $",
    desc:     "Le point de départ pour comprendre vos fondations biologiques. Identifiez vos carences critiques et mettez fin à la fatigue chronique.",
    markers: [
      "Formule sanguine complète (FSC)",
      "Ferritine & fer sérique",
      "Vitamine D (25-OH)",
      "Vitamine B12 & folates",
      "Magnésium sérique",
      "Zinc",
      "TSH — thyroïde de base",
      "Glycémie à jeun & HbA1c",
      "CRP — marqueur d'inflammation",
      "Bilan hépatique (ALT, AST, GGT)",
    ],
    ideal:       "Vous êtes épuisé sans raison apparente, manquez de concentration ou récupérez difficilement après vos efforts.",
    highlighted: false,
    badge:       "",
    ctaUrl:      "#vitalite",
  },
  {
    name:     "Métabolique",
    tagline:  "Focus perte de gras, insuline et thyroïde",
    price:    "897 $",
    desc:     "Notre protocole le plus demandé. Décryptez votre métabolisme profond et transformez votre composition corporelle avec précision clinique.",
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
    ideal:       "Vous luttez contre la prise de gras persistante, avez des fringales incontrôlables ou un métabolisme bloqué malgré vos efforts.",
    highlighted: true,
    badge:       "Best-Seller",
    ctaUrl:      "#metabolique",
  },
  {
    name:     "Élite",
    tagline:  "Focus hormones, performance et longévité",
    price:    "1 297 $",
    desc:     "Le protocole ultime pour les performeurs exigeants. Optimisez votre capital hormonal complet et repoussez vos limites biologiques.",
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
    ideal:       "Vous êtes un athlète, entrepreneur ou individu exigeant qui refuse de fonctionner en dessous de son maximum biologique.",
    highlighted: false,
    badge:       "",
    ctaUrl:      "#elite",
  },
]

// ── Tableau comparatif ────────────────────────────────────────────────────────
const COMPARE_ROWS = [
  ["Requête officielle d'analyses",         true,  true,  true ],
  ["Prélèvement Biron / CDL",               true,  true,  true ],
  ["Analyse par les deux experts",          true,  true,  true ],
  ["Protocole nutrition personnalisé",      true,  true,  true ],
  ["Protocole suppléments dosé",            true,  true,  true ],
  ["Appel de remise de résultats",          true,  true,  true ],
  ["Insuline & résistance insulinique",     false, true,  true ],
  ["Bilan lipidique avancé (ApoB)",         false, true,  true ],
  ["Cortisol (matin & soir)",               false, true,  true ],
  ["Bilan hormonal complet",                false, false, true ],
  ["Analyse axe GH (IGF-1)",               false, false, true ],
  ["Bilan thyroïdien étendu (Anti-TPO)",   false, false, true ],
]

// ── Icônes SVG inline ─────────────────────────────────────────────────────────
const CheckSVG = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke={T.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4L19 7" />
  </svg>
)

const DashSVG = () => (
  <svg width="14" height="2" viewBox="0 0 14 2" fill="none">
    <rect width="14" height="2" rx="1" fill="rgba(132,146,166,0.25)" />
  </svg>
)

// ── Composant Carte ───────────────────────────────────────────────────────────
function PricingCard({ plan, index }) {
  const [hovered, setHovered] = useState(false)
  const { name, tagline, price, desc, markers, ideal, highlighted, badge, ctaUrl } = plan

  const cardStyle = {
    position:        "relative",
    display:         "flex",
    flexDirection:   "column",
    borderRadius:    4,
    backgroundColor: highlighted ? T.midnightHigh : T.midnightCard,
    border:          highlighted
      ? "1px solid rgba(201,169,110,0.55)"
      : "1px solid rgba(132,146,166,0.12)",
    transform:       highlighted
      ? hovered ? "translateY(-12px)" : "translateY(-6px)"
      : hovered  ? "translateY(-6px)" : "translateY(0)",
    boxShadow:       highlighted
      ? hovered
        ? "0 36px 72px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,169,110,0.35)"
        : "0 24px 52px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,169,110,0.2)"
      : hovered
        ? "0 24px 52px rgba(0,0,0,0.4)"
        : "0 6px 28px rgba(0,0,0,0.25)",
    transition: "transform 0.35s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.35s ease",
    flex: 1,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.12 }}
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {badge && (
        <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
          <span style={{
            display:         "inline-flex",
            alignItems:      "center",
            gap:             6,
            padding:         "5px 18px",
            borderRadius:    999,
            backgroundColor: T.gold,
            color:           T.midnight,
            fontFamily:      T.fontSans,
            fontSize:        11,
            fontWeight:      700,
            letterSpacing:   "0.12em",
            textTransform:   "uppercase",
            whiteSpace:      "nowrap",
          }}>
            ★ {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div style={{ padding: "40px 32px 28px", borderBottom: "1px solid rgba(132,146,166,0.1)" }}>
        <p style={{ fontFamily: T.fontSans, fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: T.gold, marginBottom: 12 }}>
          Forfait
        </p>
        <h3 style={{ fontFamily: T.fontSerif, fontSize: 40, fontWeight: 600, color: T.white, lineHeight: 1.05, marginBottom: 8 }}>
          {name}
        </h3>
        <p style={{ fontFamily: T.fontSans, fontSize: 14, color: T.steel, lineHeight: 1.6 }}>
          {tagline}
        </p>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 28 }}>
          <span style={{ fontFamily: T.fontSerif, fontSize: 58, fontWeight: 600, lineHeight: 1, color: highlighted ? T.gold : T.white }}>
            {price}
          </span>
          <span style={{ fontFamily: T.fontSans, fontSize: 13, color: T.steel, marginLeft: 4 }}>CAD</span>
        </div>
        <p style={{ fontFamily: T.fontSans, fontSize: 11, color: "rgba(132,146,166,0.6)", marginTop: 6 }}>
          Paiement unique · Protocole de 4 semaines
        </p>
        <p style={{ fontFamily: T.fontSans, fontSize: 14, color: T.steelLight, lineHeight: 1.7, marginTop: 20 }}>
          {desc}
        </p>
      </div>

      {/* Marqueurs */}
      <div style={{ padding: "28px 32px", flex: 1 }}>
        <p style={{ fontFamily: T.fontSans, fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(132,146,166,0.6)", marginBottom: 20 }}>
          Marqueurs biologiques inclus
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
          {markers.map((m, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{ marginTop: 2 }}><CheckSVG /></span>
              <span style={{ fontFamily: T.fontSans, fontSize: 13, color: T.steelLight, lineHeight: 1.5 }}>
                {m}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Idéal pour */}
      <div style={{ margin: "0 32px 24px", padding: "16px 20px", borderRadius: 2, backgroundColor: "rgba(10,25,47,0.7)" }}>
        <p style={{ fontFamily: T.fontSans, fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(132,146,166,0.5)", marginBottom: 8 }}>
          Ce forfait est pour vous si
        </p>
        <p style={{ fontFamily: T.fontSans, fontSize: 13, color: T.steel, lineHeight: 1.65 }}>
          {ideal}
        </p>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 32px 32px" }}>
        <CardCTA href={ctaUrl} highlighted={highlighted} />
      </div>
    </motion.div>
  )
}

// ── CTA de carte ──────────────────────────────────────────────────────────────
function CardCTA({ href, highlighted }) {
  const [h, setH] = useState(false)
  return (
    <a
      href={href}
      style={{
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        gap:             10,
        padding:         "15px 24px",
        fontFamily:      T.fontSans,
        fontSize:        14,
        fontWeight:      500,
        letterSpacing:   "0.04em",
        borderRadius:    2,
        cursor:          "pointer",
        textDecoration:  "none",
        transition:      "all 0.3s ease",
        width:           "100%",
        boxSizing:       "border-box",
        ...(highlighted
          ? { backgroundColor: h ? T.goldLight : T.gold, color: T.midnight, border: "none" }
          : { backgroundColor: "transparent", color: h ? T.gold : T.white, border: `1px solid ${h ? "rgba(201,169,110,0.5)" : "rgba(247,248,250,0.2)"}` }
        ),
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      Choisir ce forfait
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
        style={{ transition: "transform 0.3s", transform: h ? "translateX(4px)" : "none" }}>
        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  )
}

// ── Composant principal ───────────────────────────────────────────────────────
export default function EolyaPricingTable({
  sectionTitle   = "Choisissez votre niveau",
  sectionTitleGold = "d'optimisation biologique.",
  sectionSubtitle = "Chaque forfait inclut la requête officielle, le prélèvement privé via Biron ou CDL, l'analyse par les deux experts, et un protocole de 4 semaines entièrement personnalisé.",
  showCompare    = true,
  showGuarantees = true,
}) {
  useEffect(() => {
    if (document.getElementById("eolya-fonts")) return
    const link = document.createElement("link")
    link.id   = "eolya-fonts"
    link.rel  = "stylesheet"
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
    document.head.appendChild(link)
  }, [])

  return (
    <section
      id="forfaits"
      style={{ position: "relative", backgroundColor: T.midnight, padding: "112px 24px", overflow: "hidden", width: "100%" }}
    >
      {/* Bruit */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.03, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat" }} />

      {/* Halo */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 900, height: 400, zIndex: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at top, rgba(201,169,110,0.05) 0%, transparent 70%)" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto" }}>

        {/* ── En-tête ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <p style={{ fontFamily: T.fontSans, fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: T.gold, marginBottom: 16 }}>
            Nos Forfaits
          </p>
          <h2 style={{ fontFamily: T.fontSerif, fontSize: "clamp(38px, 5vw, 60px)", fontWeight: 600, color: T.white, lineHeight: 1.12, marginBottom: 24 }}>
            {sectionTitle}
            <br />
            <em style={{ fontStyle: "normal", color: T.gold }}>{sectionTitleGold}</em>
          </h2>
          <div style={{ width: 48, height: 1, backgroundColor: "rgba(201,169,110,0.45)", margin: "0 auto 28px" }} />
          <p style={{ fontFamily: T.fontSans, fontSize: 17, color: T.steel, lineHeight: 1.8, maxWidth: 680, margin: "0 auto" }}>
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* ── Grille des cartes ── */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap:                 24,
          alignItems:          "start",
          marginBottom:        64,
        }}>
          {PLANS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* ── Tableau comparatif ── */}
        {showCompare && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{
              overflowX:    "auto",
              borderRadius: 4,
              border:       "1px solid rgba(132,146,166,0.1)",
              marginBottom: 48,
            }}
          >
            <table style={{ width: "100%", minWidth: 640, borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: T.midnightCard }}>
                  <th style={{ textAlign: "left", padding: "16px 24px", fontFamily: T.fontSans, fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(132,146,166,0.65)", width: "40%" }}>
                    Ce qui est inclus
                  </th>
                  {["Vitalité", "Métabolique", "Élite"].map((col) => (
                    <th key={col} style={{ textAlign: "center", padding: "16px 24px", fontFamily: T.fontSans, fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: col === "Métabolique" ? T.gold : "rgba(132,146,166,0.65)" }}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([feature, v, m, e], idx) => (
                  <tr key={feature} style={{
                    backgroundColor: idx % 2 === 0 ? "rgba(13,32,64,0.45)" : "rgba(10,25,47,0.6)",
                    borderBottom:    "1px solid rgba(132,146,166,0.06)",
                  }}>
                    <td style={{ padding: "14px 24px", fontFamily: T.fontSans, fontSize: 13, color: T.steelLight }}>
                      {feature}
                    </td>
                    {[v, m, e].map((included, i) => (
                      <td key={i} style={{ padding: "14px 24px", textAlign: "center" }}>
                        <span style={{ display: "flex", justifyContent: "center" }}>
                          {included ? <CheckSVG /> : <DashSVG />}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* ── Garanties ── */}
        {showGuarantees && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 48 }}
          >
            {[
              { icon: "✓", label: "Requête officielle émise par nos soins" },
              { icon: "◎", label: "Analysé par les deux experts ensemble" },
              { icon: "⧗", label: "Protocole remis sous 48–72 heures" },
              { icon: "◻", label: "Appel de remise de résultats inclus" },
            ].map(({ icon, label }) => (
              <div key={label} style={{
                display:         "flex",
                flexDirection:   "column",
                alignItems:      "center",
                textAlign:       "center",
                gap:             12,
                padding:         "24px 16px",
                borderRadius:    2,
                backgroundColor: "rgba(13,32,64,0.5)",
                border:          "1px solid rgba(132,146,166,0.08)",
              }}>
                <span style={{ fontFamily: T.fontSerif, fontSize: 22, color: T.gold }}>{icon}</span>
                <span style={{ fontFamily: T.fontSans, fontSize: 12, color: T.steel, lineHeight: 1.5 }}>{label}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* ── Note légale ── */}
        <p style={{ textAlign: "center", fontFamily: T.fontSans, fontSize: 11, color: "rgba(132,146,166,0.4)", lineHeight: 1.7, maxWidth: 700, margin: "0 auto" }}>
          Les analyses sont réalisées par des laboratoires partenaires certifiés (Biron / CDL).
          Eolyalabs n&apos;est pas un service médical. Les protocoles fournis sont à titre informatif
          et préventif — ils ne remplacent pas l&apos;avis d&apos;un médecin.
        </p>
      </div>
    </section>
  )
}

// ── Property Controls Framer ──────────────────────────────────────────────────
addPropertyControls(EolyaPricingTable, {
  sectionTitle: {
    type:         ControlType.String,
    title:        "Titre section",
    defaultValue: "Choisissez votre niveau",
  },
  sectionTitleGold: {
    type:         ControlType.String,
    title:        "Titre (partie dorée)",
    defaultValue: "d'optimisation biologique.",
  },
  sectionSubtitle: {
    type:            ControlType.String,
    title:           "Sous-titre",
    displayTextArea: true,
    defaultValue:    "Chaque forfait inclut la requête officielle, le prélèvement privé via Biron ou CDL, l'analyse par les deux experts, et un protocole de 4 semaines personnalisé.",
  },
  showCompare: {
    type:         ControlType.Boolean,
    title:        "Afficher tableau comparatif",
    defaultValue: true,
  },
  showGuarantees: {
    type:         ControlType.Boolean,
    title:        "Afficher garanties",
    defaultValue: true,
  },
})
