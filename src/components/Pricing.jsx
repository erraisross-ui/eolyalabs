import { useState } from "react"
import { motion } from "framer-motion"

const bg = "#060C18", bg2 = "#0C1424", bg3 = "#0E1828"
const gold = "#C9A96E", goldLt = "#DFC28E"
const steel = "#7A8BA0", steelLt = "#9DAFC4", white = "#F0F4F8"
const border = "rgba(255,255,255,0.06)"
const serif = "'Cormorant Garamond', Georgia, serif"
const sans  = "'Inter', system-ui, sans-serif"

const PLANS = [
    { name:"Vitalité",    tagline:"Focus carences, énergie et récupération",    price:"597",   featured:false, badge:null,
      desc:"Le point de départ pour comprendre vos fondations biologiques. Identifiez vos carences critiques et mettez fin à la fatigue chronique.",
      markers:["Formule sanguine complète (FSC)","Ferritine & fer sérique","Vitamine D (25-OH)","Vitamine B12 & folates","Magnésium & zinc","TSH — thyroïde de base","Glycémie à jeun & HbA1c","CRP — inflammation","Bilan hépatique (ALT, AST, GGT)"],
      ideal:"Épuisement chronique, manque de concentration, récupération difficile malgré un mode de vie sain." },
    { name:"Métabolique", tagline:"Focus perte de gras, insuline et thyroïde",  price:"897",   featured:true,  badge:"Best-Seller",
      desc:"Notre protocole le plus demandé. Décryptez votre métabolisme profond et transformez votre composition corporelle avec précision clinique.",
      markers:["Tout du forfait Vitalité, plus :","Insuline à jeun","HOMA-IR (résistance à l'insuline)","Bilan lipidique complet (LDL, ApoB)","T3 libre + T4 libre (thyroïde étendue)","Cortisol matinal","DHEA-S","Leptine & ghréline","Homocystéine & acide urique","Adiponectine"],
      ideal:"Prise de gras persistante, fringales incontrôlables, métabolisme bloqué malgré les efforts." },
    { name:"Élite",       tagline:"Focus hormones, performance et longévité",   price:"1 297", featured:false, badge:null,
      desc:"Le protocole ultime pour les performeurs exigeants. Optimisez votre capital hormonal complet et repoussez vos limites biologiques.",
      markers:["Tout du forfait Métabolique, plus :","Testostérone totale & libre","SHBG (Sex Hormone Binding Globulin)","Oestradiol (E2) & progestérone","LH & FSH & prolactine","IGF-1 (axe hormone de croissance)","Cortisol soir (cycle circadien)","Anti-TPO & anti-thyroglobuline","Oméga-3 Index","Panel acides aminés essentiels"],
      ideal:"Athlètes, entrepreneurs et performeurs qui refusent de fonctionner en dessous de leur maximum biologique." },
]

