'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // OS 다크모드 감지 코드
  // const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)')
  //   .matches
  //   ? 'dark'
  //   : 'light';
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
