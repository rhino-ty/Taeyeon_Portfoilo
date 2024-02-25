'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/utils/tailwind-merge';
import { Button } from './button';

export const FloatingNav = ({ navItems, className }: { navItems: NavItem[]; className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    let direction = current - scrollYProgress.getPrevious();

    if (scrollYProgress.get() <= 0.05) {
      // 변경된 부분: 조건에 등호 추가
      setVisible(true); // 변경된 부분: 맨 위로 닿을 때도 true로 설정
    } else {
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  // visible의 초깃값이 useMotionValueEvent의 조건절에 의해 false로 고정돼 페이지에 스크롤이 없다면 nav menu가 보이지 않는 문제 발생.
  // 그래서 초기 렌더링이 끝난 후 따로 Task Queue에 넣어 마지막에 이벤트를 실행하기 위해 setTimeout 적용.
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 50);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'fixed inset-x-0 top-5 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white px-8 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black',
          className,
        )}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
          <Fragment key={`nav-item-${idx}`}>
            {navItem.link ? (
              <Button variant='ghost'>
                <Link
                  href={navItem.link}
                  className={cn('relative flex items-center')}
                  target={navItem.target ? navItem.target : '_self'}
                >
                  <span className='block sm:hidden'>{navItem.icon}</span>
                  <span className='hidden text-base sm:block'>{navItem.name}</span>
                </Link>
              </Button>
            ) : (
              navItem.html
            )}
          </Fragment>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

/// 그냥 navbar
const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative '>
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer text-black hover:opacity-[0.9] dark:text-white'
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className='absolute left-1/2 top-[calc(100%_+_1.7rem)] -translate-x-1/2 transform'>
              <motion.div
                transition={transition}
                layoutId='active' // layoutId ensures smooth animation
                className='overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black'
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className='h-full w-max p-4'
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className='boder relative flex justify-center space-x-4 rounded-full border-transparent bg-white px-8 py-6 shadow-input dark:border-white/[0.2] dark:bg-black '
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className='text-neutral-700 hover:text-black dark:text-neutral-200 '>
      {children}
    </Link>
  );
};
