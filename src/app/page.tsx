import Animation from '@/components/lottie-animation';
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
    <main className='flex w-full'>
      <section className='container mx-auto'>
        {/* 제목 및 소제목 */}
        <h1 className='flex scroll-m-20 items-center justify-center text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl'>
          <ScrollAniDiv direction='top'>제품 중심 문제 공헌 X 재미 추구 개발자, 윤태연입니다.</ScrollAniDiv>
        </h1>
        <h2 className='mt-10 flex items-center justify-center'>
          <ScrollAniDiv direction='top' className='text-xl'>
            다양한 개발 경험과 함께 제품 중심으로 사고해 문제를 해결해 공헌하고, 그에 대한 재미를 느끼고 싶은 개발자가
            되고 싶습니다.
          </ScrollAniDiv>
        </h2>

        {/* 본문 */}
        <article className='flex h-[500px]'>
          <ScrollAniDiv direction='left' duration={0.5}>
            <Animation width={500} height={500} />
          </ScrollAniDiv>
          <div className='flex items-center justify-center'>
            <ScrollAniDiv direction='right' duration={0.5}>
              <p>
                진로에 한계를 얻고 방황하던 차 아버지께 개발을 접하고 내가 생각한대로 기능 개발하는 것에 매료돼 개발을
                시작했습니다. 그러면서 과정과 문제 해결에 희열감을 느껴 프로그래밍의 길을 선택 하게 됐습니다.
              </p>
              <p>
                JavaScript(TypeScript)를 주로 사용하며, Next.Js App Router, React.JS, TS, Tailwind CSS, Zustand를 사용해
                웹 프론트엔드를 개발합니다. 최근엔 약사 - 제약회사 간 플랫폼 웹을 프론트엔드 개발 진행했습니다.
              </p>
              <p>
                이제는 클라이언트가 원하는 기능을 바로 구현하고, 기존 Frontend Developer를 넘어 제품 중심 으로 사고 및
                문제 해결을 통해 공헌하는 Product-Minded Developer가 되는 것이 목표입니다.
              </p>
            </ScrollAniDiv>
          </div>
        </article>
      </section>
    </main>
  );
}
