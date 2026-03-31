import { TOPICS } from "../../data/landing-data"

export function ArrayTopicStrip() {
  return (
    <section className="overflow-x-auto border-y-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm text-[#64748B]" style={{ fontFamily: "Caveat, cursive", fontSize: "1rem" }}>
          topics[] =
        </p>
        <div className="flex items-center justify-center gap-0">
          {TOPICS.map((topic, i) => (
            <div key={topic} className="flex flex-col items-center">
              <span className="mb-1 text-[10px] text-[#94A3B8]" style={{ fontFamily: "Caveat, cursive" }}>[{i}]</span>
              <div className="border-2 border-[#2563EB]/50 bg-white px-3 py-2 text-xs font-medium text-[#1E293B] transition-colors hover:bg-[rgba(250,204,21,0.15)]">
                {topic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
