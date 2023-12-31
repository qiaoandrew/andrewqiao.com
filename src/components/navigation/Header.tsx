import Link from "next/link";

import GradientText from "@/components/typography/GradientText";
import Navbar from "@/components/navigation/Navbar";
import ThemeToggle from "@/components/navigation/ThemeToggle";
import MenuToggle from "@/components/navigation/MenuToggle";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 border-b border-b-border">
      <div className="container h-14 md:h-18 flex items-center justify-between">
        <Link href="/" className="font-display text-4.5 font-bold">
          <GradientText>Andrew Qiao</GradientText>
        </Link>
        <div className="flex gap-4 items-center">
          <Navbar />
          <ThemeToggle />
          <MenuToggle />
        </div>
      </div>
    </header>
  );
}
