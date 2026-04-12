// ─────────────────────────────────────────────────────────────────────────────
// EOLYALABS — EolyaAbout.jsx  |  Framer Code Component
// Version : Framer-Ready (inline styles uniquement, zéro conflit)
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

// ── Tokens ────────────────────────────────────────────────────────────────────
const bg      = "#060C18"
const bg2     = "#080E1C"
const card    = "#0C1424"
const gold    = "#C9A96E"
const steel   = "#7A8BA0"
const steelLt = "#9DAFC4"
const white   = "#F0F4F8"
const border  = "rgba(255,255,255,0.06)"
const serif   = "'Cormorant Garamond', Georgia, serif"
const sans    = "'Inter', system-ui, sans-serif"

// ── Fondateurs ────────────────────────────────────────────────────────────────
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

// ── Zone photo / placeholder ──────────────────────────────────────────────────
function PhotoArea({ founder, imageUrl }) {
    if (imageUrl) {
        return (
            <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", borderRadius: "4px 4px 0 0", position: "relative" }}>
                <img src={imageUrl} alt={founder.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: `linear-gradient(to top, ${card}, transparent)` }} />
            </div>
        )
    }
    return (
        <div style={{
            width: "100%", aspectRatio: "3/4",
            background: "linear-gradient(145deg, #0E1828 0%, #162035 100%)",
            borderRadius: "4px 4px 0 0",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
        }}>
            {/* Grille décorative */}
            <div style={{
                position: "absolute", inset: 0, opacity: 0.07,
                backgroundImage: `linear-gradient(rgba(201,169,110,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.8) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
            }} />
            {/* Initiale */}
            <div style={{
                width: 96, height: 96, borderRadius: "50%",
                border: "1px solid rgba(201,169,110,0.2)",
                background: "rgba(201,169,110,0.05)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16, position: "relative", zIndex: 1,
            }}>
                <span style={{ fontFamily: serif, fontSize: 52, fontWeight: 300, color: "rgba(201,169,110,0.45)", lineHeight: 1 }}>
                    {founder.initial}
                </span>
            </div>
            <p style={{ fontFamily: sans, fontSize: 11, color: "rgba(122,139,160,0.4)", textAlign: "center", padding: "0 24px", position: "relative", zIndex: 1, lineHeight: 1.6 }}>
                Photo professionnelle<br />haute résolution
            </p>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: `linear-gradient(to top, ${card}, transparent)` }} />
        </div>
    )
}

// ── Carte fondateur ───────────────────────────────────────────────────────────
function FounderCard({ founder, imageUrl, index }) {
    const [hov, setHov] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 28, x: index === 0 ? -16 : 16 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 }}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                display: "flex", flexDirection: "column",
                background: card,
                border: `1px solid ${hov ? "rgba(201,169,110,0.28)" : border}`,
                borderRadius: 4, overflow: "hidden",
                transition: "all 0.4s ease",
                transform: hov ? "translateY(-6px)" : "none",
                boxShadow: hov ? "0 28px 56px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,169,110,0.1)" : "0 8px 32px rgba(0,0,0,0.25)",
            }}
        >
            <PhotoArea founder={founder} imageUrl={imageUrl} />

            <div style={{ padding: "32px 32px 36px", display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Rôle */}
                <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: gold, marginBottom: 10 }}>
                    {founder.role}
                </p>
                {/* Nom */}
                <h3 style={{ fontFamily: serif, fontSize: 30, fontWeight: 600, color: white, lineHeight: 1.1, marginBottom: 6 }}>
                    {founder.name}
                </h3>
                {/* Spécialité */}
                <p style={{ fontFamily: sans, fontSize: 13, color: steel, marginBottom: 22 }}>
                    {founder.specialty}
                </p>
                {/* Séparateur */}
                <div style={{ width: 36, height: 1, background: "rgba(201,169,110,0.4)", marginBottom: 22 }} />
                {/* Bio */}
                <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: steelLt, lineHeight: 1.85, marginBottom: 14 }}>
                    {founder.bio}
                </p>
                <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: steelLt, lineHeight: 1.85, marginBottom: 24 }}>
                    {founder.bio2}
                </p>
                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                    {founder.tags.map(t => (
                        <span key={t} style={{
                            fontFamily: sans, fontSize: 10, fontWeight: 500,
                            letterSpacing: "0.1em", color: gold,
                            border: "1px solid rgba(201,169,110,0.22)",
                            background: "rgba(201,169,110,0.05)",
                            padding: "5px 12px", borderRadius: 999,
                        }}>{t}</span>
                    ))}
                </div>
                {/* Citation */}
                <div style={{ marginTop: "auto", paddingTop: 22, borderTop: `1px solid ${border}` }}>
                    <p style={{ fontFamily: serif, fontSize: 15, fontStyle: "italic", fontWeight: 400, color: "rgba(240,244,248,0.5)", lineHeight: 1.65 }}>
                        {founder.quote}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

// ── Composant principal ───────────────────────────────────────────────────────
export default function EolyaAbout({
    sectionLabel    = "Le duo derrière Eolyalabs",
    title           = "Deux expertises.",
    titleGold       = "Une mission commune.",
    intro1          = "Eolyalabs est né d'une conviction partagée : l'accès à une santé optimale ne devrait pas dépendre d'une ordonnance générique ni de la chance d'avoir le bon médecin.",
    intro2          = "Abdessamad et Eolie ont uni leurs formations, leur expérience clinique et leur passion pour la biologie humaine pour créer une clinique différente — où chaque décision est justifiée par vos données, pas par des généralités de population.",
    closingLine     = "Ensemble, vos résultats sont analysés par les deux experts. Toujours. Sans exception.",
    photoAbdessamad = "",
    photoEolie      = "",
}) {
    useEffect(() => {
        if (document.getElementById("eolya-fonts")) return
        const l = document.createElement("link")
        l.id = "eolya-fonts"; l.rel = "stylesheet"
        l.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
        document.head.appendChild(l)
    }, [])

    const photos = [photoAbdessamad, photoEolie]

    return (
        <section style={{ position: "relative", background: bg2, padding: "120px 32px", overflow: "hidden", width: "100%" }}>
            {/* Halos */}
            <div style={{ position: "absolute", top: "20%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "10%", right: "-10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,0.035) 0%, transparent 65%)", pointerEvents: "none" }} />

            <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* En-tête */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75 }}
                    style={{ textAlign: "center", marginBottom: 64 }}
                >
                    <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: gold, marginBottom: 20 }}>
                        {sectionLabel}
                    </p>
                    <h2 style={{ fontFamily: serif, fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 400, color: white, lineHeight: 1.1, marginBottom: 18 }}>
                        {title}<br /><em style={{ fontStyle: "normal", color: gold }}>{titleGold}</em>
                    </h2>
                    <div style={{ width: 40, height: 1, background: "rgba(201,169,110,0.4)", margin: "0 auto 28px" }} />
                    <p style={{ fontFamily: sans, fontSize: 16, fontWeight: 300, color: steelLt, lineHeight: 1.9, maxWidth: 580, margin: "0 auto 14px" }}>{intro1}</p>
                    <p style={{ fontFamily: sans, fontSize: 16, fontWeight: 300, color: steelLt, lineHeight: 1.9, maxWidth: 580, margin: "0 auto" }}>{intro2}</p>
                </motion.div>

                {/* Grille 2 fondateurs */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginBottom: 56 }}>
                    {FOUNDERS.map((f, i) => (
                        <FounderCard key={f.name} founder={f} imageUrl={photos[i]} index={i} />
                    ))}
                </div>

                {/* Bloc de clôture */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{
                        textAlign: "center", padding: "40px 32px",
                        background: card, border: `1px solid ${border}`,
                        borderRadius: 4, position: "relative", overflow: "hidden",
                    }}
                >
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, transparent, ${gold}, transparent)`, opacity: 0.45 }} />
                    <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, transparent, ${gold}, transparent)`, opacity: 0.45 }} />
                    <p style={{ fontFamily: serif, fontSize: "clamp(17px, 2.5vw, 22px)", fontStyle: "italic", fontWeight: 400, color: "rgba(240,244,248,0.7)", lineHeight: 1.6, maxWidth: 620, margin: "0 auto 18px" }}>
                        {closingLine}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
                        <div style={{ width: 28, height: 1, background: "rgba(201,169,110,0.4)" }} />
                        <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: gold }}>Eolyalabs</span>
                        <div style={{ width: 28, height: 1, background: "rgba(201,169,110,0.4)" }} />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

addPropertyControls(EolyaAbout, {
    sectionLabel:    { type: ControlType.String,  title: "Étiquette",         defaultValue: "Le duo derrière Eolyalabs" },
    title:           { type: ControlType.String,  title: "Titre",             defaultValue: "Deux expertises." },
    titleGold:       { type: ControlType.String,  title: "Titre doré",        defaultValue: "Une mission commune." },
    intro1:          { type: ControlType.String,  title: "Intro paragraphe 1",defaultValue: "Eolyalabs est né d'une conviction partagée.", displayTextArea: true },
    intro2:          { type: ControlType.String,  title: "Intro paragraphe 2",defaultValue: "Abdessamad et Eolie ont uni leurs formations.", displayTextArea: true },
    closingLine:     { type: ControlType.String,  title: "Phrase de clôture", defaultValue: "Ensemble, vos résultats sont analysés par les deux experts. Toujours. Sans exception.", displayTextArea: true },
    photoAbdessamad: { type: ControlType.Image,   title: "Photo Abdessamad" },
    photoEolie:      { type: ControlType.Image,   title: "Photo Eolie" },
})
