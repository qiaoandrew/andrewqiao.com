import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center whitespace-nowrap font-display font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-light-button-gradient dark:bg-dark-button-gradient',
        ghost: 'bg-transparent hover:bg-accent',
      },
      size: {
        sm: 'rounded-3 px-4 py-2.5 text-4',
        md: 'rounded-3 px-4 py-3 text-4',
        lg: 'rounded-3 px-4 py-2.5 text-4 md:rounded-4 md:px-5 md:py-3 md:text-5',
        'icon-sm': 'rounded-1.5 h-6 w-6',
        'icon-md': 'rounded-1.5 h-8 w-8',
        'icon-lg': 'rounded-2 h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
