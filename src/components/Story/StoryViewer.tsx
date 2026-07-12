import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Slide } from '../../data/types';
import { X, ChevronRight } from 'lucide-react';
import { BackgroundEffects } from './BackgroundEffects';
import { AnimatedIcon } from './AnimatedIcon';

interface StoryViewerProps {
  slides: Slide[];
  onComplete: () => void;
  onClose: () => void;
}

export const StoryViewer: React.FC<StoryViewerProps> = ({ slides, onComplete, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

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

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      scale: 0.95,
      opacity: 0,
      rotateY: direction > 0 ? 15 : -15,
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
      opacity: 0,
      rotateY: direction < 0 ? 15 : -15,
    })
  };

  // Slower stagger for a more dramatic, emotional reading pace
  const contentVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.3 // Increased stagger
      }
    }
  };

  const childVariants: any = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute inset-0 select-none overflow-hidden"
      onClick={handleTap}
      style={{
        backgroundColor: currentSlide.bgColor || '#1e293b',
        transition: 'background-color 1s ease-in-out' // Very smooth color transitions
      }}
    >
      {/* Immersive Dynamic Backgrounds based on slide config */}
      {currentSlide.bgAnimation && <BackgroundEffects type={currentSlide.bgAnimation} />}

      {/* Progress Bars */}
      <div className="absolute top-6 left-0 right-0 z-50 flex gap-1.5 px-6">
        {slides.map((_, idx) => (
          <div key={idx} className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
            <motion.div
              className="h-full bg-white/90 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
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
        className="absolute top-12 right-6 z-50 p-2.5 bg-white/10 text-white/80 rounded-full hover:bg-white/20 backdrop-blur-md transition-all active:scale-90 border border-white/10"
      >
        <X size={20} strokeWidth={2.5} />
      </button>

      {/* Slide Content */}
      <div className="relative w-full h-full perspective-[1000px] z-10">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25, mass: 0.8 }, // Slightly softer spring
              opacity: { duration: 0.4 },
              rotateY: { duration: 0.5 },
              scale: { duration: 0.5 }
            }}
            className="absolute inset-0 flex flex-col items-center justify-center px-8 sm:px-12 py-20 text-center origin-center"
            style={{ color: currentSlide.textColor || '#ffffff' }}
          >
            <motion.div
              className="w-full max-w-[340px] flex flex-col items-center justify-center min-h-[50vh]"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {currentSlide.type === 'title' && (
                <>
                  {currentSlide.icon && (
                    <motion.div variants={childVariants} className="w-32 h-32 mb-12">
                      <AnimatedIcon name={currentSlide.icon} />
                    </motion.div>
                  )}
                  {currentSlide.title && (
                    <motion.h2 variants={childVariants} className="text-sm font-bold tracking-[0.2em] uppercase mb-8 opacity-70">
                      {currentSlide.title}
                    </motion.h2>
                  )}
                  <motion.h1 variants={childVariants} className="text-5xl sm:text-6xl font-bold tracking-tight font-display leading-[1.1] drop-shadow-lg">
                    {currentSlide.content}
                  </motion.h1>
                </>
              )}

              {currentSlide.type === 'text' && (
                <div className="text-center w-full">
                  {currentSlide.title && (
                    <motion.h2 variants={childVariants} className="text-sm font-bold tracking-[0.2em] uppercase mb-10 opacity-70">
                      {currentSlide.title}
                    </motion.h2>
                  )}
                  <motion.p variants={childVariants} className="text-4xl sm:text-5xl leading-[1.2] font-display font-bold drop-shadow-xl">
                    {currentSlide.content}
                  </motion.p>
                </div>
              )}

              {currentSlide.type === 'quote' && (
                <div className="w-full relative text-center">
                  <motion.p variants={childVariants} className="text-4xl sm:text-5xl font-serif italic leading-tight drop-shadow-xl relative z-10">
                    "{currentSlide.content}"
                  </motion.p>
                </div>
              )}

              {currentSlide.type === 'exercise' && (
                <motion.div variants={childVariants} className="w-full bg-white/10 p-10 rounded-[2.5rem] backdrop-blur-2xl border border-white/20 shadow-2xl text-center">
                  {currentSlide.title && (
                    <h2 className="text-3xl font-bold font-display mb-6">{currentSlide.title}</h2>
                  )}
                  <p className="text-2xl leading-relaxed font-medium opacity-90">{currentSlide.content}</p>
                  <div className="mt-12 flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="flex items-center gap-3 bg-white/10 px-8 py-4 rounded-full text-xl font-bold transition-colors backdrop-blur-md border border-white/20 shadow-lg"
                    >
                      Breathe & Continue <ChevronRight size={24} />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
