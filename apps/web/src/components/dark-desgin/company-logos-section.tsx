import { LogoSlider } from "@my-better-t-app/ui/components/ui/logo-slider"

import { COMPANIES } from "../../data/landing-data"
import { CodeSectionBlock } from "./code-section-block"
import { DSA } from "./dsa-theme"

export function CompanyLogosSection() {
  const logos = [...COMPANIES, ...COMPANIES].map((company, index) => (
    <div
      key={`${company.name}-${index}`}
      className="group flex items-center justify-center px-1.5 py-2 opacity-85 transition-all duration-300 hover:opacity-100"
    >
      <img
        src={company.logo}
        alt={company.name}
        className="h-7 w-auto object-contain transition-all duration-300 group-hover:scale-105"
      />
    </div>
  ))

  return (
    <section className="px-6 py-14" style={{ backgroundColor: DSA.bg }}>
      <CodeSectionBlock
        className="mx-auto max-w-5xl"
        duration={18}
        label="Set<Company>.values()"
        labelClassName="mb-2 text-center text-[11px]"
        labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
      >
        <p className="mb-6 text-center text-sm" style={{ color: DSA.muted }}>
          Trusted by engineers who landed offers at top companies
        </p>
        <LogoSlider
          logos={logos}
          speed={28}
          showBlur={false}
          pauseOnHover
          className="[&_li.logo-slider__item]:w-[104px] sm:[&_li.logo-slider__item]:w-[116px] lg:[&_li.logo-slider__item]:w-[124px]"
        />
        <p className="mt-3 text-center text-[9px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
          // order not guaranteed, all elements unique
        </p>
      </CodeSectionBlock>
    </section>
  )
}
