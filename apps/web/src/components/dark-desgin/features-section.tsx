'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DSA } from "./dsa-theme"
import { CyberGlitchText } from "@my-better-t-app/ui/components/ui/cyber-glitch-text"
import { CodeSectionBlock } from "./code-section-block"

type FeatureItem = {
  id: number;
  url: string;
  title: string;
  description: string;
  color: string;
  isVideo?: boolean;
  videoUrl?: string;
};

const FEATURES: FeatureItem[] = [
  {
    id: 1,
    url: '/images/features/interactive-soltions.png',
    title: 'Interactive Walkthroughs',
    description:
      'Step through algorithms visually. Watch pointers move, hash maps fill, and solutions emerge.',
    color: DSA.visited,
  },
  {
    id: 2,
    url: '/images/features/functional-editor.png',
    title: 'Functional Code Editor',
    description:
      'Write, run, and debug code in a full-featured editor with syntax highlighting and test cases.',
    color: DSA.queued,
  },
  {
    id: 3,
    url: '/images/features/neetbot.png',
    title: 'NeetBot AI',
    description:
      "Your personal AI coding tutor. Get hints, not answers — learn to think through problems the right way.",
    color: DSA.current,
  },
  {
    id: 4,
    url: '/images/features/neetbot.png',
    title: 'Video Solutions',
    description:
      "1000+ video explanations covering every major topic, from arrays to advanced graph algorithms.",
    color: DSA.red,
    isVideo: true,
    videoUrl: 'https://www.youtube.com/embed/lXVy6YWFcRM',
  },
] as const;

const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

function Gallery({ items }: { items: FeatureItem[] }) {
  const [index, setIndex] = useState<number | undefined>(0);

  return (
    <div className='w-full flex justify-start gap-2 pb-20'>
      {items.map((item, i) => {
        const isActive = index === i;
        return (
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`rounded-xl relative overflow-hidden transition-[width] ease-in-out duration-500 origin-center`}
            style={{
              width: isActive ? 600 : 80,
              height: 400,
              flexShrink: 0,
              backgroundColor: DSA.card,
              border: `1px solid ${DSA.border}`,
            }}
            key={item.id}
            onClick={() => setIndex(i)}
            onMouseEnter={() => setIndex(i)}
          >
            {item.isVideo ? (
              <iframe
                src={item.videoUrl}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={`w-full h-full object-cover ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
              />
            ) : (
              <motion.img
                src={item.url}
                alt={item.title}
                className={`w-full h-full object-cover ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
              />
            )}
            <AnimatePresence mode='wait'>
              {isActive && (
                <motion.article
                  variants={article}
                  initial='hidden'
                  animate='show'
                  exit={{ opacity: 0, y: 10 }}
                  className='absolute flex rounded-xl flex-col justify-end h-full top-0 p-4 space-y-2 overflow-hidden'
                  style={{
                    background: `linear-gradient(to top, ${DSA.bg}ee 0%, ${DSA.bg}99 20%, transparent 80%)`,
                  }}
                >
                  <motion.div
                    variants={article}
                    className="flex items-center gap-2 mb-1"
                  >
                    <span
                      className="flex size-5 shrink-0 items-center justify-center rounded text-[9px] font-bold"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {String(item.id).padStart(2, '0')}
                    </span>
                    <motion.h1
                      variants={article}
                      className='text-lg font-semibold'
                      style={{ color: item.color, fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {item.title}
                    </motion.h1>
                  </motion.div>
                  <motion.p
                    variants={article}
                    className='text-xs leading-relaxed'
                    style={{ color: DSA.muted }}
                  >
                    {item.description}
                  </motion.p>
                </motion.article>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: DSA.bg }}>
      <CodeSectionBlock
        className="mx-auto max-w-5xl"
        duration={18}
        label="const features = useFeatures()"
        labelClassName="mb-1 text-[11px]"
        labelStyle={{ color: DSA.muted, fontFamily: "JetBrains Mono, monospace" }}
      >
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <CyberGlitchText text="Features" scrambleOnMount={false} className="text-[#E6EDF3]" />
          </h2>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: DSA.muted }}>
            Three tools that replace scattered resources, provide structure, and give instant feedback.
          </p>
        </div>

        <Gallery items={FEATURES} />
      </CodeSectionBlock>
    </section>
  );
}
