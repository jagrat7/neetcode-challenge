import { MarkerArrow, Squiggle } from "./layout"
import { FOUNDER_COMPANIES } from "../../data/landing-data"

export function FounderSection() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:items-start">
        {/* Portrait in hand-drawn circle frame */}
        <div className="relative shrink-0">
          <svg className="absolute -inset-4 size-[calc(100%+32px)]" viewBox="0 0 200 200" fill="none">
            <ellipse cx="100" cy="100" rx="92" ry="90" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" transform="rotate(-3 100 100)" />
          </svg>
          <img src="/images/brand/navi.png" alt="Navi" className="relative size-100 rounded-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>Hi, I'm Navi</h2>
          <Squiggle color="#2563EB" className="mt-1 h-1 w-16" />
          <div className="mt-4 space-y-3 text-base leading-relaxed text-[#475569]">
            <p>I created NeetCode in 2020 when I was unemployed and couldn't find a job.</p>
            <p>While I was struggling myself, it was still rewarding for me to make videos. I received so many messages from others who got jobs after studying with my videos. It felt so gratifying and kept me motivated.</p>
            <p>About a year later I managed to get a job at Google.</p>
          </div>
          {/* Timeline as linked list */}
          <div className="mt-6 flex items-center gap-1">
            <span className="text-xs text-[#94A3B8]">Previously at</span>
            {FOUNDER_COMPANIES.map((c, i) => (
              <div key={c.name} className="flex items-center">
                {i > 0 && <MarkerArrow className="mx-0.5 h-2.5 w-5 text-[#94A3B8]" />}
                <div className="flex items-center gap-1 border border-dashed border-[#CBD5E1] bg-white px-2 py-1">
                  <img src={c.logo} alt={c.name} className="size-3.5 object-contain" />
                  <span className="text-xs text-[#475569]">{c.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
