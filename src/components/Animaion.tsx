import { AnimationProps } from "@/types/animationPropsType";
import React from "react";
import Lottie from "react-lottie-player";

export default function Animation({ lottieJson, width, height }: AnimationProps) {
  return <Lottie loop animationData={lottieJson} play style={{ width, height }} />;
}
