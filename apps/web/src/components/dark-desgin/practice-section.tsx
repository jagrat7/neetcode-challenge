import { Button } from "@my-better-t-app/ui/components/button"
import { CyberGlitchText } from "@my-better-t-app/ui/components/ui/cyber-glitch-text"
import { Check, ChevronRight, ExternalLink } from "lucide-react"

import { PRACTICE_TOPICS, VALUE_PROPS } from "../../data/landing-data"
import { CodeSectionBlock } from "./code-section-block"
import { DSA } from "./dsa-theme"

export function PracticeSection() {
  return (
    <section id="practice" className="px-6 py-16" style={{ backgroundColor: DSA.bg, borderTop: `1px solid ${DSA.border}` }}>
      <CodeSectionBlock
        className="mx-auto max-w-5xl"
        contentClassName="grid items-center gap-12 lg:grid-cols-2"
        duration={26}
        label="function startPractice(): void"
        labelClassName="mb-1 text-[11px]"
        labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
      >
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <CyberGlitchText text="Start Practicing for Free" scrambleOnMount={false} className="text-[#E6EDF3]" />
          </h2>
          <p className="mt-3" style={{ color: DSA.muted }}>The best resources for coding interviews. Period.</p>
          <ul className="mt-6 space-y-3">
            {VALUE_PROPS.map((prop, pi) => (
              <li key={prop} className="flex items-start gap-3">
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${DSA.visited}20` }}>
                  <Check className="size-3" style={{ color: DSA.visited }} />
                </div>
                <span className="text-sm" style={{ color: DSA.muted }}>
                  <span className="mr-1.5 text-[9px]" style={{ color: DSA.current, fontFamily: "JetBrains Mono, monospace", opacity: 0.5 }}>
                    assert({pi})
                  </span>
                  {prop}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="px-6 text-sm" style={{ backgroundColor: DSA.visited, color: DSA.bg, fontWeight: 700, borderRadius: "8px" }}>
              Start Practicing
            </Button>
            <Button size="lg" className="px-6 text-sm" style={{ backgroundColor: "transparent", border: `1px solid ${DSA.fg}30`, color: DSA.fg, borderRadius: "8px" }}>
              View Roadmap
            </Button>
            <Button variant="ghost" size="lg" className="px-4 text-sm" style={{ color: DSA.muted }}>
              <ExternalLink className="size-4" />
              Discord
            </Button>
          </div>
        </div>

        <div className="rounded-lg p-6" style={{ backgroundColor: DSA.card, border: `1px solid ${DSA.border}` }}>
          <div className="mb-1 text-[9px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
            stack&lt;Topic&gt; progress
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-full px-2 py-0.5 text-xs font-bold" style={{ backgroundColor: `${DSA.visited}20`, color: DSA.visited }}>Free</span>
              <span className="text-sm font-bold" style={{ color: DSA.fg }}>NeetCode 150</span>
            </div>
            <ChevronRight className="size-4" style={{ color: DSA.muted }} />
          </div>
          <div className="mb-4">
            <div className="mb-1 flex justify-between text-xs" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
              <span>solved: 67 / 150</span>
              <span>0.45</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full" style={{ backgroundColor: `${DSA.unvisited}40` }}>
              <div className="h-full rounded-full" style={{ width: "45%", backgroundColor: DSA.visited }} />
            </div>
          </div>
          <div className="relative space-y-0">
            {PRACTICE_TOPICS.map((topic, i) => (
              <div key={topic} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex size-8 items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: `${DSA.visited}15`, border: `2px solid ${DSA.visited}`, color: DSA.visited }}>
                    ✓
                  </div>
                  {i < PRACTICE_TOPICS.length - 1 && (
                    <div className="h-4 w-0.5" style={{ backgroundColor: DSA.visited, opacity: 0.3 }} />
                  )}
                </div>
                <div className="flex flex-1 items-center justify-between py-1.5">
                  <span className="text-sm" style={{ color: DSA.fg }}>{topic}</span>
                  <span className="text-[9px]" style={{ color: DSA.visited, fontFamily: "JetBrains Mono, monospace", opacity: 0.5 }}>pop()</span>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full text-xs" style={{ backgroundColor: `${DSA.unvisited}15`, border: `2px solid ${DSA.unvisited}`, color: DSA.muted }}>
                ?
              </div>
              <span className="text-sm" style={{ color: DSA.muted }}>
                +14 more topics
                <span className="ml-2 text-[9px]" style={{ fontFamily: "JetBrains Mono, monospace", opacity: 0.5 }}>// stack.size()</span>
              </span>
            </div>
          </div>
        </div>
      </CodeSectionBlock>
    </section>
  )
}
