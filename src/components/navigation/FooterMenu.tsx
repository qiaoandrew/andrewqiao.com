import Link from 'next/link';

import { cn } from '@/lib/utils';

const FOOTER_MENU = [
  {
    id: 'landing',
    title: 'Landing',
    items: [
      {
        id: 'home',
        title: 'Home',
        href: '/',
      },
      {
        id: 'projects',
        title: 'Projects',
        href: '/#projects',
      },
      {
        id: 'experiences',
        title: 'Experiences',
        href: '/#experiences',
      },
      {
        id: 'about',
        title: 'About',
        href: '/#about',
      },
      {
        id: 'contact',
        title: 'Contact',
        href: '/#contact',
      },
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    items: [
      {
        id: 'remax',
        title: 'RE/MAX',
        href: '/projects/remax',
      },
      {
        id: 'quadratic-ui',
        title: 'quadratic/ui',
        href: '/projects/quadratic-ui',
      },
      {
        id: 'pethsapp',
        title: 'Pethsapp',
        href: '/projects/pethsapp',
      },
      {
        id: 'uwdsc',
        title: 'UWaterloo Data Science',
        href: '/projects/uwdsc',
      },
    ],
  },
];

export default function FooterMenu() {
  return (
    <nav className="flex justify-between gap-16">
      {FOOTER_MENU.map((group, i) => (
        <div
          className={cn(
            'flex flex-col gap-0.5',
            i === 0 ? '' : 'flex-shrink-0'
          )}
          key={group.id}
        >
          <h4 className="text-white text-3.5 font-bold 3xs:text-4">
            {group.title}
          </h4>
          {group.items.map((item) => (
            <Link
              href={item.href}
              className="font-display text-3.5 font-medium text-secondary-foreground transition-colors duration-200 hover:text-primary-foreground 3xs:text-4"
              key={item.id}
            >
              {item.title}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
