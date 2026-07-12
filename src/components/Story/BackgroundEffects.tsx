import React from 'react';
import { motion } from 'framer-motion';
import type { BgAnimation } from '../../data/types';

interface BackgroundEffectsProps {
  type: BgAnimation;
  color?: string; // Optional: base color to tint the effects
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ type }) => {
  if (type === 'none') return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-40">

      {type === 'breathe' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-[80vw] h-[80vw] rounded-full bg-white/20 filter blur-[80px]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8, // 4 seconds in, 4 seconds out (deep breath)
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
      )}

      {type === 'pulse' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-[60vw] h-[60vw] rounded-full bg-white/10 filter blur-[60px]"
            animate={{
              scale: [1, 1.1, 1, 1.05, 1], // Heartbeat rhythm
              opacity: [0.2, 0.5, 0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>
      )}

      {type === 'float' && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-[-20%] rounded-full bg-white/20 filter blur-[40px]"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: ['0%', '-150vh'], // Float up
                x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100], // Drift horizontally
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 15, // Slow float
                ease: "linear",
                repeat: Infinity,
                delay: Math.random() * -20, // Start at different times
              }}
            />
          ))}
        </>
      )}

      {type === 'waves' && (
        <div className="absolute inset-0 flex flex-col justify-end">
           <motion.div
            className="w-[200%] h-[50vh] bg-white/20 filter blur-[60px] rounded-[100%]"
            style={{ transformOrigin: 'center bottom' }}
            animate={{
              x: ['-25%', '0%', '-25%'],
              y: [20, -20, 20],
              rotate: [-5, 5, -5]
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
           <motion.div
            className="absolute bottom-0 w-[200%] h-[60vh] bg-white/10 filter blur-[80px] rounded-[100%]"
            style={{ transformOrigin: 'center bottom' }}
            animate={{
              x: ['0%', '-25%', '0%'],
              y: [-20, 20, -20],
              rotate: [5, -5, 5]
            }}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
      )}

    </div>
  );
};
