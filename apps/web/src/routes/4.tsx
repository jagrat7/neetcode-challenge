import { Button } from "@my-better-t-app/ui/components/button"
import {
  Rocket,
  Check,
  Clock,
  ExternalLink,
  ChevronRight,
} from "lucide-react"
import type React from "react"
import {
  TOPICS,
  COMPANIES,
  TESTIMONIALS,
  COURSE_CATEGORIES,
  PRACTICE_TOPICS,
  VALUE_PROPS,
  FOUNDER_COMPANIES,
} from "../data/landing-data"

const NEON = {
  green: "#00FF88",
  cyan: "#00D4FF",
  magenta: "#FF00FF",
  yellow: "#FFD600",
  red: "#FF3366",
  bg: "#0A0A0F",
  card: "#12121A",
  fg: "#E0E0E0",
  muted: "#6B7280",
  border: "#2A2A3A",
}

const DIFF_NEON: Record<string, string> = {
  Easy: NEON.green,
  Medium: NEON.yellow,
  Hard: NEON.red,
}

function ScanlineOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03]"
      style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.08) 1px, rgba(255,255,255,0.08) 2px)",
      }}
    />
  )
}

function GlitchText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute left-[2px] top-0 z-0 opacity-70"
        style={{ color: NEON.cyan, clipPath: "inset(10% 0 60% 0)" }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className="absolute -left-[2px] top-0 z-0 opacity-70"
        style={{ color: NEON.magenta, clipPath: "inset(50% 0 10% 0)" }}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  )
}

function TerminalPrompt({ command, className = "" }: { command: string, className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} style={{ fontFamily: "JetBrains Mono, monospace" }}>
      <span style={{ color: NEON.green }}>$</span>
      <span style={{ color: NEON.fg }}>{command}</span>
      <span className="animate-pulse" style={{ color: NEON.green }}>▊</span>
    </div>
  )
}

