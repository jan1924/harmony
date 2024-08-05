import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
            className="right-2 top-2 md:right-4 md:top-4 border border-gray-600 rounded-md z-20 bg-[#f3f2f0] fixed hover:cursor-pointer"
            asChild
          >
            <Menu size={48} color="black" />
          </SheetTrigger>
          <SheetContent className="bg-[#f3f2f0]">
            <div className="h-screen text-[#a08e6c] flex flex-col">
              <div className="flex items-center justify-center h-20 border-b border-gray-700">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  height={48}
                  width={48}
                  className="h-12 w-12"
                />
                <span className="ml-4 text-xl font-semibold">HARMONY</span>
              </div>
              <nav className="flex-1 px-4 py-8">
                <ul className="text-end flex flex-col">
                  <Link href="/">
                    <SheetClose className="text-lg text-end hover:text-[#88795c] mb-4 py-6 h-full w-full">
                      الرئيسية
                    </SheetClose>
                  </Link>
                  <Link href="/about">
                    <SheetClose className="text-lg text-end hover:text-[#88795c] mb-4 py-6 h-full w-full">
                      تعرف علينا
                    </SheetClose>
                  </Link>
                  <Link href="/services">
                    <SheetClose className="text-lg text-end hover:text-[#88795c] mb-4 py-6 h-full w-full">
                      خدماتنا
                    </SheetClose>
                  </Link>
                  <Link href="/contact">
                    <SheetClose className="text-lg text-end hover:text-[#88795c] mb-4 py-6 h-full w-full">
                      تواصل معنا
                    </SheetClose>
                  </Link>
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        {children}
      </body>
    </html>
  );
}
