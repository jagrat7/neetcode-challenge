import React, { useState, useRef, useEffect, useCallback } from "react"

import { cn } from "@my-better-t-app/ui/lib/utils"

/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param width - The width of each square.
 * @param height - The height of each square.
 * @param squares - The number of squares in the grid. The first element is the number of horizontal squares, and the second element is the number of vertical squares.
 * @param className - The class name of the grid.
 * @param squaresClassName - The class name of the squares.
 */
interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  squares?: [number, number] // [horizontal, vertical]
  className?: string
  squaresClassName?: string
}

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares,
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const containerRef = useRef<SVGSVGElement>(null)
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null)
  const [gridSize, setGridSize] = useState<[number, number]>(squares ?? [24, 24])

  const computeGrid = useCallback(() => {
    const el = containerRef.current?.parentElement
    if (!el) return
    const rect = el.getBoundingClientRect()
    const h = Math.max(Math.ceil(rect.width / width), squares?.[0] ?? 24)
    const v = Math.max(Math.ceil(rect.height / height), squares?.[1] ?? 24)
    setGridSize([h, v])
  }, [width, height, squares])

  useEffect(() => {
    computeGrid()
    const obs = new ResizeObserver(computeGrid)
    const el = containerRef.current?.parentElement
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [computeGrid])

  const [horizontal, vertical] = gridSize

  return (
    <svg
      ref={containerRef}
      viewBox={`0 0 ${width * horizontal} ${height * vertical}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn(
        "absolute inset-0 h-full w-full border border-gray-400/30",
        className
      )}
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width
        const y = Math.floor(index / horizontal) * height
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-gray-400/30 transition-all duration-100 ease-in-out not-[&:hover]:duration-1000",
              hoveredSquare === index ? "fill-gray-300/30" : "fill-transparent",
              squaresClassName
            )}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        )
      })}
    </svg>
  )
}
