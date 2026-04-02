import type { Route } from "./+types/_index"
import { HeroSection } from "@/components/root-desgin/hero"
import { CompanyLogosSection } from "@/components/root-desgin/company-logos-section"
import { TestimonialsSection } from "@/components/root-desgin/testimonials-section"
import { FeatureTabs as FeaturesSection } from "@/components/root-desgin/feature-section"
import { CoursesSection } from "@/components/root-desgin/courses-section"
import { FounderSection } from "@/components/root-desgin/founder-section"
import { Footer } from "@/components/root-desgin/footer"
import { Navbar } from "@/components/root-desgin/navbar"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "my-better-t-app" },
    { name: "description", content: "my-better-t-app is a web application" },
  ]
}

export default function WhiteboardLanding() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#1E293B]" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          {/* <ArrayTopicStrip /> */}
          <FeaturesSection />
          <CoursesSection />
          <CompanyLogosSection />
          <TestimonialsSection />
          <FounderSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
