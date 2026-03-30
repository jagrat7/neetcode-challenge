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

const CHALK = {
  white: "#E8E8D0",
  yellow: "#FDE68A",
  pink: "#FDA4AF",
  blue: "#93C5FD",
  green: "#86EFAC",
  bg: "#1A2E1A",
  cardBg: "rgba(255,255,255,0.03)",
  muted: "#6B8068",
  border: "rgba(232,232,208,0.15)",
}

const DIFF_CHALK: Record<string, string> = {
  Easy: CHALK.green,
  Medium: CHALK.yellow,
  Hard: CHALK.pink,
}

function ChalkLine({ className = "", color = CHALK.white }: { className?: string, color?: string }) {
  return (
    <svg viewBox="0 0 200 4" className={className} preserveAspectRatio="none" fill="none">
      <path d="M0 2C30 1 50 3 80 2S130 3 160 1S190 3 200 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function ChalkCircle({ className = "", color = CHALK.white }: { className?: string, color?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none">
      <ellipse cx="30" cy="30" rx="26" ry="25" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.7" strokeDasharray="3 2" transform="rotate(-2 30 30)" />
    </svg>
  )
}

function ChalkArrow({ className = "", color = CHALK.white }: { className?: string, color?: string }) {
  return (
    <svg viewBox="0 0 36 16" className={className} fill="none">
      <path d="M2 8L26 8M21 3L28 8L21 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  )
}

function ChalkDust() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
    }} />
  )
}

function ChalkSmudge({ className = "", color = CHALK.white }: { className?: string, color?: string }) {
  return (
    <svg viewBox="0 0 120 20" className={`pointer-events-none ${className}`} fill="none" preserveAspectRatio="none">
      <ellipse cx="60" cy="10" rx="55" ry="7" fill={color} opacity="0.06" />
      <ellipse cx="55" cy="9" rx="40" ry="4" fill={color} opacity="0.04" />
    </svg>
  )
}

function ChalkStar({ className = "", color = CHALK.yellow }: { className?: string, color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`pointer-events-none ${className}`} fill="none">
      <path d="M12 2L13 9L20 8L14 12L18 19L12 14L6 19L10 12L4 8L11 9Z" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  )
}

function EraserMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none ${className}`}
      style={{
        background: `linear-gradient(90deg, transparent, ${CHALK.bg}90, ${CHALK.bg}60, transparent)`,
        opacity: 0.4,
      }}
    />
  )
}

function ChalkTallyMarks({ count = 5, className = "", color = CHALK.white }: { count?: number, className?: string, color?: string }) {
  return (
    <svg viewBox={`0 0 ${count * 10 + 5} 24`} className={`pointer-events-none ${className}`} fill="none">
      {Array.from({ length: count }).map((_, i) => {
        const x = 5 + i * 10
        const tilt = (i % 3 - 1) * 3
        return i === 4 ? (
          <line key={i} x1={x - 35} y1="20" x2={x + 5} y2="4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        ) : (
          <line key={i} x1={x} y1={4 + tilt} x2={x + 1} y2={20 - tilt} stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        )
      })}
    </svg>
  )
}

function ChalkDoodle({ variant = "bracket", className = "", color = CHALK.white }: { variant?: "bracket" | "arrow" | "underline" | "box", className?: string, color?: string }) {
  const paths: Record<string, string> = {
    bracket: "M8 4C4 4 2 8 2 14S4 24 8 24",
    arrow: "M2 16L20 8M16 4L22 8L16 13",
    underline: "M2 12C15 14 30 10 50 13S75 10 98 12",
    box: "M4 4L46 6L44 26L2 24Z",
  }
  return (
    <svg viewBox="0 0 50 28" className={`pointer-events-none ${className}`} fill="none">
      <path d={paths[variant]} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    </svg>
  )
}

function ChalkBoardEdge() {
  return (
    <div className="pointer-events-none relative z-20 h-3 w-full" style={{
      background: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 100%)`,
    }} />
  )
}

function RuledLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]" style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(232,232,208,0.3) 59px, rgba(232,232,208,0.3) 60px)`,
    }} />
  )
}

