"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

// Predefined animation variants
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const MotionDiv = forwardRef(
  (
    {
      children,
      variants = fadeInVariants,
      initial = "hidden",
      animate = "visible",
      whileInView,
      whileHover,
      whileTap,
      whileFocus,
      transition = {
        type: "spring",
        damping: 10,
        stiffness: 100,
        mass: 0.5,
      },
      viewport = { once: true, margin: "0px 0px -50px 0px" },
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial={initial}
        animate={animate}
        whileInView={whileInView}
        whileHover={whileHover}
        whileTap={whileTap}
        whileFocus={whileFocus}
        transition={transition}
        viewport={viewport}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

MotionDiv.displayName = "MotionDiv";

export { MotionDiv };
