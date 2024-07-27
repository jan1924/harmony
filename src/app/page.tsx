"use client";

import Image from "next/image";
import Logo from "../../public/animation2.gif";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
const GeSSTwoLight = localFont({
  src: "../../public/fonts/GE_SS_Two_Light.otf",
});
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="h-full">
      {loading && (
        <div className="bg-[#bcab91] flex items-center justify-center absolute inset-0 h-screen w-screen  pb-4">
          <Image
            className="h-full object-contain"
            src={Logo}
            alt="Animation"
            height={1080}
            width={1920}
          />
        </div>
      )}
      {!skipped && (
        <section className="flex flex-col items-center justify-evenly bg-[#ece7e0] h-screen py-16">
          <div className="flex items-center gap-4">
            <Image
              className="h-[64px] w-[64px]"
              src={"/logo.jpg"}
              alt="Harmony Logo"
              height={256}
              width={256}
            />
            <p className="text-5xl">HARMONY</p>
          </div>
          <div className="flex flex-col items-center justify-between gap-8">
            <p className={cn(GeSSTwoLight.className, "text-3xl text-[36px]")}>
              تعرف على هارموني
            </p>
            <Image
              onClick={() => setSkipped(true)}
              className="object-contain object-center h-[256px] w-[256px]"
              src={"/LandingLogo.jpg"}
              alt="Harmony Logo"
              height={256}
              width={256}
            />
            <p className={cn(GeSSTwoLight.className, "text-3xl text-[36px]")}>
              نغم من الجمال يصنع حدثاً أجمل
            </p>
          </div>
        </section>
      )}

      {skipped && <section className="h-screen bg-[#0e1a2f]"></section>}
    </main>
  );
}
