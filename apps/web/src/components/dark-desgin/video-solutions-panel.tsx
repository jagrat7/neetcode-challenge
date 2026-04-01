import { Play } from "lucide-react"
import { DSA } from "./dsa-theme"

export function VideoSolutionsPanel() {
  const chapters = [
    { name: "Arrays", count: 9 },
    { name: "Two Pointers", count: 5 },
    { name: "Sliding Window", count: 6 },
    { name: "Stack", count: 7 },
    { name: "Binary Search", count: 7 },
    { name: "Trees", count: 11 },
    { name: "Graphs", count: 13 },
  ]

  return (
    <div className="h-full min-h-[460px] rounded-lg border p-5" style={{ borderColor: DSA.border, backgroundColor: DSA.card }}>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-bold" style={{ color: DSA.red, fontFamily: "JetBrains Mono, monospace" }}>VideoSolutions()</span>
        <span className="text-[10px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>1000+ videos</span>
      </div>

      {/* Video thumbnail mock */}
      <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-md border" style={{ borderColor: DSA.border, backgroundColor: DSA.bg }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-bold" style={{ color: DSA.fg, fontFamily: "JetBrains Mono, monospace" }}>Arrays</p>
            <p className="mt-1 text-xs" style={{ color: DSA.muted }}>1 - RAM</p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex size-14 items-center justify-center rounded-full border-2 border-dashed transition-transform hover:scale-110" style={{ borderColor: `${DSA.fg}80` }}>
            <Play className="size-6" style={{ fill: DSA.fg, color: DSA.fg }} />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 rounded px-1.5 py-0.5 text-[10px]" style={{ backgroundColor: `${DSA.bg}cc`, color: DSA.fg, fontFamily: "JetBrains Mono, monospace" }}>05:50</div>
      </div>

      {/* Chapter list */}
      <div className="space-y-1">
        {chapters.map((ch, i) => (
          <div
            key={ch.name}
            className="flex items-center justify-between rounded-sm px-3 py-2 text-xs transition-colors"
            style={{
              borderLeft: i === 0 ? `3px solid ${DSA.red}` : "3px solid transparent",
              backgroundColor: i === 0 ? `${DSA.red}10` : "transparent",
              color: i === 0 ? DSA.fg : DSA.muted,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>{i + 1}</span>
              <span style={{ color: i === 0 ? DSA.red : DSA.fg, fontWeight: i === 0 ? 600 : 400, fontFamily: "JetBrains Mono, monospace" }}>{ch.name}</span>
            </div>
            <span className="text-[10px]" style={{ color: DSA.muted }}>{ch.count} videos</span>
          </div>
        ))}
      </div>
    </div>
  )
}
