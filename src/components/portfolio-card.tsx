import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { PortfolioCardItem } from '@/types/portfolio-card.types';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ScrollAniDiv from './scroll-ani-div';

const PortfolioCard: React.FC<PortfolioCardItem> = ({ title, description, imageUrl, badges, modalContent }) => {
  return (
    <ScrollAniDiv direction='top-to-bottom'>
      <CardContainer className='inter-var'>
        <CardBody className='group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] xl:w-[35rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]'>
          <CardItem
            translateY='-5'
            translateZ='50'
            className='text-xl font-bold text-neutral-800 xl:text-2xl dark:text-white'
          >
            {title}
          </CardItem>
          <CardItem
            as='p'
            translateY='-10'
            translateZ='60'
            className='mt-2 text-sm font-medium text-neutral-700 xl:text-base dark:text-neutral-300'
          >
            {description}
          </CardItem>
          <CardItem translateZ='100' className='mt-4 w-full'>
            <Image
              src={imageUrl}
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
            className='scrollbar-custom mt-5 flex w-[80vw] gap-0.5 overflow-x-scroll pb-0.5 sm:w-full'
          >
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant || 'default'}>
                {badge.text}
              </Badge>
            ))}
          </CardItem>
          <div className='mt-5 flex items-center justify-end'>
            {modalContent ? (
              <CardItem
                translateZ='20'
                translateX='20'
                as='div'
                className='rounded-xl text-xs font-normal xl:text-sm dark:text-white'
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant={'link'}>자세히 보기 →</Button>
                  </DialogTrigger>
                  <DialogContent className='h-[80vh] w-11/12 max-w-2xl overflow-scroll sm:w-3/4'>
                    <DialogHeader>
                      <DialogTitle className='mb-2 text-xl lg:text-2xl'>{title}</DialogTitle>
                      {modalContent}
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type='button' className='w-full text-base font-semibold'>
                          닫기
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardItem>
            ) : (
              <Button variant={'link'} disabled>
                자세히 보기 →
              </Button>
            )}
          </div>
        </CardBody>
      </CardContainer>
    </ScrollAniDiv>
  );
};

export default PortfolioCard;
