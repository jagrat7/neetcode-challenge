import { useState, useCallback, useEffect, useRef, type ReactNode } from "react"
import { InteractiveWalkthrough } from "./interactive-walkthrough"
import { VideoSolutionsPanel } from "./video-solutions-panel"
import { NeetBotChat } from "./neet-bot-chat"
import { Squiggle } from "./layout"

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
    color: "#2563EB",
    content: <InteractiveWalkthrough />,
  },
  {
    id: "02",
    title: "Video Solutions",
    description: "1000+ video explanations covering every major topic, from arrays to advanced graph algorithms.",
    color: "#DC2626",
    content: <VideoSolutionsPanel />,
  },
  {
    id: "03",
    title: "NeetBot AI",
    description: "Your personal AI coding tutor. Get hints, not answers — learn to think through problems the right way.",
    color: "#16A34A",
    content: <NeetBotChat />,
  },
]

const AUTO_PLAY_MS = 8000

export function FeatureTabs() {
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
    <section className="bg-[#FAFAFA] px-6 py-14">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>
            More Than Just Problems
          </h2>
          <Squiggle color="#2563EB" className="mx-auto mt-1 h-1.5 w-32" />
          <p className="mt-3 text-[#64748B]">
            Three tools that replace scattered resources, provide structure, and give instant feedback.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Left: tab buttons */}
          <div className="lg:col-span-4">
            <p className="mb-3 text-xs text-[#94A3B8]" style={{ fontFamily: "Caveat, cursive" }}>
              features[{active}]
            </p>
            <div className="space-y-0">
              {TABS.map((t, i) => {
                const isActive = i === active
                return (
                  <button
                    key={t.id}
                    onClick={() => { setActive(i); setPaused(false) }}
                    className="group relative flex w-full items-start gap-3 border-t-2 border-dashed border-[#CBD5E1] px-3 py-4 text-left transition-colors first:border-t-0 hover:bg-[rgba(250,204,21,0.06)]"
                    style={{ backgroundColor: isActive ? `${t.color}08` : undefined }}
                  >
                    {/* Progress bar */}
                    <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#CBD5E1]/30">
                      {isActive && (
                        <div
                          key={`progress-${i}-${paused}`}
                          className="w-full origin-top"
                          style={{
                            backgroundColor: t.color,
                            height: "100%",
                            transform: paused ? undefined : "scaleY(0)",
                            animation: paused ? undefined : `fillY ${AUTO_PLAY_MS}ms linear forwards`,
                          }}
                        />
                      )}
                    </div>

                    <span
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center border-2 text-[10px] font-bold"
                      style={{
                        borderColor: isActive ? t.color : "#CBD5E1",
                        color: isActive ? t.color : "#94A3B8",
                      }}
                    >
                      {t.id}
                    </span>

                    <div>
                      <span
                        className="text-sm font-semibold transition-colors"
                        style={{ color: isActive ? t.color : "#1E293B" }}
                      >
                        {t.title}
                      </span>
                      {isActive && (
                        <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
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
            <p className="mt-2 text-center text-xs text-[#94A3B8]" style={{ fontFamily: "Caveat, cursive" }}>
              ↑ This is live! Try interacting with it
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fillY {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
      `}</style>
    </section>
  )
}
