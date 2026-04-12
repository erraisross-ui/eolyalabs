import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// EOLYALABS — PricingCard
// Carte individuelle de forfait. Supporte un état "highlighted" (Best-Seller)
// avec bordure dorée, badge et fond légèrement plus lumineux.
// ─────────────────────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg
    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
    style={{ color: "#C9A96E" }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingCard({
  badge,
  name,
  tagline,
  price,
  description,
  markers,
  ideal,
  ctaLabel = "Choisir ce forfait",
  onSelect,
  highlighted = false,
  animationDelay = 0,
}) {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    backgroundColor: highlighted ? "#112240" : "#0D2040",
    border: highlighted
      ? "1px solid rgba(201,169,110,0.55)"
      : "1px solid rgba(132,146,166,0.12)",
    transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
    transform: highlighted
      ? hovered ? "translateY(-10px)" : "translateY(-6px)"
      : hovered ? "translateY(-6px)" : "translateY(0)",
    boxShadow: highlighted
      ? hovered
        ? "0 32px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,169,110,0.3)"
        : "0 20px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,169,110,0.2)"
      : hovered
        ? "0 20px 48px rgba(0,0,0,0.35)"
        : "0 4px 24px rgba(0,0,0,0.2)",
    animationDelay: `${animationDelay}ms`,
  };

  return (
    <div
      className="relative flex flex-col rounded-sm animate-fade-up"
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Badge Best-Seller ──────────────────────────────────────────────── */}
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1 font-sans text-xs font-semibold tracking-widest uppercase rounded-full"
            style={{
              backgroundColor: "#C9A96E",
              color: "#0A192F",
            }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {badge}
          </span>
        </div>
      )}

      {/* ── En-tête de carte ──────────────────────────────────────────────── */}
      <div
        className="px-8 pt-10 pb-8"
        style={{ borderBottom: "1px solid rgba(132,146,166,0.1)" }}
      >
        {/* Nom du forfait */}
        <p
          className="font-sans text-xs tracking-widest2 uppercase font-medium mb-3"
          style={{ color: "#C9A96E" }}
        >
          Forfait
        </p>
        <h3
          className="font-serif text-4xl font-semibold text-white mb-2"
        >
          {name}
        </h3>
        <p
          className="font-sans text-sm leading-relaxed"
          style={{ color: "#8492A6" }}
        >
          {tagline}
        </p>

        {/* Prix */}
        <div className="mt-8 flex items-baseline gap-1">
          <span
            className="font-serif text-6xl font-semibold"
            style={{ color: highlighted ? "#C9A96E" : "#F7F8FA" }}
          >
            {price}
          </span>
          <span
            className="font-sans text-sm ml-1"
            style={{ color: "#8492A6" }}
          >
            CAD
          </span>
        </div>
        <p
          className="font-sans text-xs mt-1.5"
          style={{ color: "rgba(132,146,166,0.6)" }}
        >
          Paiement unique · Protocole de 4 semaines
        </p>

        {/* Description courte */}
        <p
          className="font-sans text-sm leading-relaxed mt-6"
          style={{ color: "#A8B8CC" }}
        >
          {description}
        </p>
      </div>

      {/* ── Marqueurs biologiques ─────────────────────────────────────────── */}
      <div className="px-8 py-7 flex-1">
        <p
          className="font-sans text-xs tracking-widest uppercase font-semibold mb-5"
          style={{ color: "rgba(132,146,166,0.7)" }}
        >
          Marqueurs biologiques inclus
        </p>
        <ul className="space-y-3">
          {markers.map((marker) => (
            <li key={marker} className="flex items-start gap-3">
              <CheckIcon />
              <span
                className="font-sans text-sm leading-snug"
                style={{ color: "#A8B8CC" }}
              >
                {marker}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Idéal pour ────────────────────────────────────────────────────── */}
      <div
        className="mx-8 mb-7 px-5 py-4 rounded-sm"
        style={{ backgroundColor: "rgba(10,25,47,0.6)" }}
      >
        <p
          className="font-sans text-xs tracking-widest uppercase font-semibold mb-2"
          style={{ color: "rgba(132,146,166,0.6)" }}
        >
          Ce forfait est pour vous si
        </p>
        <p
          className="font-sans text-sm leading-relaxed"
          style={{ color: "#8492A6" }}
        >
          {ideal}
        </p>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <div className="px-8 pb-8">
        <button
          onClick={() => onSelect?.({ name, price })}
          className="group w-full flex items-center justify-center gap-2.5 px-6 py-4 font-sans font-medium text-sm tracking-wide rounded-sm transition-all duration-300"
          style={
            highlighted
              ? { backgroundColor: "#C9A96E", color: "#0A192F" }
              : {
                  border: "1px solid rgba(247,248,250,0.2)",
                  color: "#F7F8FA",
                  backgroundColor: "transparent",
                }
          }
          onMouseEnter={(e) => {
            if (highlighted) {
              e.currentTarget.style.backgroundColor = "#DFC28E";
            } else {
              e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)";
              e.currentTarget.style.color = "#C9A96E";
            }
          }}
          onMouseLeave={(e) => {
            if (highlighted) {
              e.currentTarget.style.backgroundColor = "#C9A96E";
            } else {
              e.currentTarget.style.borderColor = "rgba(247,248,250,0.2)";
              e.currentTarget.style.color = "#F7F8FA";
            }
          }}
        >
          {ctaLabel}
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
