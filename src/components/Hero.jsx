import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const gold = "#C9A96E", goldLt = "#DFC28E", steel = "#7A8BA0"
const steelLt = "#9DAFC4", white = "#F0F4F8", bg = "#0A192F", bgDeep = "#060D1F"
const serif = "'Cormorant Garamond', Georgia, serif"
const sans  = "'Inter', system-ui, sans-serif"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay },
})

function TitleLine({ text, bold = false, delay = 0 }) {
    const goldStyle = {
        background: `linear-gradient(135deg, #C9A96E 0%, #EDD9A3 45%, #C9A96E 100%)`,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
    }
    return (
        <div style={{ overflow: "hidden" }}>
            <motion.span
                initial={{ y: "108%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay }}
                style={{
                    display: "block", fontFamily: serif,
                    fontSize: "clamp(46px, 7.5vw, 90px)",
                    fontWeight: bold ? 600 : 300,
                    lineHeight: 1.06, letterSpacing: "-0.01em",
                    ...(bold ? goldStyle : { color: white }),
                }}
            >{text}</motion.span>
        </div>
    )
}

function Btn({ label, url, primary }) {
    const [h, setH] = useState(false)
    const s = primary
        ? { background: h ? gold : white, color: bg, border: "none", transform: h ? "translateY(-2px)" : "none", boxShadow: h ? "0 16px 40px rgba(201,169,110,0.25)" : "0 4px 20px rgba(0,0,0,0.2)" }
        : { background: "transparent", color: h ? gold : white, border: `1px solid ${h ? "rgba(201,169,110,0.5)" : "rgba(255,255,255,0.15)"}` }
    return (
        <a href={url} target={primary ? "_blank" : "_self"} rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", fontFamily: sans, fontSize: 14, fontWeight: 500, letterSpacing: "0.04em", borderRadius: 2, textDecoration: "none", cursor: "pointer", transition: "all 0.35s ease", ...s }}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        >
            {label}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.3s", transform: h ? (primary ? "translateX(4px)" : "translateY(3px)") : "none" }}>
                <path d={primary ? "M17 8l4 4m0 0l-4 4m4-4H3" : "M19 9l-7 7-7-7"} />
            </svg>
        </a>
    )
}

export default function Hero() {
    return (
        <section id="hero" style={{ position: "relative", width: "100%", minHeight: "100vh", background: `linear-gradient(160deg, ${bgDeep} 0%, ${bg} 55%, #0B1F3A 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "140px 32px 100px", overflow: "hidden" }}>

            {/* Grille */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: `linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)`, backgroundSize: "88px 88px", WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)", maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)" }} />

            {/* Halo */}
            <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -58%)", width: 900, height: 580, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(201,169,110,0.07) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: 920, width: "100%" }}>

                {/* Badge */}
                <motion.div {...fadeUp(0.1)} style={{ marginBottom: 44 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px", border: "1px solid rgba(201,169,110,0.3)", borderRadius: 999, background: "rgba(201,169,110,0.05)" }}>
                        <motion.span animate={{ scale: [1, 1.7, 1], opacity: [0.8, 0, 0.8] }} transition={{ duration: 2.5, repeat: Infinity }} style={{ display: "block", width: 7, height: 7, borderRadius: "50%", background: gold }} />
                        <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: gold }}>Clinique d'optimisation biologique — Québec</span>
                    </div>
                </motion.div>

                {/* Titre */}
                <div style={{ marginBottom: 28 }}>
                    <TitleLine text="L'expertise biologique"    delay={0.2} />
                    <TitleLine text="au service de"             delay={0.35} />
                    <TitleLine text="votre performance."        delay={0.5} bold />
                </div>

                {/* Séparateur */}
                <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.68 }} style={{ width: 60, height: 1, marginBottom: 28, background: `linear-gradient(90deg, transparent, ${gold}, transparent)`, transformOrigin: "center" }} />

                {/* Sous-titre */}
                <motion.p {...fadeUp(0.72)} style={{ fontFamily: sans, fontSize: "clamp(15px, 1.8vw, 18px)", fontWeight: 300, color: steelLt, lineHeight: 1.9, maxWidth: 640, marginBottom: 48 }}>
                    Nous utilisons vos analyses sanguines privées pour concevoir des protocoles de précision — nutrition et suppléments — entièrement calibrés sur vos biomarqueurs. En 4 semaines, votre biologie devient votre avantage.
                </motion.p>

                {/* CTAs */}
                <motion.div {...fadeUp(0.88)} style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: 16 }}>
                    <Btn label="Réserver mon analyse" url="https://calendly.com/eolyalabs/30min" primary />
                    <Btn label="Voir les forfaits"    url="#forfaits" />
                </motion.div>

                <motion.p {...fadeUp(1.0)} style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: "rgba(122,139,160,0.55)", letterSpacing: "0.07em" }}>
                    Appel découverte gratuit · 30 min · Sans engagement
                </motion.p>

                {/* Stats */}
                <motion.div {...fadeUp(1.1)} style={{ width: "100%", marginTop: 72, paddingTop: 36, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px 64px" }}>
                    {[["48","h","Délai de remise du protocole"],["4","","Semaines de protocole personnalisé"],["2","","Experts dédiés à votre dossier"],["30","+","Biomarqueurs analysés (Élite)"]].map(([v,u,l]) => (
                        <div key={l} style={{ textAlign: "center" }}>
                            <span style={{ display: "block", fontFamily: serif, fontSize: 38, fontWeight: 600, color: white, lineHeight: 1, marginBottom: 6 }}>
                                {v}<em style={{ color: gold, fontStyle: "normal", fontSize: 28 }}>{u}</em>
                            </span>
                            <span style={{ fontFamily: sans, fontSize: 11, color: steel, letterSpacing: "0.07em" }}>{l}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Flèche scroll */}
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", zIndex: 2, color: "rgba(201,169,110,0.35)" }}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7" /></svg>
            </motion.div>
        </section>
    )
}
