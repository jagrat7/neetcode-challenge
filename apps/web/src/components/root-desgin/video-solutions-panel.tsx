import { Play } from "lucide-react"

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
    <div className="border-2 border-dashed border-[#CBD5E1] bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-bold text-[#2563EB]" style={{ fontFamily: "Caveat, cursive" }}>Video Solutions</span>
        <span className="text-[10px] text-[#94A3B8]">1000+ explanations</span>
      </div>

      {/* Video thumbnail mock */}
      <div className="relative mb-4 aspect-video w-full overflow-hidden border-2 border-[#CBD5E1] bg-[#0F172A]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-bold text-white" style={{ fontFamily: "Caveat, cursive" }}>Arrays</p>
            <p className="mt-1 text-xs text-[#94A3B8]">1 - RAM</p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex size-14 items-center justify-center rounded-full border-2 border-dashed border-white/50">
            <Play className="size-6 text-white" fill="white" />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 bg-black/60 px-1.5 py-0.5 text-[10px] text-white">05:50</div>
      </div>

      {/* Chapter list */}
      <div className="space-y-1">
        {chapters.map((ch, i) => (
          <div
            key={ch.name}
            className="flex items-center justify-between px-2 py-1.5 text-xs transition-colors hover:bg-[rgba(250,204,21,0.1)]"
            style={{ borderLeft: i === 0 ? "3px solid #2563EB" : "3px solid transparent" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#94A3B8]">{i + 1}</span>
              <span style={{ color: i === 0 ? "#2563EB" : "#1E293B", fontWeight: i === 0 ? 600 : 400 }}>{ch.name}</span>
            </div>
            <span className="text-[10px] text-[#94A3B8]">{ch.count} videos</span>
          </div>
        ))}
      </div>
    </div>
  )
}
