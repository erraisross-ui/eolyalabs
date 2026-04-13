import { motion } from "framer-motion"

const teal    = "#005550"
const green   = "#00A050"
const textLt  = "#6B8A86"
const border  = "rgba(0,85,80,0.1)"
const serif   = "'Cormorant Garamond', Georgia, serif"
const sans    = "'Inter', system-ui, sans-serif"

const LINKS = [
    { label: "Forfaits", href: "#forfaits" },
    { label: "Processus", href: "#processus" },
    { label: "L'équipe", href: "#equipe" },
    { label: "Contact", href: "#contact" },
]

export default function Footer() {
    return (
        <footer style={{ background: teal, padding: "64px 32px 40px", width: "100%" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>

                {/* Top row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ display: "flex", flexWrap: "wrap", gap: "40px 80px", justifyContent: "space-between", paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: 32 }}
                >
                    {/* Logo + tagline */}
                    <div style={{ minWidth: 220 }}>
                        <p style={{ fontFamily: serif, fontSize: 28, fontWeight: 600, color: "#fff", lineHeight: 1, marginBottom: 10 }}>Eolyalabs</p>
                        <p style={{ fontFamily: sans, fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 240 }}>
                            Clinique d'optimisation biologique.<br />Montréal, Québec.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: green, marginBottom: 16 }}>Navigation</p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                            {LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <a href={href} style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s", cursor: "pointer" }}
                                        onMouseEnter={e => e.target.style.color = "#fff"}
                                        onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
                                    >{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: green, marginBottom: 16 }}>Contact</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {[
                                { icon: "📍", text: "Montréal, Québec, Canada" },
                                { icon: "📩", text: "info@eolyalabs.com", href: "mailto:info@eolyalabs.com" },
                                { icon: "📞", text: "514 963 8984", href: "tel:+15149638984" },
                            ].map(({ icon, text, href }) => (
                                <div key={text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <span style={{ fontSize: 13 }}>{icon}</span>
                                    {href
                                        ? <a href={href} style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }}
                                            onMouseEnter={e => e.target.style.color = "#fff"}
                                            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
                                          >{text}</a>
                                        : <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.65)" }}>{text}</span>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <a href="https://calendly.com/eolyalabs/30min" target="_blank" rel="noopener noreferrer"
                            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 28px", background: green, color: "#fff", fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: "0.03em", borderRadius: 4, textDecoration: "none", transition: "background 0.3s ease", whiteSpace: "nowrap" }}
                            onMouseEnter={e => e.currentTarget.style.background = "#00C060"}
                            onMouseLeave={e => e.currentTarget.style.background = green}
                        >
                            Réserver un appel
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </div>
                </motion.div>

                {/* Bottom row */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between" }}>
                    <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>
                        © {new Date().getFullYear()} Eolyalabs. Tous droits réservés.
                    </p>
                    <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.3)", lineHeight: 1.6, maxWidth: 480, textAlign: "right" }}>
                        Analyses réalisées par des laboratoires partenaires certifiés (Biron / CDL). Protocoles à titre informatif et préventif.
                    </p>
                </div>
            </div>
        </footer>
    )
}
