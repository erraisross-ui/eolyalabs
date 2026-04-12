// ─────────────────────────────────────────────────────────────────────────────
// EOLYALABS — EolyaHero.jsx
// Composant Framer : Section Hero complète
// Instructions : Assets → Code → New Code File → coller ce fichier
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

// ── Tokens de design ─────────────────────────────────────────────────────────
const T = {
  midnight:     "#0A192F",
  midnightCard: "#0D2040",
  steel:        "#8492A6",
  steelLight:   "#A8B8CC",
  gold:         "#C9A96E",
  goldLight:    "#DFC28E",
  white:        "#F7F8FA",
  fontSerif:    "'Cormorant Garamond', Georgia, serif",
  fontSans:     "'Inter', system-ui, sans-serif",
}

// ── Variants Framer Motion ────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 28 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
})

const PROOF_ITEMS = [
  { icon: "🔬", label: "Analyses privées certifiées" },
  { icon: "📋", label: "Protocole en 4 semaines" },
  { icon: "🤝", label: "Suivi par deux experts" },
  { icon: "🏥", label: "Prélèvements Biron & CDL" },
]

// ── Composant principal ───────────────────────────────────────────────────────
export default function EolyaHero({
  ctaLabel      = "Réserver mon appel découverte",
  ctaUrl        = "https://calendly.com/eolyalabs",
  secondaryLabel= "Voir les forfaits",
  onSecondaryClick,
  badge         = "Clinique d'optimisation biologique — Québec",
  title1        = "Votre biologie",
  title2        = "ne ment pas.",
  title3        = "Vos résultats non plus.",
  subtitle      = "Nous analysons votre sang. Nous lisons vos marqueurs biologiques à la décimale près. Nous construisons un protocole personnalisé — nutrition et suppléments — en 4 semaines, pour que vous retrouviez l'énergie et la vitalité que vous méritez.",
}) {
  // Injection Google Fonts (une seule fois)
  useEffect(() => {
    if (document.getElementById("eolya-fonts")) return
    const link = document.createElement("link")
    link.id   = "eolya-fonts"
    link.rel  = "stylesheet"
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
    document.head.appendChild(link)
  }, [])

  return (
    <section style={styles.root}>

      {/* Bruit de texture */}
      <div style={styles.noise} />

      {/* Halo radial central */}
      <div style={styles.halo} />

      {/* ── Contenu centré ── */}
      <div style={styles.content}>

        {/* Badge */}
        <motion.div {...fadeUp(0.1)}>
          <div style={styles.badge}>
            <span style={styles.badgeDot} />
            {badge}
          </div>
        </motion.div>

        {/* Titre H1 */}
        <motion.h1 style={styles.h1} {...fadeUp(0.28)}>
          {title1}
          <br />
          <span style={styles.h1Gold}>{title2}</span>
          <br />
          {title3}
        </motion.h1>

        {/* Séparateur */}
        <motion.div style={styles.divider} {...fadeUp(0.38)} />

        {/* Sous-titre */}
        <motion.p style={styles.subtitle} {...fadeUp(0.46)}>
          {subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div style={styles.ctaRow} {...fadeUp(0.62)}>
          <CtaButton
            href={ctaUrl}
            primary
            label={ctaLabel}
          />
          <CtaButton
            onClick={onSecondaryClick}
            label={secondaryLabel}
            icon="↓"
          />
        </motion.div>

        {/* Micro-texte */}
        <motion.p style={styles.microText} {...fadeUp(0.72)}>
          Appel gratuit · 30 minutes · Sans engagement
        </motion.p>
      </div>

      {/* ── Proof Strip ── */}
      <motion.div style={styles.proofStrip} {...fadeUp(0.82)}>
        {PROOF_ITEMS.map(({ icon, label }) => (
          <div key={label} style={styles.proofItem}>
            <span style={{ fontSize: 16 }}>{icon}</span>
            <span style={styles.proofLabel}>{label}</span>
          </div>
        ))}
      </motion.div>

      {/* Flèche scroll */}
      <motion.div
        style={styles.scrollArrow}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        ↓
      </motion.div>
    </section>
  )
}

// ── Bouton CTA réutilisable ───────────────────────────────────────────────────
function CtaButton({ href, onClick, label, icon, primary = false }) {
  const [hovered, setHovered] = React.useState(false)

  const baseStyle = {
    display:        "inline-flex",
    alignItems:     "center",
    justifyContent: "center",
    gap:            10,
    padding:        "14px 32px",
    fontFamily:     T.fontSans,
    fontSize:       14,
    fontWeight:     500,
    letterSpacing:  "0.04em",
    cursor:         "pointer",
    borderRadius:   2,
    transition:     "all 0.3s ease",
    textDecoration: "none",
    border:         "none",
    outline:        "none",
  }

  const primaryStyle = {
    ...baseStyle,
    backgroundColor: hovered ? T.gold      : T.white,
    color:           hovered ? T.midnight  : T.midnight,
  }

  const secondaryStyle = {
    ...baseStyle,
    backgroundColor: "transparent",
    color:           hovered ? T.gold    : T.white,
    border:          `1px solid ${hovered ? "rgba(201,169,110,0.5)" : "rgba(247,248,250,0.2)"}`,
  }

  const Tag = href ? "a" : "button"

  return (
    <Tag
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onClick={onClick}
      style={primary ? primaryStyle : secondaryStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      {icon && <span style={{ fontSize: 16 }}>{icon}</span>}
    </Tag>
  )
}

// ── Styles ────────────────────────────────────────────────────────────────────
const styles = {
  root: {
    position:       "relative",
    display:        "flex",
    flexDirection:  "column",
    minHeight:      "100vh",
    backgroundColor: T.midnight,
    overflow:       "hidden",
    width:          "100%",
  },
  noise: {
    position:   "absolute",
    inset:      0,
    zIndex:     0,
    opacity:    0.035,
    pointerEvents: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat",
  },
  halo: {
    position:   "absolute",
    top:        "50%",
    left:       "50%",
    transform:  "translate(-50%, -50%)",
    width:      700,
    height:     700,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)",
    zIndex:     0,
    pointerEvents: "none",
  },
  content: {
    position:       "relative",
    zIndex:         10,
    flex:           1,
    display:        "flex",
    flexDirection:  "column",
    alignItems:     "center",
    justifyContent: "center",
    textAlign:      "center",
    padding:        "120px 24px 64px",
    maxWidth:       900,
    margin:         "0 auto",
    width:          "100%",
  },
  badge: {
    display:         "inline-flex",
    alignItems:      "center",
    gap:             8,
    padding:         "8px 18px",
    borderRadius:    999,
    border:          "1px solid rgba(201,169,110,0.35)",
    backgroundColor: "rgba(201,169,110,0.06)",
    color:           T.gold,
    fontFamily:      T.fontSans,
    fontSize:        11,
    fontWeight:      500,
    letterSpacing:   "0.2em",
    textTransform:   "uppercase",
    marginBottom:    32,
  },
  badgeDot: {
    width:           6,
    height:          6,
    borderRadius:    "50%",
    backgroundColor: T.gold,
    display:         "inline-block",
    animation:       "pulse 3s infinite",
  },
  h1: {
    fontFamily:   T.fontSerif,
    fontSize:     "clamp(44px, 7vw, 80px)",
    fontWeight:   600,
    lineHeight:   1.08,
    color:        T.white,
    marginBottom: 24,
    margin:       "0 0 24px 0",
  },
  h1Gold: {
    background:            "linear-gradient(135deg, #C9A96E 0%, #DFC28E 50%, #C9A96E 100%)",
    WebkitBackgroundClip:  "text",
    WebkitTextFillColor:   "transparent",
    backgroundClip:        "text",
  },
  divider: {
    width:           64,
    height:          1,
    backgroundColor: "rgba(201,169,110,0.5)",
    margin:          "0 auto 32px",
  },
  subtitle: {
    fontFamily:   T.fontSans,
    fontSize:     "clamp(16px, 2vw, 19px)",
    fontWeight:   300,
    lineHeight:   1.8,
    color:        T.steel,
    maxWidth:     680,
    margin:       "0 auto 40px",
  },
  ctaRow: {
    display:        "flex",
    flexWrap:       "wrap",
    gap:            16,
    justifyContent: "center",
    marginBottom:   16,
  },
  microText: {
    fontFamily:   T.fontSans,
    fontSize:     12,
    color:        "rgba(132,146,166,0.65)",
    letterSpacing: "0.04em",
  },
  proofStrip: {
    position:       "relative",
    zIndex:         10,
    borderTop:      "1px solid rgba(132,146,166,0.12)",
    padding:        "20px 24px",
    display:        "flex",
    flexWrap:       "wrap",
    justifyContent: "center",
    gap:            "12px 40px",
  },
  proofItem: {
    display:    "flex",
    alignItems: "center",
    gap:        8,
  },
  proofLabel: {
    fontFamily:   T.fontSans,
    fontSize:     12,
    color:        T.steel,
    letterSpacing: "0.04em",
  },
  scrollArrow: {
    position:   "absolute",
    bottom:     32,
    left:       "50%",
    transform:  "translateX(-50%)",
    zIndex:     10,
    color:      "rgba(201,169,110,0.4)",
    fontSize:   20,
  },
}

// ── Property Controls Framer ──────────────────────────────────────────────────
addPropertyControls(EolyaHero, {
  ctaLabel: {
    type:         ControlType.String,
    title:        "Texte CTA principal",
    defaultValue: "Réserver mon appel découverte",
  },
  ctaUrl: {
    type:         ControlType.String,
    title:        "URL CTA",
    defaultValue: "https://calendly.com/eolyalabs",
  },
  secondaryLabel: {
    type:         ControlType.String,
    title:        "Texte CTA secondaire",
    defaultValue: "Voir les forfaits",
  },
  badge: {
    type:         ControlType.String,
    title:        "Texte du badge",
    defaultValue: "Clinique d'optimisation biologique — Québec",
  },
  title1: {
    type:         ControlType.String,
    title:        "Titre ligne 1",
    defaultValue: "Votre biologie",
  },
  title2: {
    type:         ControlType.String,
    title:        "Titre ligne 2 (doré)",
    defaultValue: "ne ment pas.",
  },
  title3: {
    type:         ControlType.String,
    title:        "Titre ligne 3",
    defaultValue: "Vos résultats non plus.",
  },
  subtitle: {
    type:         ControlType.String,
    title:        "Sous-titre",
    displayTextArea: true,
    defaultValue: "Nous analysons votre sang. Nous lisons vos marqueurs biologiques à la décimale près. Nous construisons un protocole personnalisé en 4 semaines.",
  },
})
