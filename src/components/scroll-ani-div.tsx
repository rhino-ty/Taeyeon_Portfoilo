'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface ScrollAniDivProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'top' | 'bottom' | 'center';
  duration?: number;
}

const ScrollAniDiv: React.FC<ScrollAniDivProps> = ({ children, direction = 'left', duration = 0.5, ...props }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const variants = {
    hidden: {
      x: direction === 'left' ? -70 : direction === 'right' ? 70 : 0,
      y: direction === 'top' ? -70 : direction === 'bottom' ? 70 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
      {...props} // 나머지 props를 motion.div에 전달
    >
      {children}
    </motion.div>
  );
};

export default ScrollAniDiv;
