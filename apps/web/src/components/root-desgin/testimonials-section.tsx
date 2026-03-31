import { TESTIMONIALS } from "../../data/landing-data"

export function TestimonialsSection() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-16">
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => {
          const rotations = [-1.5, 1, -0.5, 1.5, -1]
          return (
            <div
              key={t.name}
              className="bg-[#FEF9C3] p-5 shadow-[2px_3px_0px_rgba(0,0,0,0.08)] transition-transform hover:scale-[1.02]"
              style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
            >
              <div className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="size-10 rounded-full border-2 border-[#1E293B]/10 object-cover" />
                <div>
                  <div className="text-sm font-semibold text-[#1E293B]">{t.name}</div>
                  <div className="flex items-center gap-1 text-xs text-[#64748B]">
                    <img src={t.companyLogo} alt={t.company} className="size-3.5 object-contain" />
                    {t.company}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                <span className="font-semibold text-[#1E293B]">{t.highlight}</span>
                {t.rest}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
