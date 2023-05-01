import { AnimationProps } from "@/types/animationPropsType";
import React from "react";
import Lottie from "react-lottie-player";
import mainAnimation from "public/lottieJson/main-animation.json";
import funPersnalAnimation from "public/lottieJson/fun-personal-animation.json";
import writingAnimation from "public/lottieJson/writing-blue-bg.json";
import telescope from "public/lottieJson/telescope.json";
import strongIcon from "public/lottieJson/strong-icon.json";

export default function Animation({ lottieJson, width, height }: AnimationProps) {
  if (lottieJson === "fun") {
    return <Lottie loop animationData={funPersnalAnimation} play style={{ width, height }} />;
  }
  if (lottieJson === "writing") {
    return <Lottie loop animationData={writingAnimation} play style={{ width, height }} />;
  }
  if (lottieJson === "telescope") {
    return <Lottie loop animationData={telescope} play style={{ width, height }} />;
  }
  if (lottieJson === "strong") {
    return <Lottie loop animationData={strongIcon} play style={{ width, height }} />;
  }

  return <Lottie loop animationData={mainAnimation} play style={{ width, height }} />;
}
