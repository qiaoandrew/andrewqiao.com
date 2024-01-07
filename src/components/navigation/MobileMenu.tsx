'use client';

import { useState } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';

const LINKS = [
  {
    id: 'home',
    title: 'Home',
    href: '/#',
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
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col gap-[5px] md:hidden"
        >
          <div
            className={cn(
              'h-[5px] w-[22px] rounded-full bg-light-text-gradient transition-transform duration-200 ease-out dark:bg-dark-text-gradient',
              isOpen ? 'translate-x-[10px]' : ''
            )}
          />
          <div className="h-[5px] w-8 rounded-full bg-light-text-gradient dark:bg-dark-text-gradient" />
          <div
            className={cn(
              'h-[5px] w-[22px] self-end rounded-full bg-light-text-gradient transition-transform duration-200 ease-out dark:bg-dark-text-gradient',
              isOpen ? '-translate-x-[10px]' : ''
            )}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={36}
        className="grid w-[calc(100vw-40px)] rounded-4 bg-background/90 py-3 backdrop-blur-sm md:hidden"
      >
        {LINKS.map(({ id, title, href }) => (
          <PopoverClose asChild key={id}>
            <Link
              href={href}
              className="block py-1.5 text-center font-display text-4 font-medium"
            >
              {title}
            </Link>
          </PopoverClose>
        ))}
      </PopoverContent>
    </Popover>
  );
}
