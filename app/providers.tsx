// app/providers.tsx
'use client'

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ThemeProvider from "@/src/components/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ChakraProvider>

        {children}
      </ChakraProvider>
    </ThemeProvider>
  )
}