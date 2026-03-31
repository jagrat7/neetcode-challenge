import { Check, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@my-better-t-app/ui/components/button"
import { Squiggle } from "./layout"
import { VALUE_PROPS, PRACTICE_TOPICS } from "../../data/landing-data"

export function PracticeSection() {
  return (
    <section id="practice" className="border-y-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-6 py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>Start Practicing for Free</h2>
          <Squiggle color="#16A34A" className="mt-1 h-1.5 w-32" />
          <p className="mt-4 text-[#64748B]">The best resources for coding interviews. Period.</p>
          <ul className="mt-6 space-y-3">
            {VALUE_PROPS.map((prop) => (
              <li key={prop} className="flex items-start gap-3">
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-[#16A34A]">
                  <Check className="size-3 text-[#16A34A]" />
                </div>
                <span className="text-sm text-[#475569]">{prop}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-none border-2 border-[#16A34A] bg-[#16A34A] px-6 text-sm text-white shadow-[3px_3px_0px_#1E293B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#1E293B]">
              Start Practicing
            </Button>
            <Button variant="outline" size="lg" className="rounded-none border-2 border-[#1E293B] px-6 text-sm text-[#1E293B]">View Roadmap</Button>
            <Button variant="ghost" size="lg" className="px-4 text-sm text-[#64748B]">
              <ExternalLink className="size-4" />
              Discord
            </Button>
          </div>
        </div>

        {/* Linked list practice tracker */}
        <div className="border-2 border-[#2563EB]/30 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="border border-[#16A34A] bg-[#16A34A]/10 px-2 py-0.5 text-xs font-medium text-[#16A34A]">Free</span>
              <span className="text-sm font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>NeetCode 150</span>
            </div>
            <ChevronRight className="size-4 text-[#94A3B8]" />
          </div>
          <div className="mb-4">
            <div className="mb-1 flex justify-between text-xs text-[#64748B]">
              <span>67 / 150 completed</span>
              <span>45%</span>
            </div>
            <div className="h-3 border-2 border-[#CBD5E1] bg-white">
              <div className="h-full bg-[#16A34A]/70" style={{ width: "45%" }} />
            </div>
          </div>
          {/* Topics as linked list nodes */}
          <div className="space-y-1">
            {PRACTICE_TOPICS.map((topic, i) => (
              <div key={topic} className="flex items-center">
                <div className="flex flex-1 items-center justify-between border-2 border-dashed border-[#CBD5E1] px-3 py-2">
                  <span className="text-xs text-[#475569]">{topic}</span>
                  <span className="text-[10px] text-[#16A34A]" style={{ fontFamily: "Caveat, cursive" }}>✓ done</span>
                </div>
                {i < PRACTICE_TOPICS.length - 1 && (
                  <svg width="16" height="24" viewBox="0 0 16 24" className="shrink-0 text-[#2563EB]">
                    <path d="M8 0V18M4 14L8 20L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                )}
              </div>
            ))}
            <div className="border-2 border-dashed border-[#CBD5E1]/50 px-3 py-2 text-xs text-[#94A3B8]">+14 more →</div>
          </div>
        </div>
      </div>
    </section>
  )
}
