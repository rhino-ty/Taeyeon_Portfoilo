interface AnimationProps {
  animationType?: AnimationType;
  width: number;
  height: number;
}

type AnimationType = 'fun' | 'writing' | 'telescope' | 'strong' | 'default';
