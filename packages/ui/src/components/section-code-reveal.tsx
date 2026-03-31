import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react"
import { motion, useInView } from "motion/react"

import { cn } from "@my-better-t-app/ui/lib/utils"

import { TypingAnimation } from "./typing-animation"

interface TimedRevealProps {
  children: ReactNode
  className?: string
  delayMs: number
  offsetY?: number
  startOnView?: boolean
}

interface SectionCodeRevealProps {
  children: ReactNode
  className?: string
  duration?: number
  offsetY?: number
  startOnView?: boolean
  text: string
  textClassName?: string
  textStyle?: CSSProperties
}

interface CodeTypingLineProps {
  className?: string
  duration?: number
  showCursor?: boolean
  startOnView?: boolean
  style?: CSSProperties
  text: string
  wrapper?: "div" | "span"
}

export function getTypingDurationMs(text: string, duration = 20) {
  return Math.max(text.length, 1) * duration
}

export function TimedReveal({
  children,
  className,
  delayMs,
  offsetY = 12,
  startOnView = true,
}: TimedRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(containerRef, {
    amount: 0.3,
    once: true,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if ((startOnView && !isInView) || isVisible) {
      return
    }

    const timeout = window.setTimeout(() => {
      setIsVisible(true)
    }, delayMs)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [delayMs, isInView, isVisible, startOnView])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: offsetY }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: offsetY }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function CodeTypingLine({
  className,
  duration = 20,
  showCursor = false,
  startOnView = true,
  style,
  text,
  wrapper = "div",
}: CodeTypingLineProps) {
  const Wrapper = wrapper

  return (
    <Wrapper className={className} style={style}>
      <TypingAnimation
        className="leading-none tracking-normal"
        duration={duration}
        showCursor={showCursor}
        startOnView={startOnView}
      >
        {text}
      </TypingAnimation>
    </Wrapper>
  )
}

export function SectionCodeReveal({
  children,
  className,
  duration = 20,
  offsetY,
  startOnView,
  text,
  textClassName,
  textStyle,
}: SectionCodeRevealProps) {
  const delayMs = useMemo(() => getTypingDurationMs(text, duration), [duration, text])

  return (
    <>
      <CodeTypingLine
        className={textClassName}
        duration={duration}
        startOnView={startOnView}
        style={textStyle}
        text={text}
      />
      <TimedReveal className={className} delayMs={delayMs} offsetY={offsetY} startOnView={startOnView}>
        {children}
      </TimedReveal>
    </>
  )
}
