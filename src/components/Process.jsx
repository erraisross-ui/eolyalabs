import { useState } from "react"
import { motion } from "framer-motion"

const bg = "#0A192F", card = "#0C1424", cardHov = "#0E1828"
const gold = "#C9A96E", steel = "#7A8BA0", steelLt = "#9DAFC4", white = "#F0F4F8"
const border = "rgba(255,255,255,0.06)"
const serif = "'Cormorant Garamond', Georgia, serif"
const sans  = "'Inter', system-ui, sans-serif"

const STEPS = [
    { num:"01", title:"Consultation",     tagline:"On apprend à vous connaître.",    body:"Un appel découverte gratuit de 30 minutes. Vous décrivez vos objectifs, vos symptômes, votre mode de vie. Nous identifions ensemble le forfait qui correspond précisément à votre profil biologique.", tag:"Gratuit · Sans engagement",       detail:"Par Zoom ou téléphone" },
    { num:"02", title:"Analyse sanguine", tagline:"Votre biologie, enfin mesurée.",  body:"Nous émettons votre requête officielle d'analyses biologiques privées. Vous vous rendez dans une clinique partenaire certifiée — Biron ou CDL — pour votre prélèvement. Aucune ordonnance médicale requise.", tag:"Biron · CDL · Québec",            detail:"Sans ordonnance préalable" },
    { num:"03", title:"Diagnostic expert",tagline:"Deux regards. Une lecture précise.",body:"Abdessamad et Eolie analysent ensemble vos résultats. Chaque marqueur est interprété selon des plages fonctionnelles optimales — et croisé avec les autres pour révéler votre tableau biologique complet.", tag:"Analyse duo · 48–72h",            detail:"Plages fonctionnelles optimales" },
    { num:"04", title:"Votre protocole",  tagline:"Un plan. Des résultats. Votre vie.",body:"Vous recevez un protocole complet de 4 semaines : nutrition ciblée, suppléments dosés scientifiquement, ajustements de mode de vie — tout justifié par vos données. Appel de remise inclus.", tag:"Protocole 4 semaines · Appel inclus",detail:"Document structuré + restitution" },
]

function StepCard({ step, index }) {
    const [hov, setHov] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 }}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{ position: "relative", display: "flex", flexDirection: "column", background: hov ? cardHov : card, border: `1px solid ${hov ? "rgba(201,169,110,0.25)" : border}`, borderRadius: 4, padding: "40px 28px 32px", transition: "all 0.35s ease", transform: hov ? "translateY(-5px)" : "none", boxShadow: hov ? "0 20px 48px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.2)", overflow: "hidden" }}
        >
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, transparent, ${gold}, transparent)`, opacity: hov ? 0.7 : 0, transition: "opacity 0.35s ease" }} />
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
                <span style={{ fontFamily: serif, fontSize: 68, fontWeight: 300, lineHeight: 1, color: hov ? "rgba(201,169,110,0.22)" : "rgba(201,169,110,0.1)", transition: "color 0.35s ease", userSelect: "none" }}>{step.num}</span>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: gold, opacity: 0.6, marginTop: 8, flexShrink: 0 }} />
            </div>
            <h3 style={{ fontFamily: serif, fontSize: 24, fontWeight: 600, color: white, lineHeight: 1.1, marginBottom: 6 }}>{step.title}</h3>
            <p style={{ fontFamily: sans, fontSize: 12, fontStyle: "italic", color: gold, marginBottom: 18 }}>{step.tagline}</p>
            <div style={{ width: 28, height: 1, background: "rgba(201,169,110,0.35)", marginBottom: 18 }} />
            <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: steelLt, lineHeight: 1.85, flex: 1, marginBottom: 24 }}>{step.body}</p>
            <div style={{ paddingTop: 18, borderTop: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: gold }}>{step.tag}</span>
                <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: "rgba(122,139,160,0.5)" }}>{step.detail}</span>
            </div>
        </motion.div>
    )
}

export default function Process() {
    const [ctaHov, setCtaHov] = useState(false)
    return (
        <section id="processus" style={{ position: "relative", width: "100%", background: `linear-gradient(180deg, #080E1C 0%, ${bg} 100%)`, padding: "120px 32px", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: `linear-gradient(rgba(201,169,110,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.025) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
            <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} style={{ textAlign: "center", marginBottom: 72 }}>
                    <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: gold, marginBottom: 20 }}>Comment ça fonctionne</p>
                    <h2 style={{ fontFamily: serif, fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, color: white, lineHeight: 1.1, marginBottom: 16 }}>
                        De l'appel au protocole.<br /><em style={{ fontStyle: "normal", color: gold }}>En 4 étapes simples.</em>
                    </h2>
                    <div style={{ width: 40, height: 1, background: "rgba(201,169,110,0.4)", margin: "0 auto 24px" }} />
                    <p style={{ fontFamily: sans, fontSize: 17, fontWeight: 300, color: steelLt, lineHeight: 1.85, maxWidth: 540, margin: "0 auto" }}>Un processus conçu pour être aussi simple pour vous que rigoureux pour nous. Vous n'avez qu'une chose à faire : réserver votre appel.</p>
                </motion.div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 48 }}>
                    {STEPS.map((s, i) => <StepCard key={s.num} step={s} index={i} />)}
                </div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 32px", background: card, border: `1px solid ${border}`, borderRadius: 4, overflowX: "auto", gap: 0, marginBottom: 48 }}>
                    {STEPS.map((s, i) => (
                        <div key={s.num} style={{ display: "flex", alignItems: "center", flex: i < 3 ? 1 : 0, minWidth: 0 }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0 }}>
                                <div style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(201,169,110,0.3)", background: "rgba(201,169,110,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <span style={{ fontFamily: serif, fontSize: 14, fontWeight: 600, color: gold }}>{i+1}</span>
                                </div>
                                <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: steel, whiteSpace: "nowrap" }}>{s.title}</span>
                            </div>
                            {i < 3 && <div style={{ flex: 1, height: 1, margin: "0 10px", marginBottom: 24, background: "rgba(201,169,110,0.15)" }} />}
                        </div>
                    ))}
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} style={{ textAlign: "center" }}>
                    <p style={{ fontFamily: sans, fontSize: 14, fontWeight: 300, color: steel, marginBottom: 22 }}>Prêt à découvrir ce que votre biologie révèle ?</p>
                    <a href="https://calendly.com/eolyalabs/30min" target="_blank" rel="noopener noreferrer"
                        onMouseEnter={() => setCtaHov(true)} onMouseLeave={() => setCtaHov(false)}
                        style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "15px 40px", background: ctaHov ? gold : "transparent", color: ctaHov ? bg : white, fontFamily: sans, fontSize: 13, fontWeight: 500, letterSpacing: "0.05em", border: `1px solid ${ctaHov ? gold : "rgba(255,255,255,0.15)"}`, borderRadius: 2, textDecoration: "none", cursor: "pointer", transition: "all 0.35s ease", transform: ctaHov ? "translateY(-2px)" : "none" }}>
                        Démarrer maintenant
                        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.3s", transform: ctaHov ? "translateX(4px)" : "none" }}><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
