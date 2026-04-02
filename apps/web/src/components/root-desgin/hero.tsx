import { Button } from "@my-better-t-app/ui/components/button"
import { Rocket } from "lucide-react"
import { InteractiveGridPattern } from "@my-better-t-app/ui/components/interactive-grid-pattern"
import { Squiggle } from "./layout"
import { HERO_CONTENT } from "../../data/landing-data"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[75vh] flex-col justify-center overflow-hidden px-6 py-16">
      <InteractiveGridPattern
        squares={[30, 20]}
        className="pointer-events-auto opacity-60 [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_80%)]"
        squaresClassName="stroke-[#2563EB]/10 hover:fill-[#2563EB]/15"
      />
      <div className="pointer-events-none relative mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.95] text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>
            <span className="relative inline-block">
              NeetCode
              <Squiggle className="absolute -bottom-1 left-0 h-2 w-full" />
            </span>
          </h1>
          <p className="mt-3 text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-[#2563EB]" style={{ fontFamily: "Caveat, cursive" }}>
            {HERO_CONTENT.tagline}
          </p>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#64748B]">
            {HERO_CONTENT.description}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg" className="pointer-events-auto h-11 rounded-none border-2 border-[#2563EB] bg-[#2563EB] px-8 text-white transition-all hover:bg-[#1D4ED8]">
            <Rocket className="size-4" />
            Get Pro
          </Button>
          <Button variant="secondary" size="lg" className="pointer-events-auto h-11 rounded-none border-2 border-[#1E293B]  px-8 text-[#1E293B] bg-/5 transition-all ">
            Start Free
          </Button>
        </div>

        {/* Stats as hand-drawn bar chart */}
        <div className="mx-auto mt-20 flex max-w-md items-end justify-center gap-16">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-[#2563EB]" style={{ fontFamily: "Caveat, cursive" }}>1M+</span>
            <div className="mt-1 h-30 w-16 border-2 border-[#2563EB] bg-[#2563EB]/10" style={{ borderRadius: "2px" }} />
            <span className="mt-2 text-xs text-[#64748B]">Engineers prepared</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-[#16A34A]" style={{ fontFamily: "Caveat, cursive" }}>1,000+</span>
            <div className="mt-1 h-28 w-16 border-2 border-[#16A34A] bg-[#16A34A]/10" style={{ borderRadius: "2px" }} />
            <span className="mt-2 text-center text-xs text-[#64748B]">Problems & Videos</span>
          </div>
        </div>
      </div>
    </section>
  )
}
