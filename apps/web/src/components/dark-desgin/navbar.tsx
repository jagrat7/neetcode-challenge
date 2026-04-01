import { Button } from "@my-better-t-app/ui/components/button"
import { CyberGlitchText } from "@my-better-t-app/ui/components/ui/cyber-glitch-text"

import { DSA } from "./dsa-theme"

export function Navbar() {
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