import { Button } from "@my-better-t-app/ui/components/button"
import { CyberGlitchText } from "@my-better-t-app/ui/components/ui/cyber-glitch-text"
import { LogoSlider } from "@my-better-t-app/ui/components/ui/logo-slider"
import { CodeSectionBlock } from "../components/dark-desgin/code-section-block"
import { HeroCodeIntro } from "../components/dark-desgin/hero-code-intro"
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

const DSA = {
  bg: "#0D1117",
  card: "#161B22",
  fg: "#E6EDF3",
  visited: "#10B981",
  current: "#06B6D4",
  queued: "#F59E0B",
  unvisited: "#334155",
  muted: "#7D8590",
  border: "#30363D",
  red: "#F85149",
  edgeColor: "#30363D",
  edgeActive: "#10B981",
}

const DIFF_DSA: Record<string, string> = {
  Easy: DSA.visited,
  Medium: DSA.queued,
  Hard: DSA.red,
}

function DotGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
      style={{
        backgroundImage: "radial-gradient(circle, #E6EDF3 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
  )
}

function GraphNode({
  x,
  y,
  r,
  label,
  state = "unvisited",
  delay = 0,
}: {
  x: number
  y: number
  r: number
  label: string
  state?: "visited" | "current" | "queued" | "unvisited"
  delay?: number
}) {
  const colors = {
    visited: DSA.visited,
    current: DSA.current,
    queued: DSA.queued,
    unvisited: DSA.unvisited,
  }
  const c = colors[state]
  return (
    <g>
      {(state === "visited" || state === "current") && (
        <circle cx={x} cy={y} r={r + 4} fill="none" stroke={c} strokeWidth="1" opacity="0.2">
          <animate attributeName="r" from={r + 2} to={r + 8} dur="2s" repeatCount="indefinite" begin={`${delay}s`} />
          <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" begin={`${delay}s`} />
        </circle>
      )}
      <circle cx={x} cy={y} r={r} fill={`${c}15`} stroke={c} strokeWidth="2" />
      <text x={x} y={y + 4} textAnchor="middle" fill={c} fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">
        {label}
      </text>
    </g>
  )
}

function GraphEdge({ x1, y1, x2, y2, active = false }: { x1: number, y1: number, x2: number, y2: number, active?: boolean }) {
  const color = active ? DSA.edgeActive : DSA.edgeColor
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={active ? 2 : 1.5} opacity={active ? 0.6 : 0.3}>
      {active && (
        <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
      )}
    </line>
  )
}

