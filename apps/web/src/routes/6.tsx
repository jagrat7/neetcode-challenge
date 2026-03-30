import { Button } from "@my-better-t-app/ui/components/button"
import {
  Rocket,
  Check,
  Clock,
  ExternalLink,
  ChevronRight,
} from "lucide-react"
import {
  TOPICS,
  COMPANIES,
  TESTIMONIALS,
  COURSE_CATEGORIES,
  PRACTICE_TOPICS,
  VALUE_PROPS,
  FOUNDER_COMPANIES,
} from "../data/landing-data"

const BRUT = {
  bg: "#FFFDF5",
  card: "#FFFFFF",
  fg: "#09090B",
  red: "#FF6B6B",
  yellow: "#FFD93D",
  blue: "#4D96FF",
  muted: "#71717A",
  border: "#09090B",
  shadow: "4px 4px 0px #09090B",
  shadowHover: "2px 2px 0px #09090B",
}

const DIFF_BRUT: Record<string, { bg: string, text: string }> = {
  Easy: { bg: "#22C55E", text: "#FFFFFF" },
  Medium: { bg: "#F59E0B", text: "#09090B" },
  Hard: { bg: "#EF4444", text: "#FFFFFF" },
}

function StickerBadge({ children, color, rotate = 0 }: { children: React.ReactNode, color: string, rotate?: number }) {
  return (
    <span
      className="inline-block border-3 px-3 py-1 text-xs font-bold uppercase tracking-wider"
      style={{
        borderColor: BRUT.border,
        borderWidth: "3px",
        backgroundColor: color,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "2px 2px 0px #09090B",
      }}
    >
      {children}
    </span>
  )
}

