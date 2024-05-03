'use client';
import { cn } from '@/utils/tailwind-merge';
import React, { createContext, useState, useContext, useRef, useEffect } from 'react';

// 마우스 진입 상태를 관리하기 위한 컨텍스트. 이 컨텍스트는 CardContainer 내부의 마우스 상태를 CardBody와 CardItem 등 자식 컴포넌트에 전달해
// 상태 공유를 가능케 함. 이를 통해 상태 관리 로직의 중복을 방지하고 컴포넌트 간 결합도를 낮춤.
const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(
  undefined,
);

/**
 * CardItem 컴포넌트는 사용자 지정 태그와 3D 변환 효과를 적용할 수 있음.
 * 마우스 진입 상태에 따라 지정된 3D 변환(이동, 회전)을 동적으로 적용.
 *
 * @param {React.ReactNode} children - 이 컴포넌트가 포함할 자식 요소.
 * @param {string} className - 이 컴포넌트에 적용할 CSS 클래스. 안 쪽 컨테이너.
 * @param {string} containerClassName - 이 컴포넌트에 적용할 CSS 클래스. 바깥 컨테이너.
 */
export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  // 카드 컨테이너의 참조.
  const containerRef = useRef<HTMLDivElement>(null);
  // 마우스 진입 상태 관리.
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  // 마우스 움직임에 따라 카드의 3D 회전을 처리.
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  // 마우스 진입 시 이벤트 처리.
  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn('flex items-center justify-center py-10', containerClassName)}
        style={{
          perspective: '1000px',
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn('relative flex items-center justify-center transition-all duration-200 ease-linear', className)}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

/** CardBody는 자식 요소들에게 3D 트랜스폼 스타일을 적용하여 보여주는 컨테이너 역할.
 * 이 컴포넌트는 크기가 정해져 있고, 내부 요소들도 3D 스타일을 유지할 수 있도록 설정.
 *
 * @param {React.ReactNode} children - 이 컴포넌트가 포함할 자식 요소.
 * @param {string} className - 이 컴포넌트에 적용할 CSS 클래스.
 */
export const CardBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    // CardBody 부분에 'preserve-3d' 변환 스타일을 설정해 3D 변환 효과가 일관되게 렌더링되도록 함.
    <div className={cn('h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]', className)}>
      {children}
    </div>
  );
};

/**
 * CardItem 컴포넌트는 사용자 지정 태그와 3D 변환 효과를 적용할 수 있음.
 * 마우스 진입 상태에 따라 지정된 3D 변환(이동, 회전)을 동적으로 적용.
 *
 * @param {React.ElementType} as - 컴포넌트의 'article' 등 tag 유형을 입력해 변경할 수 있음. 기본값은 'div'.
 * @param {React.ReactNode} children - 이 컴포넌트가 포함할 자식 요소.
 * @param {string} className - 이 컴포넌트에 적용할 CSS 클래스.
 * @param {number|string} translateX - X축 이동 거리. 기본값은 0.
 * @param {number|string} translateY - Y축 이동 거리. 기본값은 0.
 * @param {number|string} translateZ - Z축 이동 거리. 기본값은 0.
 * @param {number|string} rotateX - X축 회전 각도. 기본값은 0.
 * @param {number|string} rotateY - Y축 회전 각도. 기본값은 0.
 * @param {number|string} rotateZ - Z축 회전 각도. 기본값은 0.
 * @param {object} rest - 추가적인 속성을 이 컴포넌트에 전달할 수 있음.
 */
export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  // 마우스 진입 상태를 관리하는 커스텀 훅을 사용.
  const [isMouseEntered] = useMouseEnter();

  // 컴포넌트가 마운트될 때 및 마우스 진입 상태가 변경될 때 애니메이션 함수를 실행.
  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    // DOM 레퍼런스가 없으면 함수를 종료
    if (!ref.current) return;
    // 마우스가 진입한 상태일 때 정의된 3D 변환을 적용.
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    }
    // 마우스가 진입하지 않은 상태일 때 모든 변환을 초기 상태로 되돌림.
    else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    // `as` prop을 통해 이 컴포넌트가 렌더링될 HTML 태그를 지정; 기본값은 'div'.
    <Tag ref={ref} className={cn('w-fit transition duration-200 ease-linear', className)} {...rest}>
      {children}
    </Tag>
  );
};

// `MouseEnterContext`를 사용하여 컨텍스트 값을 가져오는 훅, 반드시 `MouseEnterProvider` 내에서 사용해야 함.
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider');
  }
  return context;
};
