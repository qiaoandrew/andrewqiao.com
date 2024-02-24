import Link from 'next/link';

import GradientText from '@/components/typography/GradientText';
import Navbar from '@/components/navigation/Navbar';
import ThemeToggle from '@/components/navigation/ThemeToggle';
import MobileMenu from '@/components/navigation/MobileMenu';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 max-w-[100vw] border-b border-b-border bg-background/40 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between md:h-18">
        <Link href="/" className="font-display text-4.5 font-bold">
          <GradientText>Andrew Qiao</GradientText>
        </Link>
        <div className="flex items-center gap-4">
          <Navbar />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
