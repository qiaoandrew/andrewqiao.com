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
    icon: <LinkedinIcon size={20} className="text-secondary-foreground" />,
  },
  {
    id: 'github',
    title: 'GitHub',
    href: 'https://github.com/qiaoandrew',
    icon: <GithubIcon size={20} className="text-secondary-foreground" />,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    href: 'https://www.instagram.com/andrew.qiao/',
    icon: <InstagramIcon size={20} className="text-secondary-foreground" />,
  },
  {
    id: 'twitter',
    title: 'Twitter',
    href: 'https://twitter.com/andrewwqiao',
    icon: <TwitterIcon size={20} className="text-secondary-foreground" />,
  },
];
