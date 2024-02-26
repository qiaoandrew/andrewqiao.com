'use client';

import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu';
import NavigationMenuItemsCardList from '@/components/navigation/NavigationMenuItemsCardList';
import NavigationMenuListItemCard from '@/components/navigation/NavigationMenuListItemCard';
import NavigationMenuListItem from '@/components/navigation/NavigationMenulistItem';

export default function Navbar() {
  return (
    <NavigationMenu className="hidden font-display md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="#projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuItemsCardList>
              <NavigationMenuListItemCard
                title="RE/MAX"
                href="/projects/remax"
                isRoute
              >
                Web app developed for Canada&apos;s leading real estate company.
              </NavigationMenuListItemCard>
              <NavigationMenuListItem
                title="quadratic/ui"
                href="/projects/quadratic-ui"
                isRoute
                disabled
              >
                A Next.js component library. Coming soon...
              </NavigationMenuListItem>
              <NavigationMenuListItem
                title="Pethsapp"
                href="/projects/pethsapp"
                isRoute
              >
                Mobile app developed for my former high school.
              </NavigationMenuListItem>
              <NavigationMenuListItem
                title="UW Data Science"
                href="/projects/uwdsc"
                isRoute
              >
                Website developed for the UWaterloo Data Science Club.
              </NavigationMenuListItem>
            </NavigationMenuItemsCardList>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="#experiences" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Experiences
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
