import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import PageWrapper from "./PageWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// ✅ Metadata is now correctly exported
export const metadata: Metadata = {
  title: "Kevyn Octavian - Portfolio",
  description: "UI/UX, Android Application and Data Science",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable}`}>
        <PageWrapper>{children}</PageWrapper> {/* Use client wrapper */}
      </body>
    </html>
  );
}
