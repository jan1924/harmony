import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
            className="right-2 top-2 md:right-4 md:top-4 border border-gray-600 rounded-md z-20 bg-[#f3f2f0] fixed"
            asChild
          >
            <Menu size={48} color="black" />
          </SheetTrigger>
          <SheetContent className="bg-[#f3f2f0] p-0 m-0">
          <div className="w-64 h-screen text-[#a08e6c] flex flex-col">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <Image
         src="/logo.jpg" 
         alt="Logo"
         height={48}
         width={48} 
         className="h-12 w-12" />
        <span className="ml-4 text-xl font-semibold">HARMONY</span>
      </div>
      <nav className="flex-1 px-4 py-8">
        <ul className="text-end flex flex-col gap-10">
          <li className="mb-4">
            <Link href="/" className="text-lg hover:text-gray-300">
              الرئيسية
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/about" className="text-lg hover:text-gray-300">
              تعرف علينا
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/services" className="text-lg hover:text-gray-300">
              خدماتنا
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/contact" className="text-lg hover:text-gray-300">
              تواصل معنا
            </Link>
          </li>
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
