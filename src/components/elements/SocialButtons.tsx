import { cn } from '@/lib/utils';
import { SOCIALS } from '@/constants/socials';
import { buttonVariants } from '@/components/ui/Button';
import GradientBorder from '@/components/ui/GradientBorder';

export default function SocialButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      {SOCIALS.map(({ id, title, href, icon }) => (
        <GradientBorder
          borderRadius="rounded-[7px]"
          className="size-[34px]"
          key={id}
        >
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(buttonVariants({ size: 'icon' }))}
          >
            {icon}
            <span className="sr-only">{title}</span>
          </a>
        </GradientBorder>
      ))}
    </div>
  );
}
