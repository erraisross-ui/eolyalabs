import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// EOLYALABS — HeroSection
// Fond Bleu Minuit avec effet de bruit subtil, typographie Cormorant Garamond,
// animation au chargement, barre de proof et CTA double.
// ─────────────────────────────────────────────────────────────────────────────

const PROOF_ITEMS = [
  { icon: "🔬", label: "Analyses privées certifiées" },
  { icon: "📋", label: "Protocole en 4 semaines" },
  { icon: "🤝", label: "Suivi par deux experts" },
  { icon: "🏥", label: "Prélèvements Biron & CDL" },
];

export default function HeroSection({ onCtaClick, onPlansClick }) {
  const badgeRef  = useRef(null);
  const titleRef  = useRef(null);
  const subRef    = useRef(null);
  const ctaRef    = useRef(null);
  const proofRef  = useRef(null);

  // Staggered entrance animation sans dépendance externe
  useEffect(() => {
    const elements = [
      { el: badgeRef.current,  delay: 100 },
      { el: titleRef.current,  delay: 280 },
      { el: subRef.current,    delay: 460 },
      { el: ctaRef.current,    delay: 620 },
      { el: proofRef.current,  delay: 820 },
    ];

    elements.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    });
  }, []);

  return (
    <section
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0A192F" }}
      aria-label="Section Hero Eolyalabs"
    >
      {/* ── Bruit de texture (grain) ──────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* ── Halo lumineux centré ──────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Contenu principal ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-32 pb-16 text-center max-w-5xl mx-auto w-full">

        {/* Badge */}
        <div ref={badgeRef} className="mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-medium tracking-widest2 uppercase"
            style={{
              border: "1px solid rgba(201,169,110,0.35)",
              color: "#C9A96E",
              backgroundColor: "rgba(201,169,110,0.06)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-slow"
              style={{ backgroundColor: "#C9A96E" }}
            />
            Clinique d&apos;optimisation biologique — Québec
          </span>
        </div>

        {/* Titre H1 */}
        <h1
          ref={titleRef}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.08] text-white mb-6"
        >
          Votre biologie
          <br />
          <em
            className="not-italic"
            style={{
              background: "linear-gradient(135deg, #C9A96E 0%, #DFC28E 50%, #C9A96E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ne ment pas.
          </em>
          <br />
          <span style={{ color: "#F7F8FA" }}>Vos résultats non plus.</span>
        </h1>

        {/* Séparateur doré */}
        <div
          className="w-16 h-px mx-auto mb-8"
          style={{ backgroundColor: "rgba(201,169,110,0.5)" }}
        />

        {/* Sous-titre */}
        <p
          ref={subRef}
          className="font-sans text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: "#8492A6" }}
        >
          Nous analysons votre sang. Nous lisons vos marqueurs biologiques
          à la décimale près. Nous construisons un protocole personnalisé —
          nutrition et suppléments — en{" "}
          <span style={{ color: "#F7F8FA" }}>4 semaines</span>,
          pour que vous retrouviez l&apos;énergie, la composition corporelle
          et la vitalité que vous méritez.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mt-12">
          <button
            onClick={onCtaClick}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-sans font-medium text-sm tracking-wide rounded-sm overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: "#F7F8FA",
              color: "#0A192F",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#C9A96E";
              e.currentTarget.style.color = "#0A192F";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#F7F8FA";
              e.currentTarget.style.color = "#0A192F";
            }}
          >
            Réserver mon appel découverte
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button
            onClick={onPlansClick}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-sans font-medium text-sm tracking-wide rounded-sm transition-all duration-300"
            style={{
              border: "1px solid rgba(247,248,250,0.2)",
              color: "#F7F8FA",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)";
              e.currentTarget.style.color = "#C9A96E";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(247,248,250,0.2)";
              e.currentTarget.style.color = "#F7F8FA";
            }}
          >
            Voir les forfaits
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Micro-preuve sous CTA */}
        <p
          className="mt-4 font-sans text-xs tracking-wide"
          style={{ color: "rgba(132,146,166,0.7)" }}
        >
          Appel gratuit · 30 minutes · Sans engagement
        </p>
      </div>

      {/* ── Barre Proof Strip ─────────────────────────────────────────────── */}
      <div
        ref={proofRef}
        className="relative z-10 w-full"
        style={{ borderTop: "1px solid rgba(132,146,166,0.12)" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-5">
          <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {PROOF_ITEMS.map(({ icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 font-sans text-xs tracking-wide"
                style={{ color: "#8492A6" }}
              >
                <span className="text-base">{icon}</span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Flèche scroll ─────────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-5 h-5"
          style={{ color: "rgba(201,169,110,0.4)" }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
