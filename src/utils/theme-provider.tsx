'use client';
import { ThemeProvider } from 'next-themes';

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  // OS 다크모드 감지 코드
  // const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)')
  //   .matches
  //   ? 'dark'
  //   : 'light';
  return <ThemeProvider>{children}</ThemeProvider>;
}
