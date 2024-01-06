import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const fontSizeClasses = [
  {
    text: ['3', '3.5', '4', '4.5', '5', '6', '8', '9', '10', '12'],
  },
];

const textColorClasses = [
  {
    text: [
      'transparent',
      'background',
      'foreground',
      'primary',
      'primary-foreground',
      'secondary-foreground',
      'muted-foreground',
      'border',
      'ring',
      'destructive',
      'destructive-foreground',
      'destructive-border',
      'warning',
      'warning-foreground',
      'warning-border',
      'success',
      'success-foreground',
      'success-border',
    ],
  },
];

const borderRadiusClasses = [
  {
    rounded: [
      'none',
      'px',
      '0.5',
      '1',
      '1.5',
      '2',
      '2.5',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      'full',
    ],
  },
];

const customTwMerge = extendTailwindMerge<
  'font-size' | 'text-color' | 'border-radius'
>({
  extend: {
    classGroups: {
      'font-size': fontSizeClasses,
      'text-color': textColorClasses,
      'border-radius': borderRadiusClasses,
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
