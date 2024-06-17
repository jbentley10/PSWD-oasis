/**
 * @file layout.tsx
 */
"use client";

// Import styles
import "./globals.css";

// Import dependencies
import React from "react";

// Import components and utils
import Navigation from "@/src/components/navigation";
import ThemeProvider from "@/src/components/theme-provider";
import Footer from "@/src/components/footer";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <Navigation />
            {children}
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
