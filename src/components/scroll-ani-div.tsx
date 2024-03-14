'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface ScrollAniDivProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  direction?: 'left-to-right' | 'right-to-left' | 'bottom-to-top' | 'top-to-bottom' | 'none';
  duration?: number;
}

/**
 * ScrollAniDiv 컴포넌트는 스크롤에 반응하여 애니메이션을 적용.
 * 컴포넌트의 자식 요소는 지정된 방향에서 시작하여 애니메이션 효과를 나타냄.
 * 'direction' prop에 따라 애니메이션이 시작하는 초기 위치가 결정.
 *
 * @prop {React.ReactNode} children - 애니메이션을 적용할 자식 요소.
 * @prop {'left-to-right' | 'right-to-left' | 'bottom-to-top' | 'top-to-bottom' | 'none'} direction - 애니메이션 시작 방향.
 * @prop {number} duration - 애니메이션 지속 시간(초 단위). 기본값은 0.5초.
 */
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
      x: direction === 'right-to-left' ? 70 : direction === 'left-to-right' ? -70 : 0,
      y: direction === 'bottom-to-top' ? 70 : direction === 'top-to-bottom' ? -70 : 0,
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
