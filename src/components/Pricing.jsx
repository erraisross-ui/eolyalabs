import { useState } from "react"
import { motion } from "framer-motion"

const teal    = "#005550"
const tealLt  = "#007A72"
const green   = "#00A050"
const greenLt = "#00C060"
const text    = "#0D1F1C"
const textMid = "#3D5C58"
const textLt  = "#6B8A86"
const bg      = "#FFFFFF"
const bg2     = "#F6FAF9"
const border  = "rgba(0,85,80,0.1)"
const serif   = "'Cormorant Garamond', Georgia, serif"
const sans    = "'Inter', system-ui, sans-serif"

const PLANS = [
    { name: "Vitalité",    tagline: "Focus carences, énergie et récupération",   price: "597",   featured: false, badge: null,
      desc: "Le point de départ pour comprendre vos fondations biologiques. Identifiez vos carences critiques et mettez fin à la fatigue chronique.",
      markers: ["Formule sanguine complète (FSC)", "Ferritine & fer sérique", "Vitamine D (25-OH)", "Vitamine B12 & folates", "Magnésium & zinc", "TSH — thyroïde de base", "Glycémie à jeun & HbA1c", "CRP — inflammation", "Bilan hépatique (ALT, AST, GGT)"],
      ideal: "Épuisement chronique, manque de concentration, récupération difficile malgré un mode de vie sain." },
    { name: "Métabolique", tagline: "Focus perte de gras, insuline et thyroïde",  price: "897",   featured: true,  badge: "Best-Seller",
      desc: "Notre protocole le plus demandé. Décryptez votre métabolisme profond et transformez votre composition corporelle avec précision clinique.",
      markers: ["Tout du forfait Vitalité, plus :", "Insuline à jeun", "HOMA-IR (résistance à l'insuline)", "Bilan lipidique complet (LDL, ApoB)", "T3 libre + T4 libre (thyroïde étendue)", "Cortisol matinal", "DHEA-S", "Leptine & ghréline", "Homocystéine & acide urique", "Adiponectine"],
      ideal: "Prise de gras persistante, fringales incontrôlables, métabolisme bloqué malgré les efforts." },
    { name: "Élite",       tagline: "Focus hormones, performance et longévité",   price: "1 297", featured: false, badge: null,
      desc: "Le protocole ultime pour les performeurs exigeants. Optimisez votre capital hormonal complet et repoussez vos limites biologiques.",
      markers: ["Tout du forfait Métabolique, plus :", "Testostérone totale & libre", "SHBG (Sex Hormone Binding Globulin)", "Oestradiol (E2) & progestérone", "LH & FSH & prolactine", "IGF-1 (axe hormone de croissance)", "Cortisol soir (cycle circadien)", "Anti-TPO & anti-thyroglobuline", "Oméga-3 Index", "Panel acides aminés essentiels"],
      ideal: "Athlètes, entrepreneurs et performeurs qui refusent de fonctionner en dessous de leur maximum biologique." },
]

function Check({ featured }) {
    return (
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={featured ? "rgba(255,255,255,0.8)" : green} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
            <path d="M5 13l4 4L19 7" />
        </svg>
    )
}

