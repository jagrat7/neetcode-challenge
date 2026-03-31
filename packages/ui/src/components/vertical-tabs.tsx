"use client";

import { useState, useEffect, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@my-better-t-app/ui/lib/utils";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export interface VerticalTab {
  id: string
  title: string
  description: string
  content: ReactNode
  color?: string
}

interface VerticalTabsProps {
  tabs: VerticalTab[]
  heading?: string
  subheading?: string
  autoPlayDuration?: number
  className?: string
}

export default function VerticalTabs({
  tabs,
  heading = "How I can help you",
  subheading = "(SERVICES)",
  autoPlayDuration = 5000,
  className,
}: VerticalTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % tabs.length);
  }, [tabs.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + tabs.length) % tabs.length);
  }, [tabs.length]);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayDuration);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className={cn("w-full bg-background py-6 md:py-10 lg:py-14", className)}>
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4">
            <div className="space-y-1 mb-6">
              <h2 className="tracking-tighter text-balance text-3xl font-medium md:text-4xl lg:text-5xl text-foreground">
                {heading}
              </h2>
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.3em] block ml-0.5">
                {subheading}
              </span>
            </div>

            <div className="flex flex-col space-y-0">
              {tabs.map((tab, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 py-4 md:py-5 text-left transition-all duration-500 border-t border-border/50 first:border-0",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground/60 hover:text-foreground"
                    )}
                  >
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-muted">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full origin-top"
                          style={{ backgroundColor: tabs[index]?.color ?? "var(--foreground)" }}
                          initial={{ height: "0%" }}
                          animate={
                            isPaused ? { height: "0%" } : { height: "100%" }
                          }
                          transition={{
                            duration: autoPlayDuration / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <span className="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50">
                      /{tab.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span
                        className={cn(
                          "text-xl md:text-2xl lg:text-3xl font-normal tracking-tight transition-colors duration-500",
                          isActive ? "text-foreground" : ""
                        )}
                        style={isActive && tab.color ? { color: tab.color } : undefined}
                      >
                        {tab.title}
                      </span>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="text-muted-foreground text-sm md:text-base font-normal leading-relaxed max-w-sm pb-2">
                              {tab.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-muted/30 border border-border/40">
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="popLayout"
                >
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="w-full"
                  >
                    {tabs[activeIndex]?.content}
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePrev()
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-background transition-all active:scale-90"
                    aria-label="Previous"
                  >
                    <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNext()
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-background transition-all active:scale-90"
                    aria-label="Next"
                  >
                    <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
