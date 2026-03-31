import { type CSSProperties, type ReactNode } from "react"

import { CodeTypingLine, TimedReveal, getTypingDurationMs } from "./typed-reveal"

interface HeroCodeIntroProps {
  children: ReactNode
  currentColor: string
  fgColor: string
  keywordColor: string
  mutedColor: string
}

const heroCodeStyle: CSSProperties = {
  fontFamily: "JetBrains Mono, monospace",
}

export function HeroCodeIntro({
  children,
  currentColor,
  fgColor,
  keywordColor,
  mutedColor,
}: HeroCodeIntroProps) {
  const typedText = 'NeetCode({ mode: "interview" })'
  const delayMs = getTypingDurationMs(typedText, 24)

  return (
    <>
      <div className="mb-2 flex items-center justify-center gap-1 text-[11px]" style={{ ...heroCodeStyle, color: mutedColor }}>
        <span style={{ color: keywordColor }}>const</span>
        <span style={{ color: fgColor }}>platform</span>
        <span>=</span>
        <span style={{ color: keywordColor }}>new</span>
        <CodeTypingLine
          className="text-left"
          duration={24}
          startOnView
          style={{ color: currentColor }}
          text={typedText}
          wrapper="span"
        />
      </div>
      <TimedReveal delayMs={delayMs} offsetY={16} startOnView>
        {children}
      </TimedReveal>
    </>
  )
}
