'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/utils/tailwind-merge';
import { Button } from './button';
import { Tooltip, TooltipContent, TooltipProvider } from './tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';

export const FloatingNav = ({ navItems, className }: { navItems: NavItem[]; className?: string }) => {
  // 네비게이션의 가시성을 제어하는 state.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 초기 스크롤 위치를 저장, 그 다음 스크롤 이벤트가 발생 시 새로 갱신.
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // direction은 현재 스크롤 위치의 값에서 이전 스크롤 위치의 값을 뺀 결과 => 스크롤 방향 계산.
      // 즉, 양수면 아래로 스크롤, 음수면 위로 스크롤 하는 것.
      let direction = window.scrollY - lastScrollY;
      // 위로 스크롤하거나 맨 위에 있을 때 보이게 state 설정. 나머지는 안보이게.
      setVisible(direction < 0 || window.scrollY < 10);
      // 마지막 스크롤 위치를 업데이트
      lastScrollY = window.scrollY;
    };

    // 스크롤 이벤트 추가 및 컴포넌트 언마운트 시 제거
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
              <TooltipProvider delayDuration={400}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant='ghost'>
                      <Link
                        href={navItem.link}
                        className={cn('relative flex items-center')}
                        target={navItem.target ? navItem.target : '_self'}
                      >
                        {/* 기본 Navbar */}
                        <span className='hidden text-base sm:block'>{navItem.name}</span>
                        {/* 반응형:640px 이내 Navbar, 아이콘 배치 및 툴팁 추가 */}
                        <span className='block sm:hidden'>{navItem.icon}</span>
                        <TooltipContent className='block sm:hidden'>
                          <p>{navItem.name}</p>
                        </TooltipContent>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
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
