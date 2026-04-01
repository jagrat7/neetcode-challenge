import { Bot, ArrowRight } from "lucide-react"
import { DSA } from "./dsa-theme"

export function NeetBotChat() {
  return (
    <div className="flex h-full min-h-[460px] flex-col p-5">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-md border" style={{ borderColor: DSA.current, backgroundColor: `${DSA.current}15` }}>
          <Bot className="size-4" style={{ color: DSA.current }} />
        </div>
        <div>
            <span className="block text-sm font-bold" style={{ color: DSA.current, fontFamily: "JetBrains Mono, monospace" }}>NeetBot.ai</span>
            <span className="block text-[10px]" style={{ color: DSA.muted }}>Your AI coding tutor</span>
        </div>
      </div>

      <div className="flex-1 space-y-4">
        <div className="flex justify-end">
          <div
            className="max-w-[80%] rounded-lg rounded-tr-sm border p-3 text-xs"
            style={{ borderColor: DSA.border, backgroundColor: DSA.bg, color: DSA.fg }}
          >
            I'm stuck on Two Sum. I keep getting <code style={{ color: DSA.visited }}>O(n²)</code>...
          </div>
        </div>

        <div className="flex justify-start">
          <div
            className="max-w-[85%] rounded-lg rounded-tl-sm border p-3 text-xs leading-relaxed"
            style={{ borderColor: DSA.current, backgroundColor: `${DSA.current}10`, color: DSA.fg }}
          >
            <p>Think about what data structure lets you check if a <span className="font-semibold" style={{ color: DSA.current }}>complement exists in O(1)</span>...</p>
            <p className="mt-2">Hint: You've already seen the number, you just need to remember it.</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div
            className="max-w-[80%] rounded-lg rounded-tr-sm border p-3 text-xs"
            style={{ borderColor: DSA.border, backgroundColor: DSA.bg, color: DSA.fg }}
          >
            Oh! A hashmap for <code style={{ color: DSA.visited }}>O(1)</code> lookup!
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 border-t pt-4" style={{ borderColor: DSA.border }}>
        <div className="flex-1 rounded-md border px-3 py-2.5 text-xs" style={{ borderColor: DSA.border, backgroundColor: DSA.bg, color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
          &gt; Ask NeetBot anything...<span className="animate-pulse">_</span>
        </div>
        <button className="flex size-9 items-center justify-center rounded-md transition-opacity hover:opacity-80" style={{ backgroundColor: DSA.current, color: DSA.bg }}>
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  )
}
