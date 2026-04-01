import { useState } from "react"
import { Clock, ChevronRight } from "lucide-react"
import { Squiggle, WhiteboardFrame } from "./layout"
import { BallpointBorder } from "./ballpoint-border"
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

          <div className="grid lg:grid-cols-12">
            {/* Left: vertical tabs (Filing Cabinet) */}
            <div
              className="lg:col-span-5"
              style={{
                backgroundColor: "#F8FAFC",
                backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 10%, rgba(0,0,0,0) 90%, rgba(0,0,0,0.02) 100%)",
                boxShadow: "inset -1px 0 2px rgba(0,0,0,0.05), inset 1px 0 2px rgba(255,255,255,1)"
              }}
            >
              {/* Cabinet Top Edge */}
              <div
                className="h-2 w-full"
                style={{
                  background: "linear-gradient(to bottom, #FFFFFF, #F8FAFC)",
                  borderBottom: "1px solid rgba(0,0,0,0.05)"
                }}
              />

              {/* Top Lock (Decorative) */}
              <div className="flex justify-end px-6 py-2">
                <div className="relative flex size-4 items-center justify-center rounded-full bg-[#E2E8F0] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1),_0_1px_1px_rgba(255,255,255,1)]">
                  <div className="h-1.5 w-0.5 bg-[#94A3B8]" />
                </div>
              </div>

              {/* Drawers Container */}
              <div className="flex flex-col gap-[4px] p-3 pb-6 lg:pb-3">
                {COURSE_CATEGORIES.map((cat, i) => {
                  const isActive = i === active

                  return (
                    <button
                      key={cat.title}
                      onClick={() => setActive(i)}
                      className="group relative flex w-full shrink-0 flex-col items-center justify-center transition-all"
                      style={{
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                        backgroundColor: "#E2E8F0",
                        height: isActive ? "160px" : "130px",
                        borderRadius: "2px"
                      }}
                    >
                      {/* Drawer Face */}
                      <div
                        className={`absolute inset-0 flex flex-col items-center justify-center drawer-face-${i}`}
                        style={{
                          backgroundColor: "#FFFFFF",
                          transform: isActive ? "translate(var(--drawer-x, 16px), var(--drawer-y, 0))" : "none",
                          zIndex: isActive ? 10 : 1,
                          boxShadow: isActive
                            ? "-8px 0 16px rgba(37,99,235,0.08), 0 8px 16px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,1)"
                            : "0 1px 2px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,1)",
                          borderLeft: "1px solid #CBD5E1",
                          borderTop: "1px solid #CBD5E1",
                          borderRight: isActive ? "var(--drawer-border-r, 0px)" : "1px solid #CBD5E1",
                          borderBottom: isActive ? "var(--drawer-border-b, 1px solid #CBD5E1)" : "1px solid #CBD5E1",
                          borderTopRightRadius: isActive ? "var(--drawer-radius-tr, 0)" : "2px",
                          borderBottomRightRadius: isActive ? "var(--drawer-radius-br, 0)" : "2px",
                          borderBottomLeftRadius: isActive ? "var(--drawer-radius-bl, 2px)" : "2px",
                          borderTopLeftRadius: "2px",
                          transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease",
                        }}
                      >
                        {/* CSS variables for responsive drawer pull direction */}
                        <style>{`
                          @media (max-width: 1023px) {
                            .drawer-face-${i} {
                              --drawer-x: 0;
                              --drawer-y: 12px;
                              --drawer-border-r: 1px solid #CBD5E1;
                              --drawer-border-b: 0px;
                              --drawer-radius-tr: 2px;
                              --drawer-radius-br: 0;
                              --drawer-radius-bl: 0;
                            }
                          }
                          @media (min-width: 1024px) {
                            .drawer-face-${i} {
                              --drawer-x: 16px;
                              --drawer-y: 0;
                              --drawer-border-r: 0px;
                              --drawer-border-b: 1px solid #CBD5E1;
                              --drawer-radius-tr: 0;
                              --drawer-radius-br: 0;
                              --drawer-radius-bl: 2px;
                            }
                          }
                        `}</style>
                        {/* Drawer Bevel/Inset Panel */}
                        <div
                          className="absolute inset-2 rounded-[2px]"
                          style={{
                            border: "1px dashed #E2E8F0",
                            borderBottomColor: "rgba(255,255,255,0.8)",
                            borderRightColor: "rgba(255,255,255,0.8)",
                          }}
                        />

                        {/* Label Holder & Label */}
                        <div
                          className="relative mt-1 flex h-8 w-24 items-center justify-center rounded-[1px] bg-[#F8FAFC] shadow-[0_1px_2px_rgba(0,0,0,0.05),_inset_0_1px_1px_rgba(255,255,255,1)]"
                          style={{
                            borderTop: "1px solid #FFFFFF",
                            borderBottom: "1px solid #CBD5E1",
                            borderLeft: "1px solid #E2E8F0",
                            borderRight: "1px solid #E2E8F0",
                          }}
                        >
                          <div className="h-6 w-20 bg-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center border border-[#E2E8F0]">
                            <span
                              className="truncate px-1 text-[12px] font-bold"
                              style={{
                                fontFamily: "Caveat, cursive",
                                color: isActive ? "#2563EB" : "#64748B"
                              }}
                            >
                              {cat.title.split(' ')[0]}
                            </span>
                          </div>
                        </div>

                        {/* Metallic Handle */}
                        <div
                          className="relative mt-4 h-5 w-32 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#E2E8F0] shadow-[0_2px_4px_rgba(0,0,0,0.05),_inset_0_1px_1px_rgba(255,255,255,1)]"
                          style={{ borderBottom: "1px solid #CBD5E1", borderTop: "1px solid #F8FAFC" }}
                        >
                          <div className="absolute left-1/2 top-1/2 h-3 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#F1F5F9] to-[#F8FAFC] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]" />
                        </div>



                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right: course cards for selected tab (Lined Paper) */}
            <div
              className="lg:col-span-7 relative z-0"
              style={{
                backgroundColor: "#FEFEFE",
                backgroundImage: `
                  linear-gradient(90deg, transparent 68px, rgba(239, 68, 68, 0.4) 68px, rgba(239, 68, 68, 0.4) 69px, transparent 69px, transparent 72px, rgba(239, 68, 68, 0.4) 72px, rgba(239, 68, 68, 0.4) 73px, transparent 73px),
                  linear-gradient(rgba(147, 197, 253, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: "100% 100%, 100% 32px",
                backgroundPosition: "0 0, 0 16px",
                boxShadow: "inset 4px 0 8px rgba(0,0,0,0.03)"
              }}
            >
              <div className="flex flex-col gap-2  px-8 pb-5 pt-8 pl-24 sm:flex-row sm:items-end sm:gap-6">
                <h3
                  className="text-5xl font-bold text-[#0F172A] leading-none"
                  style={{ fontFamily: "Caveat, cursive", transform: "rotate(-1deg) translateY(6px)" }}
                >
                  {category?.title}
                </h3>
                <Squiggle color="#2563EB" className="mb-2 hidden h-2 w-20 sm:block" />
                <span
                  className="mb-1 w-fit text-2xl font-bold text-[#2563EB] sm:ml-auto"
                  style={{ fontFamily: "Caveat, cursive", transform: "translateY(2px)" }}
                >
                  {category?.courses.length} courses
                </span>
              </div>

              <div className="grid gap-6 p-6 pl-24 sm:grid-cols-2 rounded-lg">
                {category?.courses.map((course) => (
                  <div
                    key={course.title}
                    className="group relative transition-all duration-300 hover:-translate-y-0.5 rounded-lg"
                  >
                    <BallpointBorder>
                      <div className="aspect-video w-full overflow-hidden rounded-lg">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3.5 bg-white/50">
                        <h4 className="text-lg font-semibold text-[#1E293B]"
                          style={{ fontFamily: "Caveat, cursive" }}>{course.title}</h4>
                        <p className="mt-1 text-sm text-[#64748B]"
                          >{course.description}</p>
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
                    </BallpointBorder>
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
