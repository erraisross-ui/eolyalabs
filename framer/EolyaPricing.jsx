// ─────────────────────────────────────────────────────────────────────────────
// EOLYALABS — EolyaPricing.jsx
// Framer Code Component — Tableau des 3 forfaits
// Assets → Code → New Code File → Coller ce contenu → Glisser sur le canvas
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

// ── Design tokens ─────────────────────────────────────────────────────────────
const C = {
  bg:       "#060C18",
  bg2:      "#0C1424",
  bg3:      "#0E1828",
  border:   "rgba(255,255,255,0.06)",
  borderGold: "rgba(201,169,110,0.35)",
  gold:     "#C9A96E",
  goldLight:"#DFC28E",
  steel:    "#7A8BA0",
  steelLt:  "#9DAFC4",
  white:    "#F0F4F8",
  serif:    "'Cormorant Garamond', Georgia, serif",
  sans:     "'Inter', system-ui, sans-serif",
}

// ── Données forfaits ──────────────────────────────────────────────────────────
const PLANS = [
  {
    name:        "Vitalité",
    tagline:     "Focus carences, énergie et récupération",
    price:       "597",
    description: "Le point de départ pour comprendre vos fondations biologiques. Identifiez vos carences critiques et mettez fin à la fatigue chronique — définitivement.",
    markers: [
      "Formule sanguine complète (FSC)",
      "Ferritine & fer sérique",
      "Vitamine D (25-OH)",
      "Vitamine B12 & folates",
      "Magnésium & zinc",
      "TSH — thyroïde de base",
      "Glycémie à jeun & HbA1c",
      "CRP — inflammation",
      "Bilan hépatique (ALT, AST, GGT)",
    ],
    ideal:       "Épuisement chronique, manque de concentration, récupération difficile malgré un mode de vie sain.",
    featured:    false,
    badge:       null,
    ctaUrl:      "#",
  },
  {
    name:        "Métabolique",
    tagline:     "Focus perte de gras, insuline et thyroïde",
    price:       "897",
    description: "Notre protocole le plus demandé. Décryptez votre métabolisme profond et transformez votre composition corporelle avec la précision d'un bilan clinique complet.",
    markers: [
      "Tout du forfait Vitalité, plus :",
      "Insuline à jeun",
      "HOMA-IR (résistance à l'insuline)",
      "Bilan lipidique complet (LDL, ApoB)",
      "T3 libre + T4 libre (thyroïde étendue)",
      "Cortisol matinal",
      "DHEA-S",
      "Leptine & ghréline",
      "Homocystéine & acide urique",
      "Adiponectine",
    ],
    ideal:       "Prise de gras persistante, fringales incontrôlables, métabolisme bloqué malgré les efforts.",
    featured:    true,
    badge:       "Best-Seller",
    ctaUrl:      "#",
  },
  {
    name:        "Élite",
    tagline:     "Focus hormones, performance et longévité",
    price:       "1 297",
    description: "Le protocole ultime pour les performeurs exigeants. Optimisez votre capital hormonal complet et repoussez les limites de votre potentiel biologique.",
    markers: [
      "Tout du forfait Métabolique, plus :",
      "Testostérone totale & libre",
      "SHBG (Sex Hormone Binding Globulin)",
      "Oestradiol (E2) & progestérone",
      "LH & FSH & prolactine",
      "IGF-1 (axe hormone de croissance)",
      "Cortisol soir (cycle circadien)",
      "Anti-TPO & anti-thyroglobuline",
      "Oméga-3 Index",
      "Panel acides aminés essentiels",
    ],
    ideal:       "Athlètes, entrepreneurs et performeurs qui refusent de fonctionner en dessous de leur maximum biologique.",
    featured:    false,
    badge:       null,
    ctaUrl:      "#",
  },
]

