import { Clock } from "lucide-react"
import { Squiggle } from "./layout"
import { COURSE_CATEGORIES } from "../../data/landing-data"
import InteractiveBook from "@my-better-t-app/ui/components/ui/interactive-book"
import type { BookPage } from "@my-better-t-app/ui/components/ui/interactive-book"

const DIFF_COLORS: Record<string, string> = {
  Easy: "#16A34A",
  Medium: "#CA8A04",
  Hard: "#DC2626",
}

export function CoursesSection() {
  const bookPages: BookPage[] = COURSE_CATEGORIES.map((cat, i) => {
    const Icon = cat.icon

    return {
      title: cat.title,
      pageNumber: i + 1,
      content: (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded bg-[#EFF6FF] border border-[#BFDBFE]">
              <Icon className="size-3.5 text-[#2563EB]" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#94A3B8]">
              {cat.courses.length} courses
            </span>
          </div>

          <p className="text-xs leading-relaxed text-[#64748B] italic">
            {cat.description}
          </p>

          <div className="mt-1 flex flex-col gap-2.5">
            {cat.courses.map((course) => (
              <div
                key={course.title}
                className="group flex gap-2.5 rounded-md border border-[#E2E8F0] bg-[#FAFAFA] p-2 transition-colors hover:border-[#CBD5E1] hover:bg-white"
              >
                <div className="h-12 w-16 shrink-0 overflow-hidden rounded">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="size-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4
                    className="truncate text-sm font-semibold text-[#1E293B]"
                    style={{ fontFamily: "Caveat, cursive" }}
                  >
                    {course.title}
                  </h4>
                  <div className="mt-0.5 flex items-center gap-2">
                    <span className="flex items-center gap-0.5 text-[10px] text-[#94A3B8]">
                      <Clock className="size-2.5" />
                      {course.hours}h
                    </span>
                    <span
                      className="text-[10px] font-semibold"
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
      ),
      backContent: (
        <div className="flex size-full flex-col items-center justify-center text-center">
          <Icon className="mb-3 size-8 text-[#E2E8F0]" />
          <p className="text-sm font-medium text-[#CBD5E1]" style={{ fontFamily: "Caveat, cursive" }}>
            {cat.title}
          </p>
          <p className="mt-1 text-[10px] text-[#E2E8F0]">
            {cat.courses.length} courses · Flip to explore →
          </p>
        </div>
      ),
    }
  })

  return (
    <section id="courses" className="bg-[#FAFAFA] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>Courses</h2>
          <p className="mt-2 text-sm text-[#64748B]">Structured learning paths from fundamentals to advanced topics.</p>
          <Squiggle color="#2563EB" className="mx-auto mt-1 h-1.5 w-24" />
        </div>

        <div className="flex justify-center">
          <InteractiveBook
            coverImage="/images/courses/course-1.png"
            bookTitle="Course Catalog"
            bookAuthor="NeetCode"
            pages={bookPages}
            width={380}
            height={520}
          />
        </div>
      </div>
    </section>
  )
}
