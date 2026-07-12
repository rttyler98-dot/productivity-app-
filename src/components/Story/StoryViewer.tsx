import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Slide } from '../../data/types';
import { X } from 'lucide-react';

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
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <div
      className="absolute inset-0 bg-brand-bg select-none overflow-hidden"
      onClick={handleTap}
      style={{ backgroundColor: currentSlide.bgColor || '#f8fafc' }}
    >
      {/* Progress Bars */}
      <div className="absolute top-4 left-0 right-0 z-50 flex gap-1 px-4">
        {slides.map((_, idx) => (
          <div key={idx} className="h-1 flex-1 bg-black/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={false}
              animate={{
                width: idx < currentIndex ? '100%' : idx === currentIndex ? '100%' : '0%'
              }}
              transition={{
                duration: idx === currentIndex ? 0.3 : 0,
                ease: "linear"
              }}
            />
          </div>
        ))}
      </div>

      {/* Close Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-8 right-4 z-50 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 transition-colors"
      >
        <X size={20} />
      </button>

      {/* Slide Content */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
          style={{ color: currentSlide.textColor || '#1e293b' }}
        >
          {currentSlide.type === 'title' && (
            <div className="space-y-6">
              {currentSlide.icon && <div className="text-6xl mb-8">{currentSlide.icon}</div>}
              <h1 className="text-4xl font-bold tracking-tight">{currentSlide.title}</h1>
              <p className="text-xl opacity-90">{currentSlide.content}</p>
            </div>
          )}

          {currentSlide.type === 'text' && (
            <div className="space-y-6 text-left w-full max-w-sm">
               {currentSlide.title && <h2 className="text-3xl font-bold mb-4">{currentSlide.title}</h2>}
              <p className="text-2xl leading-relaxed font-medium">{currentSlide.content}</p>
            </div>
          )}

          {currentSlide.type === 'quote' && (
            <div className="space-y-6 w-full max-w-sm">
               <div className="text-6xl opacity-50 mb-4">"</div>
              <p className="text-3xl font-serif italic leading-relaxed">{currentSlide.content}</p>
            </div>
          )}

           {currentSlide.type === 'exercise' && (
            <div className="space-y-8 w-full max-w-sm bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
               {currentSlide.title && <h2 className="text-2xl font-bold">{currentSlide.title}</h2>}
              <p className="text-xl leading-relaxed">{currentSlide.content}</p>
              <div className="pt-4">
                 <div className="animate-pulse flex space-x-2 justify-center">
                    <div className="h-2 w-2 bg-current rounded-full opacity-50"></div>
                    <div className="h-2 w-2 bg-current rounded-full opacity-50 animation-delay-200"></div>
                    <div className="h-2 w-2 bg-current rounded-full opacity-50 animation-delay-400"></div>
                 </div>
              </div>
            </div>
          )}

        </motion.div>
      </AnimatePresence>

      {/* Tap indicators (invisible, just for UX hint if we wanted) */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-between px-8 text-sm font-medium opacity-30 pointer-events-none">
        <span>Tap left to go back</span>
        <span>Tap right to continue</span>
      </div>
    </div>
  );
};
