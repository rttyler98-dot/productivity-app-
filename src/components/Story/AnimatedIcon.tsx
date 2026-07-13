import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedIconProps {
  name: string;
  className?: string;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ name, className = "" }) => {
  const iconVariants: any = {
    hidden: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 0.2)",
      transition: {
        duration: 2,
        ease: "easeInOut",
        fill: { duration: 1, delay: 1.5, ease: "easeIn" }
      }
    }
  };

  const renderIcon = () => {
    switch (name) {
      case 'leaf':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-2xl">
            <motion.path
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
            />
            <motion.path
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
            />
          </svg>
        );
      case 'cloud':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-2xl">
             <motion.path
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
            />
          </svg>
        );
      case 'moon':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-2xl">
             <motion.path
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
            />
          </svg>
        );
      case 'star':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-2xl">
            <motion.path
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        );
      case 'droplet':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-2xl">
            <motion.path
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
            />
          </svg>
        );
      case 'sun':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-2xl">
            <motion.circle variants={iconVariants} initial="hidden" animate="visible" cx="12" cy="12" r="4" />
            <motion.path variants={iconVariants} initial="hidden" animate="visible" d="M12 2v2" />
            <motion.path variants={iconVariants} initial="hidden" animate="visible" d="M12 20v2" />
            <motion.path variants={iconVariants} initial="hidden" animate="visible" d="m4.93 4.93 1.41 1.41" />
            <motion.path variants={iconVariants} initial="hidden" animate="visible" d="m17.66 17.66 1.41 1.41" />
            <motion.path variants={iconVariants} initial="hidden" animate="visible" d="M2 12h2" />
            <motion.path variants={iconVariants} initial="hidden" animate="visible" d="M20 12h2" />
            <motion.path variants={iconVariants} initial="hidden" animate="visible" d="m6.34 17.66-1.41 1.41" />
            <motion.path variants={iconVariants} initial="hidden" animate="visible" d="m19.07 4.93-1.41 1.41" />
          </svg>
        );
      case 'bolt':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-2xl">
            <motion.path variants={iconVariants} initial="hidden" animate="visible" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <motion.path variants={iconVariants} initial="hidden" animate="visible" d="m11 17 6-9-5-1-1 9z" />
          </svg>
        );
      case 'mountain':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-2xl">
            <motion.path variants={iconVariants} initial="hidden" animate="visible" d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
        );
      case 'heart':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-2xl">
            <motion.path variants={iconVariants} initial="hidden" animate="visible" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {renderIcon()}
      {/* Subtle glowing backdrop for the icon */}
      <motion.div
        className="absolute inset-0 bg-white/20 blur-2xl rounded-full -z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 2 }}
      />
    </div>
  );
};
