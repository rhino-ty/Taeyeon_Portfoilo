import { Metadata } from 'next';
import PortfolioCard from '@/components/portfolio-card';
import { PortfolioCardItem } from '@/types/portfolio-card.types';
import Image from 'next/image';
import ScrollAniDiv from '@/components/scroll-ani-div';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.taeyeon-portfolio.site/'),
  title: '윤태연 | 포트폴리오',
  description: '재미와 개발, 제품을 한 몸에 담고싶은 개발자',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: '윤태연 | 포트폴리오',
    description: '재미와 개발, 제품을 한 몸에 담고싶은 개발자',
    images: ['/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '윤태연 | 포트폴리오',
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
        <article>
          <p className='mb-5 text-sm lg:text-base'>
            <ul className='ml-4 list-disc space-y-1'>
              <li>
                거래처-상품 UI, 장바구니, 결제(토스 및 후결제), 기록 테이블, 상품 거래 등록/관리 등 UI 디자인 및
                퍼블리싱
              </li>
              <li>버튼, 레이아웃, Dialog, Toast 등 컴포넌트화 및 재사용이 용이하도록 구축</li>
              <li>
                서버 상태 관리를 위한 <code className='text-xs'>Tanstack Query</code> 도입
              </li>
              <li>
                회원가입, 로그인, 로그아웃, 유저 정보 관리, <code className='text-xs'>fetch</code>에{' '}
                <code className='text-xs'>interceptor</code> 개념을 채용해 토큰 갱신 및 재요청 등 Auth에 관련된 모든
                프론트 기능 개발
              </li>
              <li>UX를 고려해 클릭, 마우스 오버 등의 애니메이션 도입</li>
              <li>
                메모이제이션을 사용해 API 호출 횟수 약 90% 감소 |{' '}
                <a
                  href='https://velog.io/@okko8522/메모이제이션-실사용'
                  target='_blank'
                  className='rounded-md px-1 py-0.5 underline transition-colors hover:bg-gray-200 dark:hover:bg-gray-700'
                >
                  메모이제이션 실사용
                </a>
              </li>
              <li>
                상품 판매 페이지에 <code className='text-xs'>useInfiniteQuery</code> 를 마이그레이션해 데이터 캐싱 및 UX
                최적화
              </li>
            </ul>
          </p>
          <div className='flex flex-col gap-3'>
            <h3 className='-mb-2 text-lg font-medium'>1. 약사: 상품 진열 및 주문 및 장바구니 담기</h3>
            <Image
              src={'https://github.com/rhino-ty/my-image-assets/assets/94962427/62ba1e4b-ec8c-4ab0-9cb7-0bb68fe5fb13'}
              height='1440'
              width='1440'
              className='-mb-1.5 rounded-xl border border-neutral-300 group-hover/card:shadow-xl dark:border-none'
              alt='Portfolio Image'
              priority
              placeholder='blur'
              blurDataURL='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjRwdCIgdmlld0JveD0iLjUgLS4yIDEwMjMgMTAyNC4xIiB3aWR0aD0iMTAyNHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NzguNS42Yy0yLjIuMi05LjIuOS0xNS41IDEuNC0xNDUuMyAxMy4xLTI4MS40IDkxLjUtMzY3LjYgMjEyLTQ4IDY3LTc4LjcgMTQzLTkwLjMgMjIzLjUtNC4xIDI4LjEtNC42IDM2LjQtNC42IDc0LjVzLjUgNDYuNCA0LjYgNzQuNWMyNy44IDE5Mi4xIDE2NC41IDM1My41IDM0OS45IDQxMy4zIDMzLjIgMTAuNyA2OC4yIDE4IDEwOCAyMi40IDE1LjUgMS43IDgyLjUgMS43IDk4IDAgNjguNy03LjYgMTI2LjktMjQuNiAxODQuMy01My45IDguOC00LjUgMTAuNS01LjcgOS4zLTYuNy0uOC0uNi0zOC4zLTUwLjktODMuMy0xMTEuN2wtODEuOC0xMTAuNS0xMDIuNS0xNTEuN2MtNTYuNC04My40LTEwMi44LTE1MS42LTEwMy4yLTE1MS42LS40LS4xLS44IDY3LjMtMSAxNDkuNi0uMyAxNDQuMS0uNCAxNDkuOS0yLjIgMTUzLjMtMi42IDQuOS00LjYgNi45LTguOCA5LjEtMy4yIDEuNi02IDEuOS0yMS4xIDEuOWgtMTcuM2wtNC42LTIuOWMtMy0xLjktNS4yLTQuNC02LjctNy4zbC0yLjEtNC41LjItMjAwLjUuMy0yMDAuNiAzLjEtMy45YzEuNi0yLjEgNS00LjggNy40LTYuMSA0LjEtMiA1LjctMi4yIDIzLTIuMiAyMC40IDAgMjMuOC44IDI5LjEgNi42IDEuNSAxLjYgNTcgODUuMiAxMjMuNCAxODUuOXMxNTcuMiAyMzguMiAyMDEuOCAzMDUuN2w4MSAxMjIuNyA0LjEtMi43YzM2LjMtMjMuNiA3NC43LTU3LjIgMTA1LjEtOTIuMiA2NC43LTc0LjMgMTA2LjQtMTY0LjkgMTIwLjQtMjYxLjUgNC4xLTI4LjEgNC42LTM2LjQgNC42LTc0LjVzLS41LTQ2LjQtNC42LTc0LjVjLTI3LjgtMTkyLjEtMTY0LjUtMzUzLjUtMzQ5LjktNDEzLjMtMzIuNy0xMC42LTY3LjUtMTcuOS0xMDYuNS0yMi4zLTkuNi0xLTc1LjctMi4xLTg0LTEuM3ptMjA5LjQgMzA5LjRjNC44IDIuNCA4LjcgNyAxMC4xIDExLjguOCAyLjYgMSA1OC4yLjggMTgzLjVsLS4zIDE3OS44LTMxLjctNDguNi0zMS44LTQ4LjZ2LTEzMC43YzAtODQuNS40LTEzMiAxLTEzNC4zIDEuNi01LjYgNS4xLTEwIDkuOS0xMi42IDQuMS0yLjEgNS42LTIuMyAyMS4zLTIuMyAxNC44IDAgMTcuNC4yIDIwLjcgMnoiLz48cGF0aCBkPSJtNzg0LjMgOTQ1LjFjLTMuNSAyLjItNC42IDMuNy0xLjUgMiAyLjItMS4zIDUuOC00IDUuMi00LjEtLjMgMC0yIDEtMy43IDIuMXptLTYuOSA0LjVjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS03LjYgNGMtMy44IDItMy42IDIuOC4yLjkgMS43LS45IDMtMS44IDMtMiAwLS43LS4xLS42LTMuMiAxLjF6Ii8+PC9zdmc+'
            />
            <Image
              src={'https://github.com/rhino-ty/my-image-assets/assets/94962427/cdad6b74-76ca-4d37-9762-b0bd5cc6b6a5'}
              height='1440'
              width='1440'
              className='rounded-xl border border-neutral-300 group-hover/card:shadow-xl dark:border-none'
              alt='Portfolio Image'
              priority
              placeholder='blur'
              blurDataURL='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjRwdCIgdmlld0JveD0iLjUgLS4yIDEwMjMgMTAyNC4xIiB3aWR0aD0iMTAyNHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NzguNS42Yy0yLjIuMi05LjIuOS0xNS41IDEuNC0xNDUuMyAxMy4xLTI4MS40IDkxLjUtMzY3LjYgMjEyLTQ4IDY3LTc4LjcgMTQzLTkwLjMgMjIzLjUtNC4xIDI4LjEtNC42IDM2LjQtNC42IDc0LjVzLjUgNDYuNCA0LjYgNzQuNWMyNy44IDE5Mi4xIDE2NC41IDM1My41IDM0OS45IDQxMy4zIDMzLjIgMTAuNyA2OC4yIDE4IDEwOCAyMi40IDE1LjUgMS43IDgyLjUgMS43IDk4IDAgNjguNy03LjYgMTI2LjktMjQuNiAxODQuMy01My45IDguOC00LjUgMTAuNS01LjcgOS4zLTYuNy0uOC0uNi0zOC4zLTUwLjktODMuMy0xMTEuN2wtODEuOC0xMTAuNS0xMDIuNS0xNTEuN2MtNTYuNC04My40LTEwMi44LTE1MS42LTEwMy4yLTE1MS42LS40LS4xLS44IDY3LjMtMSAxNDkuNi0uMyAxNDQuMS0uNCAxNDkuOS0yLjIgMTUzLjMtMi42IDQuOS00LjYgNi45LTguOCA5LjEtMy4yIDEuNi02IDEuOS0yMS4xIDEuOWgtMTcuM2wtNC42LTIuOWMtMy0xLjktNS4yLTQuNC02LjctNy4zbC0yLjEtNC41LjItMjAwLjUuMy0yMDAuNiAzLjEtMy45YzEuNi0yLjEgNS00LjggNy40LTYuMSA0LjEtMiA1LjctMi4yIDIzLTIuMiAyMC40IDAgMjMuOC44IDI5LjEgNi42IDEuNSAxLjYgNTcgODUuMiAxMjMuNCAxODUuOXMxNTcuMiAyMzguMiAyMDEuOCAzMDUuN2w4MSAxMjIuNyA0LjEtMi43YzM2LjMtMjMuNiA3NC43LTU3LjIgMTA1LjEtOTIuMiA2NC43LTc0LjMgMTA2LjQtMTY0LjkgMTIwLjQtMjYxLjUgNC4xLTI4LjEgNC42LTM2LjQgNC42LTc0LjVzLS41LTQ2LjQtNC42LTc0LjVjLTI3LjgtMTkyLjEtMTY0LjUtMzUzLjUtMzQ5LjktNDEzLjMtMzIuNy0xMC42LTY3LjUtMTcuOS0xMDYuNS0yMi4zLTkuNi0xLTc1LjctMi4xLTg0LTEuM3ptMjA5LjQgMzA5LjRjNC44IDIuNCA4LjcgNyAxMC4xIDExLjguOCAyLjYgMSA1OC4yLjggMTgzLjVsLS4zIDE3OS44LTMxLjctNDguNi0zMS44LTQ4LjZ2LTEzMC43YzAtODQuNS40LTEzMiAxLTEzNC4zIDEuNi01LjYgNS4xLTEwIDkuOS0xMi42IDQuMS0yLjEgNS42LTIuMyAyMS4zLTIuMyAxNC44IDAgMTcuNC4yIDIwLjcgMnoiLz48cGF0aCBkPSJtNzg0LjMgOTQ1LjFjLTMuNSAyLjItNC42IDMuNy0xLjUgMiAyLjItMS4zIDUuOC00IDUuMi00LjEtLjMgMC0yIDEtMy43IDIuMXptLTYuOSA0LjVjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS03LjYgNGMtMy44IDItMy42IDIuOC4yLjkgMS43LS45IDMtMS44IDMtMiAwLS43LS4xLS42LTMuMiAxLjF6Ii8+PC9zdmc+'
            />
            <ScrollAniDiv direction='top-to-bottom'>
              <h3 className='mb-1 text-lg font-medium'>2. 약사: 상품 잔고 결제 및 카드 결제</h3>
              <Image
                src={'https://github.com/rhino-ty/my-image-assets/assets/94962427/f41eda06-8b8b-4258-b72c-0b26628dc638'}
                height='1440'
                width='1440'
                className='rounded-xl border border-neutral-300 group-hover/card:shadow-xl dark:border-none'
                alt='Portfolio Image'
                priority
                placeholder='blur'
                blurDataURL='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjRwdCIgdmlld0JveD0iLjUgLS4yIDEwMjMgMTAyNC4xIiB3aWR0aD0iMTAyNHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NzguNS42Yy0yLjIuMi05LjIuOS0xNS41IDEuNC0xNDUuMyAxMy4xLTI4MS40IDkxLjUtMzY3LjYgMjEyLTQ4IDY3LTc4LjcgMTQzLTkwLjMgMjIzLjUtNC4xIDI4LjEtNC42IDM2LjQtNC42IDc0LjVzLjUgNDYuNCA0LjYgNzQuNWMyNy44IDE5Mi4xIDE2NC41IDM1My41IDM0OS45IDQxMy4zIDMzLjIgMTAuNyA2OC4yIDE4IDEwOCAyMi40IDE1LjUgMS43IDgyLjUgMS43IDk4IDAgNjguNy03LjYgMTI2LjktMjQuNiAxODQuMy01My45IDguOC00LjUgMTAuNS01LjcgOS4zLTYuNy0uOC0uNi0zOC4zLTUwLjktODMuMy0xMTEuN2wtODEuOC0xMTAuNS0xMDIuNS0xNTEuN2MtNTYuNC04My40LTEwMi44LTE1MS42LTEwMy4yLTE1MS42LS40LS4xLS44IDY3LjMtMSAxNDkuNi0uMyAxNDQuMS0uNCAxNDkuOS0yLjIgMTUzLjMtMi42IDQuOS00LjYgNi45LTguOCA5LjEtMy4yIDEuNi02IDEuOS0yMS4xIDEuOWgtMTcuM2wtNC42LTIuOWMtMy0xLjktNS4yLTQuNC02LjctNy4zbC0yLjEtNC41LjItMjAwLjUuMy0yMDAuNiAzLjEtMy45YzEuNi0yLjEgNS00LjggNy40LTYuMSA0LjEtMiA1LjctMi4yIDIzLTIuMiAyMC40IDAgMjMuOC44IDI5LjEgNi42IDEuNSAxLjYgNTcgODUuMiAxMjMuNCAxODUuOXMxNTcuMiAyMzguMiAyMDEuOCAzMDUuN2w4MSAxMjIuNyA0LjEtMi43YzM2LjMtMjMuNiA3NC43LTU3LjIgMTA1LjEtOTIuMiA2NC43LTc0LjMgMTA2LjQtMTY0LjkgMTIwLjQtMjYxLjUgNC4xLTI4LjEgNC42LTM2LjQgNC42LTc0LjVzLS41LTQ2LjQtNC42LTc0LjVjLTI3LjgtMTkyLjEtMTY0LjUtMzUzLjUtMzQ5LjktNDEzLjMtMzIuNy0xMC42LTY3LjUtMTcuOS0xMDYuNS0yMi4zLTkuNi0xLTc1LjctMi4xLTg0LTEuM3ptMjA5LjQgMzA5LjRjNC44IDIuNCA4LjcgNyAxMC4xIDExLjguOCAyLjYgMSA1OC4yLjggMTgzLjVsLS4zIDE3OS44LTMxLjctNDguNi0zMS44LTQ4LjZ2LTEzMC43YzAtODQuNS40LTEzMiAxLTEzNC4zIDEuNi01LjYgNS4xLTEwIDkuOS0xMi42IDQuMS0yLjEgNS42LTIuMyAyMS4zLTIuMyAxNC44IDAgMTcuNC4yIDIwLjcgMnoiLz48cGF0aCBkPSJtNzg0LjMgOTQ1LjFjLTMuNSAyLjItNC42IDMuNy0xLjUgMiAyLjItMS4zIDUuOC00IDUuMi00LjEtLjMgMC0yIDEtMy43IDIuMXptLTYuOSA0LjVjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS03LjYgNGMtMy44IDItMy42IDIuOC4yLjkgMS43LS45IDMtMS44IDMtMiAwLS43LS4xLS42LTMuMiAxLjF6Ii8+PC9zdmc+'
              />
            </ScrollAniDiv>
            <ScrollAniDiv direction='top-to-bottom'>
              <h3 className='mb-1 text-lg font-medium'>
                3. 약사: 주문 내역 - 날짜, 카테고리 분류(URL Query 사용) 및 메모 가능
              </h3>
              <Image
                src={'https://github.com/rhino-ty/my-image-assets/assets/94962427/c1fccc9f-e85e-4ef5-8b5c-b31ebed72cd6'}
                height='1440'
                width='1440'
                className='mb-1 rounded-xl border border-neutral-300 group-hover/card:shadow-xl dark:border-none'
                alt='Portfolio Image'
                priority
                placeholder='blur'
                blurDataURL='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjRwdCIgdmlld0JveD0iLjUgLS4yIDEwMjMgMTAyNC4xIiB3aWR0aD0iMTAyNHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NzguNS42Yy0yLjIuMi05LjIuOS0xNS41IDEuNC0xNDUuMyAxMy4xLTI4MS40IDkxLjUtMzY3LjYgMjEyLTQ4IDY3LTc4LjcgMTQzLTkwLjMgMjIzLjUtNC4xIDI4LjEtNC42IDM2LjQtNC42IDc0LjVzLjUgNDYuNCA0LjYgNzQuNWMyNy44IDE5Mi4xIDE2NC41IDM1My41IDM0OS45IDQxMy4zIDMzLjIgMTAuNyA2OC4yIDE4IDEwOCAyMi40IDE1LjUgMS43IDgyLjUgMS43IDk4IDAgNjguNy03LjYgMTI2LjktMjQuNiAxODQuMy01My45IDguOC00LjUgMTAuNS01LjcgOS4zLTYuNy0uOC0uNi0zOC4zLTUwLjktODMuMy0xMTEuN2wtODEuOC0xMTAuNS0xMDIuNS0xNTEuN2MtNTYuNC04My40LTEwMi44LTE1MS42LTEwMy4yLTE1MS42LS40LS4xLS44IDY3LjMtMSAxNDkuNi0uMyAxNDQuMS0uNCAxNDkuOS0yLjIgMTUzLjMtMi42IDQuOS00LjYgNi45LTguOCA5LjEtMy4yIDEuNi02IDEuOS0yMS4xIDEuOWgtMTcuM2wtNC42LTIuOWMtMy0xLjktNS4yLTQuNC02LjctNy4zbC0yLjEtNC41LjItMjAwLjUuMy0yMDAuNiAzLjEtMy45YzEuNi0yLjEgNS00LjggNy40LTYuMSA0LjEtMiA1LjctMi4yIDIzLTIuMiAyMC40IDAgMjMuOC44IDI5LjEgNi42IDEuNSAxLjYgNTcgODUuMiAxMjMuNCAxODUuOXMxNTcuMiAyMzguMiAyMDEuOCAzMDUuN2w4MSAxMjIuNyA0LjEtMi43YzM2LjMtMjMuNiA3NC43LTU3LjIgMTA1LjEtOTIuMiA2NC43LTc0LjMgMTA2LjQtMTY0LjkgMTIwLjQtMjYxLjUgNC4xLTI4LjEgNC42LTM2LjQgNC42LTc0LjVzLS41LTQ2LjQtNC42LTc0LjVjLTI3LjgtMTkyLjEtMTY0LjUtMzUzLjUtMzQ5LjktNDEzLjMtMzIuNy0xMC42LTY3LjUtMTcuOS0xMDYuNS0yMi4zLTkuNi0xLTc1LjctMi4xLTg0LTEuM3ptMjA5LjQgMzA5LjRjNC44IDIuNCA4LjcgNyAxMC4xIDExLjguOCAyLjYgMSA1OC4yLjggMTgzLjVsLS4zIDE3OS44LTMxLjctNDguNi0zMS44LTQ4LjZ2LTEzMC43YzAtODQuNS40LTEzMiAxLTEzNC4zIDEuNi01LjYgNS4xLTEwIDkuOS0xMi42IDQuMS0yLjEgNS42LTIuMyAyMS4zLTIuMyAxNC44IDAgMTcuNC4yIDIwLjcgMnoiLz48cGF0aCBkPSJtNzg0LjMgOTQ1LjFjLTMuNSAyLjItNC42IDMuNy0xLjUgMiAyLjItMS4zIDUuOC00IDUuMi00LjEtLjMgMC0yIDEtMy43IDIuMXptLTYuOSA0LjVjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS03LjYgNGMtMy44IDItMy42IDIuOC4yLjkgMS43LS45IDMtMS44IDMtMiAwLS43LS4xLS42LTMuMiAxLjF6Ii8+PC9zdmc+'
              />
              <Image
                src={'https://github.com/rhino-ty/my-image-assets/assets/94962427/00644376-8b80-4a64-b234-ee33a7cb7e5c'}
                height='1440'
                width='1440'
                className='rounded-xl border border-neutral-300 group-hover/card:shadow-xl dark:border-none'
                alt='Portfolio Image'
                priority
                placeholder='blur'
                blurDataURL='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjRwdCIgdmlld0JveD0iLjUgLS4yIDEwMjMgMTAyNC4xIiB3aWR0aD0iMTAyNHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NzguNS42Yy0yLjIuMi05LjIuOS0xNS41IDEuNC0xNDUuMyAxMy4xLTI4MS40IDkxLjUtMzY3LjYgMjEyLTQ4IDY3LTc4LjcgMTQzLTkwLjMgMjIzLjUtNC4xIDI4LjEtNC42IDM2LjQtNC42IDc0LjVzLjUgNDYuNCA0LjYgNzQuNWMyNy44IDE5Mi4xIDE2NC41IDM1My41IDM0OS45IDQxMy4zIDMzLjIgMTAuNyA2OC4yIDE4IDEwOCAyMi40IDE1LjUgMS43IDgyLjUgMS43IDk4IDAgNjguNy03LjYgMTI2LjktMjQuNiAxODQuMy01My45IDguOC00LjUgMTAuNS01LjcgOS4zLTYuNy0uOC0uNi0zOC4zLTUwLjktODMuMy0xMTEuN2wtODEuOC0xMTAuNS0xMDIuNS0xNTEuN2MtNTYuNC04My40LTEwMi44LTE1MS42LTEwMy4yLTE1MS42LS40LS4xLS44IDY3LjMtMSAxNDkuNi0uMyAxNDQuMS0uNCAxNDkuOS0yLjIgMTUzLjMtMi42IDQuOS00LjYgNi45LTguOCA5LjEtMy4yIDEuNi02IDEuOS0yMS4xIDEuOWgtMTcuM2wtNC42LTIuOWMtMy0xLjktNS4yLTQuNC02LjctNy4zbC0yLjEtNC41LjItMjAwLjUuMy0yMDAuNiAzLjEtMy45YzEuNi0yLjEgNS00LjggNy40LTYuMSA0LjEtMiA1LjctMi4yIDIzLTIuMiAyMC40IDAgMjMuOC44IDI5LjEgNi42IDEuNSAxLjYgNTcgODUuMiAxMjMuNCAxODUuOXMxNTcuMiAyMzguMiAyMDEuOCAzMDUuN2w4MSAxMjIuNyA0LjEtMi43YzM2LjMtMjMuNiA3NC43LTU3LjIgMTA1LjEtOTIuMiA2NC43LTc0LjMgMTA2LjQtMTY0LjkgMTIwLjQtMjYxLjUgNC4xLTI4LjEgNC42LTM2LjQgNC42LTc0LjVzLS41LTQ2LjQtNC42LTc0LjVjLTI3LjgtMTkyLjEtMTY0LjUtMzUzLjUtMzQ5LjktNDEzLjMtMzIuNy0xMC42LTY3LjUtMTcuOS0xMDYuNS0yMi4zLTkuNi0xLTc1LjctMi4xLTg0LTEuM3ptMjA5LjQgMzA5LjRjNC44IDIuNCA4LjcgNyAxMC4xIDExLjguOCAyLjYgMSA1OC4yLjggMTgzLjVsLS4zIDE3OS44LTMxLjctNDguNi0zMS44LTQ4LjZ2LTEzMC43YzAtODQuNS40LTEzMiAxLTEzNC4zIDEuNi01LjYgNS4xLTEwIDkuOS0xMi42IDQuMS0yLjEgNS42LTIuMyAyMS4zLTIuMyAxNC44IDAgMTcuNC4yIDIwLjcgMnoiLz48cGF0aCBkPSJtNzg0LjMgOTQ1LjFjLTMuNSAyLjItNC42IDMuNy0xLjUgMiAyLjItMS4zIDUuOC00IDUuMi00LjEtLjMgMC0yIDEtMy43IDIuMXptLTYuOSA0LjVjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS03LjYgNGMtMy44IDItMy42IDIuOC4yLjkgMS43LS45IDMtMS44IDMtMiAwLS43LS4xLS42LTMuMiAxLjF6Ii8+PC9zdmc+'
              />
            </ScrollAniDiv>
            <ScrollAniDiv direction='top-to-bottom'>
              <h3 className='mb-1 text-lg font-medium'>4. 약사: 반품 신청 및 내역</h3>
              <Image
                src={'https://github.com/rhino-ty/my-image-assets/assets/94962427/8009b118-85aa-4e79-97da-1958297d49b4'}
                height='1440'
                width='1440'
                className='rounded-xl border border-neutral-300 group-hover/card:shadow-xl dark:border-none'
                alt='Portfolio Image'
                priority
                placeholder='blur'
                blurDataURL='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjRwdCIgdmlld0JveD0iLjUgLS4yIDEwMjMgMTAyNC4xIiB3aWR0aD0iMTAyNHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NzguNS42Yy0yLjIuMi05LjIuOS0xNS41IDEuNC0xNDUuMyAxMy4xLTI4MS40IDkxLjUtMzY3LjYgMjEyLTQ4IDY3LTc4LjcgMTQzLTkwLjMgMjIzLjUtNC4xIDI4LjEtNC42IDM2LjQtNC42IDc0LjVzLjUgNDYuNCA0LjYgNzQuNWMyNy44IDE5Mi4xIDE2NC41IDM1My41IDM0OS45IDQxMy4zIDMzLjIgMTAuNyA2OC4yIDE4IDEwOCAyMi40IDE1LjUgMS43IDgyLjUgMS43IDk4IDAgNjguNy03LjYgMTI2LjktMjQuNiAxODQuMy01My45IDguOC00LjUgMTAuNS01LjcgOS4zLTYuNy0uOC0uNi0zOC4zLTUwLjktODMuMy0xMTEuN2wtODEuOC0xMTAuNS0xMDIuNS0xNTEuN2MtNTYuNC04My40LTEwMi44LTE1MS42LTEwMy4yLTE1MS42LS40LS4xLS44IDY3LjMtMSAxNDkuNi0uMyAxNDQuMS0uNCAxNDkuOS0yLjIgMTUzLjMtMi42IDQuOS00LjYgNi45LTguOCA5LjEtMy4yIDEuNi02IDEuOS0yMS4xIDEuOWgtMTcuM2wtNC42LTIuOWMtMy0xLjktNS4yLTQuNC02LjctNy4zbC0yLjEtNC41LjItMjAwLjUuMy0yMDAuNiAzLjEtMy45YzEuNi0yLjEgNS00LjggNy40LTYuMSA0LjEtMiA1LjctMi4yIDIzLTIuMiAyMC40IDAgMjMuOC44IDI5LjEgNi42IDEuNSAxLjYgNTcgODUuMiAxMjMuNCAxODUuOXMxNTcuMiAyMzguMiAyMDEuOCAzMDUuN2w4MSAxMjIuNyA0LjEtMi43YzM2LjMtMjMuNiA3NC43LTU3LjIgMTA1LjEtOTIuMiA2NC43LTc0LjMgMTA2LjQtMTY0LjkgMTIwLjQtMjYxLjUgNC4xLTI4LjEgNC42LTM2LjQgNC42LTc0LjVzLS41LTQ2LjQtNC42LTc0LjVjLTI3LjgtMTkyLjEtMTY0LjUtMzUzLjUtMzQ5LjktNDEzLjMtMzIuNy0xMC42LTY3LjUtMTcuOS0xMDYuNS0yMi4zLTkuNi0xLTc1LjctMi4xLTg0LTEuM3ptMjA5LjQgMzA5LjRjNC44IDIuNCA4LjcgNyAxMC4xIDExLjguOCAyLjYgMSA1OC4yLjggMTgzLjVsLS4zIDE3OS44LTMxLjctNDguNi0zMS44LTQ4LjZ2LTEzMC43YzAtODQuNS40LTEzMiAxLTEzNC4zIDEuNi01LjYgNS4xLTEwIDkuOS0xMi42IDQuMS0yLjEgNS42LTIuMyAyMS4zLTIuMyAxNC44IDAgMTcuNC4yIDIwLjcgMnoiLz48cGF0aCBkPSJtNzg0LjMgOTQ1LjFjLTMuNSAyLjItNC42IDMuNy0xLjUgMiAyLjItMS4zIDUuOC00IDUuMi00LjEtLjMgMC0yIDEtMy43IDIuMXptLTYuOSA0LjVjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS03LjYgNGMtMy44IDItMy42IDIuOC4yLjkgMS43LS45IDMtMS44IDMtMiAwLS43LS4xLS42LTMuMiAxLjF6Ii8+PC9zdmc+'
              />
            </ScrollAniDiv>
          </div>
          <div className='mt-3'>
            사정 상 다 보여주지 못하지만 그 외 기능도 추가로 개발했습니다.
            <ul className='ml-4 list-disc'>
              <li>공통 : 개별 알림 설정(알리고), 배송지 설정, 회원정보 수정, 공지사항 등</li>
              <li>약국 거래업체 : 거래처 관리, 영업 관리, 상품 관리, 주문 관리, 반품 관리, 결제 관리, 정산 관리</li>
              <li>
                어드민 : 회원 관리, 상품 관리, 주문 관리, 반품 관리, 정산 관리, 장부 관리, 배너 관리, 공지사항 관리
              </li>
            </ul>
          </div>
        </article>
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
