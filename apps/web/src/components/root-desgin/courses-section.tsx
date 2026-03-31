import { Clock } from "lucide-react"
import { Squiggle } from "./layout"
import { COURSE_CATEGORIES } from "../../data/landing-data"

const DIFF_COLORS: Record<string, { text: string, bg: string, marker: string }> = {
  Easy: { text: "text-[#16A34A]", bg: "bg-[#16A34A]/10", marker: "#16A34A" },
  Medium: { text: "text-[#CA8A04]", bg: "bg-[#CA8A04]/10", marker: "#CA8A04" },
  Hard: { text: "text-[#DC2626]", bg: "bg-[#DC2626]/10", marker: "#DC2626" },
}

export function CoursesSection() {
  return (
    <section id="courses" className="bg-[#FAFAFA] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>Courses</h2>
          <p className="mt-2 text-[#64748B]">Structured learning paths from fundamentals to advanced topics.</p>
          <Squiggle color="#2563EB" className="mt-1 h-1.5 w-24" />
        </div>

        {/* Tree diagram: category → courses */}
        <div className="space-y-14">
          {COURSE_CATEGORIES.map((cat) => (
            <div key={cat.title} className="flex gap-6">
              {/* Parent node */}
              <div className="hidden w-48 shrink-0 items-start pt-2 md:flex">
                <div className="relative w-full">
                  <div className="border-2 border-[#2563EB] bg-white px-3 py-3 text-center">
                    <span className="text-sm font-bold text-[#2563EB]" style={{ fontFamily: "Caveat, cursive" }}>{cat.title}</span>
                  </div>
                  <p className="mt-1 text-xs text-[#94A3B8]">{cat.description}</p>
                </div>
              </div>

              {/* Connection lines */}
              <div className="hidden items-center md:flex">
                <svg width="40" height="80" viewBox="0 0 40 80" fill="none">
                  {cat.courses.map((_, ci) => {
                    const y = 20 + ci * 28
                    return <path key={ci} d={`M0 40 Q20 40 20 ${y} L40 ${y}`} stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  })}
                </svg>
              </div>

              {/* Child course cards */}
              <div className="flex-1">
                <div className="mb-3 md:hidden">
                  <h3 className="text-lg font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>{cat.title}</h3>
                  <p className="text-xs text-[#94A3B8]">{cat.description}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.courses.map((course) => (
                    <div key={course.title} className="group border-2 border-dashed border-[#CBD5E1] bg-white p-4 transition-colors hover:border-[#2563EB]/40 hover:bg-[rgba(250,204,21,0.06)]">
                      <div className="mb-3 aspect-video w-full overflow-hidden border border-[#E2E8F0]">
                        <img src={course.image} alt={course.title} className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#1E293B]">{course.title}</h4>
                      <p className="mt-1 text-xs text-[#64748B]">{course.description}</p>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs text-[#64748B]">
                          <Clock className="size-3" />
                          {course.hours}h
                        </span>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: DIFF_COLORS[course.difficulty]?.marker }}
                        >
                          ● {course.difficulty}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
