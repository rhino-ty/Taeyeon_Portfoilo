// import colorSet, { ColorType } from '@/src/styles/color';
import { cn } from '@/utils/tailwind-merge';
import { icons } from 'lucide-react';
import { HTMLAttributes } from 'react';

export interface LucideIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  name: keyof typeof icons;
  // color?: ColorType;
  size?: number;
}

const LucideIcon = ({ name, color = 'gray9', size = 16, ...props }: LucideIconProps) => {
  const SelectLucideIcon = icons[name];

  const isClickEvent = !!props.onClick;
  const pointerStyle = isClickEvent ? 'cursor-pointer' : '';

  return (
    <SelectLucideIcon
      // color={colorSet[color]}
      size={size}
      className={cn(pointerStyle, props.className)}
      {...props}
    />
  );
};

export default LucideIcon;

{
  /* <LucideIcon
    size={16}
    name="Calendar"
    // color={triggerProps?.disabled ? 'gray6' : 'gray9'}
    className="flex flex-shrink-0"
/> */
}
