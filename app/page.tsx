/**
 * @file page.tsx
 */
import React from "react";

// Set metadata
export const metadata = {
  title: "Home | Example app",
  description: "This app uses NextJS and Contentful.",
};

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between lg:p-24 xs:p-4'>
      <div>Ready!</div>
    </main>
  );
}
