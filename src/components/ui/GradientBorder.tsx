import { cn } from '@/lib/utils';

interface GradientBorderProps {
  borderRadius: string;
  className?: string;
  children: React.ReactNode;
}

export default function GradientBorder({
  borderRadius,
  className,
  children,
}: GradientBorderProps) {
  return (
    <div
      className={cn('bg-dark-border-gradient p-px', className, borderRadius)}
    >
      {children}
    </div>
  );
}