function Check() {
    return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke={gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><path d="M5 13l4 4L19 7" /></svg>
}

function PlanCard({ plan, index }) {
    const [hov, setHov] = useState(false)
    const [ctaHov, setCtaHov] = useState(false)
    const { name, tagline, price, desc, markers, ideal, featured, badge } = plan
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.12 }}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{ position: "relative", display: "flex", flexDirection: "column", background: featured ? bg3 : bg2, border: `1px solid ${featured ? `rgba(201,169,110,${hov?"0.55":"0.28"})` : `rgba(255,255,255,${hov?"0.1":"0.06"})`}`, borderRadius: 4, transition: "all 0.35s ease", transform: featured ? (hov?"translateY(-10px)":"translateY(-4px)") : (hov?"translateY(-6px)":"none"), boxShadow: featured ? (hov?"0 40px 80px rgba(0,0,0,0.55)":"0 24px 56px rgba(0,0,0,0.4)") : (hov?"0 24px 48px rgba(0,0,0,0.4)":"0 4px 20px rgba(0,0,0,0.2)"), overflow: "visible", flex: 1 }}
        >
            {badge && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", zIndex: 10, whiteSpace: "nowrap" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 18px", background: gold, color: bg, fontFamily: sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", borderRadius: 999 }}>★ {badge}</span>
                </div>
            )}
            <div style={{ padding: "44px 32px 28px", borderBottom: `1px solid ${border}` }}>
                <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: gold, marginBottom: 14 }}>Forfait</p>
                <h3 style={{ fontFamily: serif, fontSize: 38, fontWeight: 600, color: white, lineHeight: 1.05, marginBottom: 8 }}>{name}</h3>
                <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: steel, lineHeight: 1.6, marginBottom: 28 }}>{tagline}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                    <span style={{ fontFamily: serif, fontSize: 56, fontWeight: 600, lineHeight: 1, color: featured ? gold : white }}>{price}</span>
                    <span style={{ fontFamily: sans, fontSize: 13, color: steel, marginLeft: 6 }}>$ CAD</span>
                </div>
                <p style={{ fontFamily: sans, fontSize: 11, color: "rgba(122,139,160,0.5)", marginBottom: 20 }}>Paiement unique · Protocole de 4 semaines</p>
                <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: steelLt, lineHeight: 1.75 }}>{desc}</p>
            </div>
            <div style={{ padding: "28px 32px", flex: 1 }}>
                <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(122,139,160,0.5)", marginBottom: 18 }}>Marqueurs biologiques inclus</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {markers.map((m, i) => {
                        const isHeader = m.includes("plus :")
                        return (
                            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, paddingTop: isHeader ? 6 : 0 }}>
                                <Check />
                                <span style={{ fontFamily: sans, fontSize: isHeader?11:13, fontWeight: isHeader?600:300, color: isHeader?gold:steelLt, lineHeight: 1.45, letterSpacing: isHeader?"0.05em":0 }}>{m}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div style={{ margin: "0 32px 24px", padding: "16px 18px", background: "rgba(6,12,24,0.7)", border: `1px solid ${border}`, borderRadius: 3 }}>
                <p style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(122,139,160,0.45)", marginBottom: 6 }}>Ce forfait est pour vous si</p>
                <p style={{ fontFamily: sans, fontSize: 12, fontWeight: 300, color: steel, lineHeight: 1.65 }}>{ideal}</p>
            </div>
            <div style={{ padding: "0 32px 32px" }}>
                <a href="https://calendly.com/eolyalabs/30min" target="_blank" rel="noopener noreferrer"
                    onMouseEnter={() => setCtaHov(true)} onMouseLeave={() => setCtaHov(false)}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "15px 24px", fontFamily: sans, fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", borderRadius: 2, cursor: "pointer", textDecoration: "none", transition: "all 0.3s ease", ...(featured ? { background: ctaHov ? goldLt : gold, color: bg, border: "none" } : { background: "transparent", color: ctaHov ? gold : white, border: `1px solid ${ctaHov?"rgba(201,169,110,0.5)":"rgba(255,255,255,0.15)"}` }) }}>
                    Choisir {name}
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.3s", transform: ctaHov?"translateX(4px)":"none" }}><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>
        </motion.div>
    )
}

export default function Pricing() {
    return (
        <section id="forfaits" style={{ position: "relative", background: "#080E1C", padding: "120px 32px", overflow: "hidden", width: "100%" }}>
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 1000, height: 500, background: "radial-gradient(ellipse at top, rgba(201,169,110,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
            <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: 80 }}>
                    <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: gold, marginBottom: 20 }}>Nos Forfaits</p>
                    <h2 style={{ fontFamily: serif, fontSize: "clamp(38px, 5vw, 60px)", fontWeight: 400, color: white, lineHeight: 1.1, marginBottom: 20 }}>
                        Choisissez votre niveau<br /><em style={{ fontStyle: "normal", color: gold }}>d'optimisation biologique.</em>
                    </h2>
                    <div style={{ width: 40, height: 1, background: "rgba(201,169,110,0.4)", margin: "0 auto 28px" }} />
                    <p style={{ fontFamily: sans, fontSize: 17, fontWeight: 300, color: steelLt, lineHeight: 1.85, maxWidth: 620, margin: "0 auto" }}>Chaque forfait inclut la requête officielle, le prélèvement privé via Biron ou CDL, l'analyse par les deux experts, et un protocole complet de 4 semaines.</p>
                </motion.div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, alignItems: "start", marginBottom: 48 }}>
                    {PLANS.map((p, i) => <PlanCard key={p.name} plan={p} index={i} />)}
                </div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 32 }}>
                    {["Requête officielle émise par nos soins","Analysé par les deux experts ensemble","Protocole remis sous 48 à 72 heures","Appel de remise de résultats inclus"].map(l => (
                        <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10, padding: "22px 16px", background: bg2, border: `1px solid ${border}`, borderRadius: 3 }}>
                            <span style={{ color: gold, fontSize: 16 }}>✦</span>
                            <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 300, color: steel, lineHeight: 1.55 }}>{l}</span>
                        </div>
                    ))}
                </motion.div>
                <p style={{ textAlign: "center", fontFamily: sans, fontSize: 11, fontWeight: 300, color: "rgba(122,139,160,0.38)", lineHeight: 1.75, maxWidth: 680, margin: "0 auto" }}>Les analyses sont réalisées par des laboratoires partenaires certifiés (Biron / CDL). Eolyalabs n'est pas un service médical. Les protocoles fournis sont à titre informatif et préventif.</p>
            </div>
        </section>
    )
}
