// ─────────────────────────────────────────────────────────────────────────────
// EOLYALABS — EolyaProcess.jsx  |  Framer Code Component
// Version : Framer-Ready (inline styles uniquement, zéro conflit)
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

// ── Tokens ────────────────────────────────────────────────────────────────────
const bg      = "#0A192F"
const bg2     = "#080E1C"
const card    = "#0C1424"
const cardHov = "#0E1828"
const gold    = "#C9A96E"
const steel   = "#7A8BA0"
const steelLt = "#9DAFC4"
const white   = "#F0F4F8"
const border  = "rgba(255,255,255,0.06)"
const serif   = "'Cormorant Garamond', Georgia, serif"
const sans    = "'Inter', system-ui, sans-serif"

// ── Données des 4 étapes ──────────────────────────────────────────────────────
const STEPS = [
    {
        num: "01",
        title: "Consultation",
        tagline: "On apprend à vous connaître.",
        body: "Un appel découverte gratuit de 30 minutes. Vous décrivez vos objectifs, vos symptômes, votre mode de vie. Nous identifions ensemble le forfait qui correspond précisément à votre profil biologique.",
        tag: "Gratuit · Sans engagement",
        detail: "Par Zoom ou téléphone",
        icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"/></svg>,
    },
    {
        num: "02",
        title: "Analyse sanguine",
        tagline: "Votre biologie, enfin mesurée.",
        body: "Nous émettons votre requête officielle d'analyses biologiques privées. Vous vous rendez dans une clinique partenaire certifiée — Biron ou CDL — pour votre prélèvement. Aucune ordonnance médicale requise.",
        tag: "Biron · CDL · Québec",
        detail: "Sans ordonnance préalable",
        icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-6.75-12a24.301 24.301 0 00-4.5 0M5 14.5a2.25 2.25 0 000 4.5h14a2.25 2.25 0 000-4.5M5 14.5h14"/></svg>,
    },
    {
        num: "03",
        title: "Diagnostic expert",
        tagline: "Deux regards. Une lecture précise.",
        body: "Abdessamad et Eolie analysent ensemble vos résultats. Chaque marqueur est interprété selon des plages fonctionnelles optimales — et croisé avec les autres pour révéler votre tableau biologique complet.",
        tag: "Analyse duo · 48–72h",
        detail: "Plages fonctionnelles optimales",
        icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"/></svg>,
    },
    {
        num: "04",
        title: "Votre protocole",
        tagline: "Un plan. Des résultats. Votre vie.",
        body: "Vous recevez un protocole complet de 4 semaines : nutrition ciblée, suppléments dosés scientifiquement, ajustements de mode de vie — tout justifié par vos données. Suivi d'un appel de remise inclus.",
        tag: "Protocole 4 semaines · Appel inclus",
        detail: "Document structuré + restitution orale",
        icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>,
    },
]

// ── Carte d'étape ─────────────────────────────────────────────────────────────
function StepCard({ step, index }) {
    const [hov, setHov] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 }}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                position: "relative",
                display: "flex", flexDirection: "column",
                background: hov ? cardHov : card,
                border: `1px solid ${hov ? "rgba(201,169,110,0.25)" : border}`,
                borderRadius: 4,
                padding: "40px 28px 32px",
                transition: "all 0.35s ease",
                transform: hov ? "translateY(-5px)" : "none",
                boxShadow: hov ? "0 20px 48px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.2)",
                overflow: "hidden",
            }}
        >
            {/* Barre gauche dorée */}
            <div style={{
                position: "absolute", top: 0, left: 0, bottom: 0, width: 2,
                background: `linear-gradient(to bottom, transparent, ${gold}, transparent)`,
                opacity: hov ? 0.7 : 0,
                transition: "opacity 0.35s ease",
            }} />

            {/* Header numéro + icône */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
                <span style={{
                    fontFamily: serif, fontSize: 68, fontWeight: 300, lineHeight: 1,
                    color: hov ? "rgba(201,169,110,0.22)" : "rgba(201,169,110,0.1)",
                    transition: "color 0.35s ease", userSelect: "none",
                }}>
                    {step.num}
                </span>
                <div style={{
                    width: 42, height: 42, borderRadius: "50%",
                    border: `1px solid ${hov ? "rgba(201,169,110,0.3)" : border}`,
                    background: hov ? "rgba(201,169,110,0.06)" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: hov ? gold : steel,
                    transition: "all 0.35s ease", flexShrink: 0,
                }}>
                    {step.icon}
                </div>
            </div>

            {/* Titre */}
            <h3 style={{ fontFamily: serif, fontSize: 24, fontWeight: 600, color: white, lineHeight: 1.1, marginBottom: 6 }}>
                {step.title}
            </h3>
            <p style={{ fontFamily: sans, fontSize: 12, fontStyle: "italic", color: gold, marginBottom: 18, letterSpacing: "0.01em" }}>
                {step.tagline}
            </p>

            {/* Séparateur */}
            <div style={{ width: 28, height: 1, background: "rgba(201,169,110,0.35)", marginBottom: 18 }} />

            {/* Corps */}
            <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: steelLt, lineHeight: 1.85, flex: 1, marginBottom: 24 }}>
                {step.body}
            </p>

            {/* Pied */}
            <div style={{ paddingTop: 18, borderTop: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontFamily: sans, fontSize: 10, fontWeight: 600,
                    letterSpacing: "0.14em", textTransform: "uppercase", color: gold,
                }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: gold, display: "inline-block" }} />
                    {step.tag}
                </span>
                <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: "rgba(122,139,160,0.5)" }}>
                    {step.detail}
                </span>
            </div>
        </motion.div>
    )
}

