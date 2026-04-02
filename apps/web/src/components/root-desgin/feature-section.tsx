import { type ReactNode } from "react"
import { InteractiveWalkthrough } from "./interactive-walkthrough"
import { VideoSolutionsPanel } from "./video-solutions-panel"
import { NeetBotChat } from "./neet-bot-chat"
import { CodeEditorPanel } from "./code-editor-panel"
import { Squiggle, WhiteboardFrame } from "./layout"

interface Feature {
  id: string
  title: string
  description: string
  color: string
  content: (color: string) => ReactNode
}

const FEATURES: Feature[] = [
  {
    id: "04",
    title: "Code Editor",
    description: "Write, test, and run your code right in the browser. Supports Python, Java, C++, JavaScript, and more.",
    color: "#CA8A04",
    content: (color) => <CodeEditorPanel color={color} />,
  },
  {
    id: "01",
    title: "Interactive Walkthroughs",
    description: "Step through algorithms visually. Watch pointers move, hash maps fill, and solutions emerge — all interactive.",
    color: "#2563EB",
    content: (color) => <InteractiveWalkthrough color={color} />,
  },
  {
    id: "02",
    title: "Video Solutions",
    description: "1000+ video explanations covering every major topic, from arrays to advanced graph algorithms.",
    color: "#DC2626",
    content: (color) => <VideoSolutionsPanel color={color} />,
  },
  {
    id: "03",
    title: "NeetBot AI",
    description: "Your personal AI coding tutor. Get hints, not answers — learn to think through problems the right way.",
    color: "#16A34A",
    content: (color) => <NeetBotChat color={color} />,
  },

]

export function FeatureTabs() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-14">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>
            More Than Just Problems
          </h2>
          <Squiggle color="#2563EB" className="mt-1 h-1.5 w-32" />
          <p className="mt-2 text-sm text-[#64748B]">
            Tools that replace scattered resources, provide structure, and give instant feedback.
          </p>
        </div>

        {/* Uniform 3-column grid */}
        <div className="grid gap-7 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group relative mb-2 flex h-[500px] flex-col bg-white p-6"
              style={{ boxShadow: "2px 3px 0 rgba(30,41,59,0.06)" }}
            >
              <WhiteboardFrame />


              {/* Text */}
              <h3 className="text-xl font-bold text-[#1E293B]" style={{ fontFamily: "Caveat, cursive" }}>
                {feature.title}
              </h3>
              <Squiggle color={feature.color} className="mb-1 h-1.5 w-16" />
              <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                {feature.description}
              </p>

              {/* Interactive demo */}
              <div className="mt-4 flex-1">
                {feature.content(feature.color)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
