import { useCallback, useEffect, useRef, useState } from "react"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { DSA } from "./dsa-theme"

const TWO_SUM_NUMS = [2, 7, 11, 15]
const TWO_SUM_TARGET = 9

interface WalkthroughStep {
  i: number
  j: number
  seen: Record<number, number>
  message: string
  found: boolean
}

function buildSteps(): WalkthroughStep[] {
  const steps: WalkthroughStep[] = []
  const seen: Record<number, number> = {}
  for (let i = 0; i < TWO_SUM_NUMS.length; i++) {
    const complement = TWO_SUM_TARGET - TWO_SUM_NUMS[i]
    if (complement in seen) {
      steps.push({ i, j: seen[complement], seen: { ...seen }, message: `Found! nums[${seen[complement]}] + nums[${i}] = ${TWO_SUM_TARGET}`, found: true })
      break
    }
    steps.push({ i, j: -1, seen: { ...seen }, message: `Check nums[${i}] = ${TWO_SUM_NUMS[i]}. Need ${complement}. Not in seen. Add ${TWO_SUM_NUMS[i]} → seen.`, found: false })
    seen[TWO_SUM_NUMS[i]] = i
  }
  return steps
}

const WALKTHROUGH_STEPS = buildSteps()

export function InteractiveWalkthrough() {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const current = WALKTHROUGH_STEPS[step]

  const play = useCallback(() => {
    setPlaying(true)
    intervalRef.current = setInterval(() => {
      setStep((s) => {
        if (s >= WALKTHROUGH_STEPS.length - 1) {
          setPlaying(false)
          if (intervalRef.current) clearInterval(intervalRef.current)
          return s
        }
        return s + 1
      })
    }, 1800)
  }, [])

  const pause = useCallback(() => {
    setPlaying(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current) }, [])

  return (
    <div className="flex h-full min-h-[460px] flex-col rounded-lg border p-5" style={{ borderColor: DSA.border, backgroundColor: DSA.card }}>
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-bold" style={{ color: DSA.visited, fontFamily: "JetBrains Mono, monospace" }}>Walkthrough.play()</span>
        <span className="text-[10px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
          Step {step + 1}/{WALKTHROUGH_STEPS.length}
        </span>
      </div>

      {/* Array visualization */}
      <div className="mb-6">
        <p className="mb-2 text-[10px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>const nums = [</p>
        <div className="flex flex-wrap gap-2 px-4">
          {TWO_SUM_NUMS.map((n, idx) => {
            const isI = idx === current.i
            const isJ = idx === current.j
            const highlight = isI || isJ
            
            let borderColor = DSA.border
            if (isI) borderColor = DSA.visited
            if (isJ) borderColor = DSA.queued
            
            return (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="flex size-10 items-center justify-center rounded border transition-colors"
                  style={{
                    borderColor,
                    backgroundColor: highlight ? `${borderColor}15` : DSA.bg,
                    color: DSA.fg,
                    fontFamily: "JetBrains Mono, monospace"
                  }}
                >
                  {n}
                </div>
                <div className="mt-1 flex h-4 gap-1">
                  {isI && <span className="text-[10px] font-bold" style={{ color: DSA.visited, fontFamily: "JetBrains Mono, monospace" }}>i</span>}
                  {isJ && <span className="text-[10px] font-bold" style={{ color: DSA.queued, fontFamily: "JetBrains Mono, monospace" }}>j</span>}
                </div>
              </div>
            )
          })}
        </div>
        <p className="mt-1 text-[10px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>]</p>
      </div>

      {/* Target */}
      <div className="mb-6 flex items-center gap-3">
        <span className="text-[10px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>target =</span>
        <span className="rounded border px-3 py-1 text-sm font-bold" style={{ borderColor: DSA.border, backgroundColor: DSA.bg, color: DSA.fg, fontFamily: "JetBrains Mono, monospace" }}>
          {TWO_SUM_TARGET}
        </span>
      </div>

      {/* Seen hashset */}
      <div className="mb-6">
        <p className="mb-2 text-[10px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>const seen = {"{"}</p>
        <div className="flex min-h-[32px] flex-wrap gap-2 px-4">
          {Object.keys(current.seen).length === 0 ? (
            <span className="text-xs italic" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>empty</span>
          ) : (
            Object.entries(current.seen).map(([val, idx]) => (
              <div key={val} className="rounded border px-2 py-1 text-xs transition-all" style={{ borderColor: DSA.queued, backgroundColor: `${DSA.queued}15`, color: DSA.queued, fontFamily: "JetBrains Mono, monospace" }}>
                {val}: {idx}
              </div>
            ))
          )}
        </div>
        <p className="mt-1 text-[10px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>{"}"}</p>
      </div>

      {/* Message */}
      <div className="mt-auto">
        <div
          className="mb-4 rounded-md border-l-4 p-3 text-xs leading-relaxed"
          style={{
            borderColor: current.found ? DSA.visited : DSA.current,
            backgroundColor: DSA.bg,
            color: DSA.fg,
            fontFamily: "JetBrains Mono, monospace"
          }}
        >
          {current.message}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setStep(0)}
            className="flex size-8 items-center justify-center rounded border transition-colors hover:bg-white/5"
            style={{ borderColor: DSA.border, color: DSA.muted }}
          >
            <SkipBack className="size-3.5" />
          </button>
          <button
            onClick={playing ? pause : play}
            className="flex size-10 items-center justify-center rounded border transition-colors"
            style={{ 
              borderColor: playing ? DSA.red : DSA.visited, 
              backgroundColor: playing ? `${DSA.red}15` : `${DSA.visited}15`,
              color: playing ? DSA.red : DSA.visited 
            }}
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>
          <button
            onClick={() => setStep((s) => Math.min(s + 1, WALKTHROUGH_STEPS.length - 1))}
            className="flex size-8 items-center justify-center rounded border transition-colors hover:bg-white/5"
            style={{ borderColor: DSA.border, color: DSA.muted }}
          >
            <SkipForward className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
