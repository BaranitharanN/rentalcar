// app/layout.tsx (for Next.js 13+ with App Router)

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
<link rel="manifest" href="/manifest.json" />


const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  title: "Rental Car Dashboard",
  description: "Manage your rental cars easily.",
  themeColor: "#2563eb", // ✅ Will inject <meta name="theme-color" />
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ No need to import Head — just use regular <head> here */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}


