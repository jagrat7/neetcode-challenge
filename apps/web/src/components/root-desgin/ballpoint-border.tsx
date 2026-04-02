import { type ReactNode } from "react"

interface BallpointBorderProps {
  className?: string
  children: ReactNode
  color?: string
}

export function BallpointBorder({ className = "", children, color = "#2563EB" }: BallpointBorderProps) {
  return (
    <div className={`relative rounded-lg ${className}`}>
      {/* Top border - slightly wavy with rounded corners */}
      <div
        className="absolute left-2 right-2 top-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            ${color} 2%, 
            ${color} 8%, 
            ${color}dd 12%, 
            ${color} 18%, 
            ${color} 25%, 
            ${color}aa 32%, 
            ${color} 38%, 
            ${color} 45%, 
            ${color}dd 52%, 
            ${color} 58%, 
            ${color} 65%, 
            ${color}aa 72%, 
            ${color} 78%, 
            ${color} 85%, 
            ${color}dd 92%, 
            ${color} 98%, 
            transparent 100%
          )`,
          transform: "rotate(-0.3deg)",
          opacity: 0.85
        }}
      />
      
      {/* Right border - slightly wavy with rounded corners */}
      <div
        className="absolute right-0 top-2 bottom-2 w-[2px]"
        style={{
          background: `linear-gradient(180deg, 
            transparent 0%, 
            ${color} 2%, 
            ${color} 8%, 
            ${color}dd 12%, 
            ${color} 18%, 
            ${color} 25%, 
            ${color}aa 32%, 
            ${color} 38%, 
            ${color} 45%, 
            ${color}dd 52%, 
            ${color} 58%, 
            ${color} 65%, 
            ${color}aa 72%, 
            ${color} 78%, 
            ${color} 85%, 
            ${color}dd 92%, 
            ${color} 98%, 
            transparent 100%
          )`,
          transform: "rotate(0.2deg)",
          opacity: 0.85
        }}
      />
      
      {/* Bottom border - slightly wavy with rounded corners */}
      <div
        className="absolute left-2 right-2 bottom-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            ${color} 2%, 
            ${color} 8%, 
            ${color}dd 12%, 
            ${color} 18%, 
            ${color} 25%, 
            ${color}aa 32%, 
            ${color} 38%, 
            ${color} 45%, 
            ${color}dd 52%, 
            ${color} 58%, 
            ${color} 65%, 
            ${color}aa 72%, 
            ${color} 78%, 
            ${color} 85%, 
            ${color}dd 92%, 
            ${color} 98%, 
            transparent 100%
          )`,
          transform: "rotate(0.4deg)",
          opacity: 0.85
        }}
      />
      
      {/* Left border - slightly wavy with rounded corners */}
      <div
        className="absolute left-0 top-2 bottom-2 w-[2px]"
        style={{
          background: `linear-gradient(180deg, 
            transparent 0%, 
            ${color} 2%, 
            ${color} 8%, 
            ${color}dd 12%, 
            ${color} 18%, 
            ${color} 25%, 
            ${color}aa 32%, 
            ${color} 38%, 
            ${color} 45%, 
            ${color}dd 52%, 
            ${color} 58%, 
            ${color} 65%, 
            ${color}aa 72%, 
            ${color} 78%, 
            ${color} 85%, 
            ${color}dd 92%, 
            ${color} 98%, 
            transparent 100%
          )`,
          transform: "rotate(-0.1deg)",
          opacity: 0.85
        }}
      />
      
      {/* Corner dots - ballpoint pen style */}
      <div className="absolute left-2 top-0 size-1 rounded-full" style={{ backgroundColor: color, transform: "translate(-1px, -1px)" }} />
      <div className="absolute right-2 top-0 size-1 rounded-full" style={{ backgroundColor: color, transform: "translate(1px, -1px)" }} />
      <div className="absolute left-2 bottom-0 size-1 rounded-full" style={{ backgroundColor: color, transform: "translate(-1px, 1px)" }} />
      <div className="absolute right-2 bottom-0 size-1 rounded-full" style={{ backgroundColor: color, transform: "translate(1px, 1px)" }} />
      
      {children}
    </div>
  )
}
