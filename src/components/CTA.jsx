import { useState } from "react"
import { motion } from "framer-motion"

const teal    = "#005550"
const tealDk  = "#003D3A"
const green   = "#00A050"
const greenLt = "#00C060"
const white   = "#FFFFFF"
const border  = "rgba(255,255,255,0.12)"
const serif   = "'Cormorant Garamond', Georgia, serif"
const sans    = "'Inter', system-ui, sans-serif"

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
        <section id="contact" style={{ position: "relative", width: "100%", background: teal, padding: "140px 32px 120px", overflow: "hidden" }}>

            {/* Halos */}
            <div style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)", width: 800, height: 600, background: "radial-gradient(ellipse, rgba(0,160,80,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
            <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: `linear-gradient(90deg, transparent, rgba(0,160,80,0.4), transparent)` }} />

            <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

                {/* Badge */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: 40 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 20px", border: "1.5px solid rgba(0,160,80,0.4)", borderRadius: 999, background: "rgba(0,160,80,0.1)", fontFamily: sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: green }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: green, display: "inline-block" }} />
                        Première étape
                    </span>
                </motion.div>

                {/* Title */}
                <div style={{ overflow: "hidden", display: "block" }}>
                    <motion.span initial={{ y: "108%", opacity: 0 }} whileInView={{ y: "0%", opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        style={{ display: "block", fontFamily: serif, fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 300, color: white, lineHeight: 1.0, letterSpacing: "-0.02em" }}>
                        Prêt à transformer
                    </motion.span>
                </div>
                <div style={{ overflow: "hidden", display: "block", marginBottom: 28 }}>
                    <motion.span initial={{ y: "108%", opacity: 0 }} whileInView={{ y: "0%", opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                        style={{ display: "block", fontFamily: serif, fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.02em", color: green }}>
                        votre biologie ?
                    </motion.span>
                </div>

                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} style={{ width: 48, height: 2, background: green, borderRadius: 1, marginBottom: 28, transformOrigin: "center" }} />

                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}
                    style={{ fontFamily: sans, fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.9, maxWidth: 540, marginBottom: 48 }}>
                    Le premier pas est un appel de 30 minutes — gratuit, sans engagement. Vous repartez avec une direction claire, que vous choisissiez de continuer avec nous ou non.
                </motion.p>

                {/* CTA Button */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.65 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 36 }}>
                    <a href="https://calendly.com/eolyalabs/30min" target="_blank" rel="noopener noreferrer"
                        onMouseEnter={() => setBtnHov(true)}
                        onMouseLeave={() => { setBtnHov(false); setBtnPress(false) }}
                        onMouseDown={() => setBtnPress(true)}
                        onMouseUp={() => setBtnPress(false)}
                        style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12,
                            padding: "20px 56px", minWidth: 260,
                            background: btnHov ? greenLt : green,
                            color: white, fontFamily: sans, fontSize: 16, fontWeight: 600,
                            letterSpacing: "0.03em", borderRadius: 4, textDecoration: "none",
                            border: "none", cursor: "pointer",
                            transition: "all 0.3s ease",
                            transform: btnPress ? "translateY(1px)" : btnHov ? "translateY(-3px)" : "none",
                            boxShadow: btnHov ? "0 16px 40px rgba(0,160,80,0.35)" : "0 8px 24px rgba(0,160,80,0.25)",
                        }}>
                        Réserver ma consultation
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.3s", transform: btnHov ? "translateX(5px)" : "none" }}>
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <p style={{ fontFamily: sans, fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em" }}>Gratuit · 30 min · Zoom ou téléphone</p>
                </motion.div>

                {/* Trust badges */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.8 }} style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
                    {BADGES.map(({ icon, text }) => (
                        <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "rgba(255,255,255,0.06)", border: `1px solid ${border}`, borderRadius: 999 }}>
                            <span style={{ color: green, fontSize: 13, fontWeight: 700 }}>{icon}</span>
                            <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.7)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{text}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Legal */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 1.0 }} style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 8, marginTop: 36, paddingTop: 24, borderTop: `1px solid ${border}` }}>
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.35)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12a11.955 11.955 0 00-.598-6 11.959 11.959 0 01-7.402 2.036A12.001 12.001 0 0112 2.964z" />
                    </svg>
                    <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.65, maxWidth: 500, letterSpacing: "0.03em" }}>
                        Analyses effectuées par nos partenaires privés certifiés (Biron / CDL). Requêtes émises par Eolyalabs. Protocoles à titre informatif et préventif.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