function ChalkGraphBg() {
  return (
    <svg className="pointer-events-none absolute inset-0 size-full opacity-[0.07]" viewBox="0 0 800 400" fill="none">
      {/* Graph nodes */}
      <circle cx="200" cy="100" r="20" stroke={CHALK.blue} strokeWidth="1.5" />
      <text x="200" y="105" textAnchor="middle" fill={CHALK.blue} fontSize="12" fontFamily="Kalam">A</text>
      <circle cx="380" cy="60" r="18" stroke={CHALK.blue} strokeWidth="1.5" />
      <text x="380" y="65" textAnchor="middle" fill={CHALK.blue} fontSize="12" fontFamily="Kalam">B</text>
      <circle cx="500" cy="150" r="22" stroke={CHALK.blue} strokeWidth="1.5" />
      <text x="500" y="155" textAnchor="middle" fill={CHALK.blue} fontSize="12" fontFamily="Kalam">C</text>
      <circle cx="320" cy="200" r="16" stroke={CHALK.blue} strokeWidth="1.5" />
      <text x="320" y="205" textAnchor="middle" fill={CHALK.blue} fontSize="12" fontFamily="Kalam">D</text>
      <circle cx="600" cy="80" r="19" stroke={CHALK.blue} strokeWidth="1.5" />
      <text x="600" y="85" textAnchor="middle" fill={CHALK.blue} fontSize="12" fontFamily="Kalam">E</text>
      {/* Edges */}
      <line x1="218" y1="92" x2="363" y2="66" stroke={CHALK.blue} strokeWidth="1" opacity="0.5" />
      <line x1="396" y1="72" x2="484" y2="138" stroke={CHALK.blue} strokeWidth="1" opacity="0.5" />
      <line x1="210" y1="118" x2="308" y2="190" stroke={CHALK.blue} strokeWidth="1" opacity="0.5" />
      <line x1="334" y1="194" x2="482" y2="158" stroke={CHALK.blue} strokeWidth="1" opacity="0.5" />
      <line x1="396" y1="58" x2="583" y2="76" stroke={CHALK.blue} strokeWidth="1" opacity="0.5" />
      {/* Annotation */}
      <text x="430" y="30" fill={CHALK.yellow} fontSize="11" fontFamily="Kalam" opacity="0.8" transform="rotate(-5 430 30)">undirected graph</text>
    </svg>
  )
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-[#1A2E1A]/95 backdrop-blur-sm" style={{ borderColor: CHALK.border }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/images/brand/neetcode-logo.png" alt="NeetCode" className="size-8 brightness-110" />
            <span className="text-xl font-bold" style={{ fontFamily: "'Cabin Sketch', cursive", color: CHALK.white }}>NeetCode</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {["Courses", "Practice", "Roadmap"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm transition-opacity hover:opacity-100" style={{ color: CHALK.muted, opacity: 0.8 }}>{link}</a>
            ))}
            <a href="#" className="text-sm font-bold" style={{ color: CHALK.yellow }}>Pro</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" style={{ color: CHALK.white }}>Sign in</Button>
          <Button size="sm" className="border" style={{ backgroundColor: "transparent", borderColor: CHALK.yellow, color: CHALK.yellow }}>Get Pro</Button>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-24 md:pt-36" style={{ backgroundColor: CHALK.bg }}>
      <ChalkGraphBg />
      <div className="relative mx-auto max-w-3xl">
        <div className="text-center">
          <h1
            className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.95]"
            style={{ fontFamily: "'Cabin Sketch', cursive", color: CHALK.white }}
          >
            <span className="relative inline-block" style={{ color: CHALK.yellow, textShadow: `0 0 3px rgba(253,230,138,0.3)` }}>
              NeetCode
              <ChalkStar className="absolute -right-8 -top-4 size-6" color={CHALK.pink} />
              <ChalkStar className="absolute -left-6 bottom-0 size-4" color={CHALK.blue} />
            </span>
          </h1>
          <p
            className="mt-3 text-[clamp(1.4rem,3.5vw,2.2rem)] font-bold"
            style={{ fontFamily: "'Cabin Sketch', cursive", color: CHALK.white, opacity: 0.85 }}
          >
            A Better Way to Prepare
          </p>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed" style={{ color: CHALK.muted }}>
            Tech interview roadmaps trusted by engineers at Google, Meta, OpenAI, and other top tech companies.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="px-8 text-sm transition-all hover:brightness-110"
            style={{
              border: `2px solid ${CHALK.yellow}`,
              color: CHALK.bg,
              backgroundColor: CHALK.yellow,
              textShadow: "none",
              fontWeight: 700,
            }}
          >
            <Rocket className="size-4" />
            Get Pro
          </Button>
          <Button
            size="lg"
            className="px-8 text-sm"
            style={{
              backgroundColor: "transparent",
              border: `2px solid ${CHALK.white}`,
              color: CHALK.white,
              opacity: 0.8,
            }}
          >
            Start Free
          </Button>
        </div>

        {/* Stats as chalk tally marks */}
        <div className="mx-auto mt-20 flex max-w-sm items-center justify-center gap-20">
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ fontFamily: "'Cabin Sketch', cursive", color: CHALK.yellow, textShadow: `0 0 2px rgba(253,230,138,0.2)` }}>1M+</div>
            <ChalkTallyMarks count={5} className="mx-auto mt-1 h-4 w-14" color={CHALK.yellow} />
            <div className="mt-1 text-sm" style={{ color: CHALK.muted }}>Engineers prepared</div>
          </div>
          <div className="h-10 w-px" style={{ backgroundColor: CHALK.border }} />
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ fontFamily: "'Cabin Sketch', cursive", color: CHALK.yellow, textShadow: `0 0 2px rgba(253,230,138,0.2)` }}>1,000+</div>
            <ChalkTallyMarks count={5} className="mx-auto mt-1 h-4 w-14" color={CHALK.yellow} />
            <div className="mt-1 text-sm" style={{ color: CHALK.muted }}>Problems & Videos</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HashMapTopics() {
  return (
    <section className="px-6 py-10" style={{ backgroundColor: CHALK.bg, borderTop: `1px solid ${CHALK.border}`, borderBottom: `1px solid ${CHALK.border}` }}>
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-center text-sm" style={{ fontFamily: "Kalam, cursive", color: CHALK.muted }}>
          hashMap&lt;int, string&gt; topics
        </p>
        <div className="overflow-x-auto">
          <table className="mx-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-1 text-left text-xs" style={{ color: CHALK.blue, fontFamily: "Kalam, cursive", borderBottom: `1px solid ${CHALK.border}` }}>idx</th>
                <th className="px-4 py-1 text-left text-xs" style={{ color: CHALK.blue, fontFamily: "Kalam, cursive", borderBottom: `1px solid ${CHALK.border}` }}>value</th>
              </tr>
            </thead>
            <tbody>
              {TOPICS.map((topic, i) => (
                <tr key={topic} className="transition-colors hover:bg-white/[0.02]">
                  <td className="px-4 py-1.5 text-xs" style={{ color: CHALK.muted, fontFamily: "Kalam, cursive", borderBottom: `1px solid ${CHALK.border}` }}>{i}</td>
                  <td className="px-4 py-1.5 text-xs" style={{ color: CHALK.white, borderBottom: `1px solid ${CHALK.border}` }}>{topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function CompanyLogosSection() {
  return (
    <section className="relative px-6 py-14" style={{ backgroundColor: CHALK.bg }}>
      <ChalkSmudge className="absolute left-[10%] top-4 h-3 w-40" color={CHALK.blue} />
      <EraserMark className="absolute right-[15%] top-8 h-6 w-24" />
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-center text-sm" style={{ color: CHALK.muted }}>Trusted by engineers who landed offers at top companies</p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {COMPANIES.map((c) => (
            <div key={c.name} className="flex items-center gap-2 opacity-60 transition-opacity hover:opacity-100">
              <img src={c.logo} alt={c.name} className="size-5 object-contain brightness-200 grayscale" />
              <span className="text-sm" style={{ color: CHALK.white }}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="relative px-6 py-16" style={{ backgroundColor: CHALK.bg }}>
      <ChalkSmudge className="absolute right-[8%] top-6 h-4 w-32" color={CHALK.pink} />
      <ChalkDoodle variant="bracket" className="absolute left-[5%] top-12 h-10 w-6" color={CHALK.yellow} />
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-2xl font-bold" style={{ fontFamily: "'Cabin Sketch', cursive", color: CHALK.white }}>What Students Say</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="relative" style={{ borderLeft: `3px solid ${CHALK.border}`, paddingLeft: "1rem" }}>
              <span className="absolute -left-1 -top-3 text-3xl" style={{ fontFamily: "'Cabin Sketch', cursive", color: CHALK.yellow, opacity: 0.4 }}>"</span>
              <div className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="size-9 rounded-full object-cover" style={{ outline: `1px solid ${CHALK.border}` }} />
                <div>
                  <div className="text-sm font-semibold" style={{ color: CHALK.white }}>{t.name}</div>
                  <div className="flex items-center gap-1 text-xs" style={{ color: CHALK.muted }}>
                    <img src={t.companyLogo} alt={t.company} className="size-3 object-contain brightness-200 grayscale" />
                    {t.company}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: CHALK.muted }}>
                <span style={{ color: CHALK.white, fontWeight: 600 }}>{t.highlight}</span>
                {t.rest}
              </p>
              <ChalkLine color={CHALK.border} className="mt-4 h-0.5 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CoursesSection() {
  return (
    <section id="courses" className="px-6 py-16" style={{ backgroundColor: CHALK.bg }}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'Cabin Sketch', cursive", color: CHALK.white }}>
            Courses
            <ChalkStar className="ml-2 inline-block size-5 align-super" color={CHALK.yellow} />
          </h2>
          <ChalkLine color={CHALK.yellow} className="mt-1 h-1 w-20" />
          <p className="mt-2" style={{ color: CHALK.muted }}>Structured learning paths from fundamentals to advanced topics.</p>
        </div>

        {/* Adjacency list style: vertex → [edges] */}
        <div className="space-y-10">
          {COURSE_CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <div className="mb-4 flex items-center gap-3">
                <div className="relative">
                  <ChalkCircle className="absolute -inset-2 size-[calc(100%+16px)]" color={CHALK.blue} />
                  <span className="relative px-2 text-sm font-bold" style={{ fontFamily: "Kalam, cursive", color: CHALK.blue }}>{cat.title}</span>
                </div>
                <ChalkArrow className="h-3 w-8" color={CHALK.white} />
                <span className="text-xs" style={{ color: CHALK.muted }}>{cat.description}</span>
              </div>
              <div className="ml-4 grid gap-3 border-l pl-6 sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: CHALK.border }}>
                {cat.courses.map((course) => (
                  <div
                    key={course.title}
                    className="group p-4 transition-colors hover:bg-white/[0.02]"
                    style={{ border: `1px solid ${CHALK.border}` }}
                  >
                    <div className="mb-3 aspect-video w-full overflow-hidden" style={{ border: `1px solid ${CHALK.border}` }}>
                      <img src={course.image} alt={course.title} className="size-full object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
                    </div>
                    <h4 className="text-sm font-semibold" style={{ color: CHALK.white }}>{course.title}</h4>
                    <p className="mt-1 text-xs" style={{ color: CHALK.muted }}>{course.description}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs" style={{ color: CHALK.muted }}>
                        <Clock className="size-3" />
                        {course.hours}h
                      </span>
                      <span className="text-xs font-bold" style={{ color: DIFF_CHALK[course.difficulty] }}>
                        {course.difficulty}
                      </span>
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
    <section id="practice" className="px-6 py-16" style={{ backgroundColor: CHALK.bg, borderTop: `1px solid ${CHALK.border}` }}>
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'Cabin Sketch', cursive", color: CHALK.white }}>
            Start Practicing for Free
            <ChalkDoodle variant="underline" className="mt-0.5 h-2 w-48" color={CHALK.green} />
          </h2>
          <p className="mt-4" style={{ color: CHALK.muted }}>The best resources for coding interviews. Period.</p>
          <ul className="mt-6 space-y-3">
            {VALUE_PROPS.map((prop) => (
              <li key={prop} className="flex items-start gap-3">
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center">
                  <Check className="size-4" style={{ color: CHALK.green }} />
                </div>
                <span className="text-sm" style={{ color: CHALK.muted }}>{prop}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="px-6 text-sm" style={{ backgroundColor: CHALK.green, color: CHALK.bg, fontWeight: 700 }}>
              Start Practicing
            </Button>
            <Button size="lg" className="px-6 text-sm" style={{ backgroundColor: "transparent", border: `1.5px solid ${CHALK.white}`, color: CHALK.white, opacity: 0.7 }}>
              View Roadmap
            </Button>
            <Button variant="ghost" size="lg" className="px-4 text-sm" style={{ color: CHALK.muted }}>
              <ExternalLink className="size-4" />
              Discord
            </Button>
          </div>
        </div>

        {/* Array-style practice tracker */}
        <div className="p-6" style={{ border: `1px solid ${CHALK.border}`, backgroundColor: CHALK.cardBg }}>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-bold" style={{ color: CHALK.green, border: `1px solid ${CHALK.green}` }}>Free</span>
              <span className="text-sm font-bold" style={{ fontFamily: "Kalam, cursive", color: CHALK.white }}>NeetCode 150</span>
            </div>
            <ChevronRight className="size-4" style={{ color: CHALK.muted }} />
          </div>
          <div className="mb-4">
            <div className="mb-1 flex justify-between text-xs" style={{ color: CHALK.muted }}>
              <span>67 / 150 completed</span>
              <span>45%</span>
            </div>
            <div className="h-2.5" style={{ border: `1px solid ${CHALK.border}` }}>
              <div className="h-full" style={{ width: "45%", backgroundColor: CHALK.green, opacity: 0.7 }} />
            </div>
          </div>
          {/* arr[i] notation */}
          <p className="mb-2 text-xs" style={{ fontFamily: "Kalam, cursive", color: CHALK.blue }}>topics[]</p>
          <div className="space-y-1.5">
            {PRACTICE_TOPICS.map((topic, i) => (
              <div key={topic} className="flex items-center gap-2">
                <span className="w-12 shrink-0 text-right text-[10px]" style={{ fontFamily: "Kalam, cursive", color: CHALK.blue }}>
                  [{i}]
                </span>
                <div className="flex flex-1 items-center justify-between px-3 py-2" style={{ border: `1px solid ${CHALK.border}` }}>
                  <span className="text-xs" style={{ color: CHALK.white }}>{topic}</span>
                  <span className="text-[10px]" style={{ color: CHALK.green, fontFamily: "Kalam, cursive", textDecoration: "line-through", textDecorationColor: CHALK.green }}>done</span>
                </div>
              </div>
            ))}
            <div className="ml-14 px-3 py-1.5 text-xs" style={{ color: CHALK.muted }}>+14 more...</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="relative px-6 py-16" style={{ backgroundColor: CHALK.bg }}>
      <ChalkSmudge className="absolute left-[12%] bottom-10 h-3 w-36" color={CHALK.green} />
      <EraserMark className="absolute right-[10%] top-16 h-5 w-20" />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:items-start">
        <div className="relative shrink-0">
          <ChalkCircle className="absolute -inset-4 size-[calc(100%+32px)]" color={CHALK.yellow} />
          <ChalkStar className="absolute -right-3 -top-3 size-5" color={CHALK.pink} />
          <img src="/images/brand/navi.png" alt="Navi" className="relative size-28 rounded-full object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: "'Cabin Sketch', cursive", color: CHALK.white }}>Hi, I'm Navi</h2>
          <ChalkLine color={CHALK.yellow} className="mt-1 h-0.5 w-16" />
          <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: CHALK.muted }}>
            <p>I created NeetCode in 2020 when I was unemployed and couldn't find a job.</p>
            <p>While I was struggling myself, it was still rewarding for me to make videos. I received so many messages from others who got jobs after studying with my videos.</p>
            <p>About a year later I managed to get a job at Google.</p>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <span className="text-xs" style={{ color: CHALK.muted }}>Previously at</span>
            {FOUNDER_COMPANIES.map((c, i) => (
              <div key={c.name} className="flex items-center">
                {i > 0 && <ChalkArrow className="mx-0.5 h-2.5 w-5" color={CHALK.muted} />}
                <div className="flex items-center gap-1 px-2 py-1" style={{ border: `1px solid ${CHALK.border}` }}>
                  <img src={c.logo} alt={c.name} className="size-3.5 object-contain brightness-200 grayscale" />
                  <span className="text-xs" style={{ color: CHALK.white }}>{c.name}</span>
                </div>
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
    <footer className="px-6 py-10" style={{ backgroundColor: CHALK.bg, borderTop: `1px solid ${CHALK.border}` }}>
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
        {[
          { title: "Links", items: ["Blind 75", "NeetCode 150", "NeetCode 250"] },
          { title: "Social", items: ["YouTube", "LinkedIn", "Twitter"] },
          { title: "Contact", items: ["support@neetcode.io"] },
          { title: "Legal", items: ["Privacy Policy", "Terms of Service"] },
        ].map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 text-sm font-bold" style={{ fontFamily: "'Cabin Sketch', cursive", color: CHALK.white }}>{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.items.map((item) => (
                <li key={item}><a href="#" className="transition-opacity hover:opacity-100" style={{ color: CHALK.muted, opacity: 0.7 }}>{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-8 max-w-5xl text-center">
        <ChalkLine color={CHALK.border} className="mx-auto mb-4 h-0.5 w-full" />
        <p className="text-xs" style={{ color: CHALK.muted, opacity: 0.5 }}>Copyright &copy; 2026 neetcode.io All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function ChalkboardLanding() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: CHALK.bg, color: CHALK.white, fontFamily: "Inter, sans-serif" }}>
      <ChalkDust />
      <RuledLines />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <HashMapTopics />
          <CompanyLogosSection />
          <TestimonialsSection />
          <CoursesSection />
          <PracticeSection />
          <FounderSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
