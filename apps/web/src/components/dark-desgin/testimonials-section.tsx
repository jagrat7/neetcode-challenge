import { CyberGlitchText } from "@my-better-t-app/ui/components/ui/cyber-glitch-text"

import { TESTIMONIALS } from "../../data/landing-data"
import { CodeSectionBlock } from "./code-section-block"
import { DSA } from "./dsa-theme"

export function TestimonialsSection() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: DSA.bg }}>
      <CodeSectionBlock
        className="mx-auto max-w-5xl"
        duration={18}
        label="PriorityQueue<Review>.poll()"
        labelClassName="mb-1 text-[11px]"
        labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <CyberGlitchText text="Testimonials" scrambleOnMount={false} className="text-[#E6EDF3]" />
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, ti) => (
            <div
              key={t.name}
              className="relative p-5 transition-all duration-300"
              style={{ backgroundColor: DSA.card, border: `1px solid ${DSA.border}`, borderRadius: "8px" }}
            >
              <div className="absolute right-3 top-3 text-[9px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
                node[{ti}]
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={t.photo} alt={t.name} className="size-10 rounded-full object-cover" style={{ border: `2px solid ${[DSA.visited, DSA.queued, DSA.current][ti % 3]}` }} />
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: DSA.fg }}>{t.name}</div>
                  <div className="flex items-center gap-1 text-xs" style={{ color: DSA.muted }}>
                    <img src={t.companyLogo} alt={t.company} className="size-3 object-contain" />
                    {t.company}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: DSA.muted }}>
                <span style={{ color: DSA.fg, fontWeight: 600 }}>{t.highlight}</span>
                {t.rest}
              </p>
              <div className="mt-3 text-[9px]" style={{ color: DSA.visited, fontFamily: "JetBrains Mono, monospace", opacity: 0.6 }}>
                ✓ verified = true
              </div>
            </div>
          ))}
        </div>
      </CodeSectionBlock>
    </section>
  )
}
