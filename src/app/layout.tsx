import '../styles/globals.css';
import { ThemeProvider } from '@/utils/theme-provider';
// import { Noto_Sans_KR } from 'next/font/google'; // 한글 NotoSans를 사용.
import localFont from 'next/font/local'; // Pretendard 사용
import HeaderComponent from '@/layouts/header';

// Noto Sans Korean
// const notoSansKr = Noto_Sans_KR({
//   subsets: ['latin'],
//   weight: ['100', '300', '400', '500', '700', '900'],
//   fallback: [
//     '-apple-system',
//     'Malgun Gothic',
//     'Apple SD Gothic Neo',
//     'Roboto',
//     'Apple Color Emoji',
//     'Segoe UI Emoji',
//     'Segoe UI Symbol',
//     'system-ui',
//     'sans-serif',
//   ],
// });

// pretendard: Next.JS Local Fonts 사용
// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts
const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
  fallback: [
    'Apple SD Gothic Neo',
    '-apple-system',
    'Malgun Gothic',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'system-ui',
    'sans-serif',
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='kr' className={`${pretendard.variable}`}>
      <body
        className={pretendard.className}
        // className={notoSansKr.className}
      >
        <ThemeProvider attribute='class' defaultTheme='system'>
          <main className='relative'>
            <HeaderComponent />
            <div className='h-28 w-full' />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
