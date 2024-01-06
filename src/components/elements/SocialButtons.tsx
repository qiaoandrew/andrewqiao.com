import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/Button';
import GradientBorder from '@/components/ui/GradientBorder';

const SOCIAL_BUTTONS = [
  {
    id: 'linkedin',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andrewqiao/',
    icon: <LinkedinIcon className="size-5 text-secondary-foreground" />,
  },
  {
    id: 'github',
    title: 'GitHub',
    href: 'https://github.com/qiaoandrew',
    icon: <GithubIcon className="size-5 text-secondary-foreground" />,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    href: 'https://www.instagram.com/andrew.qiao/',
    icon: <InstagramIcon className="size-5 text-secondary-foreground" />,
  },
  {
    id: 'twitter',
    title: 'Twitter',
    href: 'https://twitter.com/andrewwqiao',
    icon: <TwitterIcon className="size-5 text-secondary-foreground" />,
  },
];

export default function SocialButtons() {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {SOCIAL_BUTTONS.map(({ id, title, href, icon }) => (
        <GradientBorder borderRadius="rounded-2" key={id}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopenner"
            className={cn(buttonVariants({ size: 'icon-md' }), 'rounded-[7px]')}
          >
            {icon}
            <span className="sr-only">{title}</span>
          </a>
        </GradientBorder>
      ))}
    </div>
  );
}