// ── Composant principal ───────────────────────────────────────────────────────
export default function EolyaProcess({
    sectionLabel = "Comment ça fonctionne",
    title        = "De l'appel au protocole.",
    titleGold    = "En 4 étapes simples.",
    subtitle     = "Un processus conçu pour être aussi simple pour vous que rigoureux pour nous. Vous n'avez qu'une chose à faire : réserver votre appel.",
    ctaLabel     = "Démarrer maintenant",
    ctaUrl       = "https://calendly.com/eolyalabs/30min",
    showCta      = true,
}) {
    const [ctaHov, setCtaHov] = useState(false)

    useEffect(() => {
        if (document.getElementById("eolya-fonts")) return
        const l = document.createElement("link")
        l.id = "eolya-fonts"; l.rel = "stylesheet"
        l.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
        document.head.appendChild(l)
    }, [])

    return (
        <section style={{
            position: "relative", width: "100%",
            background: `linear-gradient(180deg, #080E1C 0%, ${bg} 100%)`,
            padding: "120px 32px", overflow: "hidden",
        }}>
            {/* Fond grille */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
                backgroundImage: `linear-gradient(rgba(201,169,110,0.025) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(201,169,110,0.025) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
            }} />

            <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* En-tête */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75 }}
                    style={{ textAlign: "center", marginBottom: 72 }}
                >
                    <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: gold, marginBottom: 20 }}>
                        {sectionLabel}
                    </p>
                    <h2 style={{ fontFamily: serif, fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, color: white, lineHeight: 1.1, marginBottom: 16 }}>
                        {title}<br />
                        <em style={{ fontStyle: "normal", color: gold }}>{titleGold}</em>
                    </h2>
                    <div style={{ width: 40, height: 1, background: "rgba(201,169,110,0.4)", margin: "0 auto 24px" }} />
                    <p style={{ fontFamily: sans, fontSize: 17, fontWeight: 300, color: steelLt, lineHeight: 1.85, maxWidth: 540, margin: "0 auto" }}>
                        {subtitle}
                    </p>
                </motion.div>

                {/* Grille 4 cartes */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: 16, marginBottom: 48,
                }}>
                    {STEPS.map((step, i) => <StepCard key={step.num} step={step} index={i} />)}
                </div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        padding: "24px 32px", background: card,
                        border: `1px solid ${border}`, borderRadius: 4,
                        overflowX: "auto", gap: 0, marginBottom: 48,
                    }}
                >
                    {STEPS.map((step, i) => (
                        <div key={step.num} style={{ display: "flex", alignItems: "center", flex: i < 3 ? 1 : 0, minWidth: 0 }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0 }}>
                                <div style={{
                                    width: 34, height: 34, borderRadius: "50%",
                                    border: "1px solid rgba(201,169,110,0.3)",
                                    background: "rgba(201,169,110,0.06)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <span style={{ fontFamily: serif, fontSize: 14, fontWeight: 600, color: gold }}>{i + 1}</span>
                                </div>
                                <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: steel, whiteSpace: "nowrap" }}>
                                    {step.title}
                                </span>
                            </div>
                            {i < 3 && (
                                <div style={{ flex: 1, height: 1, margin: "0 10px", marginBottom: 24, background: "rgba(201,169,110,0.15)" }} />
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* CTA */}
                {showCta && (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{ textAlign: "center" }}
                    >
                        <p style={{ fontFamily: sans, fontSize: 14, fontWeight: 300, color: steel, marginBottom: 22 }}>
                            Prêt à découvrir ce que votre biologie révèle ?
                        </p>
                        <a href={ctaUrl} target="_blank" rel="noopener noreferrer"
                            onMouseEnter={() => setCtaHov(true)}
                            onMouseLeave={() => setCtaHov(false)}
                            style={{
                                display: "inline-flex", alignItems: "center", gap: 12,
                                padding: "15px 40px",
                                background: ctaHov ? gold : "transparent",
                                color: ctaHov ? bg : white,
                                fontFamily: sans, fontSize: 13, fontWeight: 500, letterSpacing: "0.05em",
                                border: `1px solid ${ctaHov ? gold : "rgba(255,255,255,0.15)"}`,
                                borderRadius: 2, textDecoration: "none", cursor: "pointer",
                                transition: "all 0.35s ease",
                                transform: ctaHov ? "translateY(-2px)" : "none",
                                boxShadow: ctaHov ? "0 12px 32px rgba(201,169,110,0.2)" : "none",
                            }}
                        >
                            {ctaLabel}
                            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                style={{ transition: "transform 0.3s", transform: ctaHov ? "translateX(4px)" : "none" }}>
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

addPropertyControls(EolyaProcess, {
    sectionLabel: { type: ControlType.String,  title: "Étiquette",    defaultValue: "Comment ça fonctionne" },
    title:        { type: ControlType.String,  title: "Titre",        defaultValue: "De l'appel au protocole." },
    titleGold:    { type: ControlType.String,  title: "Titre doré",   defaultValue: "En 4 étapes simples." },
    subtitle:     { type: ControlType.String,  title: "Sous-titre",   defaultValue: "Un processus conçu pour être aussi simple pour vous que rigoureux pour nous.", displayTextArea: true },
    ctaLabel:     { type: ControlType.String,  title: "Texte CTA",    defaultValue: "Démarrer maintenant" },
    ctaUrl:       { type: ControlType.String,  title: "URL CTA",      defaultValue: "https://calendly.com/eolyalabs/30min" },
    showCta:      { type: ControlType.Boolean, title: "Afficher CTA", defaultValue: true },
})
