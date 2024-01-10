import type { Metadata } from 'next';
import '../styles/globals.css';
import { ThemeProviders } from '@/utils/theme-provider';
import { Noto_Sans_KR } from 'next/font/google'; // 한글 NotoSans를 사용.
import HeaderComponent from '@/layouts/header';

// Noto Sans Korean
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'system-ui',
    'sans-serif',
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.taeyeon-portfolio.site/'),
  title: '윤태연의 포트폴리오',
  description: '재미와 개발, 제품을 한 몸에 담고싶은 개발자',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: '윤태연의 포트폴리오',
    description: '재미와 개발, 제품을 한 몸에 담고싶은 개발자',
    images: ['/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '윤태연의 포트폴리오',
    description: '재미와 개발, 제품을 한 몸에 담고싶은 개발자',
    images: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={notoSansKr.className}>
        <ThemeProviders>
          <HeaderComponent />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
