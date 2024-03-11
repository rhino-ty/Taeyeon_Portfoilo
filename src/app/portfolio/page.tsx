import { Metadata } from 'next';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Image from 'next/image';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.taeyeon-portfolio.site/'),
  title: '윤태연의 결과물',
  description: '재미와 개발, 제품을 한 몸에 담고싶은 개발자',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: '윤태연의 결과물',
    description: '재미와 개발, 제품을 한 몸에 담고싶은 개발자',
    images: ['/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '윤태연의 결과물',
    description: '재미와 개발, 제품을 한 몸에 담고싶은 개발자',
    images: ['/favicon.ico'],
  },
};

export default function PortfolioPage() {
  return (
    <main className='container grid grid-cols-1 lg:grid-cols-2'>
      <CardContainer className='inter-var'>
        <CardBody className='group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]'>
          <CardItem translateZ='50' className='text-xl font-bold text-neutral-800 dark:text-white'>
            플랫팜 - Platpharm
          </CardItem>
          <CardItem as='p' translateZ='60' className='mt-2 max-w-sm text-sm text-neutral-700 dark:text-neutral-300'>
            B2B 거래 제약 중개 플랫폼, 약품 탐색-결제-배송-장부를 아울러 관리할 수 있는 웹사이트.
          </CardItem>
          <CardItem translateZ={100} className='mt-4 w-full'>
            <Image
              src='https://github.com/rhino-ty/dicom-exhibition-sugarpole/assets/94962427/67fbc9c6-2658-4d67-a3aa-fb0e8737eca4'
              height='1000'
              width='1000'
              className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
              alt='thumbnail'
            />
          </CardItem>
          <div className='mt-20 flex items-center justify-end'>
            <CardItem
              translateZ={20}
              translateX={20}
              as='button'
              className='rounded-xl px-4 py-2 text-xs font-normal dark:text-white'
            >
              자세히 보기 →
            </CardItem>
            {/* <CardItem
            translateZ={20}
            translateX={40}
            as='button'
            className='rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black'
          >
            Sign up
          </CardItem> */}
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className='inter-var'>
        <CardBody className='group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  '>
          <CardItem translateZ='50' className='text-xl font-bold text-neutral-800 dark:text-white'>
            플랫팜 - Platpharm
          </CardItem>
          <CardItem as='p' translateZ='60' className='mt-2 max-w-sm text-sm text-neutral-700 dark:text-neutral-300'>
            B2B 거래 제약 중개 플랫폼, 약품 탐색-결제-배송-장부를 아울러 관리할 수 있는 웹사이트.
          </CardItem>
          <CardItem translateZ={100} className='mt-4 w-full'>
            <Image
              src='https://github.com/rhino-ty/dicom-exhibition-sugarpole/assets/94962427/67fbc9c6-2658-4d67-a3aa-fb0e8737eca4'
              height='1000'
              width='1000'
              className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
              alt='thumbnail'
            />
          </CardItem>
          <div className='mt-20 flex items-center justify-end'>
            <CardItem
              translateZ={20}
              translateX={20}
              as='button'
              className='rounded-xl px-4 py-2 text-xs font-normal dark:text-white'
            >
              자세히 보기 →
            </CardItem>
            {/* <CardItem
            translateZ={20}
            translateX={40}
            as='button'
            className='rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black'
          >
            Sign up
          </CardItem> */}
          </div>
        </CardBody>
      </CardContainer>
    </main>
  );
}
