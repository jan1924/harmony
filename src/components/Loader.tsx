import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Logo from "../../public/animation2.gif";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && (
        <div className="bg-[#bcab91] flex items-center justify-center absolute inset-0 min-h-dvh w-screen pb-8 z-40">
          <Image
            className="h-full object-contain"
            src={Logo}
            alt="Animation"
            height={1080}
            width={1920}
          />
        </div>
      )}
    </>
  );
};

export default Loader;
