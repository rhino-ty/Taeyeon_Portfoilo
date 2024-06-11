import { Metadata } from 'next';
import PortfolioCard from '@/components/portfolio-card';
import { PortfolioCardItem } from '@/types/portfolio-card.types';

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
  const portfolioItems: PortfolioCardItem[] = [
    {
      title: '플랫팜(Platpharm)',
      description: 'B2B 거래 제약 중개 플랫폼, 제약품 탐색-결제-배송-장부 관리 웹',
      imageUrl: 'https://github.com/rhino-ty/my-image-assets/assets/94962427/62ba1e4b-ec8c-4ab0-9cb7-0bb68fe5fb13',
      badges: [
        { text: 'Next.JS App router' },
        { text: 'TypeScript' },
        { text: 'TanStack Query', variant: 'secondary' },
        { text: 'Tailwind CSS', variant: 'secondary' },
        { text: 'MUI', variant: 'secondary' },
        { text: 'Zustand', variant: 'secondary' },
      ],
      modalContent: (
        <div>
          <p>플랫팜에 대한 자세한 설명 내용입니다.</p>
          <p>여기에 더 많은 내용을 추가할 수 있습니다.</p>
        </div>
      ),
    },
    {
      title: '바젠(VarGen)',
      description: '변수를 생성할 때, 고민을 더 덜어줄 변수 생성 웹',
      imageUrl: 'https://user-images.githubusercontent.com/94962427/229331924-242f7b8f-fe80-4fec-a2ba-c0705c0ed34e.gif',
      badges: [
        { text: 'Next.JS Page router' },
        { text: 'TypeScript' },
        { text: 'Open AI' },
        { text: 'Tailwind CSS', variant: 'secondary' },
        { text: 'TanStack Query', variant: 'secondary' },
      ],
    },
    {
      title: 'dicom-exhibition-sugarpole',
      description: '의료용 이미지 배치 및 조작을 위한 DICOM 전시용 웹',
      imageUrl:
        'https://github.com/rhino-ty/dicom-exhibition-sugarpole/assets/94962427/67fbc9c6-2658-4d67-a3aa-fb0e8737eca4',
      badges: [
        { text: 'React 18' },
        { text: 'TypeScript' },
        { text: 'Cornerstone.js' },
        { text: 'Tailwind CSS', variant: 'secondary' },
        { text: 'shadcn/ui', variant: 'secondary' },
      ],
    },
    {
      title: '맛피(Mat.P)',
      description: '맛집에 대한 경험을 공유하고, 직접 저장할 수 있는 맛집 지도 SNS 웹',
      imageUrl: 'https://user-images.githubusercontent.com/94962427/216276170-98a714cf-d7e1-4f7c-8ae4-60445664f485.gif',
      badges: [
        { text: 'Next.JS Page router' },
        { text: 'TypeScript' },
        { text: 'Kakao Maps SDK' },
        { text: 'Styled Components', variant: 'secondary' },
        { text: 'Recoil', variant: 'secondary' },
      ],
    },
  ];

  return (
    <main className='container grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-10 xl:gap-0'>
      {portfolioItems.map((item, index) => (
        <PortfolioCard
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          badges={item.badges}
          modalContent={item.modalContent}
        />
      ))}
    </main>
  );
}
