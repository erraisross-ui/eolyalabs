import { useState } from "react"
import { motion } from "framer-motion"

const bg      = "#F9F8F6"
const bg2     = "#F2F1EE"
const sage    = "#8A9A8E"
const sageLt  = "#A8B8AC"
const sageDk  = "#6A7A6E"
const text    = "#2C2C2C"
const textMid = "#5C5C5C"
const textLt  = "#9C9C9C"
const border  = "rgba(44,44,44,0.08)"
const serif   = "'Cormorant Garamond', Georgia, serif"
const sans    = "'Inter', system-ui, sans-serif"

const SERVICES = [
    {
        num:      "01",
        title:    "Bilan de vitalité",
        tagline:  "Fondations biologiques",
        price:    "597",
        desc:     "Votre première cartographie biologique complète. Carences, inflammation, thyroïde, glycémie — tout ce qui freine silencieusement votre énergie est révélé et corrigé.",
        markers:  ["Formule sanguine complète (FSC)", "Vitamine D · B12 · Folates", "Ferritine & fer sérique", "Magnésium & zinc", "TSH & glycémie à jeun", "CRP & bilan hépatique"],
        forWho:   "Fatigue chronique · Récupération difficile · Manque de clarté mentale",
    },
    {
        num:      "02",
        title:    "Protocole métabolique",
        tagline:  "Performance & composition",
        price:    "897",
        featured: true,
        desc:     "Notre protocole signature. Insuline, cortisol, hormones thyroïdiennes étendues — une lecture profonde de votre métabolisme pour transformer votre composition corporelle avec une précision clinique.",
        markers:  ["Tout du bilan Vitalité", "Insuline à jeun · HOMA-IR", "T3 libre · T4 libre", "Cortisol matinal · DHEA-S", "Leptine · Ghréline · Adiponectine", "LDL · ApoB · Homocystéine"],
        forWho:   "Prise de gras · Métabolisme bloqué · Fringales chroniques",
    },
    {
        num:      "03",
        title:    "Élite Longévité",
        tagline:  "Capital hormonal complet",
        price:    "1 297",
        desc:     "Le protocole des performeurs qui refusent le compromis. Hormones sexuelles, axe de croissance, cycle circadien — votre biologie optimisée dans sa totalité.",
        markers:  ["Tout du protocole Métabolique", "Testostérone totale & libre", "Oestradiol · Progestérone", "IGF-1 · LH · FSH · Prolactine", "Anti-TPO · Anti-thyroglobuline", "Oméga-3 Index · Acides aminés"],
        forWho:   "Athlètes · Entrepreneurs · Haute performance durable",
    },
]

