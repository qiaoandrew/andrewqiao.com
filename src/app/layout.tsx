import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import { inter, interDisplay } from "@/lib/fonts";
import Providers from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: "Andrew Qiao",
  description: "I build what the world needs tomorrow, today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("bg-background", inter.variable, interDisplay.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
