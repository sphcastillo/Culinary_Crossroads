import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Culinary Crossroads",
  description: "Explore this intersection of food and culture by sharing recipes, cooking traditions, and culinary customs from diverse cultural backgrounds. Let's celebrate culinary diversity and fostering cross-cultural connections through food!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='min-h-screen flex flex-col'>
        <header className="border-b sticky top-0 z-50 bg-blue-900">
          <Header />
        </header>
          <div className="bg-[#F4F2ED] flex-1 w-full">
            <main className="max-w-6xl mx-auto">{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
