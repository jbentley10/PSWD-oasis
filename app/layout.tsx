/**
 * @file layout.tsx
 */
"use client";

// Import styles
import "../src/globals.css";

// Import dependencies
import React from "react";

// Import components and utils
import Navigation from "@/src/components/navigation";
import Footer from "@/src/components/footer";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
