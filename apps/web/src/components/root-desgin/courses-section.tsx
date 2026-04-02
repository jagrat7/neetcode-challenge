import { Clock } from "lucide-react"
import { Squiggle } from "./layout"
import { BallpointBorder } from "./ballpoint-border"
import { COURSE_CATEGORIES } from "../../data/landing-data"
import InteractiveBook from "@my-better-t-app/ui/components/ui/interactive-book"
import type { BookPage } from "@my-better-t-app/ui/components/ui/interactive-book"

const DIFF_COLORS: Record<string, string> = {
  Easy: "#16A34A",
  Medium: "#CA8A04",
  Hard: "#DC2626",
}

export function CoursesSection() {
  const tocPage: BookPage = {
    title: "",
    pageNumber: 1,
    content: (
      <div className="flex flex-col gap-4">
        <h3
          className="text-4xl font-bold text-[#1E293B]"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          Table of Contents
        </h3>
        <div
          className="h-[1.5px] w-20"
          style={{
            background: `linear-gradient(90deg, #2563EB 0%, #3b82f6 50%, #2563EB 100%)`,
            opacity: 0.6,
          }}
        />
        <div className="mt-2 flex flex-col gap-3">
          {COURSE_CATEGORIES.map((cat, i) => (
            <div key={cat.title} className="flex items-baseline gap-2">
              <span
                className="text-lg font-bold text-[#2563EB]"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                {i + 1}.
              </span>
              <span
                className="flex-1 text-lg font-semibold text-[#1E293B]"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                {cat.title}
              </span>
              <span className="flex-1 border-b border-dotted border-[#CBD5E1]" />
              <span
                className="text-base text-[#94A3B8]"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                {cat.courses.length} courses
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    backContent: (
      <div className="flex size-full flex-col justify-center">
        <h3
          className="text-4xl font-bold text-[#1E293B]"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          {COURSE_CATEGORIES[0]?.title}
        </h3>
        {/* Ballpoint underline */}
        <div
          className="mt-1 h-[1.5px] w-24"
          style={{
            background: "#2563EB",
            opacity: 0.6,
            transform: "rotate(0.3deg)",
          }}
        />
        <p
          className="mt-4 leading-relaxed text-[#64748B]"
          style={{ fontFamily: "Caveat, cursive", fontSize: "18px" }}
        >
          {COURSE_CATEGORIES[0]?.description}
        </p>
        <span
          className="mt-6 text-base font-bold text-[#2563EB]"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          {COURSE_CATEGORIES[0]?.courses.length} courses →
        </span>
      </div>
    ),
  }

  const coursePages: BookPage[] = COURSE_CATEGORIES.map((cat, i) => {
    return {
      title: "",
      pageNumber: i + 1,
      content: (
        <div className="flex flex-col  gap-8">
          {cat.courses.map((course) => (
            <BallpointBorder key={course.title} className="bg-white/60 p-2.5">
              <div className="flex gap-2.5">
                <div className="h-28 w-36 shrink-0 overflow-hidden rounded-md">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="size-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4
                    className="truncate text-lg font-bold text-[#1E293B]"
                    style={{ fontFamily: "Caveat, cursive" }}
                  >
                    {course.title}
                  </h4>
                  <div className="mt-1 flex items-center gap-2">
                    <span
                      className="flex items-center gap-0.5 text-sm text-[#94A3B8]"
                      style={{ fontFamily: "Caveat, cursive" }}
                    >
                      <Clock className="size-3" />
                      {course.hours}h
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: DIFF_COLORS[course.difficulty], fontFamily: "Caveat, cursive" }}
                    >
                      ● {course.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </BallpointBorder>
          ))}
        </div>
      ),
      backContent: (
        <div className="flex size-full flex-col justify-center">
          {COURSE_CATEGORIES[i + 1] && (
            <>
              <h3
                className="text-4xl font-bold text-[#1E293B]"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                {COURSE_CATEGORIES[i + 1].title}
              </h3>
              {/* Ballpoint underline */}
              <div
                className="mt-1 h-[1.5px] w-24"
                style={{
                  background: `linear-gradient(90deg, #2563EB 0%, #3b82f6 30%, #2563EB 60%, #1e40af 80%, #2563EB 100%)`,
                  opacity: 0.6,
                  transform: "rotate(0.3deg)",
                }}
              />
              <p
                className="mt-4 leading-relaxed text-[#64748B]"
                style={{ fontFamily: "Caveat, cursive", fontSize: "18px" }}
              >
                {COURSE_CATEGORIES[i + 1].description}
              </p>
              <span
                className="mt-6 text-base font-bold text-[#2563EB]"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                {COURSE_CATEGORIES[i + 1].courses.length} courses →
              </span>
            </>
          )}
        </div>
      ),
    }
  })

  return (
    <section id="courses" className="bg-[#FAFAFA] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 text-start">
          <h2 className="text-3xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>Courses</h2>
          <Squiggle color="#2563EB" className="mt-1 h-1.5 w-24" />
          <p className="mt-2 text-sm text-[#64748B]">Structured learning paths from fundamentals to advanced topics.</p>
        </div>

        <div className="flex justify-center -mt-6">
          <InteractiveBook
            coverImage="/images/courses/course-1.png"
            bookTitle="Course Catalog"
            bookAuthor="NeetCode"
            pages={[tocPage, ...coursePages]}
            width={500}
            height={650}
          />
        </div>
      </div>
    </section>
  )
}
