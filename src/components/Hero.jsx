import { useState } from "react"
import { motion } from "framer-motion"

const bg      = "#F9F8F6"
const sage    = "#8A9A8E"
const sageLt  = "#A8B8AC"
const sageDk  = "#6A7A6E"
const text    = "#2C2C2C"
const textMid = "#5C5C5C"
const textLt  = "#9C9C9C"
const border  = "rgba(44,44,44,0.08)"
const serif   = "'Cormorant Garamond', Georgia, serif"
const sans    = "'Inter', system-ui, sans-serif"

const STATS = [
    { value: "48h",  label: "Protocole remis" },
    { value: "4",    label: "Semaines de suivi" },
    { value: "2",    label: "Experts dédiés" },
    { value: "30+",  label: "Biomarqueurs (Élite)" },
]

function PrimaryBtn({ label, url }) {
    const [h, setH] = useState(false)
    return (
        <a href={url} target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "16px 40px", borderRadius: 8,
                fontFamily: sans, fontSize: 13, fontWeight: 500,
                letterSpacing: "0.06em", textDecoration: "none", cursor: "pointer",
                transition: "all 0.35s ease",
                background: h ? text : sage,
                color: "#F9F8F6",
                boxShadow: h ? "0 12px 32px rgba(44,44,44,0.18)" : "0 4px 16px rgba(138,154,142,0.25)",
                transform: h ? "translateY(-2px)" : "none",
            }}
        >
            {label}
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.3s", transform: h ? "translateX(3px)" : "none" }}>
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </a>
    )
}

function GhostBtn({ label, url }) {
    const [h, setH] = useState(false)
    return (
        <a href={url} rel="noopener noreferrer"
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "16px 40px", borderRadius: 8,
                fontFamily: sans, fontSize: 13, fontWeight: 400,
                letterSpacing: "0.06em", textDecoration: "none", cursor: "pointer",
                transition: "all 0.35s ease",
                background: "transparent",
                color: h ? text : textMid,
                border: `1px solid ${h ? "rgba(44,44,44,0.25)" : border}`,
            }}
        >
            {label}
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7" /></svg>
        </a>
    )
}

export default function Hero() {
    return (
        <section id="hero" style={{ position: "relative", width: "100%", minHeight: "100vh", background: bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "160px 48px 100px", overflow: "hidden" }}>

            {/* Fond texturé très subtil */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 30% 20%, rgba(138,154,142,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(138,154,142,0.04) 0%, transparent 50%)`, pointerEvents: "none" }} />

            {/* Ligne décorative horizontale */}
            <div style={{ position: "absolute", top: 0, left: "8%", right: "8%", height: "1px", background: `linear-gradient(90deg, transparent, ${border}, transparent)` }} />

            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: 900, width: "100%" }}>

                {/* Étiquette */}
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} style={{ marginBottom: 48 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: sage }}>
                        <span style={{ display: "block", width: 28, height: 1, background: sage }} />
                        Clinique d'optimisation biologique · Montréal
                        <span style={{ display: "block", width: 28, height: 1, background: sage }} />
                    </span>
                </motion.div>

                {/* Titre principal */}
                <div style={{ marginBottom: 32 }}>
                    {[
                        { t: "Votre biologie,", delay: 0.2, light: true },
                        { t: "votre avantage.", delay: 0.38, light: false },
                    ].map(({ t, delay, light }) => (
                        <div key={t} style={{ overflow: "hidden" }}>
                            <motion.span
                                initial={{ y: "105%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }}
                                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
                                style={{
                                    display: "block", fontFamily: serif,
                                    fontSize: "clamp(52px, 8.5vw, 110px)",
                                    fontWeight: light ? 300 : 600,
                                    lineHeight: 1.02, letterSpacing: "-0.02em",
                                    color: light ? textMid : text,
                                }}
                            >{t}</motion.span>
                        </div>
                    ))}
                </div>

                {/* Séparateur fin */}
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.0, delay: 0.6 }} style={{ width: 56, height: 1, background: sage, marginBottom: 32, transformOrigin: "center", opacity: 0.6 }} />

                {/* Sous-titre */}
                <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
                    style={{ fontFamily: sans, fontSize: "clamp(15px, 1.8vw, 18px)", fontWeight: 300, color: textMid, lineHeight: 2.0, maxWidth: 560, marginBottom: 52, letterSpacing: "0.01em" }}>
                    Analyses sanguines privées. Protocoles de précision sur mesure.<br />
                    Deux experts. Quatre semaines pour transformer votre biologie.
                </motion.p>

                {/* CTAs */}
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.88 }}
                    style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: 18 }}>
                    <PrimaryBtn label="Réserver mon analyse" url="https://calendly.com/eolyalabs/30min" />
                    <GhostBtn label="Voir les forfaits" url="#forfaits" />
                </motion.div>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 1.05 }}
                    style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: textLt, letterSpacing: "0.1em" }}>
                    Appel découverte gratuit · 30 min · Sans engagement
                </motion.p>

                {/* Stats */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.15 }}
                    style={{ width: "100%", marginTop: 80, paddingTop: 40, borderTop: `1px solid ${border}`, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px 72px" }}>
                    {STATS.map(({ value, label }) => (
                        <div key={label} style={{ textAlign: "center" }}>
                            <span style={{ display: "block", fontFamily: "'DM Serif Display', serif", fontSize: 42, fontWeight: 400, color: text, lineHeight: 1, marginBottom: 8 }}>
                                {value}
                            </span>
                            <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: textLt, letterSpacing: "0.08em" }}>{label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll arrow */}
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", color: sageLt }}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7" /></svg>
            </motion.div>
        </section>
    )
}
