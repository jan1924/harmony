import Image from "next/image";
import React from "react";

const Card = ({
  id,
  name,
  icon,
  image,
}: {
  id: number;
  name: string;
  icon: string;
  image: string;
}) => {
  return (
    <div
      className={`relative group flex flex-col gap-2 flex-1 items-end justify-start border border-gray-700 rounded-md p-4 md:p-8 shadow-md h-[200px] md:h-[300px] overflow-hidden ${
        id === 7
          ? "justify-self-center w-1/2 md:w-full col-span-2 md:col-span-1 md:col-start-2"
          : ""
      }`}
    >
      <div className="absolute inset-0 bg-[#0e1a2f] opacity-0 group-hover:opacity-50"></div>
      <Image
        className="h-full w-full opacity-0 group-hover:opacity-50 group-hover:scale-105 transition-all ease-in-out duration-500 absolute inset-0 overflow-hidden object-cover"
        src={image}
        alt={name}
        height={300}
        width={500}
      />
      <Image
        className="h-[48px] w-[48px] md:h-[64px] md:w-[64px] lg:h-[96px] lg:w-[96px] z-10"
        src={icon}
        alt="Eye icon"
        height={96}
        width={96}
      />
      <p className={"text-base md:text-xl lg:text-2xl text-end z-10"}>{name}</p>
    </div>
  );
};

export default Card;
