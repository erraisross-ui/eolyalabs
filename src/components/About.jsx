import { motion } from "framer-motion"

const teal    = "#005550"
const green   = "#00A050"
const text    = "#0D1F1C"
const textMid = "#3D5C58"
const textLt  = "#6B8A86"
const bg      = "#FFFFFF"
const bg2     = "#F6FAF9"
const border  = "rgba(0,85,80,0.1)"
const serif   = "'Cormorant Garamond', Georgia, serif"
const sans    = "'Inter', system-ui, sans-serif"

const FOUNDERS = [
    {
        role:      "Co-fondateur",
        name:      "Abdessamad Hilalou",
        specialty: "Stratégie & Performance biologique",
        tags:      ["Biomarqueurs avancés", "Hormones & performance", "Protocoles masculins"],
        bio:       "Abdessamad apporte une rigueur analytique rare dans l'interprétation des biomarqueurs. Son expérience avec des centaines de profils biologiques lui permet d'identifier des patterns que les analyses conventionnelles ignorent systématiquement.",
        bio2:      "Sa force : croiser les données entre marqueurs hormonaux, métaboliques et inflammatoires pour bâtir une stratégie d'optimisation cohérente — et mesurable.",
        quote:     "« Un seul résultat hors-plage ne dit rien. C'est leur corrélation qui révèle tout. »",
    },
    {
        role:      "Co-fondatrice",
        name:      "Eolie Laforce",
        specialty: "Optimisation & Nutrition clinique",
        tags:      ["Nutrition fonctionnelle", "Supplémentation ciblée", "Protocoles féminins"],
        bio:       "Eolie traduit les données brutes en stratégies concrètes et applicables au quotidien. Sa maîtrise de la nutrition fonctionnelle et des protocoles de supplémentation garantit que chaque recommandation est scientifiquement valide.",
        bio2:      "Sa force : concevoir des protocoles sur mesure qui s'intègrent dans votre vie réelle — avec des résultats documentés à la réévaluation.",
        quote:     "« Un protocole que vous ne suivez pas ne vaut rien. On construit ce que vous pouvez réellement appliquer. »",
    },
]

function FounderCard({ founder, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 }}
            style={{ background: bg, border: `1.5px solid ${border}`, borderRadius: 6, padding: "40px 36px", position: "relative", overflow: "hidden" }}
        >
            {/* Barre verte latérale */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, transparent, ${green} 30%, ${green} 70%, transparent)` }} />

            <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: green, marginBottom: 10 }}>
                {founder.role}
            </p>
            <h3 style={{ fontFamily: serif, fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 600, color: text, lineHeight: 1.1, marginBottom: 4 }}>
                {founder.name}
            </h3>
            <p style={{ fontFamily: sans, fontSize: 13, color: teal, fontWeight: 500, marginBottom: 24 }}>
                {founder.specialty}
            </p>

            <p style={{ fontFamily: sans, fontSize: 14, fontWeight: 300, color: textMid, lineHeight: 1.9, marginBottom: 14 }}>
                {founder.bio}
            </p>
            <p style={{ fontFamily: sans, fontSize: 14, fontWeight: 300, color: textMid, lineHeight: 1.9, marginBottom: 28 }}>
                {founder.bio2}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {founder.tags.map(t => (
                    <span key={t} style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: teal, border: `1.5px solid rgba(0,85,80,0.2)`, background: "rgba(0,85,80,0.04)", padding: "5px 14px", borderRadius: 999 }}>{t}</span>
                ))}
            </div>

            <div style={{ paddingTop: 24, borderTop: `1px solid ${border}` }}>
                <p style={{ fontFamily: serif, fontSize: 16, fontStyle: "italic", color: textLt, lineHeight: 1.65 }}>
                    {founder.quote}
                </p>
            </div>
        </motion.div>
    )
}

export default function About() {
    return (
        <section id="equipe" style={{ position: "relative", background: bg2, padding: "120px 32px", width: "100%" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: 64 }}>
                    <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: green, marginBottom: 16 }}>L'équipe</p>
                    <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 5vw, 56px)", fontWeight: 400, color: text, lineHeight: 1.1, marginBottom: 16 }}>
                        Deux expertises.<br /><em style={{ fontStyle: "normal", color: teal }}>Une mission commune.</em>
                    </h2>
                    <div style={{ width: 40, height: 2, background: green, borderRadius: 1, margin: "0 auto 24px" }} />
                    <p style={{ fontFamily: sans, fontSize: 16, fontWeight: 300, color: textMid, lineHeight: 1.9, maxWidth: 560, margin: "0 auto" }}>
                        Chaque dossier est analysé conjointement par les deux experts. Pas l'un ou l'autre — les deux ensemble, toujours.
                    </p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 48 }}>
                    {FOUNDERS.map((f, i) => <FounderCard key={f.name} founder={f} index={i} />)}
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", padding: "32px", background: bg, border: `1.5px solid ${border}`, borderRadius: 6 }}>
                    <p style={{ fontFamily: serif, fontSize: "clamp(16px, 2vw, 20px)", fontStyle: "italic", color: textMid, lineHeight: 1.65, maxWidth: 580, margin: "0 auto 16px" }}>
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
