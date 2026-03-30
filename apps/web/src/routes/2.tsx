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

const DIFF_COLORS: Record<string, { text: string, bg: string, marker: string }> = {
  Easy: { text: "text-[#16A34A]", bg: "bg-[#16A34A]/10", marker: "#16A34A" },
  Medium: { text: "text-[#CA8A04]", bg: "bg-[#CA8A04]/10", marker: "#CA8A04" },
  Hard: { text: "text-[#DC2626]", bg: "bg-[#DC2626]/10", marker: "#DC2626" },
}

function Squiggle({ color = "#DC2626", className = "" }: { color?: string, className?: string }) {
  return (
    <svg viewBox="0 0 120 8" className={className} fill="none" preserveAspectRatio="none">
      <path d="M2 5C12 2 22 8 32 4S52 1 62 5S82 2 92 6S112 3 118 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function MarkerArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 16" className={className} fill="none">
      <path d="M2 8L30 8M24 3L32 8L24 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BinaryTreeSketch() {
  return (
    <svg className="pointer-events-none absolute inset-0 size-full opacity-[0.03]" viewBox="0 0 800 500" fill="none">
      <circle cx="400" cy="70" r="24" stroke="#2563EB" strokeWidth="2" />
      <text x="400" y="76" textAnchor="middle" fill="#2563EB" fontSize="14" fontFamily="Caveat">15</text>
      <path d="M382 90L310 155" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M418 90L490 155" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="300" cy="170" r="20" stroke="#2563EB" strokeWidth="2" />
      <text x="300" y="176" textAnchor="middle" fill="#2563EB" fontSize="13" fontFamily="Caveat">8</text>
      <circle cx="500" cy="170" r="20" stroke="#2563EB" strokeWidth="2" />
      <text x="500" y="176" textAnchor="middle" fill="#2563EB" fontSize="13" fontFamily="Caveat">22</text>
      <path d="M284 187L230 240" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M316 187L370 240" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M484 187L440 240" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M516 187L580 240" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="225" cy="255" r="16" stroke="#2563EB" strokeWidth="1.5" />
      <text x="225" y="260" textAnchor="middle" fill="#2563EB" fontSize="11" fontFamily="Caveat">3</text>
      <circle cx="375" cy="255" r="16" stroke="#2563EB" strokeWidth="1.5" />
      <text x="375" y="260" textAnchor="middle" fill="#2563EB" fontSize="11" fontFamily="Caveat">12</text>
      <circle cx="435" cy="255" r="16" stroke="#2563EB" strokeWidth="1.5" />
      <text x="435" y="260" textAnchor="middle" fill="#2563EB" fontSize="11" fontFamily="Caveat">18</text>
      <circle cx="585" cy="255" r="16" stroke="#2563EB" strokeWidth="1.5" />
      <text x="585" y="260" textAnchor="middle" fill="#2563EB" fontSize="11" fontFamily="Caveat">27</text>
      <text x="620" y="100" fill="#DC2626" fontSize="12" fontFamily="Caveat" transform="rotate(-8 620 100)">BST!</text>
      <path d="M600 105L560 130" stroke="#DC2626" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 3" />
    </svg>
  )
}

function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
  )
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-dashed border-[#CBD5E1] bg-[#FAFAFA]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/images/brand/neetcode-logo.png" alt="NeetCode" className="size-8" />
            <span className="text-xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>NeetCode</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {["Courses", "Practice", "Roadmap"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-[#64748B] transition-colors hover:text-[#1E293B]">{link}</a>
            ))}
            <a href="#" className="text-sm font-semibold text-[#2563EB]">Pro</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-[#1E293B]">Sign in</Button>
          <Button size="sm" className="border-2 border-[#2563EB] bg-[#2563EB] text-white hover:bg-[#1D4ED8]">Get Pro</Button>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-24 md:pt-36">
      <BinaryTreeSketch />
      <div className="relative mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.95] text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>
            <span className="relative inline-block">
              NeetCode
              <Squiggle className="absolute -bottom-1 left-0 h-2 w-full" />
            </span>
          </h1>
          <p className="mt-3 text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-[#2563EB]" style={{ fontFamily: "Caveat, cursive" }}>
            A Better Way to Prepare
          </p>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#64748B]">
            Tech interview roadmaps trusted by engineers at Google, Meta, OpenAI, and other top tech companies.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-none border-2 border-[#2563EB] bg-[#2563EB] px-8 text-white shadow-[3px_3px_0px_#1E293B] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#1E293B]">
            <Rocket className="size-4" />
            Get Pro
          </Button>
          <Button variant="outline" size="lg" className="rounded-none border-2 border-[#1E293B] px-8 text-[#1E293B] hover:bg-[#1E293B]/5">
            Start Free
          </Button>
        </div>

        {/* Stats as hand-drawn bar chart */}
        <div className="mx-auto mt-20 flex max-w-md items-end justify-center gap-16">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-[#2563EB]" style={{ fontFamily: "Caveat, cursive" }}>1M+</span>
            <div className="mt-1 h-20 w-16 border-2 border-[#2563EB] bg-[#2563EB]/10" style={{ borderRadius: "2px" }} />
            <span className="mt-2 text-xs text-[#64748B]">Engineers prepared</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-[#16A34A]" style={{ fontFamily: "Caveat, cursive" }}>1,000+</span>
            <div className="mt-1 h-28 w-16 border-2 border-[#16A34A] bg-[#16A34A]/10" style={{ borderRadius: "2px" }} />
            <span className="mt-2 text-center text-xs text-[#64748B]">Problems & Videos</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrayTopicStrip() {
  return (
    <section className="overflow-x-auto border-y-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm text-[#64748B]" style={{ fontFamily: "Caveat, cursive", fontSize: "1rem" }}>
          topics[] =
        </p>
        <div className="flex items-center justify-center gap-0">
          {TOPICS.map((topic, i) => (
            <div key={topic} className="flex flex-col items-center">
              <span className="mb-1 text-[10px] text-[#94A3B8]" style={{ fontFamily: "Caveat, cursive" }}>[{i}]</span>
              <div className="border-2 border-[#2563EB]/50 bg-white px-3 py-2 text-xs font-medium text-[#1E293B] transition-colors hover:bg-[rgba(250,204,21,0.15)]">
                {topic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CompanyLogosSection() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-center text-sm text-[#64748B]">Trusted by engineers who landed offers at top companies</p>
        {/* Linked list style: node → node → node */}
        <div className="flex flex-wrap items-center justify-center gap-1">
          {COMPANIES.map((c, i) => (
            <div key={c.name} className="flex items-center">
              <div className="flex items-center gap-2 border-2 border-dashed border-[#CBD5E1] bg-white px-4 py-2.5 transition-colors hover:border-[#2563EB]/40 hover:bg-[rgba(250,204,21,0.08)]">
                <img src={c.logo} alt={c.name} className="size-5 object-contain" />
                <span className="text-sm text-[#475569]">{c.name}</span>
              </div>
              {i < COMPANIES.length - 1 && (
                <MarkerArrow className="mx-0.5 h-3 w-6 shrink-0 text-[#2563EB]" />
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-[#94A3B8]" style={{ fontFamily: "Caveat, cursive" }}>// LinkedList&lt;Company&gt;</p>
      </div>
    </section>
  )
}

function TestimonialsSection() {
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

function CoursesSection() {
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

function PracticeSection() {
  return (
    <section id="practice" className="border-y-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-6 py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>Start Practicing for Free</h2>
          <Squiggle color="#16A34A" className="mt-1 h-1.5 w-32" />
          <p className="mt-4 text-[#64748B]">The best resources for coding interviews. Period.</p>
          <ul className="mt-6 space-y-3">
            {VALUE_PROPS.map((prop) => (
              <li key={prop} className="flex items-start gap-3">
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-[#16A34A]">
                  <Check className="size-3 text-[#16A34A]" />
                </div>
                <span className="text-sm text-[#475569]">{prop}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-none border-2 border-[#16A34A] bg-[#16A34A] px-6 text-sm text-white shadow-[3px_3px_0px_#1E293B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#1E293B]">
              Start Practicing
            </Button>
            <Button variant="outline" size="lg" className="rounded-none border-2 border-[#1E293B] px-6 text-sm text-[#1E293B]">View Roadmap</Button>
            <Button variant="ghost" size="lg" className="px-4 text-sm text-[#64748B]">
              <ExternalLink className="size-4" />
              Discord
            </Button>
          </div>
        </div>

        {/* Linked list practice tracker */}
        <div className="border-2 border-[#2563EB]/30 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="border border-[#16A34A] bg-[#16A34A]/10 px-2 py-0.5 text-xs font-medium text-[#16A34A]">Free</span>
              <span className="text-sm font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>NeetCode 150</span>
            </div>
            <ChevronRight className="size-4 text-[#94A3B8]" />
          </div>
          <div className="mb-4">
            <div className="mb-1 flex justify-between text-xs text-[#64748B]">
              <span>67 / 150 completed</span>
              <span>45%</span>
            </div>
            <div className="h-3 border-2 border-[#CBD5E1] bg-white">
              <div className="h-full bg-[#16A34A]/70" style={{ width: "45%" }} />
            </div>
          </div>
          {/* Topics as linked list nodes */}
          <div className="space-y-1">
            {PRACTICE_TOPICS.map((topic, i) => (
              <div key={topic} className="flex items-center">
                <div className="flex flex-1 items-center justify-between border-2 border-dashed border-[#CBD5E1] px-3 py-2">
                  <span className="text-xs text-[#475569]">{topic}</span>
                  <span className="text-[10px] text-[#16A34A]" style={{ fontFamily: "Caveat, cursive" }}>✓ done</span>
                </div>
                {i < PRACTICE_TOPICS.length - 1 && (
                  <svg width="16" height="24" viewBox="0 0 16 24" className="shrink-0 text-[#2563EB]">
                    <path d="M8 0V18M4 14L8 20L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                )}
              </div>
            ))}
            <div className="border-2 border-dashed border-[#CBD5E1]/50 px-3 py-2 text-xs text-[#94A3B8]">+14 more →</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:items-start">
        {/* Portrait in hand-drawn circle frame */}
        <div className="relative shrink-0">
          <svg className="absolute -inset-3 size-[calc(100%+24px)]" viewBox="0 0 140 140" fill="none">
            <ellipse cx="70" cy="70" rx="65" ry="63" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" transform="rotate(-3 70 70)" />
          </svg>
          <img src="/images/brand/navi.png" alt="Navi" className="relative size-28 rounded-full object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>Hi, I'm Navi</h2>
          <Squiggle color="#2563EB" className="mt-1 h-1 w-16" />
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#475569]">
            <p>I created NeetCode in 2020 when I was unemployed and couldn't find a job.</p>
            <p>While I was struggling myself, it was still rewarding for me to make videos. I received so many messages from others who got jobs after studying with my videos. It felt so gratifying and kept me motivated.</p>
            <p>About a year later I managed to get a job at Google.</p>
          </div>
          {/* Timeline as linked list */}
          <div className="mt-6 flex items-center gap-1">
            <span className="text-xs text-[#94A3B8]">Previously at</span>
            {FOUNDER_COMPANIES.map((c, i) => (
              <div key={c.name} className="flex items-center">
                {i > 0 && <MarkerArrow className="mx-0.5 h-2.5 w-5 text-[#94A3B8]" />}
                <div className="flex items-center gap-1 border border-dashed border-[#CBD5E1] bg-white px-2 py-1">
                  <img src={c.logo} alt={c.name} className="size-3.5 object-contain" />
                  <span className="text-xs text-[#475569]">{c.name}</span>
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
    <footer className="border-t-2 border-dashed border-[#CBD5E1] bg-[#FAFAFA] px-6 py-10">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="mb-3 text-sm font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>Links</h3>
          <ul className="space-y-2 text-sm text-[#64748B]">
            <li><a href="#" className="hover:text-[#1E293B]">Blind 75</a></li>
            <li><a href="#" className="hover:text-[#1E293B]">NeetCode 150</a></li>
            <li><a href="#" className="hover:text-[#1E293B]">NeetCode 250</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>Social</h3>
          <ul className="space-y-2 text-sm text-[#64748B]">
            <li><a href="#" className="hover:text-[#1E293B]">YouTube</a></li>
            <li><a href="#" className="hover:text-[#1E293B]">LinkedIn</a></li>
            <li><a href="#" className="hover:text-[#1E293B]">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>Contact</h3>
          <p className="text-sm text-[#64748B]">support@neetcode.io</p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>Legal</h3>
          <ul className="space-y-2 text-sm text-[#64748B]">
            <li><a href="#" className="hover:text-[#1E293B]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#1E293B]">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-5xl pt-4 text-center text-xs text-[#94A3B8]">
        <Squiggle color="#CBD5E1" className="mx-auto mb-4 h-1 w-full" />
        Copyright &copy; 2026 neetcode.io All rights reserved.
      </div>
    </footer>
  )
}

export default function WhiteboardLanding() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#1E293B]" style={{ fontFamily: "Inter, sans-serif" }}>
      <GridBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <ArrayTopicStrip />
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
