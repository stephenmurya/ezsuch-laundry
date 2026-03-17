import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EZSUCH LAUNDRY | Precision Cleaning, Every Garment Counts",
  description:
    "EZSUCH LAUNDRY & DRY CLEANING SERVICES offers reliable dry cleaning, washing, pressing, shirt care, fabric care, and household item cleaning in Ijaiye-Ojokoro, Lagos.",
  keywords: [
    "laundry service Ijaiye",
    "dry cleaning Ijaiye-Ojokoro",
    "laundry Lagos",
    "shirt ironing Lagos",
    "EZSUCH LAUNDRY",
  ],
  applicationName: "EZSUCH LAUNDRY",
  openGraph: {
    title: "EZSUCH LAUNDRY",
    description:
      "Crisp, clean, reliable laundry and dry cleaning service in Ijaiye-Ojokoro, Lagos.",
    type: "website",
    siteName: "EZSUCH LAUNDRY",
  },
  twitter: {
    card: "summary_large_image",
    title: "EZSUCH LAUNDRY",
    description:
      "Precision Cleaning, Every Garment Counts. Trusted laundry and dry cleaning in Ijaiye-Ojokoro, Lagos.",
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
