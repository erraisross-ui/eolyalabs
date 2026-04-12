// ─────────────────────────────────────────────────────────────────────────────
// EOLYALABS — EolyaHero.jsx  |  Framer Code Component
// Version : Framer-Ready (inline styles uniquement, zéro conflit)
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

// ── Tokens ────────────────────────────────────────────────────────────────────
const bg      = "#0A192F"
const bgDeep  = "#060D1F"
const gold    = "#C9A96E"
const goldLt  = "#DFC28E"
const steel   = "#7A8BA0"
const steelLt = "#9DAFC4"
const white   = "#F0F4F8"
const serif   = "'Cormorant Garamond', Georgia, serif"
const sans    = "'Inter', system-ui, sans-serif"

// ── Animation helpers ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 28 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay },
})

const maskReveal = (delay = 0) => ({
    initial:    { y: "108%", opacity: 0 },
    animate:    { y: "0%",   opacity: 1 },
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1], delay },
})

// ── Sous-composants ───────────────────────────────────────────────────────────
function Badge({ text }) {
    return (
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 44 }}>
            <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "8px 20px",
                border: `1px solid rgba(201,169,110,0.3)`,
                borderRadius: 999,
                background: "rgba(201,169,110,0.05)",
            }}>
                <motion.span
                    animate={{ scale: [1, 1.7, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    style={{
                        display: "block", width: 7, height: 7,
                        borderRadius: "50%", background: gold,
                    }}
                />
                <span style={{
                    fontFamily: sans, fontSize: 11, fontWeight: 500,
                    letterSpacing: "0.18em", textTransform: "uppercase", color: gold,
                }}>
                    {text}
                </span>
            </div>
        </motion.div>
    )
}

function TitleLine({ text, bold = false, delay = 0 }) {
    const gradientStyle = bold ? {
        background: `linear-gradient(135deg, #C9A96E 0%, #EDD9A3 45%, #C9A96E 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    } : { color: white }

    return (
        <div style={{ overflow: "hidden", display: "block" }}>
            <motion.span
                {...maskReveal(delay)}
                style={{
                    display: "block",
                    fontFamily: serif,
                    fontSize: "clamp(46px, 7.5vw, 94px)",
                    fontWeight: bold ? 600 : 300,
                    lineHeight: 1.05,
                    letterSpacing: "-0.01em",
                    ...gradientStyle,
                }}
            >
                {text}
            </motion.span>
        </div>
    )
}

function CtaButton({ label, url, primary = false }) {
    const [hov, setHov] = useState(false)
    const base = {
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "16px 36px",
        fontFamily: sans, fontSize: 14, fontWeight: 500, letterSpacing: "0.04em",
        borderRadius: 2, textDecoration: "none", cursor: "pointer",
        transition: "all 0.35s ease",
    }
    const style = primary
        ? { ...base, background: hov ? gold : white, color: bg, border: "none",
              transform: hov ? "translateY(-2px)" : "none",
              boxShadow: hov ? `0 16px 40px rgba(201,169,110,0.25)` : "0 4px 20px rgba(0,0,0,0.2)" }
        : { ...base, background: "transparent",
              color: hov ? gold : white,
              border: `1px solid ${hov ? "rgba(201,169,110,0.5)" : "rgba(255,255,255,0.15)"}` }
    return (
        <a href={url} target="_blank" rel="noopener noreferrer"
            style={style}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
        >
            {label}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                style={{ transition: "transform 0.3s", transform: hov ? (primary ? "translateX(4px)" : "translateY(3px)") : "none" }}>
                <path d={primary ? "M17 8l4 4m0 0l-4 4m4-4H3" : "M19 9l-7 7-7-7"} />
            </svg>
        </a>
    )
}

function StatItem({ value, unit, label }) {
    return (
        <div style={{ textAlign: "center" }}>
            <span style={{ display: "block", fontFamily: serif, fontSize: 38, fontWeight: 600, color: white, lineHeight: 1, marginBottom: 6 }}>
                {value}<em style={{ color: gold, fontStyle: "normal", fontSize: 28 }}>{unit}</em>
            </span>
            <span style={{ fontFamily: sans, fontSize: 11, color: steel, letterSpacing: "0.07em" }}>
                {label}
            </span>
        </div>
    )
}

// ── Composant principal ───────────────────────────────────────────────────────
export default function EolyaHero({
    badge          = "Clinique d'optimisation biologique — Québec",
    titleLine1     = "L'expertise biologique",
    titleLine2     = "au service de",
    titleLine3     = "votre performance.",
    subtitle       = "Nous utilisons vos analyses sanguines privées pour concevoir des protocoles de précision — nutrition et suppléments — entièrement calibrés sur vos biomarqueurs. En 4 semaines, votre biologie devient votre avantage.",
    ctaLabel       = "Réserver mon analyse",
    ctaUrl         = "https://calendly.com/eolyalabs/30min",
    ctaLabelSecond = "Voir les forfaits",
    ctaUrlSecond   = "#forfaits",
    microText      = "Appel découverte gratuit · 30 min · Sans engagement",
    showStats      = true,
}) {
    useEffect(() => {
        if (document.getElementById("eolya-fonts")) return
        const l = document.createElement("link")
        l.id   = "eolya-fonts"
        l.rel  = "stylesheet"
        l.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
        document.head.appendChild(l)
    }, [])

    return (
        <section style={{
            position: "relative", width: "100%",
            minHeight: "100vh",
            background: `linear-gradient(160deg, ${bgDeep} 0%, ${bg} 55%, #0B1F3A 100%)`,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: "140px 32px 100px", overflow: "hidden",
        }}>

            {/* Grille de fond */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
                backgroundImage: `linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)`,
                backgroundSize: "88px 88px",
                WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
            }} />

            {/* Halo doré */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -58%)",
                    width: 900, height: 580, borderRadius: "50%",
                    background: "radial-gradient(ellipse, rgba(201,169,110,0.07) 0%, transparent 65%)",
                    pointerEvents: "none", zIndex: 0,
                }}
            />

            {/* Contenu */}
            <div style={{
                position: "relative", zIndex: 2,
                display: "flex", flexDirection: "column",
                alignItems: "center", textAlign: "center",
                maxWidth: 920, width: "100%",
            }}>
                <Badge text={badge} />

                {/* Titre */}
                <div style={{ marginBottom: 28 }}>
                    <TitleLine text={titleLine1} delay={0.2} />
                    <TitleLine text={titleLine2} delay={0.35} />
                    <TitleLine text={titleLine3} bold delay={0.5} />
                </div>

                {/* Séparateur */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.68 }}
                    style={{
                        width: 60, height: 1, marginBottom: 28,
                        background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
                        transformOrigin: "center",
                    }}
                />

                {/* Sous-titre */}
                <motion.p {...fadeUp(0.72)} style={{
                    fontFamily: sans, fontSize: "clamp(15px, 1.8vw, 18px)",
                    fontWeight: 300, color: steelLt, lineHeight: 1.9,
                    maxWidth: 640, marginBottom: 48,
                }}>
                    {subtitle}
                </motion.p>

                {/* CTA */}
                <motion.div {...fadeUp(0.88)}
                    style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: 16 }}>
                    <CtaButton label={ctaLabel}       url={ctaUrl}       primary />
                    <CtaButton label={ctaLabelSecond} url={ctaUrlSecond} />
                </motion.div>

                {/* Micro-texte */}
                <motion.p {...fadeUp(1.0)} style={{
                    fontFamily: sans, fontSize: 11, fontWeight: 300,
                    color: "rgba(122,139,160,0.55)", letterSpacing: "0.07em",
                }}>
                    {microText}
                </motion.p>

                {/* Stats */}
                {showStats && (
                    <motion.div {...fadeUp(1.1)} style={{
                        width: "100%", marginTop: 72,
                        paddingTop: 36,
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        display: "flex", flexWrap: "wrap",
                        justifyContent: "center", gap: "20px 64px",
                    }}>
                        <StatItem value="48"  unit="h"  label="Délai de remise du protocole" />
                        <StatItem value="4"   unit=""   label="Semaines de protocole personnalisé" />
                        <StatItem value="2"   unit=""   label="Experts dédiés à votre dossier" />
                        <StatItem value="30"  unit="+"  label="Biomarqueurs analysés (Élite)" />
                    </motion.div>
                )}
            </div>

            {/* Flèche scroll */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute", bottom: 36, left: "50%",
                    transform: "translateX(-50%)", zIndex: 2,
                    color: "rgba(201,169,110,0.35)",
                }}
            >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </motion.div>
        </section>
    )
}

