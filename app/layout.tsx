/**
 * @file layout.tsx
 */

// Import styles
import "../src/globals.css";

// Import dependencies
import React from "react";

// Import components and utils
import { Navigation } from "../src/components/navigation";
import { Footer } from "../src/components/footer";
import ThemeProvider from "../src/lib/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
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
