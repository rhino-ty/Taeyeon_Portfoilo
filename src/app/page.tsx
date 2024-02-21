import ScrollAniDiv from '@/components/scroll-ani-div';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.taeyeon-portfolio.site/'),
  title: '윤태연의 이력서',
  description: '재미와 개발, 제품을 한 몸에 담고싶은 개발자',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: '윤태연의 이력서',
    description: '재미와 개발, 제품을 한 몸에 담고싶은 개발자',
    images: ['/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '윤태연의 이력서',
    description: '재미와 개발, 제품을 한 몸에 담고싶은 개발자',
    images: ['/favicon.ico'],
  },
};

export default function HomeWithResume() {
  return (
    <main className='flex h-[1000px] w-full'>
      <section className='mx-auto'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          제품 중심 문제 공헌 X 재미 추구 개발자, 윤태연입니다.
        </h1>
        <ScrollAniDiv
          direction='left'
          duration={0.5}
          className='bg-lightblue-200 flex h-screen items-center justify-center'
        >
          안녕? 난 왼쪽.
        </ScrollAniDiv>
        <ScrollAniDiv
          direction='right'
          duration={0.5}
          className='bg-lightcoral-200 flex h-screen items-center justify-center'
        >
          안녕? 난 오른쪽.
        </ScrollAniDiv>
      </section>
    </main>
  );
}
