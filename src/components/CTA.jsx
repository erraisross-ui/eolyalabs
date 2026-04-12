import { useState } from "react"
import { motion } from "framer-motion"

const bg       = "#EEF2F7"
const bgDeep   = "#E4EAF3"
const midnight = "#0A192F"
const gold     = "#C9A96E"
const goldLt   = "#DFC28E"
const goldDp   = "#A8844A"
const steel    = "#5A6E87"
const steelLt  = "#7A90A8"
const border   = "rgba(10,25,47,0.08)"
const bGold    = "rgba(201,169,110,0.3)"
const serif    = "'Cormorant Garamond', Georgia, serif"
const sans     = "'Inter', system-ui, sans-serif"

const BADGES = [
    { icon: "✓", text: "Appel 100% gratuit" },
    { icon: "○", text: "Sans engagement" },
    { icon: "◎", text: "Duo d'experts dédié" },
    { icon: "◷", text: "Réponse sous 24h" },
]

export default function CTA() {
    const [btnHov, setBtnHov] = useState(false)
    const [btnPress, setBtnPress] = useState(false)

    return (
        <section id="contact" style={{
            position: "relative", width: "100%",
            background: `linear-gradient(160deg, ${bg} 0%, ${bgDeep} 100%)`,
            padding: "140px 32px 120px", overflow: "hidden",
        }}>
            <div style={{ position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(10,25,47,0.05)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -80, left: -80, width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(10,25,47,0.05)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: `linear-gradient(90deg, transparent, ${gold}, transparent)`, opacity: 0.2 }} />
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.45,
                backgroundImage: `linear-gradient(rgba(10,25,47,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(10,25,47,0.025) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
            }} />

            <div style={{
                maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1,
                display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: 40 }}
                >
                    <span style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "7px 20px", border: `1px solid ${bGold}`,
                        borderRadius: 999, background: "rgba(201,169,110,0.07)",
                        fontFamily: sans, fontSize: 10, fontWeight: 600,
                        letterSpacing: "0.2em", textTransform: "uppercase", color: goldDp,
                    }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: gold, display: "inline-block" }} />
                        Première étape
                    </span>
                </motion.div>

                <div style={{ overflow: "hidden", display: "block" }}>
                    <motion.span
                        initial={{ y: "108%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        style={{
                            display: "block", fontFamily: serif,
                            fontSize: "clamp(52px, 8vw, 100px)",
                            fontWeight: 300, color: midnight,
                            lineHeight: 1.0, letterSpacing: "-0.02em",
                        }}
                    >
                        Prêt à transformer
                    </motion.span>
                </div>

                <div style={{ overflow: "hidden", display: "block", marginBottom: 32 }}>
                    <motion.span
                        initial={{ y: "108%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                        style={{
                            display: "block", fontFamily: serif,
                            fontSize: "clamp(52px, 8vw, 100px)",
                            fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.02em",
                            background: `linear-gradient(135deg, ${goldDp} 0%, ${gold} 40%, ${goldLt} 70%, ${gold} 100%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        votre biologie ?
                    </motion.span>
                </div>

                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
                    style={{
                        width: 64, height: 1, marginBottom: 28,
                        background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
                        transformOrigin: "center",
                    }}
                />

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{
                        fontFamily: sans, fontSize: "clamp(16px, 2vw, 19px)",
                        fontWeight: 300, color: steel, lineHeight: 1.9,
                        maxWidth: 580, marginBottom: 52,
                    }}
                >
                    Le premier pas est un appel de 30 minutes — gratuit, sans engagement. Vous repartez avec une direction claire, que vous choisissiez de continuer avec nous ou non.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.65 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, marginBottom: 36 }}
                >
                    <a
                        href="https://calendly.com/eolyalabs/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setBtnHov(true)}
                        onMouseLeave={() => { setBtnHov(false); setBtnPress(false) }}
                        onMouseDown={() => setBtnPress(true)}
                        onMouseUp={() => setBtnPress(false)}
                        style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 14,
                            padding: "22px 56px", minWidth: 280,
                            background: btnHov
                                ? `linear-gradient(135deg, ${gold} 0%, ${goldLt} 50%, ${gold} 100%)`
                                : midnight,
                            color: btnHov ? midnight : "#F0F4F8",
                            fontFamily: sans, fontSize: 16, fontWeight: 500, letterSpacing: "0.04em",
                            borderRadius: 2, textDecoration: "none", border: "none", cursor: "pointer",
                            transition: "all 0.4s cubic-bezier(0.25,0.1,0.25,1)",
                            transform: btnPress ? "translateY(1px) scale(0.997)" : btnHov ? "translateY(-3px)" : "none",
                            boxShadow: btnHov
                                ? `0 20px 56px rgba(201,169,110,0.28), 0 8px 24px rgba(0,0,0,0.1)`
                                : "0 8px 32px rgba(10,25,47,0.2)",
                        }}
                    >
                        Réserver ma consultation
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                            style={{ transition: "transform 0.3s", transform: btnHov ? "translateX(5px)" : "none" }}>
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 400, color: steelLt, letterSpacing: "0.05em" }}>
                        Gratuit · 30 min · Zoom ou téléphone
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}
                >
                    {BADGES.map(({ icon, text }) => (
                        <div key={text} style={{
                            display: "flex", alignItems: "center", gap: 8,
                            padding: "9px 18px",
                            background: "rgba(10,25,47,0.05)",
                            border: `1px solid ${border}`,
                            borderRadius: 999,
                        }}>
                            <span style={{ color: gold, fontSize: 13, fontWeight: 600 }}>{icon}</span>
                            <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, color: steel, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                                {text}
                            </span>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 1.0 }}
                    style={{
                        display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 8,
                        marginTop: 36, paddingTop: 24, borderTop: `1px solid ${border}`,
                    }}
                >
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke={steelLt} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12a11.955 11.955 0 00-.598-6 11.959 11.959 0 01-7.402 2.036A12.001 12.001 0 0112 2.964z"/>
                    </svg>
                    <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: steelLt, lineHeight: 1.65, maxWidth: 520, letterSpacing: "0.03em" }}>
                        Analyses effectuées par nos partenaires privés certifiés (Biron / CDL). Requêtes émises par Eolyalabs. Protocoles à titre informatif et préventif.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