function HeroGraph() {
  const nodes = [
    { x: 400, y: 120, r: 22, label: "NC", state: "current" as const, delay: 0 },
    { x: 250, y: 80, r: 16, label: "DP", state: "visited" as const, delay: 0.3 },
    { x: 550, y: 90, r: 16, label: "BFS", state: "visited" as const, delay: 0.6 },
    { x: 180, y: 170, r: 14, label: "BST", state: "visited" as const, delay: 0.9 },
    { x: 320, y: 200, r: 14, label: "DFS", state: "queued" as const, delay: 1.2 },
    { x: 500, y: 200, r: 14, label: "LL", state: "queued" as const, delay: 1.5 },
    { x: 620, y: 160, r: 14, label: "2P", state: "queued" as const, delay: 1.8 },
    { x: 140, y: 260, r: 12, label: "HP", state: "unvisited" as const, delay: 0 },
    { x: 280, y: 280, r: 12, label: "BT", state: "unvisited" as const, delay: 0 },
    { x: 440, y: 270, r: 12, label: "SW", state: "unvisited" as const, delay: 0 },
    { x: 580, y: 260, r: 12, label: "TR", state: "unvisited" as const, delay: 0 },
    { x: 670, y: 230, r: 12, label: "GR", state: "unvisited" as const, delay: 0 },
  ]

  const edges = [
    [0, 1], [0, 2], [1, 3], [1, 4], [0, 4], [0, 5], [2, 5], [2, 6],
    [3, 7], [4, 8], [5, 9], [6, 10], [6, 11],
  ]

  return (
    <svg className="pointer-events-none absolute inset-0 size-full opacity-30" viewBox="0 0 800 340" fill="none" preserveAspectRatio="xMidYMid meet">
      {edges.map(([a, b], i) => (
        <GraphEdge
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          active={nodes[a].state === "visited" || nodes[b].state === "visited"}
        />
      ))}
      {nodes.map((n) => (
        <GraphNode key={n.label} {...n} />
      ))}
    </svg>
  )
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: `${DSA.bg}ee`, borderBottom: `1px solid ${DSA.border}` }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/images/brand/neetcode-logo.png" alt="NeetCode" className="size-8" />
            <CyberGlitchText text="NeetCode" scrambleOnMount={false} className="text-lg font-bold text-[#E6EDF3] [font-family:'JetBrains_Mono',monospace]" />
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {["Courses", "Practice", "Roadmap"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm transition-colors" style={{ color: DSA.muted }}>{link}</a>
            ))}
            <a href="#" className="text-sm font-semibold" style={{ color: DSA.current }}>Pro</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" style={{ color: DSA.fg }}>Sign in</Button>
          <Button size="sm" style={{ backgroundColor: DSA.visited, color: DSA.bg, fontWeight: 700, borderRadius: "6px" }}>Get Pro</Button>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-24 md:pt-36" style={{ backgroundColor: DSA.bg, minHeight: "600px" }}>
      <HeroGraph />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="size-3 rounded-full" style={{ backgroundColor: DSA.visited }} />
          <span className="text-xs" style={{ color: DSA.visited, fontFamily: "JetBrains Mono, monospace" }}>visited</span>
          <span className="size-3 rounded-full" style={{ backgroundColor: DSA.queued }} />
          <span className="text-xs" style={{ color: DSA.queued, fontFamily: "JetBrains Mono, monospace" }}>queued</span>
          <span className="size-3 rounded-full" style={{ backgroundColor: DSA.current }} />
          <span className="text-xs" style={{ color: DSA.current, fontFamily: "JetBrains Mono, monospace" }}>current</span>
        </div>

        <HeroCodeIntro currentColor={DSA.current} fgColor={DSA.fg} keywordColor={DSA.visited} mutedColor={DSA.muted}>
          <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <CyberGlitchText text="NeetCode" className="text-[#06B6D4]" />
          </h1>
          <p className="mt-3 text-[clamp(1.1rem,2.5vw,1.6rem)]" style={{ color: DSA.fg, opacity: 0.8, fontFamily: "JetBrains Mono, monospace" }}>
            <span style={{ color: DSA.muted, fontSize: "0.7em" }}>// </span>A Better Way to Prepare
          </p>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed" style={{ color: DSA.muted }}>
            Tech interview roadmaps trusted by engineers at Google, Meta, OpenAI, and other top tech companies.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="px-8 text-sm" style={{ backgroundColor: DSA.visited, color: DSA.bg, fontWeight: 700, borderRadius: "8px" }}>
              <Rocket className="size-4" />
              Get Pro
            </Button>
            <Button size="lg" className="px-8 text-sm" style={{ backgroundColor: "transparent", border: `1px solid ${DSA.fg}30`, color: DSA.fg, borderRadius: "8px" }}>
              Start Free
            </Button>
          </div>

          {/* Binary tree stats */}
          <CodeSectionBlock
            className="mx-auto mt-20"
            duration={18}
            label="BinaryTree<Stat>.inorder()"
            labelClassName="mb-2 text-center text-[10px]"
            labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
            offsetY={12}
          >
            <svg viewBox="0 0 400 140" className="mx-auto h-36 w-full max-w-md" fill="none">
              {/* Root */}
              <circle cx="200" cy="30" r="28" fill={`${DSA.visited}15`} stroke={DSA.visited} strokeWidth="2" />
              <text x="200" y="27" textAnchor="middle" fill={DSA.visited} fontSize="14" fontWeight="700" fontFamily="JetBrains Mono">1M+</text>
              <text x="200" y="40" textAnchor="middle" fill={DSA.muted} fontSize="8" fontFamily="JetBrains Mono">engineers</text>
              {/* Edges */}
              <line x1="178" y1="52" x2="120" y2="80" stroke={DSA.border} strokeWidth="1.5" />
              <line x1="222" y1="52" x2="280" y2="80" stroke={DSA.border} strokeWidth="1.5" />
              {/* Left child */}
              <circle cx="110" cy="100" r="24" fill={`${DSA.queued}15`} stroke={DSA.queued} strokeWidth="2" />
              <text x="110" y="97" textAnchor="middle" fill={DSA.queued} fontSize="12" fontWeight="700" fontFamily="JetBrains Mono">1K+</text>
              <text x="110" y="109" textAnchor="middle" fill={DSA.muted} fontSize="7" fontFamily="JetBrains Mono">problems</text>
              {/* Right child */}
              <circle cx="290" cy="100" r="24" fill={`${DSA.current}15`} stroke={DSA.current} strokeWidth="2" />
              <text x="290" y="97" textAnchor="middle" fill={DSA.current} fontSize="12" fontWeight="700" fontFamily="JetBrains Mono">500+</text>
              <text x="290" y="109" textAnchor="middle" fill={DSA.muted} fontSize="7" fontFamily="JetBrains Mono">videos</text>
            </svg>
          </CodeSectionBlock>
        </HeroCodeIntro>
      </div>
    </section>
  )
}