function PlanCard({ plan, index }) {
    const [hov, setHov] = useState(false)
    const [ctaHov, setCtaHov] = useState(false)
    const { name, tagline, price, desc, markers, ideal, featured, badge } = plan

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.12 }}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{
                position: "relative", display: "flex", flexDirection: "column",
                background: featured ? teal : bg,
                border: `1.5px solid ${featured ? teal : (hov ? tealLt : border)}`,
                borderRadius: 6,
                transition: "all 0.3s ease",
                transform: featured ? (hov ? "translateY(-8px)" : "translateY(-4px)") : (hov ? "translateY(-4px)" : "none"),
                boxShadow: featured ? (hov ? "0 32px 64px rgba(0,85,80,0.25)" : "0 16px 40px rgba(0,85,80,0.18)") : (hov ? "0 16px 36px rgba(0,85,80,0.1)" : "0 2px 12px rgba(0,85,80,0.05)"),
                flex: 1, overflow: "visible",
            }}
        >
            {badge && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", zIndex: 10, whiteSpace: "nowrap" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 18px", background: green, color: "#fff", fontFamily: sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", borderRadius: 999 }}>★ {badge}</span>
                </div>
            )}

            {/* Top accent */}
            <div style={{ height: 3, background: featured ? green : (hov ? green : "transparent"), borderRadius: "6px 6px 0 0", transition: "background 0.3s ease" }} />

            <div style={{ padding: "36px 28px 24px", borderBottom: `1px solid ${featured ? "rgba(255,255,255,0.12)" : border}` }}>
                <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: featured ? "rgba(255,255,255,0.6)" : green, marginBottom: 12 }}>Forfait</p>
                <h3 style={{ fontFamily: serif, fontSize: 36, fontWeight: 600, color: featured ? "#fff" : text, lineHeight: 1.05, marginBottom: 6 }}>{name}</h3>
                <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: featured ? "rgba(255,255,255,0.6)" : textLt, lineHeight: 1.6, marginBottom: 24 }}>{tagline}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                    <span style={{ fontFamily: serif, fontSize: 52, fontWeight: 600, lineHeight: 1, color: featured ? "#fff" : teal }}>{price}</span>
                    <span style={{ fontFamily: sans, fontSize: 13, color: featured ? "rgba(255,255,255,0.5)" : textLt, marginLeft: 6 }}>$ CAD</span>
                </div>
                <p style={{ fontFamily: sans, fontSize: 11, color: featured ? "rgba(255,255,255,0.4)" : textLt, marginBottom: 18 }}>Paiement unique · Protocole de 4 semaines</p>
                <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: featured ? "rgba(255,255,255,0.75)" : textMid, lineHeight: 1.75 }}>{desc}</p>
            </div>

            <div style={{ padding: "24px 28px", flex: 1 }}>
                <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: featured ? "rgba(255,255,255,0.4)" : textLt, marginBottom: 16 }}>Marqueurs biologiques inclus</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {markers.map((m, i) => {
                        const isHeader = m.includes("plus :")
                        return (
                            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, paddingTop: isHeader ? 6 : 0 }}>
                                <Check featured={featured} />
                                <span style={{ fontFamily: sans, fontSize: isHeader ? 11 : 13, fontWeight: isHeader ? 700 : 300, color: isHeader ? (featured ? "rgba(255,255,255,0.9)" : teal) : (featured ? "rgba(255,255,255,0.75)" : textMid), lineHeight: 1.45, letterSpacing: isHeader ? "0.05em" : 0 }}>{m}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div style={{ margin: "0 28px 20px", padding: "14px 16px", background: featured ? "rgba(255,255,255,0.07)" : bg2, border: `1px solid ${featured ? "rgba(255,255,255,0.1)" : border}`, borderRadius: 4 }}>
                <p style={{ fontFamily: sans, fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: featured ? "rgba(255,255,255,0.4)" : textLt, marginBottom: 5 }}>Ce forfait est pour vous si</p>
                <p style={{ fontFamily: sans, fontSize: 12, fontWeight: 300, color: featured ? "rgba(255,255,255,0.65)" : textMid, lineHeight: 1.65 }}>{ideal}</p>
            </div>

            <div style={{ padding: "0 28px 28px" }}>
                <a href="https://calendly.com/eolyalabs/30min" target="_blank" rel="noopener noreferrer"
                    onMouseEnter={() => setCtaHov(true)} onMouseLeave={() => setCtaHov(false)}
                    style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                        padding: "14px 24px", fontFamily: sans, fontSize: 13, fontWeight: 600,
                        letterSpacing: "0.03em", borderRadius: 4, cursor: "pointer", textDecoration: "none",
                        transition: "all 0.3s ease",
                        ...(featured
                            ? { background: ctaHov ? greenLt : green, color: "#fff", border: "none" }
                            : { background: ctaHov ? teal : "transparent", color: ctaHov ? "#fff" : teal, border: `1.5px solid ${ctaHov ? teal : border}` }
                        )
                    }}>
                    Choisir {name}
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.3s", transform: ctaHov ? "translateX(4px)" : "none" }}><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>
        </motion.div>
    )
}

export default function Pricing() {
    return (
        <section id="forfaits" style={{ position: "relative", background: bg2, padding: "120px 32px", overflow: "hidden", width: "100%" }}>
            <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: 80 }}>
                    <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: green, marginBottom: 16 }}>Nos Forfaits</p>
                    <h2 style={{ fontFamily: serif, fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 400, color: text, lineHeight: 1.1, marginBottom: 16 }}>
                        Choisissez votre niveau<br /><em style={{ fontStyle: "normal", color: teal }}>d'optimisation biologique.</em>
                    </h2>
                    <div style={{ width: 40, height: 2, background: green, borderRadius: 1, margin: "0 auto 24px" }} />
                    <p style={{ fontFamily: sans, fontSize: 17, fontWeight: 300, color: textMid, lineHeight: 1.85, maxWidth: 620, margin: "0 auto" }}>Chaque forfait inclut la requête officielle, le prélèvement privé via Biron ou CDL, l'analyse par les deux experts, et un protocole complet de 4 semaines.</p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, alignItems: "start", marginBottom: 48 }}>
                    {PLANS.map((p, i) => <PlanCard key={p.name} plan={p} index={i} />)}
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 32 }}>
                    {["Requête officielle émise par nos soins", "Analysé par les deux experts ensemble", "Protocole remis sous 48 à 72 heures", "Appel de remise de résultats inclus"].map(l => (
                        <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10, padding: "20px 16px", background: bg, border: `1.5px solid ${border}`, borderRadius: 6 }}>
                            <span style={{ color: green, fontSize: 18 }}>✦</span>
                            <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 400, color: textMid, lineHeight: 1.55 }}>{l}</span>
                        </div>
                    ))}
                </motion.div>

                <p style={{ textAlign: "center", fontFamily: sans, fontSize: 11, fontWeight: 300, color: textLt, lineHeight: 1.75, maxWidth: 680, margin: "0 auto" }}>Les analyses sont réalisées par des laboratoires partenaires certifiés (Biron / CDL). Eolyalabs n'est pas un service médical. Les protocoles fournis sont à titre informatif et préventif.</p>
            </div>
        </section>
    )
}
