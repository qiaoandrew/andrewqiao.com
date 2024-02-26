import Link from 'next/link';

import { cn } from '@/lib/utils';
import { NavigationMenuLink } from '@/components/ui/NavigationMenu';

interface NavigationMenuListItemProps {
  isRoute?: boolean;
  href: string;
  title: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function NavigationMenuListItem({
  isRoute = false,
  href,
  title,
  disabled = false,
  className,
  children,
}: NavigationMenuListItemProps) {
  const navigationMenuListItemStyle = cn(
    'block select-none space-y-1 rounded-2 px-3 py-2.5 no-underline outline-none transition-colors duration-200 xl:hover:bg-accent xl:focus:bg-accent',
    className
  );

  const navigationMenuListItemText = (
    <>
      <p className="text-3.5 font-medium text-foreground">{title}</p>
      <p className="line-clamp-2 text-3.5 text-muted-foreground">{children}</p>
    </>
  );

  if (disabled) {
    return (
      <li>
        <div
          className={cn(
            navigationMenuListItemStyle,
            'opacity-80 md:hover:cursor-wait md:hover:bg-transparent'
          )}
        >
          {navigationMenuListItemText}
        </div>
      </li>
    );
  }

  if (isRoute) {
    return (
      <li>
        <Link href={href as string} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuListItemStyle}>
            {navigationMenuListItemText}
          </NavigationMenuLink>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={navigationMenuListItemStyle}
        >
          {navigationMenuListItemText}
        </a>
      </NavigationMenuLink>
    </li>
  );
}
