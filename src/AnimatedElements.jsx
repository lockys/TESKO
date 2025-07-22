import React from 'react';
import { motion } from 'framer-motion';

// FadeIn: Fades in the component.
export const FadeIn = ({ children, duration = 0.5, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// SlideIn: Slides in the component from a specified direction.
export const SlideIn = ({ children, duration = 0.5, delay = 0, from = 'bottom' }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: from === 'bottom' ? 50 : from === 'top' ? -50 : 0,
      x: from === 'left' ? -50 : from === 'right' ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, delay },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  );
};

// ScaleIn: Scales in the component.
export const ScaleIn = ({ children, duration = 0.5, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);
