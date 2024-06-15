'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      onClick={changeTheme}
      className={cn(
        'bg-transparent shadow-none xl:hover:bg-transparent xl:hover:shadow-none',
        'dark:bg-transparent dark:shadow-none xl:dark:hover:bg-transparent xl:dark:hover:shadow-none'
      )}
    >
      <SunIcon className="h-5 w-5 text-primary-foreground dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 text-primary-foreground dark:block" />
    </Button>
  );
}