// ── Icône check SVG ───────────────────────────────────────────────────────────
function Check({ accent = false }) {
  return (
    <svg
      width="13" height="13" viewBox="0 0 24 24"
      fill="none" stroke={accent ? C.gold : C.gold}
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

// ── Carte individuelle ────────────────────────────────────────────────────────
function PlanCard({ plan, delay = 0, onSelect }) {
  const [hovered, setHovered] = useState(false)
  const [ctaHovered, setCtaHovered] = useState(false)
  const { name, tagline, price, description, markers, ideal, featured, badge, ctaUrl } = plan

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:        "relative",
        display:         "flex",
        flexDirection:   "column",
        background:      featured ? C.bg3 : C.bg2,
        border:          featured
          ? `1px solid rgba(201,169,110,${hovered ? "0.5" : "0.28"})`
          : `1px solid rgba(255,255,255,${hovered ? "0.1" : "0.06"})`,
        borderRadius:    6,
        transform:       featured
          ? hovered ? "translateY(-8px)" : "translateY(-4px)"
          : hovered  ? "translateY(-6px)" : "translateY(0)",
        boxShadow:       featured
          ? hovered
            ? "0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,169,110,0.25)"
            : "0 24px 56px rgba(0,0,0,0.4)"
          : hovered
            ? "0 24px 48px rgba(0,0,0,0.4)"
            : "0 4px 20px rgba(0,0,0,0.2)",
        transition:      "transform 0.35s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.35s ease, border-color 0.35s ease",
        overflow:        "visible",
        flex:            1,
      }}
    >
      {/* Badge Best-Seller */}
      {badge && (
        <div style={{
          position:   "absolute",
          top:        -14,
          left:       "50%",
          transform:  "translateX(-50%)",
          zIndex:     10,
          whiteSpace: "nowrap",
        }}>
          <span style={{
            display:         "inline-flex",
            alignItems:      "center",
            gap:             5,
            padding:         "5px 18px",
            background:      C.gold,
            color:           C.bg,
            fontFamily:      C.sans,
            fontSize:        10,
            fontWeight:      700,
            letterSpacing:   "0.16em",
            textTransform:   "uppercase",
            borderRadius:    999,
          }}>
            ★ {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div style={{
        padding:      "44px 36px 28px",
        borderBottom: `1px solid ${C.border}`,
      }}>
        <p style={{
          fontFamily:    C.sans,
          fontSize:      10,
          fontWeight:    600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color:         C.gold,
          marginBottom:  14,
        }}>
          Forfait
        </p>

        <h3 style={{
          fontFamily:   C.serif,
          fontSize:     38,
          fontWeight:   600,
          color:        C.white,
          lineHeight:   1.05,
          marginBottom: 8,
        }}>
          {name}
        </h3>

        <p style={{
          fontFamily: C.sans,
          fontSize:   13,
          fontWeight: 300,
          color:      C.steel,
          lineHeight: 1.6,
          marginBottom: 28,
        }}>
          {tagline}
        </p>

        {/* Prix */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
          <span style={{
            fontFamily: C.serif,
            fontSize:   56,
            fontWeight: 600,
            lineHeight: 1,
            color:      featured ? C.gold : C.white,
          }}>
            {price}
          </span>
          <span style={{ fontFamily: C.sans, fontSize: 13, color: C.steel, marginLeft: 6 }}>
            $ CAD
          </span>
        </div>
        <p style={{ fontFamily: C.sans, fontSize: 11, color: "rgba(122,139,160,0.5)", marginBottom: 24 }}>
          Paiement unique · Protocole de 4 semaines
        </p>

        <p style={{ fontFamily: C.sans, fontSize: 13, fontWeight: 300, color: C.steelLt, lineHeight: 1.75 }}>
          {description}
        </p>
      </div>

      {/* Marqueurs */}
      <div style={{ padding: "28px 36px", flex: 1 }}>
        <p style={{
          fontFamily:    C.sans,
          fontSize:      10,
          fontWeight:    600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color:         "rgba(122,139,160,0.5)",
          marginBottom:  18,
        }}>
          Marqueurs biologiques inclus
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {markers.map((m, i) => {
            const isHeader = m.includes("plus :")
            return (
              <li key={i} style={{
                display:    "flex",
                alignItems: "flex-start",
                gap:        10,
                paddingTop: isHeader ? 6 : 0,
              }}>
                <Check />
                <span style={{
                  fontFamily:  C.sans,
                  fontSize:    isHeader ? 11 : 13,
                  fontWeight:  isHeader ? 600 : 300,
                  color:       isHeader ? C.gold : C.steelLt,
                  lineHeight:  1.45,
                  letterSpacing: isHeader ? "0.05em" : 0,
                }}>
                  {m}
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Idéal pour */}
      <div style={{
        margin:     "0 36px 24px",
        padding:    "16px 18px",
        background: "rgba(6,12,24,0.7)",
        border:     `1px solid ${C.border}`,
        borderRadius: 3,
      }}>
        <p style={{
          fontFamily:    C.sans,
          fontSize:      9,
          fontWeight:    600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color:         "rgba(122,139,160,0.45)",
          marginBottom:  6,
        }}>
          Ce forfait est pour vous si
        </p>
        <p style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 300, color: C.steel, lineHeight: 1.65 }}>
          {ideal}
        </p>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 36px 36px" }}>
        <a
          href={ctaUrl}
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          style={{
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
            gap:             10,
            padding:         "15px 24px",
            fontFamily:      C.sans,
            fontSize:        13,
            fontWeight:      500,
            letterSpacing:   "0.04em",
            borderRadius:    3,
            cursor:          "pointer",
            textDecoration:  "none",
            transition:      "all 0.3s ease",
            ...(featured
              ? {
                  background:  ctaHovered ? C.goldLight : C.gold,
                  color:       C.bg,
                  border:      "none",
                }
              : {
                  background:  "transparent",
                  color:       ctaHovered ? C.gold : C.white,
                  border:      `1px solid ${ctaHovered ? "rgba(201,169,110,0.5)" : "rgba(255,255,255,0.15)"}`,
                }
            ),
          }}
        >
          Choisir {name}
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: "transform 0.3s", transform: ctaHovered ? "translateX(4px)" : "none" }}>
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}

// ── Composant principal ───────────────────────────────────────────────────────
export default function EolyaPricing({
  title       = "Choisissez votre niveau",
  titleGold   = "d'optimisation biologique.",
  subtitle    = "Chaque forfait inclut la requête officielle, le prélèvement privé via Biron ou CDL, l'analyse par les deux experts, et un protocole complet de 4 semaines entièrement personnalisé.",
  showCompare = true,
}) {
  // Injection Google Fonts
  useEffect(() => {
    if (document.getElementById("eolya-fonts")) return
    const link = document.createElement("link")
    link.id   = "eolya-fonts"
    link.rel  = "stylesheet"
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
    document.head.appendChild(link)
  }, [])

  return (
    <section style={{
      position:   "relative",
      background: C.bg,
      padding:    "120px 32px",
      overflow:   "hidden",
      width:      "100%",
    }}>
      {/* Halo doré */}
      <div style={{
        position:   "absolute",
        top:        0, left: "50%",
        transform:  "translateX(-50%)",
        width:      1000, height: 500,
        background: "radial-gradient(ellipse at top, rgba(201,169,110,0.05) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <p style={{
            fontFamily:    C.sans,
            fontSize:      10,
            fontWeight:    600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color:         C.gold,
            marginBottom:  20,
          }}>
            Nos Forfaits
          </p>

          <h2 style={{
            fontFamily:   C.serif,
            fontSize:     "clamp(38px, 5vw, 60px)",
            fontWeight:   400,
            color:        C.white,
            lineHeight:   1.1,
            marginBottom: 20,
          }}>
            {title}
            <br />
            <em style={{ fontStyle: "normal", color: C.gold }}>{titleGold}</em>
          </h2>

          <div style={{
            width: 40, height: 1,
            background: "rgba(201,169,110,0.4)",
            margin: "0 auto 28px",
          }} />

          <p style={{
            fontFamily:  C.sans,
            fontSize:    17,
            fontWeight:  300,
            color:       C.steelLt,
            lineHeight:  1.85,
            maxWidth:    620,
            margin:      "0 auto",
          }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Grille des 3 cartes */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap:                 20,
          alignItems:          "start",
          marginBottom:        64,
        }}>
          {PLANS.map((plan, i) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              delay={i * 0.12}
            />
          ))}
        </div>

        {/* Tableau comparatif */}
        {showCompare && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              overflowX:    "auto",
              border:       `1px solid ${C.border}`,
              borderRadius: 6,
              marginBottom: 48,
            }}
          >
            <table style={{ width: "100%", minWidth: 620, borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "rgba(12,20,36,0.9)" }}>
                  {["Ce qui est inclus", "Vitalité", "Métabolique", "Élite"].map((h, i) => (
                    <th key={h} style={{
                      padding:       "16px 24px",
                      fontFamily:    C.sans,
                      fontSize:      10,
                      fontWeight:    600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color:         i === 2 ? C.gold : "rgba(122,139,160,0.6)",
                      textAlign:     i === 0 ? "left" : "center",
                      width:         i === 0 ? "40%" : undefined,
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Requête officielle d'analyses",      true,  true,  true ],
                  ["Prélèvement Biron / CDL",            true,  true,  true ],
                  ["Analyse par les deux experts",       true,  true,  true ],
                  ["Protocole nutrition personnalisé",   true,  true,  true ],
                  ["Protocole suppléments dosé",         true,  true,  true ],
                  ["Appel de remise de résultats",       true,  true,  true ],
                  ["Insuline & résistance insulinique",  false, true,  true ],
                  ["Bilan lipidique avancé (ApoB)",      false, true,  true ],
                  ["Cortisol matin & soir",              false, true,  true ],
                  ["Bilan hormonal complet",             false, false, true ],
                  ["IGF-1 & axe GH",                    false, false, true ],
                  ["Bilan thyroïdien étendu",            false, false, true ],
                ].map(([feature, v, m, e], idx) => (
                  <tr key={feature} style={{
                    background:  idx % 2 === 0 ? "rgba(12,20,36,0.4)" : "rgba(6,12,24,0.6)",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    <td style={{ padding: "13px 24px", fontFamily: C.sans, fontSize: 13, fontWeight: 300, color: C.steelLt }}>
                      {feature}
                    </td>
                    {[v, m, e].map((ok, i) => (
                      <td key={i} style={{ padding: "13px 24px", textAlign: "center" }}>
                        {ok
                          ? <span style={{ color: C.gold, fontSize: 14 }}>✓</span>
                          : <span style={{ display: "inline-block", width: 14, height: 1, background: "rgba(255,255,255,0.1)", verticalAlign: "middle" }} />
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* Garanties */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap:                 12,
            marginBottom:        40,
          }}
        >
          {[
            ["✦", "Requête officielle émise par nos soins"],
            ["✦", "Analysé par les deux experts ensemble"],
            ["✦", "Protocole remis sous 48 à 72 heures"],
            ["✦", "Appel de remise de résultats inclus"],
          ].map(([icon, label]) => (
            <div key={label} style={{
              display:        "flex",
              flexDirection:  "column",
              alignItems:     "center",
              textAlign:      "center",
              gap:            10,
              padding:        "22px 16px",
              background:     C.bg2,
              border:         `1px solid ${C.border}`,
              borderRadius:   3,
            }}>
              <span style={{ color: C.gold, fontSize: 16 }}>{icon}</span>
              <span style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 300, color: C.steel, lineHeight: 1.55 }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Note légale */}
        <p style={{
          textAlign:   "center",
          fontFamily:  C.sans,
          fontSize:    11,
          fontWeight:  300,
          color:       "rgba(122,139,160,0.38)",
          lineHeight:  1.75,
          maxWidth:    680,
          margin:      "0 auto",
        }}>
          Les analyses sont réalisées par des laboratoires partenaires certifiés (Biron / CDL).
          Eolyalabs n'est pas un service médical au sens de la Loi médicale du Québec.
          Les protocoles fournis sont à titre informatif et préventif uniquement.
        </p>
      </div>
    </section>
  )
}

// ── Property Controls Framer ──────────────────────────────────────────────────
addPropertyControls(EolyaPricing, {
  title: {
    type:         ControlType.String,
    title:        "Titre",
    defaultValue: "Choisissez votre niveau",
  },
  titleGold: {
    type:         ControlType.String,
    title:        "Titre (partie dorée)",
    defaultValue: "d'optimisation biologique.",
  },
  subtitle: {
    type:            ControlType.String,
    title:           "Sous-titre",
    displayTextArea: true,
    defaultValue:    "Chaque forfait inclut la requête officielle, le prélèvement privé via Biron ou CDL, l'analyse par les deux experts, et un protocole complet de 4 semaines personnalisé.",
  },
  showCompare: {
    type:         ControlType.Boolean,
    title:        "Tableau comparatif",
    defaultValue: true,
  },
})
