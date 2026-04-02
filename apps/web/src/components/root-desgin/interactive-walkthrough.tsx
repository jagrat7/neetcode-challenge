import { useCallback, useEffect, useRef, useState } from "react"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"

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
    <div className="flex h-[340px] flex-col border-2 border-dashed border-[#CBD5E1] bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-bold text-[#2563EB]">Three Sum</span>
        <span className="text-[10px] text-[#94A3B8]">Step {step + 1}/{WALKTHROUGH_STEPS.length}</span>
      </div>

      {/* Array visualization */}
      <div className="mb-2.5">
        <p className="mb-1 text-[10px] uppercase tracking-wider text-[#94A3B8]">nums</p>
        <div className="flex gap-0">
          {TWO_SUM_NUMS.map((n, idx) => {
            const isI = idx === current.i
            const isJ = idx === current.j
            const highlight = isI || isJ
            return (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="flex size-9 items-center justify-center border-2 text-sm font-bold transition-colors"
                  style={{
                    borderColor: highlight ? "#2563EB" : "#CBD5E1",
                    backgroundColor: highlight ? "rgba(37,99,235,0.08)" : "transparent",
                    color: "#1E293B",
                  }}
                >
                  {n}
                </div>
                <span className="mt-0.5 text-[9px] text-[#94A3B8]">{idx}</span>
                {isI && <span className="text-[10px] font-bold text-[#2563EB]" style={{ fontFamily: "Caveat, cursive" }}>i</span>}
                {isJ && <span className="text-[10px] font-bold text-[#16A34A]" style={{ fontFamily: "Caveat, cursive" }}>j</span>}
              </div>
            )
          })}
        </div>
      </div>

      {/* Target */}
      <div className="mb-2.5 flex items-center gap-3">
        <span className="text-[10px] uppercase tracking-wider text-[#94A3B8]">target</span>
        <span className="border-2 border-dashed border-[#CBD5E1] bg-[#FAFAFA] px-3 py-0.5 text-sm font-bold text-[#1E293B]">{TWO_SUM_TARGET}</span>
      </div>

      {/* Seen hashset */}
      <div className="mb-2.5">
        <p className="mb-1 text-[10px] uppercase tracking-wider text-[#94A3B8]">seen hashmap</p>
        <div className="flex gap-1">
          {Object.keys(current.seen).length === 0 ? (
            <span className="text-xs text-[#94A3B8]" style={{ fontFamily: "Caveat, cursive" }}>{"{ empty }"}</span>
          ) : (
            Object.entries(current.seen).map(([val, idx]) => (
              <div key={val} className="border border-[#16A34A]/40 bg-[#16A34A]/5 px-2 py-0.5 text-xs text-[#16A34A]">
                {val}→{idx}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Message */}
      <div
        className="mb-3 flex-1 p-2 text-xs leading-relaxed"
        style={{
          borderLeftWidth: "3px",
          borderLeftStyle: "solid",
          borderColor: current.found ? "#16A34A" : "#2563EB",
          backgroundColor: current.found ? "rgba(22,163,74,0.03)" : "rgba(37,99,235,0.03)",
          color: current.found ? "#16A34A" : "#1E293B",
        }}
      >
        {current.message}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setStep(0)}
          className="flex size-8 items-center justify-center border border-[#CBD5E1] bg-white text-[#64748B] transition-colors hover:bg-[#F1F5F9]"
        >
          <SkipBack className="size-3.5" />
        </button>
        <button
          onClick={playing ? pause : play}
          className="flex size-9 items-center justify-center border-2 border-[#2563EB] bg-[#2563EB] text-white transition-colors hover:bg-[#1D4ED8]"
        >
          {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
        </button>
        <button
          onClick={() => setStep((s) => Math.min(s + 1, WALKTHROUGH_STEPS.length - 1))}
          className="flex size-8 items-center justify-center border border-[#CBD5E1] bg-white text-[#64748B] transition-colors hover:bg-[#F1F5F9]"
        >
          <SkipForward className="size-3.5" />
        </button>
      </div>
    </div>
  )
}
