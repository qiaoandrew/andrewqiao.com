import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
} from 'lucide-react';

export const SOCIALS = [
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