function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backgroundColor: BRUT.bg,
        borderBottom: `3px solid ${BRUT.border}`,
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/images/brand/neetcode-logo.png" alt="NeetCode" className="size-8" />
            <span
              className="text-xl font-black uppercase tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}
            >
              NeetCode
            </span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {["Courses", "Practice", "Roadmap"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium uppercase tracking-wider transition-colors"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.muted }}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="text-sm font-bold uppercase tracking-wider"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.red }}
            >
              Pro
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="font-bold uppercase tracking-wider"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}
          >
            Sign in
          </Button>
          <button
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            style={{
              backgroundColor: BRUT.red,
              color: "#FFFFFF",
              border: `3px solid ${BRUT.border}`,
              boxShadow: BRUT.shadow,
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            Get Pro
          </button>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="overflow-hidden px-6 pb-28 pt-20 md:pt-32" style={{ backgroundColor: BRUT.bg }}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1
            className="text-[clamp(3rem,10vw,7rem)] font-black uppercase leading-[0.9] tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}
          >
            <span
              className="relative inline-block px-4 py-1"
              style={{ backgroundColor: BRUT.red, color: "#FFFFFF", transform: "rotate(-1deg)", display: "inline-block" }}
            >
              NeetCode
            </span>
            <br />
            <span className="mt-2 inline-block" style={{ transform: "rotate(0.5deg)" }}>
              A Better Way
            </span>
            <br />
            <span style={{ color: BRUT.blue }}>to Prepare</span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-lg text-lg leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif", color: BRUT.muted }}
          >
            Tech interview roadmaps trusted by engineers at Google, Meta, OpenAI, and other top tech companies.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            className="flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            style={{
              backgroundColor: BRUT.blue,
              color: "#FFFFFF",
              border: `3px solid ${BRUT.border}`,
              boxShadow: "6px 6px 0px #09090B",
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            <Rocket className="size-4" />
            Get Pro
          </button>
          <button
            className="px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            style={{
              backgroundColor: BRUT.bg,
              color: BRUT.fg,
              border: `3px solid ${BRUT.border}`,
              boxShadow: "6px 6px 0px #09090B",
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            Start Free
          </button>
        </div>

        {/* Stats as colored blocks */}
        <div className="mx-auto mt-20 flex max-w-lg items-center justify-center gap-8">
          <div
            className="flex-1 p-5 text-center"
            style={{
              backgroundColor: BRUT.yellow,
              border: `3px solid ${BRUT.border}`,
              boxShadow: BRUT.shadow,
              transform: "rotate(-1.5deg)",
            }}
          >
            <div className="text-4xl font-black" style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}>1M+</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}>
              Engineers prepared
            </div>
          </div>
          <div
            className="flex-1 p-5 text-center"
            style={{
              backgroundColor: BRUT.blue,
              border: `3px solid ${BRUT.border}`,
              boxShadow: BRUT.shadow,
              transform: "rotate(1deg)",
            }}
          >
            <div className="text-4xl font-black" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#FFFFFF" }}>1,000+</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#FFFFFF" }}>
              Problems & Videos
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TopicStickers() {
  return (
    <section
      className="px-6 py-8"
      style={{ backgroundColor: BRUT.bg, borderTop: `3px solid ${BRUT.border}`, borderBottom: `3px solid ${BRUT.border}` }}
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3">
        {TOPICS.map((topic, i) => {
          const colors = [BRUT.red, BRUT.yellow, BRUT.blue, "#22C55E", "#F59E0B"]
          const rotations = [-2, 1.5, -1, 2, -1.5, 1, -0.5, 2.5, -2, 1]
          return (
            <StickerBadge
              key={topic}
              color={colors[i % colors.length]}
              rotate={rotations[i % rotations.length]}
            >
              {topic}
            </StickerBadge>
          )
        })}
      </div>
    </section>
  )
}

function CompanyLogosSection() {
  return (
    <section className="px-6 py-14" style={{ backgroundColor: BRUT.bg }}>
      <div className="mx-auto max-w-5xl">
        <p
          className="mb-6 text-center text-sm font-bold uppercase tracking-wider"
          style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.muted }}
        >
          Trusted by engineers at
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-5 p-4"
          style={{ border: `3px solid ${BRUT.border}`, backgroundColor: BRUT.card }}
        >
          {COMPANIES.map((c) => (
            <div key={c.name} className="flex items-center gap-2 transition-transform hover:scale-105">
              <img src={c.logo} alt={c.name} className="size-6 object-contain" />
              <span className="text-sm font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: BRUT.bg }}>
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => {
          const rotations = [-1.5, 1, -0.5, 1.5, -1]
          const accents = [BRUT.red, BRUT.blue, BRUT.yellow, "#22C55E", BRUT.blue]
          return (
            <div
              key={t.name}
              className="p-5 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#09090B]"
              style={{
                backgroundColor: BRUT.card,
                border: `3px solid ${BRUT.border}`,
                boxShadow: BRUT.shadow,
                transform: `rotate(${rotations[i % rotations.length]}deg)`,
              }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="size-10 object-cover"
                  style={{ border: `2px solid ${BRUT.border}` }}
                />
                <div>
                  <div className="text-sm font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}>{t.name}</div>
                  <div className="flex items-center gap-1">
                    <StickerBadge color={accents[i % accents.length]} rotate={0}>
                      <span className="flex items-center gap-1 text-[10px]">
                        <img src={t.companyLogo} alt={t.company} className="size-3 object-contain" />
                        {t.company}
                      </span>
                    </StickerBadge>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: BRUT.muted }}>
                <span className="font-bold" style={{ color: BRUT.fg }}>{t.highlight}</span>
                {t.rest}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function CoursesSection() {
  return (
    <section id="courses" className="px-6 py-16" style={{ backgroundColor: BRUT.bg }}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2
            className="text-4xl font-black uppercase tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}
          >
            Courses
          </h2>
          <p className="mt-2" style={{ fontFamily: "DM Sans, sans-serif", color: BRUT.muted }}>
            Structured learning paths from fundamentals to advanced topics.
          </p>
        </div>

        <div className="space-y-14">
          {COURSE_CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <div className="mb-4">
                <h3
                  className="text-xl font-black uppercase"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}
                >
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: BRUT.muted }}>{cat.description}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cat.courses.map((course) => (
                  <div
                    key={course.title}
                    className="group overflow-hidden transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#09090B]"
                    style={{
                      backgroundColor: BRUT.card,
                      border: `3px solid ${BRUT.border}`,
                      boxShadow: BRUT.shadow,
                    }}
                  >
                    {/* Difficulty color bar */}
                    <div className="h-2 w-full" style={{ backgroundColor: DIFF_BRUT[course.difficulty].bg }} />
                    <div className="aspect-video w-full overflow-hidden" style={{ borderBottom: `3px solid ${BRUT.border}` }}>
                      <img src={course.image} alt={course.title} className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}>{course.title}</h4>
                      <p className="mt-1 text-xs" style={{ fontFamily: "DM Sans, sans-serif", color: BRUT.muted }}>{course.description}</p>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs" style={{ color: BRUT.muted }}>
                          <Clock className="size-3" />
                          {course.hours}h
                        </span>
                        <span
                          className="px-2 py-0.5 text-[10px] font-bold uppercase"
                          style={{
                            backgroundColor: DIFF_BRUT[course.difficulty].bg,
                            color: DIFF_BRUT[course.difficulty].text,
                            border: `2px solid ${BRUT.border}`,
                          }}
                        >
                          {course.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PracticeSection() {
  return (
    <section
      id="practice"
      className="px-6 py-16"
      style={{ backgroundColor: BRUT.yellow, borderTop: `3px solid ${BRUT.border}`, borderBottom: `3px solid ${BRUT.border}` }}
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h2
            className="text-4xl font-black uppercase tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}
          >
            Start Practicing for Free
          </h2>
          <p className="mt-3 text-lg" style={{ fontFamily: "DM Sans, sans-serif", color: BRUT.fg, opacity: 0.7 }}>
            The best resources for coding interviews. Period.
          </p>
          <ul className="mt-6 space-y-3">
            {VALUE_PROPS.map((prop) => (
              <li key={prop} className="flex items-start gap-3">
                <div
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center"
                  style={{ backgroundColor: BRUT.fg }}
                >
                  <Check className="size-4 text-white" />
                </div>
                <span className="text-sm font-medium" style={{ fontFamily: "DM Sans, sans-serif", color: BRUT.fg }}>{prop}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              style={{
                backgroundColor: BRUT.fg,
                color: "#FFFFFF",
                border: `3px solid ${BRUT.border}`,
                boxShadow: "4px 4px 0px rgba(9,9,11,0.3)",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              Start Practicing
            </button>
            <button
              className="px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              style={{
                backgroundColor: BRUT.card,
                color: BRUT.fg,
                border: `3px solid ${BRUT.border}`,
                boxShadow: "4px 4px 0px rgba(9,9,11,0.3)",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              View Roadmap
            </button>
          </div>
        </div>

        {/* Practice tracker card */}
        <div
          className="p-6"
          style={{
            backgroundColor: BRUT.card,
            border: `3px solid ${BRUT.border}`,
            boxShadow: "6px 6px 0px #09090B",
          }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <StickerBadge color="#22C55E" rotate={-1}>Free</StickerBadge>
              <span className="text-base font-black uppercase" style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}>
                NeetCode 150
              </span>
            </div>
            <ChevronRight className="size-5" style={{ color: BRUT.fg }} />
          </div>
          <div className="mb-4">
            <div className="mb-1 flex justify-between text-xs font-bold" style={{ color: BRUT.fg }}>
              <span>67 / 150</span>
              <span>45%</span>
            </div>
            <div className="h-4" style={{ border: `3px solid ${BRUT.border}` }}>
              <div className="h-full" style={{ width: "45%", backgroundColor: "#22C55E" }} />
            </div>
          </div>
          <div className="space-y-2">
            {PRACTICE_TOPICS.map((topic) => (
              <div
                key={topic}
                className="flex items-center justify-between p-3"
                style={{ border: `2px solid ${BRUT.border}`, backgroundColor: "#F0FDF4" }}
              >
                <span className="text-xs font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}>{topic}</span>
                <span className="text-xs font-black" style={{ color: "#22C55E" }}>✓</span>
              </div>
            ))}
            <div className="p-2 text-center text-xs font-bold" style={{ color: BRUT.muted }}>+14 more</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: BRUT.bg }}>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:items-start">
        <div className="shrink-0">
          <div style={{ border: `3px solid ${BRUT.border}`, boxShadow: BRUT.shadow, transform: "rotate(-2deg)" }}>
            <img src="/images/brand/navi.png" alt="Navi" className="size-32 object-cover" />
          </div>
        </div>
        <div>
          <h2
            className="text-3xl font-black uppercase tracking-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}
          >
            Hi, I'm Navi
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: BRUT.muted }}>
            <p>I created NeetCode in 2020 when I was unemployed and couldn't find a job.</p>
            <p>
              <em className="text-base font-bold not-italic" style={{ color: BRUT.fg, fontFamily: "Space Grotesk, sans-serif" }}>
                "It felt so gratifying and kept me motivated."
              </em>
            </p>
            <p>About a year later I managed to get a job at Google.</p>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <span className="text-xs font-bold uppercase" style={{ color: BRUT.muted }}>Previously at</span>
            {FOUNDER_COMPANIES.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-1 px-2.5 py-1"
                style={{ border: `2px solid ${BRUT.border}`, backgroundColor: BRUT.card }}
              >
                <img src={c.logo} alt={c.name} className="size-4 object-contain" />
                <span className="text-xs font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-10" style={{ backgroundColor: BRUT.bg, borderTop: `3px solid ${BRUT.border}` }}>
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
        {[
          { title: "Links", items: ["Blind 75", "NeetCode 150", "NeetCode 250"] },
          { title: "Social", items: ["YouTube", "LinkedIn", "Twitter"] },
          { title: "Contact", items: ["support@neetcode.io"] },
          { title: "Legal", items: ["Privacy Policy", "Terms of Service"] },
        ].map((section) => (
          <div key={section.title}>
            <h3
              className="mb-3 text-sm font-black uppercase tracking-wider"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.fg }}
            >
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {section.items.map((item) => (
                <li key={item}>
                  <a href="#" className="font-medium transition-colors hover:underline" style={{ fontFamily: "DM Sans, sans-serif", color: BRUT.muted }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-8 max-w-5xl text-center" style={{ borderTop: `3px solid ${BRUT.border}`, paddingTop: "1.5rem" }}>
        <p className="text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif", color: BRUT.muted }}>
          Copyright &copy; 2026 neetcode.io All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function NeoBrutalismLanding() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRUT.bg, color: BRUT.fg, fontFamily: "DM Sans, sans-serif" }}>
      <Navbar />
      <main>
        <HeroSection />
        <TopicStickers />
        <CompanyLogosSection />
        <TestimonialsSection />
        <CoursesSection />
        <PracticeSection />
        <FounderSection />
      </main>
      <Footer />
    </div>
  )
}