// function TopicNetwork() {
//   return (
//     <section className="px-6 py-10" style={{ backgroundColor: DSA.bg, borderTop: `1px solid ${DSA.border}`, borderBottom: `1px solid ${DSA.border}` }}>
//       <div className="mx-auto max-w-5xl">
//         <div className="mb-4 text-center text-[10px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
//           const topics: string[] = [{TOPICS.length}]
//         </div>
//         <div className="flex flex-wrap items-center justify-center gap-3">
//           {TOPICS.map((topic, i) => {
//             const states = [DSA.visited, DSA.current, DSA.queued, DSA.unvisited]
//             const color = states[i % states.length]
//             return (
//               <div
//                 key={topic}
//                 className="flex items-center gap-1.5 px-3 py-1.5 text-xs transition-all"
//                 style={{
//                   border: `1.5px solid ${color}40`,
//                   borderRadius: "20px",
//                   color,
//                   fontFamily: "JetBrains Mono, monospace",
//                 }}
//               >
//                 <span className="text-[9px] opacity-50">[{i}]</span>
//                 <span className="size-2 rounded-full" style={{ backgroundColor: color }} />
//                 {topic}
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

function CompanyLogosSection() {
  const logos = [...COMPANIES, ...COMPANIES].map((company, index) => (
    <div
      key={`${company.name}-${index}`}
      className="group flex items-center justify-center px-1.5 py-2 opacity-85 transition-all duration-300 hover:opacity-100"
    >
      <img
        src={company.logo}
        alt={company.name}
        className="h-7 w-auto object-contain transition-all duration-300 group-hover:scale-105"
      />
    </div>
  ))

  return (
    <section className="px-6 py-14" style={{ backgroundColor: DSA.bg }}>
      <CodeSectionBlock
        className="mx-auto max-w-5xl"
        duration={18}
        label="Set<Company>.values()"
        labelClassName="mb-2 text-center text-[10px]"
        labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
      >
        <p className="mb-6 text-center text-sm" style={{ color: DSA.muted }}>Trusted by engineers who landed offers at top companies</p>
        {/* Set: unordered unique elements */}
        <LogoSlider
          logos={logos}
          speed={28}
          showBlur={false}
          pauseOnHover
          className="[&_li.logo-slider__item]:w-[104px] sm:[&_li.logo-slider__item]:w-[116px] lg:[&_li.logo-slider__item]:w-[124px]"
        />
        <p className="mt-3 text-center text-[9px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
          // order not guaranteed, all elements unique
        </p>
      </CodeSectionBlock>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: DSA.bg }}>
      <CodeSectionBlock
        className="mx-auto max-w-5xl"
        duration={18}
        label="PriorityQueue<Review>.poll()"
        labelClassName="mb-1 text-[10px]"
        labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <CyberGlitchText text="Testimonials" scrambleOnMount={false} className="text-[#E6EDF3]" />
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, ti) => (
            <div
              key={t.name}
              className="relative p-5 transition-all duration-300"
              style={{ backgroundColor: DSA.card, border: `1px solid ${DSA.border}`, borderRadius: "8px" }}
            >
              <div className="absolute right-3 top-3 text-[9px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
                node[{ti}]
              </div>
              {/* Node circle on avatar */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={t.photo} alt={t.name} className="size-10 rounded-full object-cover" style={{ border: `2px solid ${DSA.visited}` }} />
                  <span className="absolute -right-0.5 -top-0.5 size-3 rounded-full" style={{ backgroundColor: DSA.visited, border: `2px solid ${DSA.card}` }} />
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: DSA.fg }}>{t.name}</div>
                  <div className="flex items-center gap-1 text-xs" style={{ color: DSA.muted }}>
                    <img src={t.companyLogo} alt={t.company} className="size-3 object-contain" />
                    {t.company}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: DSA.muted }}>
                <span style={{ color: DSA.fg, fontWeight: 600 }}>{t.highlight}</span>
                {t.rest}
              </p>
              <div className="mt-3 text-[9px]" style={{ color: DSA.visited, fontFamily: "JetBrains Mono, monospace", opacity: 0.6 }}>
                ✓ verified = true
              </div>
            </div>
          ))}
        </div>
      </CodeSectionBlock>
    </section>
  )
}

