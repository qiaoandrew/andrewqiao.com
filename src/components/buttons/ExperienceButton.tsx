import type { LucideIcon } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import GradientBorder from '@/components/ui/GradientBorder';

type ExperienceButtonProps = {
  children: React.ReactNode;
  Icon: LucideIcon;
};

export default function ExperienceButton({
  children,
  Icon,
}: ExperienceButtonProps) {
  return (
    <GradientBorder borderRadius="rounded-[11px]">
      <Button size="sm" className="w-full xs:gap-2.5 xs:pl-3">
        <Icon
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground xs:relative xs:right-auto xs:top-auto xs:translate-y-0 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 lg:relative lg:right-auto lg:top-auto lg:translate-y-0"
        />
        {children}
      </Button>
    </GradientBorder>
  );
}
