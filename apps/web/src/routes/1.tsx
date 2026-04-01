import { CompanyLogosSection } from "../components/dark-desgin/company-logos-section"
import { CoursesSection } from "../components/dark-desgin/courses-section"
import { FeaturesSection } from "../components/dark-desgin/features-section"
import { DotGrid } from "../components/dark-desgin/dot-grid"
import { Footer } from "../components/dark-desgin/footer"
import { FounderSection } from "../components/dark-desgin/founder-section"
import { HeroSection } from "../components/dark-desgin/hero-section"
import { Navbar } from "../components/dark-desgin/navbar"
import { PracticeSection } from "../components/dark-desgin/practice-section"
import { TestimonialsSection } from "../components/dark-desgin/testimonials-section"
import { DSA } from "../components/dark-desgin/dsa-theme"

export default function DSAVisualLanding() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: DSA.bg, color: DSA.fg, fontFamily: "Inter, sans-serif" }}>
      <DotGrid />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          {/* <TopicNetwork /> */}
          <CompanyLogosSection />
          <FeaturesSection />
          <TestimonialsSection />
          <CoursesSection />
          <PracticeSection />
          <FounderSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
