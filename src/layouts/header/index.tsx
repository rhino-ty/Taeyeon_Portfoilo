'use client';
import React from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import LucideIcon from '@/components/lucide-icon';
import { useTheme } from 'next-themes';

export default function HeaderComponent({ className }: { className?: string }) {
  const { setTheme } = useTheme();

  const navItems: NavItem[] = [
    {
      name: 'Introduce',
      link: '/',
    },
    {
      name: 'Portfolio',
      link: '/portfolio',
    },
    {
      name: 'Notion',
      link: 'https://rhino-ty.notion.site/c56149845fcd49eda4c1c71b17a1d1f7?pvs=4',
    },
    {
      name: 'Theme',
      html: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon' className='outline-none'>
              <LucideIcon
                name='Sun'
                className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
              />
              <LucideIcon
                name='Moon'
                className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
              />
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setTheme('system')} className='text-base'>
              System
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('light')} className='text-base'>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')} className='text-base'>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
  return (
    <div className='relative  w-full'>
      <FloatingNav navItems={navItems} />
    </div>
  );
}
