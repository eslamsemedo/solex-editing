import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import StatsBand from "@/components/stats-band"
import ServicePreview from "@/components/service-preview"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <ServicePreview />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
