import Link from 'next/link';

import { cn } from '@/lib/utils';
import { NavigationMenuLink } from '@/components/ui/NavigationMenu';

interface NavigationMenuListItemCardProps {
  isRoute?: boolean;
  href: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavigationMenuListItemCard({
  isRoute = false,
  href,
  className,
  title,
  children,
}: NavigationMenuListItemCardProps) {
  const navigationMenuListItemCardStyle = cn(
    'flex h-full w-full select-none flex-col justify-end rounded-3 bg-accent p-5 no-underline outline-none',
    className
  );

  const navigationMenuListItemCardText = (
    <>
      <div className="flex-grow" />
      <div className="mb-1 mt-3 text-4 font-medium text-foreground">
        {title}
      </div>
      <p className="text-3.5 text-muted-foreground">{children}</p>
    </>
  );

  if (isRoute) {
    return (
      <li className="row-span-3">
        <Link href={href as string} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuListItemCardStyle}>
            {navigationMenuListItemCardText}
          </NavigationMenuLink>
        </Link>
      </li>
    );
  }

  return (
    <li className="row-span-3">
      <NavigationMenuLink asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={navigationMenuListItemCardStyle}
        >
          {navigationMenuListItemCardText}
        </a>
      </NavigationMenuLink>
    </li>
  );
}
