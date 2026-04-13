import { useState } from "react"
import { motion } from "framer-motion"

const teal    = "#005550"
const tealLt  = "#007A72"
const green   = "#00A050"
const text    = "#0D1F1C"
const textMid = "#3D5C58"
const textLt  = "#6B8A86"
const bg      = "#FFFFFF"
const bg2     = "#F6FAF9"
const card    = "#FFFFFF"
const border  = "rgba(0,85,80,0.1)"
const serif   = "'Cormorant Garamond', Georgia, serif"
const sans    = "'Inter', system-ui, sans-serif"

const FOUNDERS = [
    {
        initial:   "A",
        role:      "Co-fondateur",
        name:      "Abdessamad Hilalou",
        specialty: "Stratégie & Performance biologique",
        tags:      ["Biomarqueurs avancés", "Hormones & performance", "Protocoles masculins"],
        bio:       "Abdessamad apporte une rigueur analytique rare dans l'interprétation des biomarqueurs. Son expérience avec des centaines de profils biologiques lui permet d'identifier des patterns que les analyses conventionnelles ignorent systématiquement.",
        bio2:      "Sa force : croiser les données entre marqueurs hormonaux, métaboliques et inflammatoires pour bâtir une stratégie d'optimisation cohérente — et mesurable.",
        quote:     "« Un seul résultat hors-plage ne dit rien. C'est leur corrélation qui révèle tout. »",
    },
    {
        initial:   "E",
        role:      "Co-fondatrice",
        name:      "Eolie Laforce",
        specialty: "Optimisation & Nutrition clinique",
        tags:      ["Nutrition fonctionnelle", "Supplémentation ciblée", "Protocoles féminins"],
        bio:       "Eolie traduit les données brutes en stratégies concrètes et applicables au quotidien. Sa maîtrise de la nutrition fonctionnelle et des protocoles de supplémentation garantit que chaque recommandation est scientifiquement valide.",
        bio2:      "Sa force : concevoir des protocoles sur mesure qui s'intègrent dans votre vie réelle — avec des résultats documentés à la réévaluation.",
        quote:     "« Un protocole que vous ne suivez pas ne vaut rien. On construit ce que vous pouvez réellement appliquer. »",
    },
]

function PhotoPlaceholder({ founder }) {
    return (
        <div style={{ width: "100%", aspectRatio: "3/4", background: `linear-gradient(145deg, #EDF5F3 0%, #D8EDE8 100%)`, borderRadius: "6px 6px 0 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.4, backgroundImage: `linear-gradient(rgba(0,85,80,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,80,0.08) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
            <div style={{ width: 96, height: 96, borderRadius: "50%", border: `2px solid rgba(0,85,80,0.2)`, background: "rgba(0,85,80,0.06)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, position: "relative", zIndex: 1 }}>
                <span style={{ fontFamily: serif, fontSize: 52, fontWeight: 300, color: "rgba(0,85,80,0.4)", lineHeight: 1 }}>{founder.initial}</span>
            </div>
            <p style={{ fontFamily: sans, fontSize: 11, color: tealLt, textAlign: "center", padding: "0 24px", position: "relative", zIndex: 1, lineHeight: 1.6 }}>
                Photo professionnelle<br />haute résolution
            </p>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: `linear-gradient(to top, ${card}, transparent)` }} />
        </div>
    )
}

function FounderCard({ founder, index }) {
    const [hov, setHov] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0, y: 28, x: index === 0 ? -16 : 16 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 }}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{
                display: "flex", flexDirection: "column",
                background: card, borderRadius: 6, overflow: "hidden",
                border: `1.5px solid ${hov ? teal : border}`,
                transition: "all 0.35s ease",
                transform: hov ? "translateY(-4px)" : "none",
                boxShadow: hov ? "0 20px 48px rgba(0,85,80,0.12)" : "0 2px 12px rgba(0,85,80,0.05)",
            }}
        >
            {/* Top bar */}
            <div style={{ height: 3, background: hov ? green : "transparent", transition: "background 0.3s ease" }} />
            <PhotoPlaceholder founder={founder} />
            <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: green, marginBottom: 8 }}>{founder.role}</p>
                <h3 style={{ fontFamily: serif, fontSize: 28, fontWeight: 600, color: text, lineHeight: 1.1, marginBottom: 4 }}>{founder.name}</h3>
                <p style={{ fontFamily: sans, fontSize: 13, color: tealLt, marginBottom: 20 }}>{founder.specialty}</p>
                <div style={{ width: 28, height: 2, background: green, borderRadius: 1, marginBottom: 20 }} />
                <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: textMid, lineHeight: 1.85, marginBottom: 12 }}>{founder.bio}</p>
                <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: textMid, lineHeight: 1.85, marginBottom: 22 }}>{founder.bio2}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
                    {founder.tags.map(t => (
                        <span key={t} style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: teal, border: `1.5px solid rgba(0,85,80,0.2)`, background: "rgba(0,85,80,0.04)", padding: "5px 12px", borderRadius: 999 }}>{t}</span>
                    ))}
                </div>
                <div style={{ marginTop: "auto", paddingTop: 20, borderTop: `1px solid ${border}` }}>
                    <p style={{ fontFamily: serif, fontSize: 15, fontStyle: "italic", color: textMid, lineHeight: 1.65 }}>{founder.quote}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default function About() {
    return (
        <section id="equipe" style={{ position: "relative", background: bg2, padding: "120px 32px", overflow: "hidden", width: "100%" }}>
            <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: 64 }}>
                    <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: green, marginBottom: 16 }}>Le duo derrière Eolyalabs</p>
                    <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 5vw, 56px)", fontWeight: 400, color: text, lineHeight: 1.1, marginBottom: 16 }}>
                        Deux expertises.<br /><em style={{ fontStyle: "normal", color: teal }}>Une mission commune.</em>
                    </h2>
                    <div style={{ width: 40, height: 2, background: green, borderRadius: 1, margin: "0 auto 24px" }} />
                    <p style={{ fontFamily: sans, fontSize: 16, fontWeight: 300, color: textMid, lineHeight: 1.9, maxWidth: 580, margin: "0 auto 12px" }}>
                        Eolyalabs est né d'une conviction partagée : l'accès à une santé optimale ne devrait pas dépendre d'une ordonnance générique ni de la chance d'avoir le bon médecin.
                    </p>
                    <p style={{ fontFamily: sans, fontSize: 16, fontWeight: 300, color: textMid, lineHeight: 1.9, maxWidth: 580, margin: "0 auto" }}>
                        Abdessamad et Eolie ont uni leurs formations, leur expérience clinique et leur passion pour la biologie humaine pour créer une clinique différente — où chaque décision est justifiée par vos données.
                    </p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginBottom: 48 }}>
                    {FOUNDERS.map((f, i) => <FounderCard key={f.name} founder={f} index={i} />)}
                </div>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", padding: "36px 32px", background: bg, border: `1.5px solid ${border}`, borderRadius: 6, position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, transparent, ${green}, transparent)` }} />
                    <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, transparent, ${green}, transparent)` }} />
                    <p style={{ fontFamily: serif, fontSize: "clamp(16px, 2.5vw, 20px)", fontStyle: "italic", color: textMid, lineHeight: 1.6, maxWidth: 580, margin: "0 auto 16px" }}>
                        Ensemble, vos résultats sont analysés par les deux experts. Toujours. Sans exception.
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                        <div style={{ width: 24, height: 2, background: green, borderRadius: 1 }} />
                        <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: teal }}>Eolyalabs</span>
                        <div style={{ width: 24, height: 2, background: green, borderRadius: 1 }} />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
