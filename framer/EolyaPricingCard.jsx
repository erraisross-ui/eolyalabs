// ─────────────────────────────────────────────────────────────────────────────
// EOLYALABS — EolyaPricingCard.jsx
// Composant Framer : Carte de forfait individuelle (réutilisable)
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
  steel:        "#8492A6",
  steelLight:   "#A8B8CC",
  gold:         "#C9A96E",
  goldLight:    "#DFC28E",
  white:        "#F7F8FA",
  fontSerif:    "'Cormorant Garamond', Georgia, serif",
  fontSans:     "'Inter', system-ui, sans-serif",
}

// ── Icône check ───────────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg
      width="14" height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke={T.gold}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

// ── Icône dash (marqueur non inclus) ─────────────────────────────────────────
function DashIcon() {
  return (
    <svg
      width="14" height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(132,146,166,0.35)"
      strokeWidth="2"
      strokeLinecap="round"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

// ── Composant principal ───────────────────────────────────────────────────────
export default function EolyaPricingCard({
  badge       = "",
  name        = "Vitalité",
  tagline     = "Focus carences, énergie et récupération",
  price       = "597 $",
  description = "Le point de départ pour comprendre vos fondations biologiques.",
  markers     = MARKERS_VITALITE,
  ideal       = "Vous êtes épuisé sans raison apparente.",
  ctaLabel    = "Choisir ce forfait",
  ctaUrl      = "#",
  highlighted = false,
}) {
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (document.getElementById("eolya-fonts")) return
    const link = document.createElement("link")
    link.id   = "eolya-fonts"
    link.rel  = "stylesheet"
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
    document.head.appendChild(link)
  }, [])

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
      ? hovered ? "translateY(-10px)" : "translateY(-6px)"
      : hovered ? "translateY(-6px)"  : "translateY(0)",
    boxShadow:       highlighted
      ? hovered
        ? "0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,169,110,0.3)"
        : "0 20px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,169,110,0.2)"
      : hovered
        ? "0 20px 48px rgba(0,0,0,0.35)"
        : "0 4px 24px rgba(0,0,0,0.2)",
    transition:      "transform 0.35s ease, box-shadow 0.35s ease",
    width:           "100%",
    maxWidth:        380,
  }

  const markerList = typeof markers === "string"
    ? markers.split("\n").filter(Boolean)
    : markers

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Badge Best-Seller ── */}
      {badge && (
        <div style={styles.badgeWrap}>
          <span style={styles.badgeInner}>
            ★ {badge}
          </span>
        </div>
      )}

      {/* ── En-tête ── */}
      <div style={styles.header}>
        <p style={styles.forfaitLabel}>Forfait</p>
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.tagline}>{tagline}</p>

        {/* Prix */}
        <div style={styles.priceRow}>
          <span style={{ ...styles.price, color: highlighted ? T.gold : T.white }}>
            {price}
          </span>
          <span style={styles.currency}>CAD</span>
        </div>
        <p style={styles.priceSub}>Paiement unique · Protocole de 4 semaines</p>

        <p style={styles.description}>{description}</p>
      </div>

      {/* ── Marqueurs ── */}
      <div style={styles.markersSection}>
        <p style={styles.markersTitle}>Marqueurs biologiques inclus</p>
        <ul style={styles.markersList}>
          {markerList.map((m, i) => (
            <li key={i} style={styles.markerItem}>
              <CheckIcon />
              <span style={styles.markerText}>{m}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Idéal pour ── */}
      <div style={styles.idealBox}>
        <p style={styles.idealTitle}>Ce forfait est pour vous si</p>
        <p style={styles.idealText}>{ideal}</p>
      </div>

      {/* ── CTA ── */}
      <div style={{ padding: "0 32px 32px" }}>
        <CtaBtn
          href={ctaUrl}
          label={ctaLabel}
          highlighted={highlighted}
        />
      </div>
    </div>
  )
}

// ── CTA Button interne ────────────────────────────────────────────────────────
function CtaBtn({ href, label, highlighted }) {
  const [h, setH] = useState(false)

  const style = highlighted
    ? {
        backgroundColor: h ? T.goldLight : T.gold,
        color:           T.midnight,
        border:          "none",
      }
    : {
        backgroundColor: "transparent",
        color:           h ? T.gold    : T.white,
        border:          `1px solid ${h ? "rgba(201,169,110,0.5)" : "rgba(247,248,250,0.2)"}`,
      }

  return (
    <a
      href={href}
      style={{
        ...styles.ctaBase,
        ...style,
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {label}
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "transform 0.3s", transform: h ? "translateX(4px)" : "none" }}
      >
        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  )
}

