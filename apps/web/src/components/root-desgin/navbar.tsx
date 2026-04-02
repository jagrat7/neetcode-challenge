
import { Button } from "@my-better-t-app/ui/components/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-dashed border-[#CBD5E1] bg-[#FAFAFA]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <img src="/images/brand/neetcode-logo.png" alt="NeetCode" className="size-8" />
          <span className="text-xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>NeetCode</span>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          {["Courses", "Practice", "Roadmap"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-[#64748B] transition-colors hover:text-[#1E293B]">{link}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-[#1E293B]">Sign in</Button>
          <Button size="sm" className="border-2 border-[#2563EB] bg-[#2563EB] text-white hover:bg-[#1D4ED8]">Get Pro</Button>
        </div>
      </div>
    </nav>
  )
}
