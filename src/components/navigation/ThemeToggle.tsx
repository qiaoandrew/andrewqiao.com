"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/Button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button variant="ghost" size="icon-lg" onClick={changeTheme}>
      {theme === "light" ? (
        <SunIcon className="text-primary-foreground w-5 h-5" />
      ) : (
        <MoonIcon className="text-primary-foreground w-5 h-5" />
      )}
    </Button>
  );
}
