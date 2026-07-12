import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Slide } from '../../data/types';
import { X, ChevronRight } from 'lucide-react';

interface StoryViewerProps {
  slides: Slide[];
  onComplete: () => void;
  onClose: () => void;
}

export const StoryViewer: React.FC<StoryViewerProps> = ({ slides, onComplete, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    const windowWidth = window.innerWidth;
    let clientX;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }

    if (clientX < windowWidth * 0.3) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  const currentSlide = slides[currentIndex];

  // Imprint uses very smooth, almost 3D-like stacking or sliding transitions.
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      scale: 0.95,
      opacity: 0.5,
      rotateY: direction > 0 ? 15 : -15, // Subtle 3D effect
    }),
    center: {
      zIndex: 1,
      x: 0,
      scale: 1,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      scale: 0.95,
      opacity: 0.5,
      rotateY: direction < 0 ? 15 : -15,
    })
  };

  // Stagger variants for content inside the slide
  const contentVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15
      }
    }
  };

  const childVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div
      className="absolute inset-0 select-none overflow-hidden"
      onClick={handleTap}
      style={{
        backgroundColor: currentSlide.bgColor || '#f8fafc',
        transition: 'background-color 0.6s ease-in-out'
      }}
    >
      {/* Dynamic Background Effects (Blob) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Progress Bars */}
      <div className="absolute top-6 left-0 right-0 z-50 flex gap-1.5 px-6">
        {slides.map((_, idx) => (
          <div key={idx} className="h-1.5 flex-1 bg-black/10 rounded-full overflow-hidden backdrop-blur-md">
            <motion.div
              className="h-full bg-black/60 rounded-full"
              initial={false}
              animate={{
                width: idx < currentIndex ? '100%' : idx === currentIndex ? '100%' : '0%'
              }}
              transition={{
                duration: idx === currentIndex ? 0.4 : 0,
                ease: "easeOut"
              }}
            />
          </div>
        ))}
      </div>

      {/* Close Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-12 right-6 z-50 p-2.5 bg-black/5 text-black/60 rounded-full hover:bg-black/10 backdrop-blur-md transition-all active:scale-90"
      >
        <X size={20} strokeWidth={2.5} />
      </button>

      {/* Slide Content */}
      <div className="relative w-full h-full perspective-[1000px]">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 250, damping: 30, mass: 0.8 },
              opacity: { duration: 0.3 },
              rotateY: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="absolute inset-0 flex flex-col items-center justify-center px-8 sm:px-12 py-20 text-center shadow-2xl origin-center"
            style={{
              color: currentSlide.textColor || '#1e293b',
              backgroundColor: currentSlide.bgColor || '#f8fafc',
            }}
          >
            <motion.div
              className="w-full max-w-[320px] flex flex-col items-center"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {currentSlide.type === 'title' && (
                <>
                  {currentSlide.icon && (
                    <motion.div variants={childVariants} className="text-[5rem] mb-10 leading-none filter drop-shadow-md">
                      {currentSlide.icon}
                    </motion.div>
                  )}
                  <motion.h1 variants={childVariants} className="text-4xl sm:text-5xl font-bold tracking-tight font-display mb-6 leading-tight">
                    {currentSlide.title}
                  </motion.h1>
                  <motion.p variants={childVariants} className="text-xl sm:text-2xl font-medium opacity-80 leading-relaxed">
                    {currentSlide.content}
                  </motion.p>
                </>
              )}

              {currentSlide.type === 'text' && (
                <div className="text-left w-full">
                  {currentSlide.title && (
                    <motion.h2 variants={childVariants} className="text-sm font-bold tracking-widest uppercase mb-6 opacity-60">
                      {currentSlide.title}
                    </motion.h2>
                  )}
                  <motion.p variants={childVariants} className="text-[1.75rem] leading-[1.4] font-serif font-medium">
                    {currentSlide.content}
                  </motion.p>
                </div>
              )}

              {currentSlide.type === 'quote' && (
                <div className="w-full relative">
                  <motion.div variants={childVariants} className="text-8xl opacity-20 absolute -top-12 -left-6 font-serif">"</motion.div>
                  <motion.p variants={childVariants} className="text-[2rem] font-serif italic leading-snug relative z-10 text-left">
                    {currentSlide.content}
                  </motion.p>
                </div>
              )}

              {currentSlide.type === 'exercise' && (
                <motion.div variants={childVariants} className="w-full bg-white/20 p-8 rounded-[2rem] backdrop-blur-xl border border-white/30 shadow-float text-left">
                  {currentSlide.title && (
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-8 w-1 bg-current rounded-full opacity-50"></div>
                      <h2 className="text-2xl font-bold font-display">{currentSlide.title}</h2>
                    </div>
                  )}
                  <p className="text-[1.35rem] leading-relaxed font-medium opacity-90">{currentSlide.content}</p>
                  <div className="mt-10 flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="flex items-center gap-2 bg-black/10 hover:bg-black/20 px-6 py-3 rounded-full text-lg font-semibold transition-colors backdrop-blur-sm"
                    >
                      Continue <ChevronRight size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
