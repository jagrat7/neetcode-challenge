"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { cn } from '@my-better-t-app/ui/lib/utils';
import { ChevronLeft, ChevronRight, RefreshCcw, X, BookOpen } from 'lucide-react';

export interface BookPage {
    title?: string;
    content: React.ReactNode;
    backContent?: React.ReactNode;
    pageNumber: number;
}

export interface InteractiveBookProps {
    coverImage?: string;
    bookTitle?: string;
    bookAuthor?: string;
    pages: BookPage[];
    className?: string;
    width?: number | string;
    height?: number | string;
}

export default function InteractiveBook({
    coverImage: _coverImage,
    bookTitle: _bookTitle,
    bookAuthor: _bookAuthor,
    pages,
    className,
    width = 350,
    height = 500,
}: InteractiveBookProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    // Open book when 20% in view (scrollYProgress >= 0.2)
    const scrollOpen = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, 1]);
    
    const [isOpen, setIsOpen] = useState(false);
    const [isAutoFlipping, setIsAutoFlipping] = useState(false);
    const [currentPageIndex, setCurrentPageIndex] = useState(-1);
    const [isHovering, setIsHovering] = useState(false);

    // Sync scroll-based open state
    useEffect(() => {
        const unsubscribe = scrollOpen.on("change", (latest) => {
            if (latest >= 0.5 && !isOpen) {
                setIsOpen(true);
                setIsAutoFlipping(true);
            }
        });
        return () => unsubscribe();
    }, [scrollOpen, isOpen]);

    useEffect(() => {
        if (!isOpen || !isAutoFlipping) return
        if (currentPageIndex >= pages.length - 1) {
            setIsAutoFlipping(false)
            return
        }

        const timeout = window.setTimeout(() => {
            nextPage()
        }, 2500)

        return () => window.clearTimeout(timeout)
    }, [isOpen, isAutoFlipping, currentPageIndex, pages.length])

    // Calculate dynamic width/height values for animations
    const widthNum = typeof width === 'number' ? width : 350;

    // Sync container shift with cover open
    const BOOK_OPEN_DURATION = 1.5;
    const EASING: [number, number, number, number] = [0.25, 0, 0, 1]; // milder smoothing

    const handleOpenBook = () => {
        setIsOpen(true)
        setIsAutoFlipping(true)
    }

    const handleCloseBook = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setIsAutoFlipping(false)
        setIsOpen(false);
        setCurrentPageIndex(-1);
    };

    const nextPage = (e?: React.MouseEvent, userInitiated = false) => {
        e?.stopPropagation();
        if (userInitiated) {
            setIsAutoFlipping(false)
        }
        if (currentPageIndex < pages.length - 1) {
            setCurrentPageIndex((prev) => prev + 1);
        }
    };

    const prevPage = (e?: React.MouseEvent, userInitiated = false) => {
        e?.stopPropagation();
        if (userInitiated) {
            setIsAutoFlipping(false)
        }
        if (currentPageIndex >= 0) {
            setCurrentPageIndex((prev) => prev - 1);
        }
    };

    const restartBook = (e?: React.MouseEvent, userInitiated = false) => {
        e?.stopPropagation();
        if (userInitiated) {
            setIsAutoFlipping(false)
        }
        setCurrentPageIndex(-1);
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPageIndex(parseInt(e.target.value, 10));
    };

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextPage();
            if (e.key === 'ArrowLeft') prevPage();
            if (e.key === 'Escape') handleCloseBook();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentPageIndex]);

    return (
        <div
            ref={containerRef}
            className={cn("relative flex items-center justify-center perspective-[2000px]", className)}
            style={{
                width: typeof width === 'number' ? width * 3.5 : '100%',
                height: typeof height === 'number' ? height + 100 : 'auto'
            }}
        >
            <motion.div
                className={cn(
                    "relative preserve-3d"
                )}
                style={{ width, height }}
                initial={{ x: 0 }}
                animate={{ x: isOpen ? widthNum / 2 : 0 }}
                transition={{ duration: BOOK_OPEN_DURATION, ease: EASING }}
            >

                {/* Front Cover */}
                <motion.div
                    className="absolute inset-0 w-full h-full origin-left"
                    initial={{ rotateY: 0, zIndex: 100 }}
                    animate={{
                        rotateY: isOpen ? -180 : (isHovering ? -15 : 0),
                        zIndex: isOpen ? 0 : 100
                    }}
                    transition={{
                        rotateY: { duration: BOOK_OPEN_DURATION, ease: EASING },
                        zIndex: { delay: isOpen ? BOOK_OPEN_DURATION * 0.6 : BOOK_OPEN_DURATION * 0.4 }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                    onClick={!isOpen ? handleOpenBook : undefined}
                    onHoverStart={() => !isOpen && setIsHovering(true)}
                    onHoverEnd={() => setIsHovering(false)}
                >
                    {/* Front Face - Raw notebook cover */}
                    <div
                        className="absolute inset-0 w-full h-full backface-hidden rounded-r-md rounded-l-sm shadow-2xl cursor-pointer overflow-hidden"
                        style={{
                            transform: 'translateZ(0.5px)',
                            background: 'linear-gradient(145deg, #1E293B 0%, #0F172A 100%)',
                        }}
                    >
                        {/* Subtle texture */}
                        <div className="absolute inset-0 opacity-[0.04]" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                            backgroundSize: '16px 16px',
                        }} />

                        {/* Spine Highlight */}
                        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white/10 to-transparent" />
                        <div className="absolute left-[12px] top-0 bottom-0 w-[1px] bg-white/10" />

                        {/* Edge wear */}
                        <div className="absolute inset-0 rounded-r-md rounded-l-sm border border-white/5" />
                    </div>

                    {/* Back Face (Inner Cover) */}
                    <div
                        className="absolute inset-0 w-full h-full backface-hidden rounded-l-md rounded-r-sm bg-[#1E293B] rotate-y-180 flex flex-col border-r border-neutral-700 shadow-xl cursor-pointer"
                        style={{ transform: 'rotateY(180deg) translateZ(0.5px)' }}
                        onClick={(e) => {
                            e.stopPropagation();
                            prevPage(e, true);
                        }}
                    >
                        {/* Plain dark inner cover */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                            backgroundSize: '16px 16px',
                        }} />
                    </div>
                </motion.div>

                {/* Pages Stack */}
                <div className="absolute inset-0 w-full h-full z-0" style={{ transformStyle: 'preserve-3d' }}>
                    {pages.map((page, index) => {
                        const isFlipped = index <= currentPageIndex;
                        // Stagger delays slightly for a realistic "whip" effect if user clicks fast, 
                        // but mostly we want instant feedback with smooth transition.

                        return (
                            <motion.div
                                key={index}
                                className="absolute inset-0 w-full h-full origin-left bg-[#ffffff] rounded-r-md rounded-l-sm shadow-sm border border-neutral-100"
                                style={{ transformStyle: 'preserve-3d' }}
                                initial={{ rotateY: 0, zIndex: pages.length - index }}
                                animate={{
                                    rotateY: isFlipped ? -180 : 0,
                                    zIndex: isFlipped ? index + 1 : pages.length - index
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.645, 0.045, 0.355, 1]
                                }}
                            >
                                {/* Front Face (Right Side) */}
                                <div
                                    className="absolute inset-0 w-full h-full backface-hidden p-8 flex flex-col bg-white cursor-pointer hover:bg-[#FAFAFA] transition-colors"
                                    style={{
                                        transform: 'translateZ(0.5px)',
                                        backgroundImage: `
                                            linear-gradient(90deg, transparent 40px, rgba(239, 68, 68, 0.3) 40px, rgba(239, 68, 68, 0.3) 41px, transparent 41px),
                                            linear-gradient(#E2E8F0 1px, transparent 1px)
                                        `,
                                        backgroundSize: '100% 100%, 100% 24px',
                                        backgroundPosition: '0 0, 0 12px',
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextPage(e, true);
                                    }}
                                >
                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="text-neutral-700 leading-relaxed select-none pl-10">
                                            {page.title && (
                                                <h3 className="text-lg font-medium mb-4 text-neutral-800 tracking-tight" style={{ fontFamily: 'Caveat, cursive' }}>
                                                    {page.title}
                                                </h3>
                                            )}
                                            {page.content}
                                        </div>
                                    </div>
                                    <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/5 to-transparent pointer-events-none mix-blend-multiply" />
                                </div>

                                {/* Back Face (Left Side) */}
                                <div
                                    className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white border-r border-neutral-200 overflow-hidden p-8 flex flex-col cursor-pointer hover:bg-[#FAFAFA] transition-colors"
                                    style={{
                                        transform: 'rotateY(180deg) translateZ(0.5px)',
                                        backgroundImage: `
                                            linear-gradient(90deg, transparent 40px, rgba(239, 68, 68, 0.3) 40px, rgba(239, 68, 68, 0.3) 41px, transparent 41px),
                                            linear-gradient(#E2E8F0 1px, transparent 1px)
                                        `,
                                        backgroundSize: '100% 100%, 100% 24px',
                                        backgroundPosition: '0 0, 0 12px',
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevPage(e, true);
                                    }}
                                >
                                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/5 to-transparent pointer-events-none mix-blend-multiply" />

                                    <div className="flex-1 flex flex-col justify-center overflow-hidden">
                                        <div className="text-neutral-700 leading-relaxed select-none h-full flex flex-col pl-10">
                                            {page.backContent ? (
                                                <div className="flex-1 flex flex-col justify-center">
                                                    {page.backContent}
                                                </div>
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center opacity-[0.03]">
                                                    <span className="text-8xl italic font-bold text-black" style={{ fontFamily: 'Caveat, cursive' }}>
                                                        {page.pageNumber * 2}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Back Cover (Static) */}
                    <div
                        className="absolute inset-0 w-full h-full bg-[#1E293B] rounded-r-md rounded-l-sm shadow-xl"
                        style={{ transform: 'translateZ(-1px)', zIndex: -1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
                        <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
                            {/* <button
                                onClick={restartBook}
                                className="mt-2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm text-white/80 cursor-pointer border border-white/20"
                            >
                                <RefreshCcw size={14} /> Read Again
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* Controls Bar Removed */}

            </motion.div>

            {/* Navigation Controls - Below the book */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -bottom-12 left-0 right-0 flex justify-center items-center gap-6 z-[1000]"
                    >
                        {/* Left Button: Close at start, Prev otherwise */}
                        {currentPageIndex < 0 ? (
                            <button
                                onClick={handleCloseBook}
                                className="p-3 rounded-full bg-white/90 hover:bg-white border border-neutral-200 text-neutral-700 transition-all hover:scale-110 shadow-md"
                            >
                                <X size={24} />
                            </button>
                        ) : (
                            <button
                                onClick={(e) => prevPage(e, true)}
                                className="p-3 rounded-full bg-white/90 hover:bg-white border border-neutral-200 text-neutral-700 transition-all hover:scale-110 shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
                                disabled={currentPageIndex < 0}
                            >
                                <ChevronLeft size={24} />
                            </button>
                        )}

                        {/* Right Button: Restart at end, Next otherwise */}
                        {currentPageIndex >= pages.length - 1 ? (
                            <button
                                onClick={(e) => restartBook(e, true)}
                                className="p-3 rounded-full bg-white/90 hover:bg-white border border-neutral-200 text-neutral-700 transition-all hover:scale-110 shadow-md"
                            >
                                <RefreshCcw size={24} />
                            </button>
                        ) : (
                            <button
                                onClick={(e) => nextPage(e, true)}
                                className="p-3 rounded-full bg-white/90 hover:bg-white border border-neutral-200 text-neutral-700 transition-all hover:scale-110 shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
                                disabled={currentPageIndex >= pages.length - 1}
                            >
                                <ChevronRight size={24} />
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Close Button */}
            <AnimatePresence>
                {isOpen && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={handleCloseBook}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white border border-neutral-200 backdrop-blur-sm text-neutral-700 z-[1000] transition-all hover:scale-110 shadow-sm"
                    >
                        <X size={20} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Hint */}
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-4 text-neutral-500 dark:text-neutral-400 text-sm font-medium tracking-widest uppercase cursor-pointer z-50 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                    onClick={handleOpenBook}
                >
                    Click to Open
                </motion.div>
            )}
        </div>
    );
}
