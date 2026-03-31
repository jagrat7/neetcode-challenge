import { MarkerArrow } from "./layout"
import { COMPANIES } from "../../data/landing-data"

export function CompanyLogosSection() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-center text-sm text-[#64748B]">Trusted by engineers who landed offers at top companies</p>
        {/* Linked list style: node → node → node */}
        <div className="flex flex-wrap items-center justify-center gap-1">
          {COMPANIES.map((c, i) => (
            <div key={c.name} className="flex items-center">
              <div className="flex items-center gap-2 border-2 border-dashed border-[#CBD5E1] bg-white px-4 py-2.5 transition-colors hover:border-[#2563EB]/40 hover:bg-[rgba(250,204,21,0.08)]">
                <img src={c.logo} alt={c.name} className="size-5 object-contain" />
                <span className="text-sm text-[#475569]">{c.name}</span>
              </div>
              {i < COMPANIES.length - 1 && (
                <MarkerArrow className="mx-0.5 h-3 w-6 shrink-0 text-[#2563EB]" />
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-[#94A3B8]" style={{ fontFamily: "Caveat, cursive" }}>// LinkedList&lt;Company&gt;</p>
      </div>
    </section>
  )
}
