import { Metadata } from 'next';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Image from 'next/image';
import ScrollAniDiv from '@/components/scroll-ani-div';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
    <main className='container grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-10 xl:gap-0'>
      <ScrollAniDiv direction='top-to-bottom'>
        <CardContainer className='inter-var'>
          <CardBody className='group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] xl:w-[33rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]'>
            <CardItem
              translateY='-5'
              translateZ='50'
              className='text-xl font-bold text-neutral-800 xl:text-2xl dark:text-white'
            >
              플랫팜(Platpharm)
            </CardItem>
            <CardItem
              as='p'
              translateY='-10'
              translateZ='60'
              className='mt-2 text-sm font-medium text-neutral-700 xl:text-base dark:text-neutral-300'
            >
              B2B 거래 제약 중개 플랫폼, 제약품 탐색-결제-배송-장부 관리 웹
            </CardItem>
            <CardItem translateZ='100' className='mt-4 w-full'>
              <Image
                src='https://github.com/rhino-ty/my-image-assets/assets/94962427/62ba1e4b-ec8c-4ab0-9cb7-0bb68fe5fb13'
                height='1000'
                width='1000'
                className='h-60 w-full rounded-xl border border-neutral-300 object-cover group-hover/card:shadow-xl xl:h-72 dark:border-none'
                alt='Portfolio Image'
                priority
                placeholder='blur'
                blurDataURL='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjRwdCIgdmlld0JveD0iLjUgLS4yIDEwMjMgMTAyNC4xIiB3aWR0aD0iMTAyNHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NzguNS42Yy0yLjIuMi05LjIuOS0xNS41IDEuNC0xNDUuMyAxMy4xLTI4MS40IDkxLjUtMzY3LjYgMjEyLTQ4IDY3LTc4LjcgMTQzLTkwLjMgMjIzLjUtNC4xIDI4LjEtNC42IDM2LjQtNC42IDc0LjVzLjUgNDYuNCA0LjYgNzQuNWMyNy44IDE5Mi4xIDE2NC41IDM1My41IDM0OS45IDQxMy4zIDMzLjIgMTAuNyA2OC4yIDE4IDEwOCAyMi40IDE1LjUgMS43IDgyLjUgMS43IDk4IDAgNjguNy03LjYgMTI2LjktMjQuNiAxODQuMy01My45IDguOC00LjUgMTAuNS01LjcgOS4zLTYuNy0uOC0uNi0zOC4zLTUwLjktODMuMy0xMTEuN2wtODEuOC0xMTAuNS0xMDIuNS0xNTEuN2MtNTYuNC04My40LTEwMi44LTE1MS42LTEwMy4yLTE1MS42LS40LS4xLS44IDY3LjMtMSAxNDkuNi0uMyAxNDQuMS0uNCAxNDkuOS0yLjIgMTUzLjMtMi42IDQuOS00LjYgNi45LTguOCA5LjEtMy4yIDEuNi02IDEuOS0yMS4xIDEuOWgtMTcuM2wtNC42LTIuOWMtMy0xLjktNS4yLTQuNC02LjctNy4zbC0yLjEtNC41LjItMjAwLjUuMy0yMDAuNiAzLjEtMy45YzEuNi0yLjEgNS00LjggNy40LTYuMSA0LjEtMiA1LjctMi4yIDIzLTIuMiAyMC40IDAgMjMuOC44IDI5LjEgNi42IDEuNSAxLjYgNTcgODUuMiAxMjMuNCAxODUuOXMxNTcuMiAyMzguMiAyMDEuOCAzMDUuN2w4MSAxMjIuNyA0LjEtMi43YzM2LjMtMjMuNiA3NC43LTU3LjIgMTA1LjEtOTIuMiA2NC43LTc0LjMgMTA2LjQtMTY0LjkgMTIwLjQtMjYxLjUgNC4xLTI4LjEgNC42LTM2LjQgNC42LTc0LjVzLS41LTQ2LjQtNC42LTc0LjVjLTI3LjgtMTkyLjEtMTY0LjUtMzUzLjUtMzQ5LjktNDEzLjMtMzIuNy0xMC42LTY3LjUtMTcuOS0xMDYuNS0yMi4zLTkuNi0xLTc1LjctMi4xLTg0LTEuM3ptMjA5LjQgMzA5LjRjNC44IDIuNCA4LjcgNyAxMC4xIDExLjguOCAyLjYgMSA1OC4yLjggMTgzLjVsLS4zIDE3OS44LTMxLjctNDguNi0zMS44LTQ4LjZ2LTEzMC43YzAtODQuNS40LTEzMiAxLTEzNC4zIDEuNi01LjYgNS4xLTEwIDkuOS0xMi42IDQuMS0yLjEgNS42LTIuMyAyMS4zLTIuMyAxNC44IDAgMTcuNC4yIDIwLjcgMnoiLz48cGF0aCBkPSJtNzg0LjMgOTQ1LjFjLTMuNSAyLjItNC42IDMuNy0xLjUgMiAyLjItMS4zIDUuOC00IDUuMi00LjEtLjMgMC0yIDEtMy43IDIuMXptLTYuOSA0LjVjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS03LjYgNGMtMy44IDItMy42IDIuOC4yLjkgMS43LS45IDMtMS44IDMtMiAwLS43LS4xLS42LTMuMiAxLjF6Ii8+PC9zdmc+'
              />
            </CardItem>
            <CardItem
              translateY='10'
              translateZ='100'
              className='my-5 flex w-[80vw] gap-0.5 overflow-x-scroll sm:w-full'
            >
              <Badge>Next.JS App router</Badge>
              <Badge>TypeScript</Badge>
              <Badge variant={'secondary'}>TanStack Query</Badge>
              <Badge variant={'secondary'}>Tailwind CSS</Badge>
              <Badge variant={'secondary'}>MUI</Badge>
              <Badge variant={'secondary'}>Zustand</Badge>
            </CardItem>
            {/* <div className='mt-7 flex items-center justify-end'>
              <CardItem
                translateZ='20'
                translateX='20'
                as='button'
                className='rounded-xl text-xs font-normal xl:text-sm dark:text-white'
              >
                <Button variant={'link'}>자세히 보기 →</Button>
              </CardItem>
            </div> */}
          </CardBody>
        </CardContainer>
      </ScrollAniDiv>

      <ScrollAniDiv direction='top-to-bottom'>
        <CardContainer className='inter-var'>
          <CardBody className='group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] xl:w-[33rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  '>
            <CardItem
              translateY='-5'
              translateZ='50'
              className='text-xl font-bold text-neutral-800 xl:text-2xl dark:text-white'
            >
              바젠(VarGen)
            </CardItem>
            <CardItem
              as='p'
              translateY='-10'
              translateZ='60'
              className='mt-2 text-sm font-medium text-neutral-700 xl:text-base dark:text-neutral-300'
            >
              변수를 생성할 때, 고민을 더 덜어줄 변수 생성 웹
            </CardItem>
            <CardItem translateZ='100' className='mt-4 w-full'>
              <Image
                src='https://user-images.githubusercontent.com/94962427/229331924-242f7b8f-fe80-4fec-a2ba-c0705c0ed34e.gif'
                height='1000'
                width='1000'
                className='h-60 w-full rounded-xl border border-neutral-300 object-cover group-hover/card:shadow-xl xl:h-72 dark:border-none'
                alt='Portfolio Image'
                priority
                placeholder='blur'
                blurDataURL='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjRwdCIgdmlld0JveD0iLjUgLS4yIDEwMjMgMTAyNC4xIiB3aWR0aD0iMTAyNHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NzguNS42Yy0yLjIuMi05LjIuOS0xNS41IDEuNC0xNDUuMyAxMy4xLTI4MS40IDkxLjUtMzY3LjYgMjEyLTQ4IDY3LTc4LjcgMTQzLTkwLjMgMjIzLjUtNC4xIDI4LjEtNC42IDM2LjQtNC42IDc0LjVzLjUgNDYuNCA0LjYgNzQuNWMyNy44IDE5Mi4xIDE2NC41IDM1My41IDM0OS45IDQxMy4zIDMzLjIgMTAuNyA2OC4yIDE4IDEwOCAyMi40IDE1LjUgMS43IDgyLjUgMS43IDk4IDAgNjguNy03LjYgMTI2LjktMjQuNiAxODQuMy01My45IDguOC00LjUgMTAuNS01LjcgOS4zLTYuNy0uOC0uNi0zOC4zLTUwLjktODMuMy0xMTEuN2wtODEuOC0xMTAuNS0xMDIuNS0xNTEuN2MtNTYuNC04My40LTEwMi44LTE1MS42LTEwMy4yLTE1MS42LS40LS4xLS44IDY3LjMtMSAxNDkuNi0uMyAxNDQuMS0uNCAxNDkuOS0yLjIgMTUzLjMtMi42IDQuOS00LjYgNi45LTguOCA5LjEtMy4yIDEuNi02IDEuOS0yMS4xIDEuOWgtMTcuM2wtNC42LTIuOWMtMy0xLjktNS4yLTQuNC02LjctNy4zbC0yLjEtNC41LjItMjAwLjUuMy0yMDAuNiAzLjEtMy45YzEuNi0yLjEgNS00LjggNy40LTYuMSA0LjEtMiA1LjctMi4yIDIzLTIuMiAyMC40IDAgMjMuOC44IDI5LjEgNi42IDEuNSAxLjYgNTcgODUuMiAxMjMuNCAxODUuOXMxNTcuMiAyMzguMiAyMDEuOCAzMDUuN2w4MSAxMjIuNyA0LjEtMi43YzM2LjMtMjMuNiA3NC43LTU3LjIgMTA1LjEtOTIuMiA2NC43LTc0LjMgMTA2LjQtMTY0LjkgMTIwLjQtMjYxLjUgNC4xLTI4LjEgNC42LTM2LjQgNC42LTc0LjVzLS41LTQ2LjQtNC42LTc0LjVjLTI3LjgtMTkyLjEtMTY0LjUtMzUzLjUtMzQ5LjktNDEzLjMtMzIuNy0xMC42LTY3LjUtMTcuOS0xMDYuNS0yMi4zLTkuNi0xLTc1LjctMi4xLTg0LTEuM3ptMjA5LjQgMzA5LjRjNC44IDIuNCA4LjcgNyAxMC4xIDExLjguOCAyLjYgMSA1OC4yLjggMTgzLjVsLS4zIDE3OS44LTMxLjctNDguNi0zMS44LTQ4LjZ2LTEzMC43YzAtODQuNS40LTEzMiAxLTEzNC4zIDEuNi01LjYgNS4xLTEwIDkuOS0xMi42IDQuMS0yLjEgNS42LTIuMyAyMS4zLTIuMyAxNC44IDAgMTcuNC4yIDIwLjcgMnoiLz48cGF0aCBkPSJtNzg0LjMgOTQ1LjFjLTMuNSAyLjItNC42IDMuNy0xLjUgMiAyLjItMS4zIDUuOC00IDUuMi00LjEtLjMgMC0yIDEtMy43IDIuMXptLTYuOSA0LjVjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS03LjYgNGMtMy44IDItMy42IDIuOC4yLjkgMS43LS45IDMtMS44IDMtMiAwLS43LS4xLS42LTMuMiAxLjF6Ii8+PC9zdmc+'
              />
            </CardItem>
            <CardItem
              translateY='10'
              translateZ='100'
              className='my-5 flex w-[80vw] gap-0.5 overflow-x-scroll sm:w-full'
            >
              <Badge>Next.JS Page router</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Open AI</Badge>
              <Badge variant={'secondary'}>Tailwind CSS</Badge>
              <Badge variant={'secondary'}>TanStack Query</Badge>
            </CardItem>
            {/* <div className='mt-7 flex items-center justify-end'>
              <CardItem
                translateZ='20'
                translateX='20'
                as='button'
                className='rounded-xl text-xs font-normal xl:text-sm dark:text-white'
              >
                <Button variant={'link'}>자세히 보기 →</Button>
              </CardItem>
            </div> */}
          </CardBody>
        </CardContainer>
      </ScrollAniDiv>

      <ScrollAniDiv direction='top-to-bottom'>
        <CardContainer className='inter-var'>
          <CardBody className='group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] xl:w-[33rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  '>
            <CardItem
              translateY='-5'
              translateZ='50'
              className='text-xl font-bold text-neutral-800 xl:text-2xl dark:text-white'
            >
              dicom-exhibition-sugarpole
            </CardItem>
            <CardItem
              as='p'
              translateY='-10'
              translateZ='60'
              className='mt-2 text-sm font-medium text-neutral-700 xl:text-base dark:text-neutral-300'
            >
              의료용 이미지 배치 및 조작을 위한 DICOM 전시용 웹
            </CardItem>
            <CardItem translateZ='100' className='mt-4 w-full'>
              <Image
                src='https://github.com/rhino-ty/dicom-exhibition-sugarpole/assets/94962427/67fbc9c6-2658-4d67-a3aa-fb0e8737eca4'
                height='1000'
                width='1000'
                className='h-60 w-full rounded-xl border border-neutral-300 object-cover group-hover/card:shadow-xl xl:h-72 dark:border-none'
                alt='Portfolio Image'
                priority
                placeholder='blur'
                blurDataURL='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjRwdCIgdmlld0JveD0iLjUgLS4yIDEwMjMgMTAyNC4xIiB3aWR0aD0iMTAyNHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NzguNS42Yy0yLjIuMi05LjIuOS0xNS41IDEuNC0xNDUuMyAxMy4xLTI4MS40IDkxLjUtMzY3LjYgMjEyLTQ4IDY3LTc4LjcgMTQzLTkwLjMgMjIzLjUtNC4xIDI4LjEtNC42IDM2LjQtNC42IDc0LjVzLjUgNDYuNCA0LjYgNzQuNWMyNy44IDE5Mi4xIDE2NC41IDM1My41IDM0OS45IDQxMy4zIDMzLjIgMTAuNyA2OC4yIDE4IDEwOCAyMi40IDE1LjUgMS43IDgyLjUgMS43IDk4IDAgNjguNy03LjYgMTI2LjktMjQuNiAxODQuMy01My45IDguOC00LjUgMTAuNS01LjcgOS4zLTYuNy0uOC0uNi0zOC4zLTUwLjktODMuMy0xMTEuN2wtODEuOC0xMTAuNS0xMDIuNS0xNTEuN2MtNTYuNC04My40LTEwMi44LTE1MS42LTEwMy4yLTE1MS42LS40LS4xLS44IDY3LjMtMSAxNDkuNi0uMyAxNDQuMS0uNCAxNDkuOS0yLjIgMTUzLjMtMi42IDQuOS00LjYgNi45LTguOCA5LjEtMy4yIDEuNi02IDEuOS0yMS4xIDEuOWgtMTcuM2wtNC42LTIuOWMtMy0xLjktNS4yLTQuNC02LjctNy4zbC0yLjEtNC41LjItMjAwLjUuMy0yMDAuNiAzLjEtMy45YzEuNi0yLjEgNS00LjggNy40LTYuMSA0LjEtMiA1LjctMi4yIDIzLTIuMiAyMC40IDAgMjMuOC44IDI5LjEgNi42IDEuNSAxLjYgNTcgODUuMiAxMjMuNCAxODUuOXMxNTcuMiAyMzguMiAyMDEuOCAzMDUuN2w4MSAxMjIuNyA0LjEtMi43YzM2LjMtMjMuNiA3NC43LTU3LjIgMTA1LjEtOTIuMiA2NC43LTc0LjMgMTA2LjQtMTY0LjkgMTIwLjQtMjYxLjUgNC4xLTI4LjEgNC42LTM2LjQgNC42LTc0LjVzLS41LTQ2LjQtNC42LTc0LjVjLTI3LjgtMTkyLjEtMTY0LjUtMzUzLjUtMzQ5LjktNDEzLjMtMzIuNy0xMC42LTY3LjUtMTcuOS0xMDYuNS0yMi4zLTkuNi0xLTc1LjctMi4xLTg0LTEuM3ptMjA5LjQgMzA5LjRjNC44IDIuNCA4LjcgNyAxMC4xIDExLjguOCAyLjYgMSA1OC4yLjggMTgzLjVsLS4zIDE3OS44LTMxLjctNDguNi0zMS44LTQ4LjZ2LTEzMC43YzAtODQuNS40LTEzMiAxLTEzNC4zIDEuNi01LjYgNS4xLTEwIDkuOS0xMi42IDQuMS0yLjEgNS42LTIuMyAyMS4zLTIuMyAxNC44IDAgMTcuNC4yIDIwLjcgMnoiLz48cGF0aCBkPSJtNzg0LjMgOTQ1LjFjLTMuNSAyLjItNC42IDMuNy0xLjUgMiAyLjItMS4zIDUuOC00IDUuMi00LjEtLjMgMC0yIDEtMy43IDIuMXptLTYuOSA0LjVjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS03LjYgNGMtMy44IDItMy42IDIuOC4yLjkgMS43LS45IDMtMS44IDMtMiAwLS43LS4xLS42LTMuMiAxLjF6Ii8+PC9zdmc+'
              />
            </CardItem>
            <CardItem
              translateY='10'
              translateZ='100'
              className='my-5 flex w-[80vw] gap-0.5 overflow-x-scroll sm:w-full'
            >
              <Badge>React 18</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Cornerstone.js</Badge>
              <Badge variant={'secondary'}>Tailwind CSS</Badge>
              <Badge variant={'secondary'}>shadcn/ui</Badge>
            </CardItem>
            {/* <div className='mt-7 flex items-center justify-end'>
              <CardItem
                translateZ='20'
                translateX='20'
                as='button'
                className='rounded-xl text-xs font-normal xl:text-sm dark:text-white'
              >
                <Button variant={'link'}>자세히 보기 →</Button>
              </CardItem>
            </div> */}
          </CardBody>
        </CardContainer>
      </ScrollAniDiv>

      <ScrollAniDiv direction='top-to-bottom'>
        <CardContainer className='inter-var'>
          <CardBody className='group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] xl:w-[33rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  '>
            <CardItem
              translateY='-5'
              translateZ='50'
              className='text-xl font-bold text-neutral-800 xl:text-2xl dark:text-white'
            >
              맛피(Mat.P)
            </CardItem>
            <CardItem
              as='p'
              translateY='-10'
              translateZ='60'
              className='mt-2 text-sm font-medium text-neutral-700 xl:text-base dark:text-neutral-300'
            >
              맛집에 대한 경험을 공유하고, 직접 저장할 수 있는 맛집 지도 SNS 웹
            </CardItem>
            <CardItem translateZ='100' className='mt-4 w-full'>
              <Image
                src='https://user-images.githubusercontent.com/94962427/216276170-98a714cf-d7e1-4f7c-8ae4-60445664f485.gif'
                height='1000'
                width='1000'
                className='h-60 w-full rounded-xl border border-neutral-300 object-cover group-hover/card:shadow-xl xl:h-72 dark:border-none'
                alt='Portfolio Image'
                priority
                placeholder='blur'
                blurDataURL='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjRwdCIgdmlld0JveD0iLjUgLS4yIDEwMjMgMTAyNC4xIiB3aWR0aD0iMTAyNHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NzguNS42Yy0yLjIuMi05LjIuOS0xNS41IDEuNC0xNDUuMyAxMy4xLTI4MS40IDkxLjUtMzY3LjYgMjEyLTQ4IDY3LTc4LjcgMTQzLTkwLjMgMjIzLjUtNC4xIDI4LjEtNC42IDM2LjQtNC42IDc0LjVzLjUgNDYuNCA0LjYgNzQuNWMyNy44IDE5Mi4xIDE2NC41IDM1My41IDM0OS45IDQxMy4zIDMzLjIgMTAuNyA2OC4yIDE4IDEwOCAyMi40IDE1LjUgMS43IDgyLjUgMS43IDk4IDAgNjguNy03LjYgMTI2LjktMjQuNiAxODQuMy01My45IDguOC00LjUgMTAuNS01LjcgOS4zLTYuNy0uOC0uNi0zOC4zLTUwLjktODMuMy0xMTEuN2wtODEuOC0xMTAuNS0xMDIuNS0xNTEuN2MtNTYuNC04My40LTEwMi44LTE1MS42LTEwMy4yLTE1MS42LS40LS4xLS44IDY3LjMtMSAxNDkuNi0uMyAxNDQuMS0uNCAxNDkuOS0yLjIgMTUzLjMtMi42IDQuOS00LjYgNi45LTguOCA5LjEtMy4yIDEuNi02IDEuOS0yMS4xIDEuOWgtMTcuM2wtNC42LTIuOWMtMy0xLjktNS4yLTQuNC02LjctNy4zbC0yLjEtNC41LjItMjAwLjUuMy0yMDAuNiAzLjEtMy45YzEuNi0yLjEgNS00LjggNy40LTYuMSA0LjEtMiA1LjctMi4yIDIzLTIuMiAyMC40IDAgMjMuOC44IDI5LjEgNi42IDEuNSAxLjYgNTcgODUuMiAxMjMuNCAxODUuOXMxNTcuMiAyMzguMiAyMDEuOCAzMDUuN2w4MSAxMjIuNyA0LjEtMi43YzM2LjMtMjMuNiA3NC43LTU3LjIgMTA1LjEtOTIuMiA2NC43LTc0LjMgMTA2LjQtMTY0LjkgMTIwLjQtMjYxLjUgNC4xLTI4LjEgNC42LTM2LjQgNC42LTc0LjVzLS41LTQ2LjQtNC42LTc0LjVjLTI3LjgtMTkyLjEtMTY0LjUtMzUzLjUtMzQ5LjktNDEzLjMtMzIuNy0xMC42LTY3LjUtMTcuOS0xMDYuNS0yMi4zLTkuNi0xLTc1LjctMi4xLTg0LTEuM3ptMjA5LjQgMzA5LjRjNC44IDIuNCA4LjcgNyAxMC4xIDExLjguOCAyLjYgMSA1OC4yLjggMTgzLjVsLS4zIDE3OS44LTMxLjctNDguNi0zMS44LTQ4LjZ2LTEzMC43YzAtODQuNS40LTEzMiAxLTEzNC4zIDEuNi01LjYgNS4xLTEwIDkuOS0xMi42IDQuMS0yLjEgNS42LTIuMyAyMS4zLTIuMyAxNC44IDAgMTcuNC4yIDIwLjcgMnoiLz48cGF0aCBkPSJtNzg0LjMgOTQ1LjFjLTMuNSAyLjItNC42IDMuNy0xLjUgMiAyLjItMS4zIDUuOC00IDUuMi00LjEtLjMgMC0yIDEtMy43IDIuMXptLTYuOSA0LjVjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS01IDNjLTEuOCAxLjQtMS44IDEuNS40LjQgMS4yLS42IDIuMi0xLjMgMi4yLTEuNSAwLS44LS41LS42LTIuNiAxLjF6bS03LjYgNGMtMy44IDItMy42IDIuOC4yLjkgMS43LS45IDMtMS44IDMtMiAwLS43LS4xLS42LTMuMiAxLjF6Ii8+PC9zdmc+'
              />
            </CardItem>
            <CardItem
              translateY='10'
              translateZ='100'
              className='my-5 flex w-[80vw] gap-0.5 overflow-x-scroll sm:w-full'
            >
              <Badge>Next.JS Page router</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Kakao Maps SDK</Badge>
              <Badge variant={'secondary'}>Styled Components</Badge>
              <Badge variant={'secondary'}>Recoil</Badge>
            </CardItem>
            {/* <div className='mt-7 flex items-center justify-end'>
              <CardItem
                translateZ='20'
                translateX='20'
                as='button'
                className='rounded-xl text-xs font-normal xl:text-sm dark:text-white'
              >
                <Button variant={'link'}>자세히 보기 →</Button>
              </CardItem>
            </div> */}
          </CardBody>
        </CardContainer>
      </ScrollAniDiv>
    </main>
  );
}
