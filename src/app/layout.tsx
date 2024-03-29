import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

import { cn } from '@/lib/utils';
import { inter, interDisplay } from '@/lib/fonts';
import Providers from '@/components/providers/Providers';
import Header from '@/components/navigation/Header';
import { Toaster } from '@/components/ui/Toaster';

export const metadata: Metadata = {
  title: 'Andrew Qiao',
  description: 'I build what the world needs tomorrow, today.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans', inter.variable, interDisplay.variable)}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