function ServiceCard({ svc, index }) {
    const [hov, setHov] = useState(false)
    const [ctaHov, setCtaHov] = useState(false)
    const { num, title, tagline, price, desc, markers, forWho, featured } = svc

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.14 }}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{
                display: "flex", flexDirection: "column",
                background: featured ? text : bg,
                border: `1px solid ${featured ? "transparent" : (hov ? "rgba(44,44,44,0.16)" : border)}`,
                borderRadius: 8,
                transition: "all 0.4s ease",
                transform: hov ? "translateY(-5px)" : "none",
                boxShadow: featured
                    ? (hov ? "0 32px 64px rgba(44,44,44,0.22)" : "0 16px 48px rgba(44,44,44,0.15)")
                    : (hov ? "0 16px 40px rgba(44,44,44,0.08)" : "none"),
                overflow: "hidden", flex: 1,
            }}
        >
            {/* Header */}
            <div style={{ padding: "40px 36px 28px", borderBottom: `1px solid ${featured ? "rgba(255,255,255,0.08)" : border}` }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
                    <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 56, fontWeight: 400, lineHeight: 1, color: featured ? "rgba(255,255,255,0.1)" : "rgba(44,44,44,0.07)", userSelect: "none" }}>{num}</span>
                    {featured && (
                        <span style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: sage, border: `1px solid ${sage}`, padding: "4px 12px", borderRadius: 99 }}>Le plus populaire</span>
                    )}
                </div>
                <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: featured ? sageLt : sage, marginBottom: 10 }}>{tagline}</p>
                <h3 style={{ fontFamily: serif, fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 600, color: featured ? "#F9F8F6" : text, lineHeight: 1.08, marginBottom: 20 }}>{title}</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                    <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 52, fontWeight: 400, lineHeight: 1, color: featured ? "#F9F8F6" : text }}>{price}</span>
                    <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 300, color: featured ? "rgba(249,248,246,0.45)" : textLt }}>$ CAD</span>
                </div>
                <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 300, color: featured ? "rgba(249,248,246,0.35)" : textLt, letterSpacing: "0.06em", marginBottom: 20 }}>Paiement unique · Protocole 4 semaines</p>
                <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: featured ? "rgba(249,248,246,0.7)" : textMid, lineHeight: 1.85 }}>{desc}</p>
            </div>

            {/* Marqueurs */}
            <div style={{ padding: "24px 36px", flex: 1 }}>
                <p style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: featured ? "rgba(249,248,246,0.3)" : textLt, marginBottom: 16 }}>Biomarqueurs inclus</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {markers.map((m, i) => {
                        const isHeader = m.startsWith("Tout")
                        return (
                            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                                <span style={{ flexShrink: 0, marginTop: 5, width: 4, height: 4, borderRadius: "50%", background: featured ? sage : sage, opacity: isHeader ? 0 : 1 }} />
                                <span style={{ fontFamily: sans, fontSize: isHeader ? 10 : 12, fontWeight: isHeader ? 600 : 300, color: isHeader ? (featured ? sageLt : sageDk) : (featured ? "rgba(249,248,246,0.65)" : textMid), lineHeight: 1.5, letterSpacing: isHeader ? "0.06em" : 0 }}>{m}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Pour qui */}
            <div style={{ margin: "0 36px 24px", padding: "14px 18px", background: featured ? "rgba(255,255,255,0.04)" : bg2, borderRadius: 6, border: `1px solid ${featured ? "rgba(255,255,255,0.06)" : border}` }}>
                <p style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: featured ? "rgba(249,248,246,0.3)" : textLt, marginBottom: 5 }}>Idéal pour</p>
                <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: featured ? "rgba(249,248,246,0.55)" : textMid, lineHeight: 1.7 }}>{forWho}</p>
            </div>

            {/* CTA */}
            <div style={{ padding: "0 36px 36px" }}>
                <a href="https://calendly.com/eolyalabs/30min" target="_blank" rel="noopener noreferrer"
                    onMouseEnter={() => setCtaHov(true)} onMouseLeave={() => setCtaHov(false)}
                    style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                        padding: "14px 24px", borderRadius: 8, cursor: "pointer", textDecoration: "none",
                        fontFamily: sans, fontSize: 12, fontWeight: 500, letterSpacing: "0.06em",
                        transition: "all 0.3s ease",
                        ...(featured
                            ? { background: ctaHov ? sageLt : sage, color: "#F9F8F6", border: "none" }
                            : { background: ctaHov ? text : "transparent", color: ctaHov ? "#F9F8F6" : text, border: `1px solid ${ctaHov ? text : "rgba(44,44,44,0.2)"}` }
                        )
                    }}>
                    Choisir ce forfait
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.3s", transform: ctaHov ? "translateX(3px)" : "none" }}><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>
        </motion.div>
    )
}

export default function Services() {
    return (
        <section id="forfaits" style={{ position: "relative", background: bg2, padding: "140px 48px", width: "100%", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 80% 20%, rgba(138,154,142,0.04) 0%, transparent 50%)`, pointerEvents: "none" }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* En-tête */}
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ marginBottom: 88 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                        <div style={{ width: 32, height: 1, background: sage }} />
                        <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: sage }}>Nos forfaits</span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 48px", alignItems: "flex-end", justifyContent: "space-between" }}>
                        <h2 style={{ fontFamily: serif, fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400, color: text, lineHeight: 1.05, letterSpacing: "-0.02em", maxWidth: 560 }}>
                            Choisissez votre<br /><em style={{ fontStyle: "italic", color: sage }}>niveau d'optimisation.</em>
                        </h2>
                        <p style={{ fontFamily: sans, fontSize: 14, fontWeight: 300, color: textMid, lineHeight: 1.85, maxWidth: 320 }}>
                            Chaque forfait inclut la requête officielle, le prélèvement privé via Biron ou CDL, et un protocole complet de 4 semaines.
                        </p>
                    </div>
                </motion.div>

                {/* Grille */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginBottom: 56 }}>
                    {SERVICES.map((s, i) => <ServiceCard key={s.num} svc={s} index={i} />)}
                </div>

                {/* Garanties */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: border, borderRadius: 8, overflow: "hidden" }}>
                    {[
                        { icon: "◦", label: "Requête officielle émise" },
                        { icon: "◦", label: "Deux experts sur chaque dossier" },
                        { icon: "◦", label: "Protocole remis sous 48h" },
                        { icon: "◦", label: "Appel de restitution inclus" },
                    ].map(({ icon, label }) => (
                        <div key={label} style={{ display: "flex", alignItems: "center", gap: 14, padding: "22px 28px", background: bg }}>
                            <span style={{ color: sage, fontSize: 18, flexShrink: 0 }}>{icon}</span>
                            <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 300, color: textMid, lineHeight: 1.5 }}>{label}</span>
                        </div>
                    ))}
                </motion.div>

                <p style={{ textAlign: "center", fontFamily: sans, fontSize: 11, fontWeight: 300, color: textLt, lineHeight: 1.75, maxWidth: 600, margin: "32px auto 0", letterSpacing: "0.03em" }}>
                    Analyses réalisées par des laboratoires partenaires certifiés (Biron / CDL). Eolyalabs n'est pas un service médical. Protocoles à titre informatif et préventif.
                </p>
            </div>
        </section>
    )
}
