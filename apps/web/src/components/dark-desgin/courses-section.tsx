"use client"

import { CyberGlitchText } from "@my-better-t-app/ui/components/ui/cyber-glitch-text"
import { Clock } from "lucide-react"
import { motion } from "framer-motion"

import { COURSE_CATEGORIES } from "../../data/landing-data"
import { CodeSectionBlock } from "./code-section-block"
import { DIFF_DSA, DSA } from "./dsa-theme"

export function CoursesSection() {
  return (
    <section id="courses" className="px-6 py-16" style={{ backgroundColor: DSA.bg }}>
      <CodeSectionBlock
        className="mx-auto max-w-5xl"
        duration={1}
        label="HashMap<Category, Course[]>.entries()"
        labelClassName="mb-1 text-[11px]"
        labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
      >
        <div className="mb-12">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <CyberGlitchText text="Courses" scrambleOnMount={false} className="text-[#E6EDF3]" />
          </h2>
          <p className="mt-2" style={{ color: DSA.muted }}>
            Structured learning paths from fundamentals to advanced topics.
          </p>
        </div>

        <div className="space-y-10">
          {COURSE_CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="flex gap-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: ci * 0.15, ease: "easeOut" }}
            >
              <div className="hidden w-44 shrink-0 md:block">
                <div className="sticky top-20 rounded-lg p-3" style={{ backgroundColor: DSA.card, border: `1px solid ${DSA.border}` }}>
                  <div className="mb-1 text-[10px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
                    {`hash(${ci}) ->`}
                  </div>
                  <div className="text-sm font-bold" style={{ color: DSA.current }}>{cat.title}</div>
                  <p className="mt-1 text-[11px]" style={{ color: DSA.muted }}>{cat.description}</p>
                </div>
              </div>
              <div className="hidden items-start pt-6 md:flex">
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                  <path d="M2 20H18M14 14L22 20L14 26" stroke={DSA.visited} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="mb-3 md:hidden">
                  <h3 className="text-lg font-bold" style={{ color: DSA.fg }}>{cat.title}</h3>
                  <p className="text-xs" style={{ color: DSA.muted }}>{cat.description}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.courses.map((course) => (
                    <div
                      key={course.title}
                      className="group overflow-hidden rounded-lg transition-all duration-300"
                      style={{ backgroundColor: DSA.card, border: `1px solid ${DSA.border}` }}
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <img src={course.image} alt={course.title} className="size-full object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-semibold" style={{ color: DSA.fg }}>{course.title}</h4>
                        <p className="mt-1 text-xs" style={{ color: DSA.muted }}>{course.description}</p>
                        <div className="mt-3 flex items-center gap-3">
                          <span className="flex items-center gap-1 text-xs" style={{ color: DSA.muted }}>
                            <Clock className="size-3" />
                            {course.hours}h
                          </span>
                          <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: DIFF_DSA[course.difficulty] }}>
                            <span className="size-2 rounded-full" style={{ backgroundColor: DIFF_DSA[course.difficulty] }} />
                            {course.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CodeSectionBlock>
    </section>
  )
}
