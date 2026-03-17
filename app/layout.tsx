import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clean Looks Drycleaners | Spotless Results, Every Time",
  description:
    "Professional laundry and dry cleaning in Ikeja, Lagos. Clean Looks Drycleaners offers expert dry cleaning, wash and fold, pressing, shirt specials, delicate fabric care, and duvet cleaning.",
  keywords: [
    "dry cleaners Ikeja",
    "laundry service Ikeja Lagos",
    "Allen Avenue dry cleaning",
    "shirt ironing Ikeja",
    "duvet cleaning Lagos",
  ],
  applicationName: "Clean Looks Drycleaners",
  openGraph: {
    title: "Clean Looks Drycleaners",
    description:
      "Fresh, crisp, professional cleaning in the heart of Ikeja, Lagos.",
    type: "website",
    siteName: "Clean Looks Drycleaners",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Looks Drycleaners",
    description:
      "Spotless Results, Every Time. Trusted laundry and dry cleaning in Ikeja, Lagos.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

