"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React,  { useEffect } from "react";

interface ScrollAnimationProps {
  /** Content to animate (text, image, div, etc.) */
  children: React.ReactNode;

  /** Animation direction: 'left', 'right', 'up', 'bottom' */
  direction?: "left" | "right" | "up" | "bottom";

  /** How long the animation lasts (seconds) */
  duration?: number;

  /** Delay before animation starts (seconds) */
  delay?: number;

  /** How much distance (in pixels) to move from */
  offset?: number;

  /** Optional custom class name */
  className?: string;
}

/**
 * Reusable scroll animation component.
 * Example:
 *  <ScrollAnimation direction="left" duration={1}>
 *    <h2>Hello World</h2>
 *  </ScrollAnimation>
 */
const ScrollAnimation = ({
  children,
  direction = "up",
  duration = 0.8,
  delay = 0,
  offset = 60,
  className = "",
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // Direction-based animation
  const directionVariants = {
    left: { hidden: { x: -offset, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: offset, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    up: { hidden: { y: offset, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    bottom: { hidden: { y: -offset, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={directionVariants[direction]}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