// ── Styles ────────────────────────────────────────────────────────────────────
const styles = {
  badgeWrap: {
    position:   "absolute",
    top:        -14,
    left:       "50%",
    transform:  "translateX(-50%)",
    zIndex:     10,
  },
  badgeInner: {
    display:         "inline-flex",
    alignItems:      "center",
    gap:             6,
    padding:         "4px 16px",
    borderRadius:    999,
    backgroundColor: T.gold,
    color:           T.midnight,
    fontFamily:      T.fontSans,
    fontSize:        11,
    fontWeight:      600,
    letterSpacing:   "0.12em",
    textTransform:   "uppercase",
    whiteSpace:      "nowrap",
  },
  header: {
    padding:      "40px 32px 28px",
    borderBottom: "1px solid rgba(132,146,166,0.1)",
  },
  forfaitLabel: {
    fontFamily:    T.fontSans,
    fontSize:      11,
    fontWeight:    500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color:         T.gold,
    marginBottom:  12,
  },
  name: {
    fontFamily:   T.fontSerif,
    fontSize:     38,
    fontWeight:   600,
    color:        T.white,
    marginBottom: 8,
    lineHeight:   1.1,
  },
  tagline: {
    fontFamily: T.fontSans,
    fontSize:   14,
    color:      T.steel,
    lineHeight: 1.6,
  },
  priceRow: {
    display:     "flex",
    alignItems:  "baseline",
    gap:         6,
    marginTop:   28,
  },
  price: {
    fontFamily: T.fontSerif,
    fontSize:   56,
    fontWeight: 600,
    lineHeight: 1,
  },
  currency: {
    fontFamily: T.fontSans,
    fontSize:   13,
    color:      T.steel,
    marginLeft: 4,
  },
  priceSub: {
    fontFamily: T.fontSans,
    fontSize:   11,
    color:      "rgba(132,146,166,0.6)",
    marginTop:  6,
  },
  description: {
    fontFamily: T.fontSans,
    fontSize:   14,
    color:      T.steelLight,
    lineHeight: 1.7,
    marginTop:  20,
  },
  markersSection: {
    padding: "28px 32px",
    flex:    1,
  },
  markersTitle: {
    fontFamily:    T.fontSans,
    fontSize:      11,
    fontWeight:    600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color:         "rgba(132,146,166,0.65)",
    marginBottom:  20,
  },
  markersList: {
    listStyle: "none",
    padding:   0,
    margin:    0,
    display:   "flex",
    flexDirection: "column",
    gap:       12,
  },
  markerItem: {
    display:    "flex",
    alignItems: "flex-start",
    gap:        12,
  },
  markerText: {
    fontFamily: T.fontSans,
    fontSize:   13,
    color:      T.steelLight,
    lineHeight: 1.5,
  },
  idealBox: {
    margin:          "0 32px 24px",
    padding:         "16px 20px",
    borderRadius:    2,
    backgroundColor: "rgba(10,25,47,0.6)",
  },
  idealTitle: {
    fontFamily:    T.fontSans,
    fontSize:      10,
    fontWeight:    600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color:         "rgba(132,146,166,0.55)",
    marginBottom:  8,
  },
  idealText: {
    fontFamily: T.fontSans,
    fontSize:   13,
    color:      T.steel,
    lineHeight: 1.65,
  },
  ctaBase: {
    display:         "flex",
    alignItems:      "center",
    justifyContent:  "center",
    gap:             10,
    padding:         "14px 24px",
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
  },
}

// ── Données par défaut ────────────────────────────────────────────────────────
const MARKERS_VITALITE = [
  "Formule sanguine complète (FSC)",
  "Ferritine & fer sérique",
  "Vitamine D (25-OH)",
  "Vitamine B12 & folates",
  "Magnésium sérique",
  "Zinc",
  "TSH — thyroïde de base",
  "Glycémie à jeun & HbA1c",
  "CRP — inflammation",
  "Bilan hépatique (ALT, AST, GGT)",
]

// ── Property Controls Framer ──────────────────────────────────────────────────
addPropertyControls(EolyaPricingCard, {
  name: {
    type:         ControlType.String,
    title:        "Nom du forfait",
    defaultValue: "Vitalité",
  },
  tagline: {
    type:         ControlType.String,
    title:        "Tagline",
    defaultValue: "Focus carences, énergie et récupération",
  },
  price: {
    type:         ControlType.String,
    title:        "Prix",
    defaultValue: "597 $",
  },
  description: {
    type:         ControlType.String,
    title:        "Description",
    displayTextArea: true,
    defaultValue: "Le point de départ pour comprendre vos fondations biologiques.",
  },
  markers: {
    type:  ControlType.Array,
    title: "Marqueurs",
    control: { type: ControlType.String },
    defaultValue: MARKERS_VITALITE,
  },
  ideal: {
    type:         ControlType.String,
    title:        "Idéal pour",
    displayTextArea: true,
    defaultValue: "Vous êtes épuisé sans raison apparente.",
  },
  badge: {
    type:         ControlType.String,
    title:        "Badge (ex: Best-Seller)",
    defaultValue: "",
  },
  ctaLabel: {
    type:         ControlType.String,
    title:        "Texte CTA",
    defaultValue: "Choisir ce forfait",
  },
  ctaUrl: {
    type:         ControlType.String,
    title:        "URL CTA",
    defaultValue: "#",
  },
  highlighted: {
    type:         ControlType.Boolean,
    title:        "Mise en avant",
    defaultValue: false,
  },
})
