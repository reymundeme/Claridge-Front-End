import HeaderSwitcher from "@/components/Header/HeaderSwitcher";
import PageCover from "@/components/PageCover";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Claridge Hotel",
  description: " Experience historic luxury at The Claridge Hotel Atlantic City. Enjoy Art Deco elegance, unique event venues, & oceanfront rooms right on the Boardwalk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderSwitcher />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
