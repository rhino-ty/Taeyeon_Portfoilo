'use client';
import React from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';

export default function HeaderComponent({ className }: { className?: string }) {
  const navItems = [
    {
      name: 'Resume',
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
  ];
  return (
    <div className='relative  w-full'>
      <FloatingNav navItems={navItems} />
    </div>
  );
}
