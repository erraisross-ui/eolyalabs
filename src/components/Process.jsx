import { useState } from "react"
import { motion } from "framer-motion"

const teal    = "#005550"
const tealLt  = "#007A72"
const green   = "#00A050"
const text    = "#0D1F1C"
const textMid = "#3D5C58"
const textLt  = "#6B8A86"
const bg      = "#F6FAF9"
const card    = "#FFFFFF"
const border  = "rgba(0,85,80,0.1)"
const serif   = "'Cormorant Garamond', Georgia, serif"
const sans    = "'Inter', system-ui, sans-serif"

const STEPS = [
    { num: "01", title: "Consultation",      tagline: "On apprend à vous connaître.",      body: "Un appel découverte gratuit de 30 minutes. Vous décrivez vos objectifs, vos symptômes, votre mode de vie. Nous identifions ensemble le forfait qui correspond précisément à votre profil biologique.", tag: "Gratuit · Sans engagement", detail: "Par Zoom ou téléphone" },
    { num: "02", title: "Analyse sanguine",  tagline: "Votre biologie, enfin mesurée.",    body: "Nous émettons votre requête officielle d'analyses biologiques privées. Vous vous rendez dans une clinique partenaire certifiée — Biron ou CDL — pour votre prélèvement. Aucune ordonnance médicale requise.", tag: "Biron · CDL · Québec", detail: "Sans ordonnance préalable" },
    { num: "03", title: "Diagnostic expert", tagline: "Deux regards. Une lecture précise.", body: "Abdessamad et Eolie analysent ensemble vos résultats. Chaque marqueur est interprété selon des plages fonctionnelles optimales — et croisé avec les autres pour révéler votre tableau biologique complet.", tag: "Analyse duo · 48–72h", detail: "Plages fonctionnelles optimales" },
    { num: "04", title: "Votre protocole",   tagline: "Un plan. Des résultats. Votre vie.", body: "Vous recevez un protocole complet de 4 semaines : nutrition ciblée, suppléments dosés scientifiquement, ajustements de mode de vie — tout justifié par vos données. Appel de remise inclus.", tag: "Protocole 4 semaines · Appel inclus", detail: "Document structuré + restitution" },
]

function StepCard({ step, index }) {
    const [hov, setHov] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.12 }}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{
                position: "relative", display: "flex", flexDirection: "column",
                background: card, borderRadius: 6, padding: "36px 28px 28px",
                border: `1.5px solid ${hov ? teal : border}`,
                transition: "all 0.3s ease",
                transform: hov ? "translateY(-4px)" : "none",
                boxShadow: hov ? "0 16px 40px rgba(0,85,80,0.1)" : "0 2px 12px rgba(0,85,80,0.05)",
                overflow: "hidden",
            }}
        >
            {/* Top accent bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: hov ? green : "transparent", transition: "background 0.3s ease", borderRadius: "6px 6px 0 0" }} />

            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
                <span style={{ fontFamily: serif, fontSize: 64, fontWeight: 300, lineHeight: 1, color: hov ? `rgba(0,85,80,0.15)` : `rgba(0,85,80,0.07)`, transition: "color 0.3s ease", userSelect: "none" }}>{step.num}</span>
                <div style={{ width: 32, height: 32, borderRadius: "50%", border: `1.5px solid ${hov ? green : border}`, background: hov ? "rgba(0,160,80,0.08)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease", flexShrink: 0 }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={hov ? green : textLt} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </div>
            </div>

            <h3 style={{ fontFamily: serif, fontSize: 24, fontWeight: 600, color: text, lineHeight: 1.1, marginBottom: 4 }}>{step.title}</h3>
            <p style={{ fontFamily: sans, fontSize: 12, fontStyle: "italic", color: tealLt, marginBottom: 16 }}>{step.tagline}</p>
            <div style={{ width: 24, height: 2, background: green, borderRadius: 1, marginBottom: 16 }} />
            <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: textMid, lineHeight: 1.85, flex: 1, marginBottom: 20 }}>{step.body}</p>

            <div style={{ paddingTop: 16, borderTop: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: teal }}>{step.tag}</span>
                <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: textLt }}>{step.detail}</span>
            </div>
        </motion.div>
    )
}

export default function Process() {
    const [ctaHov, setCtaHov] = useState(false)
    return (
        <section id="processus" style={{ position: "relative", width: "100%", background: bg, padding: "120px 32px", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: `linear-gradient(rgba(0,85,80,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,80,0.025) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />

            <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: 72 }}>
                    <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: green, marginBottom: 16 }}>Comment ça fonctionne</p>
                    <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 5vw, 56px)", fontWeight: 400, color: text, lineHeight: 1.1, marginBottom: 16 }}>
                        De l'appel au protocole.<br /><em style={{ fontStyle: "normal", color: teal }}>En 4 étapes simples.</em>
                    </h2>
                    <div style={{ width: 40, height: 2, background: green, borderRadius: 1, margin: "0 auto 24px" }} />
                    <p style={{ fontFamily: sans, fontSize: 17, fontWeight: 300, color: textMid, lineHeight: 1.85, maxWidth: 520, margin: "0 auto" }}>Un processus conçu pour être aussi simple pour vous que rigoureux pour nous.</p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 48 }}>
                    {STEPS.map((s, i) => <StepCard key={s.num} step={s} index={i} />)}
                </div>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} style={{ textAlign: "center" }}>
                    <p style={{ fontFamily: sans, fontSize: 14, fontWeight: 300, color: textMid, marginBottom: 22 }}>Prêt à découvrir ce que votre biologie révèle ?</p>
                    <a href="https://calendly.com/eolyalabs/30min" target="_blank" rel="noopener noreferrer"
                        onMouseEnter={() => setCtaHov(true)} onMouseLeave={() => setCtaHov(false)}
                        style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 40px", background: ctaHov ? "#00C060" : green, color: "#fff", fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", borderRadius: 4, textDecoration: "none", cursor: "pointer", transition: "all 0.3s ease", transform: ctaHov ? "translateY(-2px)" : "none", boxShadow: ctaHov ? "0 8px 24px rgba(0,160,80,0.3)" : "0 4px 12px rgba(0,160,80,0.2)" }}>
                        Démarrer maintenant
                        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.3s", transform: ctaHov ? "translateX(4px)" : "none" }}><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
