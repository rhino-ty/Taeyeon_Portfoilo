interface AnimationProps extends React.HTMLProps<HTMLDivElement> {
  animationType?: AnimationType;
  width: number;
  height: number;
}

type AnimationType = 'fun' | 'writing' | 'telescope' | 'strong' | 'default';
