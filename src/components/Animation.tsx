import { AnimationProps } from "@/types/animationPropsType";
import React from "react";
import Lottie from "react-lottie-player";
import mainAnimation from "public/lottieJson/main-animation.json";
import funPersnalAnimation from "public/lottieJson/fun-personal-animation.json";
import writingAnimation from "public/lottieJson/writing-blue-bg.json";
import telescope from "public/lottieJson/telescope.json";
import strongIcon from "public/lottieJson/strong-icon.json";

export default function Animation({ animationType, width, height }: AnimationProps) {
  const animationData = {
    fun: funPersnalAnimation,
    writing: writingAnimation,
    telescope: telescope,
    strong: strongIcon,
    default: mainAnimation,
  };

  const animation = animationData[animationType ?? "default"];

  return <Lottie loop animationData={animation} play style={{ width, height }} />;
}

// 예시
//<Animation animationType="" width={} height={} />
