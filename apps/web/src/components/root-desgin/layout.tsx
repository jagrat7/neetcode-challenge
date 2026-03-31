export function Squiggle({ color = "#DC2626", className = "" }: { color?: string, className?: string }) {
  return (
    <svg viewBox="0 0 120 8" className={className} fill="none" preserveAspectRatio="none">
      <path d="M2 5C12 2 22 8 32 4S52 1 62 5S82 2 92 6S112 3 118 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function MarkerArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 16" className={className} fill="none">
      <path d="M2 8L30 8M24 3L32 8L24 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}


export function GridBackground() {
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
