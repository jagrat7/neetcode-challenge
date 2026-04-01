import { Button } from "@my-better-t-app/ui/components/button"
import { CyberGlitchText } from "@my-better-t-app/ui/components/ui/cyber-glitch-text"
import { Rocket } from "lucide-react"

import { CodeSectionBlock } from "./code-section-block"
import { DSA } from "./dsa-theme"
import { HeroCodeIntro } from "./hero-code-intro"

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

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-24 md:pt-36" style={{ backgroundColor: DSA.bg, minHeight: "600px" }}>
      <HeroGraph />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-2 -z-10 h-[30rem] w-[min(100%,54rem)] -translate-x-1/2 rounded-full blur-[88px]"
          style={{
            background: `radial-gradient(circle at 50% 38%, ${DSA.current}26 0%, ${DSA.visited}1c 32%, transparent 72%)`,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[min(100%,50rem)] -translate-x-1/2 rounded-full blur-[64px]"
          style={{
            background: `radial-gradient(ellipse 60% 55% at 50% 40%, ${DSA.bg} 0%, ${DSA.bg}e6 20%, ${DSA.bg}99 52%, transparent 100%)`,
          }}
        />
        {/* <div className="mb-4 flex items-center justify-center gap-3">
          <span className="size-3 rounded-full" style={{ backgroundColor: DSA.visited }} />
          <span className="text-xs" style={{ color: DSA.visited, fontFamily: "JetBrains Mono, monospace" }}>visited</span>
          <span className="size-3 rounded-full" style={{ backgroundColor: DSA.queued }} />
          <span className="text-xs" style={{ color: DSA.queued, fontFamily: "JetBrains Mono, monospace" }}>queued</span>
          <span className="size-3 rounded-full" style={{ backgroundColor: DSA.current }} />
          <span className="text-xs" style={{ color: DSA.current, fontFamily: "JetBrains Mono, monospace" }}>current</span>
        </div> */}

        <HeroCodeIntro currentColor={DSA.current} fgColor={DSA.fg} keywordColor={DSA.visited} mutedColor={DSA.muted}>
          <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            NeetCode
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

          {/* Stats */}
          <div className="mx-auto mt-16 flex max-w-md items-center justify-center gap-10">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: DSA.visited, fontFamily: "JetBrains Mono, monospace" }}>1M+</div>
              <div className="mt-1 text-xs" style={{ color: DSA.muted }}>engineers</div>
            </div>
            <div className="h-8 w-px" style={{ backgroundColor: DSA.border }} />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: DSA.queued, fontFamily: "JetBrains Mono, monospace" }}>1K+</div>
              <div className="mt-1 text-xs" style={{ color: DSA.muted }}>problems</div>
            </div>
            <div className="h-8 w-px" style={{ backgroundColor: DSA.border }} />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: DSA.current, fontFamily: "JetBrains Mono, monospace" }}>500+</div>
              <div className="mt-1 text-xs" style={{ color: DSA.muted }}>videos</div>
            </div>
          </div>
        </HeroCodeIntro>
      </div>
    </section>
  )
}
