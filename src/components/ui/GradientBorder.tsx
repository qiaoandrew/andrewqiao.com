import { cn } from '@/lib/utils';

type GradientBorderProps = {
  borderRadius: string;
  children: React.ReactNode;
};

export default function GradientBorder({
  borderRadius,
  children,
}: GradientBorderProps) {
  return (
    <div className={cn('bg-dark-border-gradient p-px', borderRadius)}>
      {children}
    </div>
  );
}