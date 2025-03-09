
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedLayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing
  duration: 0.6,
};

const AnimatedLayout: React.FC<AnimatedLayoutProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen relative overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 -z-10 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;
