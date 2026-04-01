import { DSA } from "./dsa-theme"

export function Footer() {
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
          <span className="ml-1 text-[10px]" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
            // traversal complete
          </span>
        </div>
        <p className="text-xs" style={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}>
          <span style={{ opacity: 0.4 }}>return </span>Copyright &copy; 2026 neetcode.io All rights reserved.
        </p>
      </div>
    </footer>
  )
}
