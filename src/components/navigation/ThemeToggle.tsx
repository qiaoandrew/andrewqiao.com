'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

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
      className="bg-transparent shadow-none md:hover:bg-transparent md:hover:shadow-none dark:bg-transparent dark:shadow-none md:dark:hover:bg-transparent md:dark:hover:shadow-none"
    >
      <SunIcon className="h-5 w-5 text-primary-foreground dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 text-primary-foreground dark:block" />
    </Button>
  );
}