function HudBracket({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left"
  return (
    <svg width="12" height="40" viewBox="0 0 12 40" fill="none" className="shrink-0">
      {isLeft ? (
        <path d="M10 2H4V38H10" stroke={NEON.cyan} strokeWidth="1" opacity="0.4" />
      ) : (
        <path d="M2 2H8V38H2" stroke={NEON.cyan} strokeWidth="1" opacity="0.4" />
      )}
    </svg>
  )
}

function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: `${NEON.bg}ee`, borderBottom: `1px solid ${NEON.border}` }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/images/brand/neetcode-logo.png" alt="NeetCode" className="size-8" />
            <span
              className="text-lg font-bold"
              style={{ fontFamily: "JetBrains Mono, monospace", color: NEON.green, textShadow: `0 0 8px ${NEON.green}40` }}
            >
              NeetCode
            </span>
          </div>
          <div className="hidden items-center gap-6 md:flex" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            {["courses", "practice", "roadmap"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-xs uppercase tracking-wider transition-colors"
                style={{ color: NEON.muted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = NEON.cyan)}
                onMouseLeave={(e) => (e.currentTarget.style.color = NEON.muted)}
              >
                {link}
              </a>
            ))}
            <a href="#" className="text-xs font-bold uppercase tracking-wider" style={{ color: NEON.magenta, textShadow: `0 0 6px ${NEON.magenta}30` }}>
              pro
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs uppercase tracking-wider"
            style={{ color: NEON.fg, fontFamily: "JetBrains Mono, monospace" }}
          >
            Sign in
          </Button>
          <Button
            size="sm"
            className="text-xs uppercase tracking-wider"
            style={{
              backgroundColor: "transparent",
              border: `1px solid ${NEON.green}`,
              color: NEON.green,
              fontFamily: "JetBrains Mono, monospace",
              textShadow: `0 0 6px ${NEON.green}30`,
              boxShadow: `0 0 8px ${NEON.green}15, inset 0 0 8px ${NEON.green}08`,
            }}
          >
            Get Pro
          </Button>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-24 md:pt-36" style={{ backgroundColor: NEON.bg }}>
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse at center, ${NEON.green}08 0%, transparent 60%)` }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-2 text-xs uppercase tracking-[0.3em]" style={{ color: NEON.muted, fontFamily: "JetBrains Mono, monospace" }}>
          // initializing...
        </div>
        <h1
          className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.95]"
          style={{ fontFamily: "JetBrains Mono, monospace", color: NEON.green, textShadow: `0 0 20px ${NEON.green}30, 0 0 40px ${NEON.green}10` }}
        >
          <GlitchText>NeetCode</GlitchText>
        </h1>
        <p
          className="mt-4 text-[clamp(1.2rem,3vw,1.8rem)] font-semibold"
          style={{ fontFamily: "JetBrains Mono, monospace", color: NEON.fg }}
        >
          A Better Way to Prepare
        </p>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed" style={{ color: NEON.muted }}>
          Tech interview roadmaps trusted by engineers at Google, Meta, OpenAI, and other top tech companies.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="px-8 text-xs uppercase tracking-wider"
            style={{
              backgroundColor: NEON.green,
              color: NEON.bg,
              fontFamily: "JetBrains Mono, monospace",
              fontWeight: 700,
              boxShadow: `0 0 20px ${NEON.green}30`,
              borderRadius: "2px",
            }}
          >
            <Rocket className="size-4" />
            Get Pro
          </Button>
          <Button
            size="lg"
            className="px-8 text-xs uppercase tracking-wider"
            style={{
              backgroundColor: "transparent",
              border: `1px solid ${NEON.fg}40`,
              color: NEON.fg,
              fontFamily: "JetBrains Mono, monospace",
              borderRadius: "2px",
            }}
          >
            Start Free
          </Button>
        </div>

        {/* HUD-style stats */}
        <div className="mx-auto mt-20 flex max-w-md items-center justify-center gap-12">
          <HudBracket side="left" />
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace", color: NEON.green, textShadow: `0 0 10px ${NEON.green}30` }}>
              [1M+]
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider" style={{ color: NEON.muted, fontFamily: "JetBrains Mono, monospace" }}>
              engineers.prepared
            </div>
          </div>
          <div className="h-10 w-px" style={{ backgroundColor: NEON.border }} />
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace", color: NEON.green, textShadow: `0 0 10px ${NEON.green}30` }}>
              [1K+]
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider" style={{ color: NEON.muted, fontFamily: "JetBrains Mono, monospace" }}>
              problems.count
            </div>
          </div>
          <HudBracket side="right" />
        </div>
      </div>
    </section>
  )
}

function TopicTags() {
  return (
    <section className="px-6 py-8" style={{ backgroundColor: NEON.bg, borderTop: `1px solid ${NEON.border}`, borderBottom: `1px solid ${NEON.border}` }}>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2">
        {TOPICS.map((topic) => (
          <span
            key={topic}
            className="px-3 py-1.5 text-[11px] uppercase tracking-wider transition-all"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: NEON.cyan,
              border: `1px solid ${NEON.cyan}30`,
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${NEON.cyan}80`
              e.currentTarget.style.boxShadow = `0 0 8px ${NEON.cyan}20`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${NEON.cyan}30`
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            {topic}
          </span>
        ))}
      </div>
    </section>
  )
}

function CompanyLogosSection() {
  return (
    <section className="px-6 py-14" style={{ backgroundColor: NEON.bg }}>
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-center text-xs uppercase tracking-wider" style={{ color: NEON.muted, fontFamily: "JetBrains Mono, monospace" }}>
          // trusted_by.companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {COMPANIES.map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-2 opacity-50 transition-all duration-300 hover:opacity-100"
              onMouseEnter={(e) => {
                const el = e.currentTarget.querySelector("span")
                if (el) el.style.color = NEON.cyan
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget.querySelector("span")
                if (el) el.style.color = NEON.muted
              }}
            >
              <img src={c.logo} alt={c.name} className="size-5 object-contain brightness-150 grayscale" />
              <span className="text-xs transition-colors" style={{ color: NEON.muted, fontFamily: "JetBrains Mono, monospace" }}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: NEON.bg }}>
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="p-5 transition-all duration-300"
            style={{
              backgroundColor: NEON.card,
              border: `1px solid ${NEON.border}`,
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${NEON.cyan}40`
              e.currentTarget.style.boxShadow = `0 0 12px ${NEON.cyan}10`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = NEON.border
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <div className="flex items-center gap-3">
              <img src={t.photo} alt={t.name} className="size-10 rounded-full object-cover" style={{ border: `1px solid ${NEON.cyan}30` }} />
              <div>
                <div className="text-sm font-semibold" style={{ color: NEON.fg }}>{t.name}</div>
                <div className="flex items-center gap-1 text-xs" style={{ color: NEON.muted }}>
                  <img src={t.companyLogo} alt={t.company} className="size-3 object-contain brightness-150 grayscale" />
                  {t.company}
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: NEON.muted }}>
              <span className="mr-1" style={{ color: NEON.green }}>&gt;</span>
              <span style={{ color: NEON.fg }}>{t.highlight}</span>
              {t.rest}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CoursesSection() {
  return (
    <section id="courses" className="px-6 py-16" style={{ backgroundColor: NEON.bg }}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace", color: NEON.fg }}>
            <span style={{ color: NEON.cyan }}>const</span> courses <span style={{ color: NEON.muted }}>=</span> <span style={{ color: NEON.magenta }}>{'{'}</span>
          </h2>
        </div>

        <div className="space-y-12">
          {COURSE_CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <div className="mb-4 flex items-center gap-2" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                <span className="text-xs" style={{ color: NEON.yellow }}>"{cat.title}"</span>
                <span className="text-xs" style={{ color: NEON.muted }}>:</span>
                <span className="text-xs" style={{ color: NEON.muted }}>// {cat.description}</span>
              </div>
              <div className="grid gap-3 pl-4 sm:grid-cols-2 lg:grid-cols-3" style={{ borderLeft: `1px solid ${NEON.border}` }}>
                {cat.courses.map((course) => (
                  <div
                    key={course.title}
                    className="group overflow-hidden transition-all duration-300"
                    style={{ backgroundColor: NEON.card, border: `1px solid ${NEON.border}`, borderRadius: "2px" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${NEON.green}30`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = NEON.border
                    }}
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <img src={course.image} alt={course.title} className="size-full object-cover opacity-70 transition-all duration-300 group-hover:opacity-90 group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-semibold" style={{ color: NEON.fg }}>{course.title}</h4>
                      <p className="mt-1 text-xs" style={{ color: NEON.muted }}>{course.description}</p>
                      <div className="mt-3 flex items-center gap-3" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                        <span className="flex items-center gap-1 text-[11px]" style={{ color: NEON.muted }}>
                          <Clock className="size-3" />
                          {course.hours}h
                        </span>
                        <span
                          className="text-[11px] font-bold uppercase"
                          style={{ color: DIFF_NEON[course.difficulty], textShadow: `0 0 6px ${DIFF_NEON[course.difficulty]}30` }}
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

        <div className="mt-6">
          <span className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace", color: NEON.magenta }}>{'}'}</span>
        </div>
      </div>
    </section>
  )
}

function PracticeSection() {
  return (
    <section id="practice" className="px-6 py-16" style={{ backgroundColor: NEON.bg, borderTop: `1px solid ${NEON.border}` }}>
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace", color: NEON.fg }}>
            Start Practicing for Free
          </h2>
          <TerminalPrompt command="neetcode --start --free" className="mt-3 text-sm" />
          <p className="mt-4 text-sm" style={{ color: NEON.muted }}>The best resources for coding interviews. Period.</p>
          <ul className="mt-6 space-y-3">
            {VALUE_PROPS.map((prop) => (
              <li key={prop} className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0" style={{ color: NEON.green }} />
                <span className="text-sm" style={{ color: NEON.muted }}>{prop}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="px-6 text-xs uppercase tracking-wider"
              style={{
                backgroundColor: NEON.green,
                color: NEON.bg,
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: 700,
                borderRadius: "2px",
                boxShadow: `0 0 16px ${NEON.green}25`,
              }}
            >
              Start Practicing
            </Button>
            <Button
              size="lg"
              className="px-6 text-xs uppercase tracking-wider"
              style={{
                backgroundColor: "transparent",
                border: `1px solid ${NEON.fg}30`,
                color: NEON.fg,
                fontFamily: "JetBrains Mono, monospace",
                borderRadius: "2px",
              }}
            >
              View Roadmap
            </Button>
            <Button variant="ghost" size="lg" className="px-4 text-xs" style={{ color: NEON.muted }}>
              <ExternalLink className="size-4" />
              Discord
            </Button>
          </div>
        </div>

        {/* Terminal-style tracker */}
        <div className="overflow-hidden" style={{ backgroundColor: NEON.card, border: `1px solid ${NEON.border}`, borderRadius: "4px" }}>
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-2" style={{ borderBottom: `1px solid ${NEON.border}` }}>
            <div className="size-2.5 rounded-full" style={{ backgroundColor: NEON.red }} />
            <div className="size-2.5 rounded-full" style={{ backgroundColor: NEON.yellow }} />
            <div className="size-2.5 rounded-full" style={{ backgroundColor: NEON.green }} />
            <span className="ml-2 text-[10px]" style={{ color: NEON.muted, fontFamily: "JetBrains Mono, monospace" }}>neetcode-150.sh</span>
          </div>
          <div className="p-5" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase" style={{ border: `1px solid ${NEON.green}`, color: NEON.green }}>Free</span>
                <span className="text-sm font-bold" style={{ color: NEON.fg }}>NeetCode 150</span>
              </div>
              <ChevronRight className="size-4" style={{ color: NEON.muted }} />
            </div>
            <div className="mb-1 flex justify-between text-[11px]" style={{ color: NEON.muted }}>
              <span>progress: 67/150</span>
              <span>[███████████░░░░░░░░░░░░] 45%</span>
            </div>
            <div className="mt-4 space-y-1.5">
              {PRACTICE_TOPICS.map((topic) => (
                <div key={topic} className="flex items-center justify-between px-2 py-1.5 text-xs" style={{ borderBottom: `1px solid ${NEON.border}` }}>
                  <span style={{ color: NEON.fg }}>{topic}</span>
                  <span style={{ color: NEON.green }}>✓ PASS</span>
                </div>
              ))}
              <div className="px-2 py-1 text-[11px]" style={{ color: NEON.muted }}>... +14 more topics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: NEON.bg }}>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:items-start">
        <div className="relative shrink-0">
          <img
            src="/images/brand/navi.png"
            alt="Navi"
            className="relative size-28 rounded-full object-cover"
            style={{ border: `2px solid ${NEON.cyan}40`, boxShadow: `0 0 20px ${NEON.cyan}15` }}
          />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider" style={{ color: NEON.muted, fontFamily: "JetBrains Mono, monospace" }}>// founder</div>
          <h2 className="mt-1 text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace", color: NEON.fg }}>
            Hi, I'm Navi
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: NEON.muted }}>
            <p>I created NeetCode in 2020 when I was unemployed and couldn't find a job.</p>
            <p>While I was struggling myself, it was still rewarding for me to make videos. I received so many messages from others who got jobs after studying with my videos.</p>
            <p>About a year later I managed to get a job at Google.</p>
          </div>
          <div className="mt-6 flex items-center gap-2" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <span className="text-[11px]" style={{ color: NEON.muted }}>prev:</span>
            {FOUNDER_COMPANIES.map((c, i) => (
              <div key={c.name} className="flex items-center">
                {i > 0 && <span className="mx-1 text-[10px]" style={{ color: NEON.muted }}>→</span>}
                <div className="flex items-center gap-1 px-2 py-1" style={{ border: `1px solid ${NEON.border}`, borderRadius: "2px" }}>
                  <img src={c.logo} alt={c.name} className="size-3.5 object-contain brightness-150 grayscale" />
                  <span className="text-[11px]" style={{ color: NEON.fg }}>{c.name}</span>
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
    <footer className="px-6 py-10" style={{ backgroundColor: NEON.bg, borderTop: `1px solid ${NEON.border}` }}>
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
        {[
          { title: "Links", items: ["Blind 75", "NeetCode 150", "NeetCode 250"] },
          { title: "Social", items: ["YouTube", "LinkedIn", "Twitter"] },
          { title: "Contact", items: ["support@neetcode.io"] },
          { title: "Legal", items: ["Privacy Policy", "Terms of Service"] },
        ].map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "JetBrains Mono, monospace", color: NEON.cyan }}>{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.items.map((item) => (
                <li key={item}><a href="#" className="text-xs transition-colors hover:underline" style={{ color: NEON.muted }}>{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-8 max-w-5xl text-center" style={{ borderTop: `1px solid ${NEON.border}`, paddingTop: "1.5rem" }}>
        <p className="text-[11px]" style={{ color: NEON.muted, fontFamily: "JetBrains Mono, monospace" }}>
          // copyright © 2026 neetcode.io — all rights reserved
        </p>
      </div>
    </footer>
  )
}

export default function CyberpunkLanding() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: NEON.bg, color: NEON.fg, fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <ScanlineOverlay />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <TopicTags />
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
