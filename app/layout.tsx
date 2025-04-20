import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/providers/theme-provider";
import Header from "@/components/header/header";

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
      <body className={`flex h-full flex-col antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-full">
            <Header />
            <div className="container mx-auto px-4">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
