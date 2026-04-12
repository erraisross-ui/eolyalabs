import Hero from "./components/Hero"
import Process from "./components/Process"
import Pricing from "./components/Pricing"
import About from "./components/About"
import CTA from "./components/CTA"

export default function App() {
  return (
    <main style={{ background: "#060D1F" }}>
      <Hero />
      <Process />
      <Pricing />
      <About />
      <CTA />
    </main>
  )
}
