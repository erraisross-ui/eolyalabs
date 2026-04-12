import { useRef } from "react";
import HeroSection from "./components/HeroSection";
import PricingTable from "./components/PricingTable";

// ─────────────────────────────────────────────────────────────────────────────
// EOLYALABS — App root
// Point d'entrée. Câble les handlers de navigation entre sections.
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  const plansRef = useRef(null);

  const handleScrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCtaClick = () => {
    // Remplacer par le lien Calendly ou Shopify
    window.open("https://calendly.com/eolyalabs", "_blank", "noopener,noreferrer");
  };

  const handleSelectPlan = ({ name, price }) => {
    // Remplacer par la redirection vers la page produit Shopify du forfait
    console.info(`[Eolyalabs] Forfait sélectionné : ${name} — ${price}`);
  };

  return (
    <main className="font-sans antialiased" style={{ backgroundColor: "#0A192F" }}>
      <HeroSection
        onCtaClick={handleCtaClick}
        onPlansClick={handleScrollToPlans}
      />
      <div ref={plansRef}>
        <PricingTable onSelectPlan={handleSelectPlan} />
      </div>
    </main>
  );
}
