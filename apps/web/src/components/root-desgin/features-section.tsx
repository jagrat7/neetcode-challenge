import { Squiggle } from "./layout"
import { InteractiveWalkthrough } from "./interactive-walkthrough"
import { VideoSolutionsPanel } from "./video-solutions-panel"
import { NeetBotChat } from "./neet-bot-chat"


export function FeaturesSection() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>
            More Than Just Problems
          </h2>
          <Squiggle color="#2563EB" className="mx-auto mt-1 h-1.5 w-32" />
          <p className="mt-4 text-[#64748B]">
            Three tools that replace scattered resources, provide structure, and give instant feedback.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Card 1: Interactive Walkthroughs */}
          <div className="relative">
            <div className="absolute -left-1 -top-1 h-4 w-4 border-l-2 border-t-2 border-[#2563EB]" />
            <div className="absolute -right-1 -top-1 h-4 w-4 border-r-2 border-t-2 border-[#2563EB]" />
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              <span className="flex size-5 items-center justify-center border-2 border-[#2563EB] text-[10px]">1</span>
              Interactive Walkthroughs
            </p>
            <InteractiveWalkthrough />
            <p className="mt-2 text-center text-xs text-[#94A3B8]" style={{ fontFamily: "Caveat, cursive" }}>
              ↑ This is live! Try the play button
            </p>
          </div>

          {/* Card 2: Video Solutions */}
          <div className="relative">
            <div className="absolute -left-1 -top-1 h-4 w-4 border-l-2 border-t-2 border-[#DC2626]" />
            <div className="absolute -right-1 -top-1 h-4 w-4 border-r-2 border-t-2 border-[#DC2626]" />
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              <span className="flex size-5 items-center justify-center border-2 border-[#DC2626] text-[10px]">2</span>
              Video Solutions
            </p>
            <VideoSolutionsPanel />
          </div>

          {/* Card 3: NeetBot AI */}
          <div className="relative">
            <div className="absolute -left-1 -top-1 h-4 w-4 border-l-2 border-t-2 border-[#16A34A]" />
            <div className="absolute -right-1 -top-1 h-4 w-4 border-r-2 border-t-2 border-[#16A34A]" />
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16A34A]">
              <span className="flex size-5 items-center justify-center border-2 border-[#16A34A] text-[10px]">3</span>
              NeetBot AI
            </p>
            <NeetBotChat />
          </div>
        </div>
      </div>
    </section>
  )
}
