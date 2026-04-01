import { useState } from "react"
import { Clock, ChevronRight } from "lucide-react"
import { Squiggle, WhiteboardFrame } from "./layout"
import { COURSE_CATEGORIES } from "../../data/landing-data"

const DIFF_COLORS: Record<string, string> = {
  Easy: "#16A34A",
  Medium: "#CA8A04",
  Hard: "#DC2626",
}

export function CoursesSection() {
  const [active, setActive] = useState(0)
  const category = COURSE_CATEGORIES[active]

  return (
    <section id="courses" className="bg-[#FAFAFA] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>Courses</h2>
          <p className="mt-2 text-sm text-[#64748B]">Structured learning paths from fundamentals to advanced topics.</p>
          <Squiggle color="#2563EB" className="mt-1 h-1.5 w-24" />
        </div>

        <div className="relative mb-3 bg-white" style={{ boxShadow: "2px 3px 0 rgba(30,41,59,0.06)" }}>
          <WhiteboardFrame />

          <div className="grid lg:grid-cols-12">
            {/* Left: vertical tabs */}
            <div className="border-b border-[#E2E8F0] lg:col-span-4 lg:border-b-0 lg:border-r lg:border-[#E2E8F0]">
              <div className="flex items-center gap-2 border-b border-[#E2E8F0] px-4 py-2.5">
                <span className="text-[10px] font-medium uppercase tracking-wider text-[#94A3B8]">Categories</span>
                <span className="text-sm text-[#94A3B8]" style={{ fontFamily: "Caveat, cursive" }}>
                  [{COURSE_CATEGORIES.length}]
                </span>
              </div>

              {/* Horizontal scroll on mobile, vertical stack on desktop */}
              <div className="flex overflow-x-auto lg:flex-col lg:overflow-x-visible">
                {COURSE_CATEGORIES.map((cat, i) => {
                  const isActive = i === active
                  return (
                    <button
                      key={cat.title}
                      onClick={() => setActive(i)}
                      className="group relative flex w-full shrink-0 items-center gap-3 px-4 py-3.5 text-left transition-all max-lg:min-w-[200px]"
                      style={{ backgroundColor: isActive ? "rgba(37,99,235,0.04)" : undefined }}
                    >
                      {/* Active indicator — left bar on desktop */}
                      <div
                        className="absolute left-0 top-0 hidden h-full w-[3px] rounded-r-full transition-colors lg:block"
                        style={{ backgroundColor: isActive ? "#2563EB" : "transparent" }}
                      />
                      {/* Active indicator — bottom bar on mobile */}
                      <div
                        className="absolute bottom-0 left-0 h-[3px] w-full rounded-t-full transition-colors lg:hidden"
                        style={{ backgroundColor: isActive ? "#2563EB" : "transparent" }}
                      />

                      <span
                        className="flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors"
                        style={{
                          backgroundColor: isActive ? "rgba(37,99,235,0.1)" : "transparent",
                          color: isActive ? "#2563EB" : "#94A3B8",
                          fontFamily: "Caveat, cursive",
                        }}
                      >
                        {i + 1}
                      </span>

                      <div className="min-w-0 flex-1">
                        <span
                          className="block truncate text-sm font-semibold transition-colors"
                          style={{ color: isActive ? "#2563EB" : "#1E293B" }}
                        >
                          {cat.title}
                        </span>
                        {isActive && (
                          <p className="mt-0.5 hidden text-[11px] leading-snug text-[#64748B] lg:block">
                            {cat.description}
                          </p>
                        )}
                      </div>

                      <ChevronRight
                        className="hidden size-4 shrink-0 transition-colors lg:block"
                        style={{ color: isActive ? "#2563EB" : "#CBD5E1" }}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right: course cards for selected tab */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 border-b border-[#E2E8F0] px-5 py-2.5">
                <span className="text-base font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>
                  {category?.title}
                </span>
                <Squiggle color="#2563EB" className="h-1 w-10" />
                <span className="ml-auto text-xs text-[#94A3B8]" style={{ fontFamily: "Caveat, cursive" }}>
                  {category?.courses.length} courses
                </span>
              </div>

              <div className="grid gap-5 p-5 sm:grid-cols-2">
                {category?.courses.map((course) => (
                  <div
                    key={course.title}
                    className="group relative bg-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{ boxShadow: "1px 2px 0 rgba(30,41,59,0.05)" }}
                  >
                    <WhiteboardFrame />
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3.5">
                      <h4 className="text-sm font-semibold text-[#1E293B]">{course.title}</h4>
                      <p className="mt-1 text-[11px] text-[#64748B]">{course.description}</p>
                      <div className="mt-2.5 flex items-center gap-3">
                        <span className="flex items-center gap-1 text-[11px] text-[#64748B]">
                          <Clock className="size-3" />
                          {course.hours}h
                        </span>
                        <span
                          className="text-[11px] font-semibold"
                          style={{ color: DIFF_COLORS[course.difficulty] }}
                        >
                          ● {course.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
