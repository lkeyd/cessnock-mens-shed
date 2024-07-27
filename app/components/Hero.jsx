import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-[500px] bg-black rounded-lg overflow-hidden -z-20">
      <Image
        src="/heroshed.jpg"
        alt="hero"
        fill
        objectFit="cover"
        className="opacity-50 -z-10"
      ></Image>
      <div className="absolute top-48 left-16 flex flex-col gap-8">
        <h1 className=" text-white font-bold text-5xl opacity z-20 max-w-[400px]">
          Cessnock Men's Shed & Garden
        </h1>
        <p className=" text-white  text-xl opacity z-20 max-w-[400px]">
          We support males over 18 years old, providing companionship and mental
          support in a relaxed workshop setting.
        </p>
      </div>
    </div>
  );
}
