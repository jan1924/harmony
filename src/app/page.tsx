"use client";

import Image from "next/image";
import Logo from "../../public/animation2.gif";
import { useEffect, useState } from "react";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="h-full">
      {loading && (
        <div className="bg-[#bcab91] absolute inset-0 h-screen w-screen">
          <Image
            className="h-full w-full object-contain"
            src={Logo}
            alt="Animation"
            height={1080}
            width={1920}
          />
        </div>
      )}
    </main>
  );
}
