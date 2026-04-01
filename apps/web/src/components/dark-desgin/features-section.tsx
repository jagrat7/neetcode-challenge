import { useState, useCallback, useEffect, useRef, type ReactNode } from "react"
import { InteractiveWalkthrough } from "./interactive-walkthrough"
import { VideoSolutionsPanel } from "./video-solutions-panel"
import { NeetBotChat } from "./neet-bot-chat"
import { DSA } from "./dsa-theme"
import { CyberGlitchText } from "@my-better-t-app/ui/components/ui/cyber-glitch-text"
import { CodeSectionBlock } from "./code-section-block"

interface FeatureTab {
  id: string
  title: string
  description: string
  color: string
  content: ReactNode
}

const TABS: FeatureTab[] = [
  {
    id: "01",
    title: "Interactive Walkthroughs",
    description: "Step through algorithms visually. Watch pointers move, hash maps fill, and solutions emerge — all interactive.",
    color: DSA.visited,
    content: <InteractiveWalkthrough />,
  },
  {
    id: "02",
    title: "Video Solutions",
    description: "1000+ video explanations covering every major topic, from arrays to advanced graph algorithms.",
    color: DSA.red,
    content: <VideoSolutionsPanel />,
  },
  {
    id: "03",
    title: "NeetBot AI",
    description: "Your personal AI coding tutor. Get hints, not answers — learn to think through problems the right way.",
    color: DSA.current,
    content: <NeetBotChat />,
  },
]

const AUTO_PLAY_MS = 8000

export function FeaturesSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const advance = useCallback(() => {
    setActive((p) => (p + 1) % TABS.length)
  }, [])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(advance, AUTO_PLAY_MS)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [active, paused, advance])

  const tab = TABS[active]

  return (
    <section className="px-6 py-16" style={{ backgroundColor: DSA.bg }}>
      <CodeSectionBlock
        className="mx-auto max-w-5xl"
        duration={18}
        label="const features = useFeatures()"
        labelClassName="mb-1 text-[11px]"
        labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
      >
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <CyberGlitchText text="Features" scrambleOnMount={false} className="text-[#E6EDF3]" />
          </h2>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: DSA.muted }}>
            Three tools that replace scattered resources, provide structure, and give instant feedback.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Left: tab buttons */}
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
              // select feature
            </p>
            <div className="space-y-3">
              {TABS.map((t, i) => {
                const isActive = i === active
                return (
                  <button
                    key={t.id}
                    onClick={() => { setActive(i); setPaused(false) }}
                    className="group relative flex w-full items-start gap-4 rounded-lg border p-4 text-left transition-all"
                    style={{ 
                      backgroundColor: isActive ? DSA.card : "transparent",
                      borderColor: isActive ? t.color : DSA.border,
                      opacity: isActive ? 1 : 0.6
                    }}
                  >
                    {/* Progress bar overlay */}
                    {isActive && (
                      <div className="absolute inset-0 overflow-hidden rounded-lg opacity-[0.03]">
                         <div
                          key={`progress-${i}-${paused}`}
                          className="h-full w-full origin-left"
                          style={{
                            backgroundColor: t.color,
                            transform: paused ? undefined : "scaleX(0)",
                            animation: paused ? undefined : `fillX ${AUTO_PLAY_MS}ms linear forwards`,
                          }}
                        />
                      </div>
                    )}

                    <span
                      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm text-[10px] font-bold"
                      style={{
                        backgroundColor: isActive ? `${t.color}15` : "transparent",
                        color: isActive ? t.color : DSA.muted,
                        fontFamily: "JetBrains Mono, monospace"
                      }}
                    >
                      {t.id}
                    </span>

                    <div className="relative z-10">
                      <span
                        className="text-sm font-semibold transition-colors"
                        style={{ color: isActive ? t.color : DSA.fg }}
                      >
                        {t.title}
                      </span>
                      {isActive && (
                        <p className="mt-2 text-xs leading-relaxed" style={{ color: DSA.muted }}>
                          {t.description}
                        </p>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: active panel */}
          <div
            className="lg:col-span-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {tab?.content}
          </div>
        </div>
      </CodeSectionBlock>

      <style>{`
        @keyframes fillX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}
