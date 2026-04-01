import { CyberGlitchText } from "@my-better-t-app/ui/components/ui/cyber-glitch-text"

import { FOUNDER_COMPANIES } from "../../data/landing-data"
import { CodeSectionBlock } from "./code-section-block"
import { DSA } from "./dsa-theme"

export function FounderSection() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: DSA.bg }}>
      <CodeSectionBlock
        className="mx-auto max-w-3xl"
        duration={26}
        label="class Founder implements Engineer"
        labelClassName="mb-1 text-[11px]"
        labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
      >
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="relative shrink-0">
            <div className="rounded-full p-1" style={{ border: `2px solid ${DSA.current}` }}>
              <img src="/images/brand/navi.png" alt="Navi" className="size-28 rounded-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ backgroundColor: DSA.current, color: DSA.bg }}>
              HEAD
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              <CyberGlitchText text="Hi, I'm Navi" scrambleOnMount={false} className="text-[#E6EDF3]" />
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: DSA.muted }}>
              <p><span className="text-[9px]" style={{ color: DSA.current, fontFamily: "JetBrains Mono, monospace", opacity: 0.5 }}>// 2020 </span>I created NeetCode in 2020 when I was unemployed and couldn't find a job.</p>
              <p>While I was struggling myself, it was still rewarding for me to make videos. I received so many messages from others who got jobs after studying with my videos.</p>
              <p><span className="text-[9px]" style={{ color: DSA.visited, fontFamily: "JetBrains Mono, monospace", opacity: 0.5 }}>// 2021 </span>About a year later I managed to get a job at Google.</p>
            </div>
            <div className="mt-6 flex items-center gap-1">
              <span className="text-xs" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>path:</span>
              {FOUNDER_COMPANIES.map((c, i) => (
                <div key={c.name} className="flex items-center">
                  {i > 0 && (
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="mx-0.5">
                      <path d="M2 6H14M11 2L16 6L11 10" stroke={DSA.visited} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                    </svg>
                  )}
                  <div className="flex items-center gap-1 rounded-full px-2.5 py-1" style={{ border: `1px solid ${DSA.border}`, backgroundColor: DSA.card }}>
                    <img src={c.logo} alt={c.name} className="size-3.5 object-contain" />
                    <span className="text-xs" style={{ color: DSA.fg }}>{c.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CodeSectionBlock>
    </section>
  )
}
