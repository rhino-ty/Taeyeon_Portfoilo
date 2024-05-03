'use client';
import React from 'react';
import Lottie from 'lottie-react';
import MainAnimation from '@/../public/lottie/main.json';
import FunPersnalAnimation from '@/../public/lottie/fun-personal-animation.json';
import WritingAnimation from '@/../public/lottie/writing-blue-bg.json';
import Telescope from '@/../public/lottie/telescope.json';
import StrongIcon from '@/../public/lottie/strong-icon.json';

export default function Animation({ animationType, width, height }: AnimationProps) {
  const animationData = {
    fun: FunPersnalAnimation,
    writing: WritingAnimation,
    telescope: Telescope,
    strong: StrongIcon,
    default: MainAnimation,
  };

  const animation = animationData[animationType ?? 'default'];

  return (
    <div className='flex items-center justify-center'>
      <Lottie loop animationData={animation} style={{ width, height }} />
    </div>
  );
}

// 예시
//<Animation animationType="" width={} height={} />