function CoursesSection() {
  return (
    <section id="courses" className="px-6 py-16" style={{ backgroundColor: DSA.bg }}>
      <CodeSectionBlock
        className="mx-auto max-w-5xl"
        duration={18}
        label="HashMap<Category, Course[]>.entries()"
        labelClassName="mb-1 text-[10px]"
        labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
      >
        <div className="mb-12">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <CyberGlitchText text="Courses" scrambleOnMount={false} className="text-[#E6EDF3]" />
          </h2>
          <p className="mt-2" style={{ color: DSA.muted }}>Structured learning paths from fundamentals to advanced topics.</p>
        </div>

        {/* Hash map style: category key → course values */}
        <div className="space-y-10">
          {COURSE_CATEGORIES.map((cat, ci) => (
            <div key={cat.title} className="flex gap-4">
              {/* Hash key */}
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
              {/* Course bucket values */}
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
            </div>
          ))}
        </div>
      </CodeSectionBlock>
    </section>
  )
}

function PracticeSection() {
  return (
    <section id="practice" className="px-6 py-16" style={{ backgroundColor: DSA.bg, borderTop: `1px solid ${DSA.border}` }}>
      <CodeSectionBlock
        className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2"
        duration={26}
        label="function startPractice(): void {"
        labelClassName="mb-1 text-[10px] lg:col-span-2"
        labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
      >
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <CyberGlitchText text="Start Practicing for Free" scrambleOnMount={false} className="text-[#E6EDF3]" />
          </h2>
          <p className="mt-3" style={{ color: DSA.muted }}>The best resources for coding interviews. Period.</p>
          <ul className="mt-6 space-y-3">
            {VALUE_PROPS.map((prop, pi) => (
              <li key={prop} className="flex items-start gap-3">
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${DSA.visited}20` }}>
                  <Check className="size-3" style={{ color: DSA.visited }} />
                </div>
                <span className="text-sm" style={{ color: DSA.muted }}>
                  <span className="mr-1.5 text-[9px]" style={{ color: DSA.current, fontFamily: "JetBrains Mono, monospace", opacity: 0.5 }}>assert({pi})</span>
                  {prop}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="px-6 text-sm" style={{ backgroundColor: DSA.visited, color: DSA.bg, fontWeight: 700, borderRadius: "8px" }}>
              Start Practicing
            </Button>
            <Button size="lg" className="px-6 text-sm" style={{ backgroundColor: "transparent", border: `1px solid ${DSA.fg}30`, color: DSA.fg, borderRadius: "8px" }}>
              View Roadmap
            </Button>
            <Button variant="ghost" size="lg" className="px-4 text-sm" style={{ color: DSA.muted }}>
              <ExternalLink className="size-4" />
              Discord
            </Button>
          </div>
        </div>

        {/* Linked list practice tracker */}
        <div className="rounded-lg p-6" style={{ backgroundColor: DSA.card, border: `1px solid ${DSA.border}` }}>
          <div className="mb-1 text-[9px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
            stack&lt;Topic&gt; progress
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-full px-2 py-0.5 text-xs font-bold" style={{ backgroundColor: `${DSA.visited}20`, color: DSA.visited }}>Free</span>
              <span className="text-sm font-bold" style={{ color: DSA.fg }}>NeetCode 150</span>
            </div>
            <ChevronRight className="size-4" style={{ color: DSA.muted }} />
          </div>
          <div className="mb-4">
            <div className="mb-1 flex justify-between text-xs" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
              <span>solved: 67 / 150</span>
              <span>0.45</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full" style={{ backgroundColor: `${DSA.unvisited}40` }}>
              <div className="h-full rounded-full" style={{ width: "45%", backgroundColor: DSA.visited }} />
            </div>
          </div>
          {/* Topics as graph nodes in a vertical linked list */}
          <div className="relative space-y-0">
            {PRACTICE_TOPICS.map((topic, i) => (
              <div key={topic} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex size-8 items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: `${DSA.visited}15`, border: `2px solid ${DSA.visited}`, color: DSA.visited }}>
                    ✓
                  </div>
                  {i < PRACTICE_TOPICS.length - 1 && (
                    <div className="h-4 w-0.5" style={{ backgroundColor: DSA.visited, opacity: 0.3 }} />
                  )}
                </div>
                <div className="flex flex-1 items-center justify-between py-1.5">
                  <span className="text-sm" style={{ color: DSA.fg }}>{topic}</span>
                  <span className="text-[9px]" style={{ color: DSA.visited, fontFamily: "JetBrains Mono, monospace", opacity: 0.5 }}>pop()</span>
                </div>
              </div>
            ))}
            {/* Unvisited node */}
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full text-xs" style={{ backgroundColor: `${DSA.unvisited}15`, border: `2px solid ${DSA.unvisited}`, color: DSA.muted }}>
                ?
              </div>
              <span className="text-sm" style={{ color: DSA.muted }}>
                +14 more topics
                <span className="ml-2 text-[9px]" style={{ fontFamily: "JetBrains Mono, monospace", opacity: 0.5 }}>// stack.size()</span>
              </span>
            </div>
          </div>
        </div>
      </CodeSectionBlock>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: DSA.bg }}>
      <CodeSectionBlock
        className="mx-auto max-w-3xl"
        duration={26}
        label="class Founder implements Engineer {"
        labelClassName="mb-1 text-[10px]"
        labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
      >
        {/* Timeline as linked list */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="relative shrink-0">
            <div className="rounded-full p-1" style={{ border: `2px solid ${DSA.current}` }}>
              <img src="/images/brand/navi.png" alt="Navi" className="size-28 rounded-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ backgroundColor: DSA.current, color: DSA.bg }}>
              HEAD
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              <CyberGlitchText text="Hi, I'm Navi" scrambleOnMount={false} className="text-[#E6EDF3]" />
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: DSA.muted }}>
              <p><span className="text-[9px]" style={{ color: DSA.current, fontFamily: "JetBrains Mono, monospace", opacity: 0.5 }}>// 2020 </span>I created NeetCode in 2020 when I was unemployed and couldn't find a job.</p>
              <p>While I was struggling myself, it was still rewarding for me to make videos. I received so many messages from others who got jobs after studying with my videos.</p>
              <p><span className="text-[9px]" style={{ color: DSA.visited, fontFamily: "JetBrains Mono, monospace", opacity: 0.5 }}>// 2021 </span>About a year later I managed to get a job at Google.</p>
            </div>
            {/* Linked list timeline */}
            <div className="mt-6 flex items-center gap-1">
              <span className="text-xs" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>path:</span>
              {FOUNDER_COMPANIES.map((c, i) => (
                <div key={c.name} className="flex items-center">
                  {i > 0 && (
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="mx-0.5">
                      <path d="M2 6H14M11 2L16 6L11 10" stroke={DSA.visited} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                    </svg>
                  )}
                  <div className="flex items-center gap-1 rounded-full px-2.5 py-1" style={{ border: `1px solid ${DSA.border}`, backgroundColor: DSA.card }}>
                    <img src={c.logo} alt={c.name} className="size-3.5 object-contain" />
                    <span className="text-xs" style={{ color: DSA.fg }}>{c.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CodeSectionBlock>
    </section>
  )
}

function Footer() {
  const footerSections = [
    { title: "Links", items: ["Blind 75", "NeetCode 150", "NeetCode 250"] },
    { title: "Social", items: ["YouTube", "LinkedIn", "Twitter"] },
    { title: "Contact", items: ["support@neetcode.io"] },
    { title: "Legal", items: ["Privacy Policy", "Terms of Service"] },
  ]

  return (
    <footer className="px-6 py-10" style={{ backgroundColor: DSA.bg, borderTop: `1px solid ${DSA.border}` }}>
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
        {footerSections.map((section, si) => (
          <div key={section.title}>
            <div className="mb-1 text-[9px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace", opacity: 0.5 }}>
              map[{si}]
            </div>
            <h3 className="mb-3 text-sm font-semibold" style={{ color: DSA.fg }}>{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.items.map((item) => (
                <li key={item}><a href="#" className="transition-colors" style={{ color: DSA.muted }}>{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-8 max-w-5xl text-center" style={{ borderTop: `1px solid ${DSA.border}`, paddingTop: "1.5rem" }}>
        <div className="mb-2 flex items-center justify-center gap-1">
          {["○", "○", "○", "●", "●", "●"].map((dot, i) => (
            <span key={i} className="text-xs" style={{ color: i < 3 ? DSA.unvisited : DSA.visited, opacity: 0.5 }}>
              {dot}
            </span>
          ))}
          <span className="ml-1 text-[10px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>// traversal complete</span>
        </div>
        <p className="text-xs" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
          <span style={{ opacity: 0.4 }}>return </span>Copyright &copy; 2026 neetcode.io All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function DSAVisualLanding() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: DSA.bg, color: DSA.fg, fontFamily: "Inter, sans-serif" }}>
      <DotGrid />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          {/* <TopicNetwork /> */}
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
