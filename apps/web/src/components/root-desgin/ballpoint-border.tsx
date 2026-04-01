import { type ReactNode } from "react"

interface BallpointBorderProps {
  className?: string
  children: ReactNode
}

export function BallpointBorder({ className = "", children }: BallpointBorderProps) {
  return (
    <div className={`relative rounded-lg ${className}`}>
      {/* Top border - slightly wavy with rounded corners */}
      <div
        className="absolute left-2 right-2 top-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            #2563EB 2%, 
            #2563EB 8%, 
            #3b82f6 12%, 
            #2563EB 18%, 
            #2563EB 25%, 
            #1e40af 32%, 
            #2563EB 38%, 
            #2563EB 45%, 
            #3b82f6 52%, 
            #2563EB 58%, 
            #2563EB 65%, 
            #1e40af 72%, 
            #2563EB 78%, 
            #2563EB 85%, 
            #3b82f6 92%, 
            #2563EB 98%, 
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
            #2563EB 2%, 
            #2563EB 8%, 
            #3b82f6 12%, 
            #2563EB 18%, 
            #2563EB 25%, 
            #1e40af 32%, 
            #2563EB 38%, 
            #2563EB 45%, 
            #3b82f6 52%, 
            #2563EB 58%, 
            #2563EB 65%, 
            #1e40af 72%, 
            #2563EB 78%, 
            #2563EB 85%, 
            #3b82f6 92%, 
            #2563EB 98%, 
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
            #2563EB 2%, 
            #2563EB 8%, 
            #3b82f6 12%, 
            #2563EB 18%, 
            #2563EB 25%, 
            #1e40af 32%, 
            #2563EB 38%, 
            #2563EB 45%, 
            #3b82f6 52%, 
            #2563EB 58%, 
            #2563EB 65%, 
            #1e40af 72%, 
            #2563EB 78%, 
            #2563EB 85%, 
            #3b82f6 92%, 
            #2563EB 98%, 
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
            #2563EB 2%, 
            #2563EB 8%, 
            #3b82f6 12%, 
            #2563EB 18%, 
            #2563EB 25%, 
            #1e40af 32%, 
            #2563EB 38%, 
            #2563EB 45%, 
            #3b82f6 52%, 
            #2563EB 58%, 
            #2563EB 65%, 
            #1e40af 72%, 
            #2563EB 78%, 
            #2563EB 85%, 
            #3b82f6 92%, 
            #2563EB 98%, 
            transparent 100%
          )`,
          transform: "rotate(-0.1deg)",
          opacity: 0.85
        }}
      />
      
      {/* Corner dots - ballpoint pen style */}
      <div className="absolute left-2 top-0 size-1 rounded-full bg-[#2563EB]" style={{ transform: "translate(-1px, -1px)" }} />
      <div className="absolute right-2 top-0 size-1 rounded-full bg-[#2563EB]" style={{ transform: "translate(1px, -1px)" }} />
      <div className="absolute left-2 bottom-0 size-1 rounded-full bg-[#2563EB]" style={{ transform: "translate(-1px, 1px)" }} />
      <div className="absolute right-2 bottom-0 size-1 rounded-full bg-[#2563EB]" style={{ transform: "translate(1px, 1px)" }} />
      
      {children}
    </div>
  )
}
