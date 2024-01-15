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
        href: 'https://www.preconstruction.app/',
      },
      {
        id: 'quadratic-ui',
        title: 'quadratic/ui',
      },
      {
        id: 'pethsapp',
        title: 'Pethsapp',
        href: '/projects/pethsapp',
      },
      {
        id: 'uwdsc',
        title: 'UWaterloo Data Science',
        href: 'https://www.uwdatascience.ca/',
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
          {group.items.map(({ id, title, href }) => {
            const className = cn(
              'font-display text-3.5 font-medium transition-colors duration-200 3xs:text-4',
              href
                ? 'text-secondary-foreground md:hover:text-primary-foreground'
                : 'text-muted-foreground'
            );

            if (!href) {
              return (
                <p className={className} key={id}>
                  {title}
                </p>
              );
            } else if (href.startsWith('/')) {
              return (
                <Link href={href} className={className} key={id}>
                  {title}
                </Link>
              );
            } else {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={className}
                  key={id}
                >
                  {title}
                </a>
              );
            }
          })}
        </div>
      ))}
    </nav>
  );
}
