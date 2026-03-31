import { Squiggle } from "./layout"

export function Footer() {
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
