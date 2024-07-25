'use client'

import Image from "next/image";
import Logo from "../../public/animation.gif"
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
    <main className="bg-[#BFAE94] h-full">
      {loading && <Image className="h-screen w-screen object-contain" src={Logo} alt="Animation" height={1080} width={1920}/>}
    </main>
  );
}
