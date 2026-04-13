import { useState } from "react"
import { motion } from "framer-motion"

const teal    = "#005550"
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

const STATS = [
    { value: "48", unit: "h", label: "Délai de remise du protocole" },
    { value: "4",  unit: "",  label: "Semaines de protocole ciblé" },
    { value: "2",  unit: "",  label: "Experts dédiés à votre dossier" },
    { value: "30", unit: "+", label: "Biomarqueurs analysés (Élite)" },
]

function Btn({ label, url, primary }) {
    const [h, setH] = useState(false)
    return (
        <a href={url} target={primary ? "_blank" : "_self"} rel="noopener noreferrer"
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "15px 36px", borderRadius: 4,
                fontFamily: sans, fontSize: 14, fontWeight: 600,
                letterSpacing: "0.02em", textDecoration: "none", cursor: "pointer",
                transition: "all 0.3s ease",
                ...(primary
                    ? { background: h ? greenLt : green, color: "#fff", border: "none", boxShadow: h ? "0 8px 24px rgba(0,160,80,0.3)" : "0 4px 12px rgba(0,160,80,0.2)", transform: h ? "translateY(-2px)" : "none" }
                    : { background: "transparent", color: h ? teal : textMid, border: `1.5px solid ${h ? teal : border}` }
                )
            }}
        >
            {label}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.3s", transform: h ? "translateX(4px)" : "none" }}>
                <path d={primary ? "M17 8l4 4m0 0l-4 4m4-4H3" : "M19 9l-7 7-7-7"} />
            </svg>
        </a>
    )
}

export default function Hero() {
    return (
        <section id="hero" style={{ position: "relative", width: "100%", minHeight: "100vh", background: bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "140px 32px 80px", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: `linear-gradient(rgba(0,85,80,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,80,0.03) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
            <div style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)", width: 900, height: 600, background: "radial-gradient(ellipse, rgba(0,85,80,0.05) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: 860, width: "100%" }}>

                <div style={{ marginBottom: 24 }}>
                    {[
                        { t: "L'expertise biologique", bold: false, delay: 0.2 },
                        { t: "au service de", bold: false, delay: 0.35 },
                        { t: "votre performance.", bold: true, delay: 0.5 },
                    ].map(({ t, bold, delay }) => (
                        <div key={t} style={{ overflow: "hidden" }}>
                            <motion.span
                                initial={{ y: "108%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }}
                                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay }}
                                style={{ display: "block", fontFamily: serif, fontSize: "clamp(44px, 7vw, 88px)", fontWeight: bold ? 600 : 300, lineHeight: 1.06, letterSpacing: "-0.01em", color: bold ? teal : text }}
                            >{t}</motion.span>
                        </div>
                    ))}
                </div>

                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.68 }} style={{ width: 48, height: 2, background: green, borderRadius: 1, marginBottom: 28, transformOrigin: "center" }} />

                <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.72 }} style={{ fontFamily: sans, fontSize: "clamp(15px, 1.8vw, 18px)", fontWeight: 300, color: textMid, lineHeight: 1.9, maxWidth: 580, marginBottom: 44 }}>
                    Nous utilisons vos analyses sanguines privées pour concevoir des protocoles de précision — nutrition et suppléments — entièrement calibrés sur vos biomarqueurs. En 4 semaines, votre biologie devient votre avantage.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.88 }} style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 14 }}>
                    <Btn label="Réserver mon analyse" url="https://calendly.com/eolyalabs/30min" primary />
                    <Btn label="Voir les forfaits" url="#forfaits" />
                </motion.div>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 1.0 }} style={{ fontFamily: sans, fontSize: 11, color: textLt, letterSpacing: "0.06em" }}>
                    Appel découverte gratuit · 30 min · Sans engagement
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.1 }} style={{ width: "100%", marginTop: 64, paddingTop: 32, borderTop: `1px solid ${border}`, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px 56px" }}>
                    {STATS.map(({ value, unit, label }) => (
                        <div key={label} style={{ textAlign: "center" }}>
                            <span style={{ display: "block", fontFamily: "'DM Serif Display', serif", fontSize: 44, fontWeight: 400, color: teal, lineHeight: 1, marginBottom: 6 }}>
                                {value}<em style={{ color: green, fontStyle: "normal", fontSize: 30 }}>{unit}</em>
                            </span>
                            <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 400, color: textLt, letterSpacing: "0.04em" }}>{label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", color: `rgba(0,85,80,0.3)` }}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7" /></svg>
            </motion.div>
        </section>
    )
}
