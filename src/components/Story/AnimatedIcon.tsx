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