addPropertyControls(EolyaHero, {
    badge:          { type: ControlType.String,  title: "Badge",             defaultValue: "Clinique d'optimisation biologique — Québec" },
    titleLine1:     { type: ControlType.String,  title: "Titre ligne 1",     defaultValue: "L'expertise biologique" },
    titleLine2:     { type: ControlType.String,  title: "Titre ligne 2",     defaultValue: "au service de" },
    titleLine3:     { type: ControlType.String,  title: "Titre ligne 3 (or)",defaultValue: "votre performance." },
    subtitle:       { type: ControlType.String,  title: "Sous-titre",        defaultValue: "Nous utilisons vos analyses sanguines privées pour concevoir des protocoles de précision.", displayTextArea: true },
    ctaLabel:       { type: ControlType.String,  title: "CTA principal",     defaultValue: "Réserver mon analyse" },
    ctaUrl:         { type: ControlType.String,  title: "URL CTA principal", defaultValue: "https://calendly.com/eolyalabs/30min" },
    ctaLabelSecond: { type: ControlType.String,  title: "CTA secondaire",    defaultValue: "Voir les forfaits" },
    ctaUrlSecond:   { type: ControlType.String,  title: "URL CTA secondaire",defaultValue: "#forfaits" },
    microText:      { type: ControlType.String,  title: "Micro-texte",       defaultValue: "Appel découverte gratuit · 30 min · Sans engagement" },
    showStats:      { type: ControlType.Boolean, title: "Statistiques",      defaultValue: true },
})
