import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Import our new Header

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tasty - Find Your Craving",
  description: "Discover your next favorite dish with a swipe!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}