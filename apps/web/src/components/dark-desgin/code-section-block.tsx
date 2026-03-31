import { type CSSProperties, type ReactNode } from "react"

import { SectionCodeReveal } from "./typed-reveal"

interface CodeSectionBlockProps {
  children: ReactNode
  className?: string
  duration?: number
  label: string
  labelClassName?: string
  labelStyle?: CSSProperties
  offsetY?: number
  startOnView?: boolean
}

export function CodeSectionBlock({
  children,
  className,
  duration = 20,
  label,
  labelClassName,
  labelStyle,
  offsetY = 12,
  startOnView = true,
}: CodeSectionBlockProps) {
  return (
    <SectionCodeReveal
      className={className}
      duration={duration}
      offsetY={offsetY}
      startOnView={startOnView}
      text={label}
      textClassName={labelClassName}
      textStyle={labelStyle}
    >
      {children}
    </SectionCodeReveal>
  )
}
