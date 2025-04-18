import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Monke",
  description: "A gacha tracking site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`flex flex-col antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky backdrop-blur-md top-0 z-auto flex w-full items-center justify-between p-2">
            <Button id="home-button" variant={"link"} asChild>
              <Link href={"/"}>
                <Image
                  id="feelsbadman-icon"
                  src={"/feelsbadman.webp"}
                  alt={""}
                  width={32}
                  height={32}
                />
                <Image
                  id="ree-icon"
                  src={"/ree.webp"}
                  alt={""}
                  width={32}
                  height={32}
                />
                Home
              </Link>
            </Button>
            <ThemeToggle />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
