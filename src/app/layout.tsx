import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harmony",
  description: "Photo Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Sheet>
          <SheetTrigger
            className="right-2 top-2 md:right-4 md:top-4 border border-gray-600 rounded-md z-20 bg-[#f3f2f0] fixed"
            asChild
          >
            <Menu size={48} color="black" />
          </SheetTrigger>
          <SheetContent></SheetContent>
        </Sheet>
        {children}
      </body>
    </html>
  );
}
