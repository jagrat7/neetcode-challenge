import { type CSSProperties, type ReactNode } from "react"

import { cn } from "@my-better-t-app/ui/lib/utils"

import { SectionCodeReveal } from "./typed-reveal"

interface CodeSectionBlockProps {
  children: ReactNode
  className?: string
  contentClassName?: string
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
  contentClassName,
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
      contentClassName={cn("pt-3", contentClassName)}
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
