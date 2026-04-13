import Hero from "./components/Hero"
import Process from "./components/Process"
import Services from "./components/Services"
import About from "./components/About"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function App() {
  return (
    <main style={{ background: "#F9F8F6" }}>
      <Hero />
      <Process />
      <Services />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
