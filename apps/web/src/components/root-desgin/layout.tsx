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

export function WhiteboardFrame({ className = "" }: { className?: string }) {
  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 rounded-[4px] ${className}`}
        style={{
          border: "4px solid #B8BCC2",
          borderTopColor: "#CBCFD5",
          borderLeftColor: "#C2C6CC",
          borderRightColor: "#AAAEB4",
          borderBottomColor: "#A2A6AC",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.35), inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 8px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.03)",
        }}
      />
      {/* Eraser tray */}
      <div className="pointer-events-none absolute -bottom-[10px] left-1/2 z-10 flex -translate-x-1/2 items-end">
        <div
          className="h-[10px] w-16 rounded-b-[3px]"
          style={{
            background: "linear-gradient(to bottom, #B0B4BA, #9CA0A6)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        />
        <div
          className="absolute -top-[2px] left-1/2 h-[6px] w-10 -translate-x-1/2 rounded-[1px]"
          style={{
            background: "linear-gradient(to bottom, #F5F5F0, #E8E8E0)",
            boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
          }}
        />
      </div>
    </>
  )
}
