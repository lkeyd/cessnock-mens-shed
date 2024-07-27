import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function InfoCard(props) {
  return (
    <Link href={props.route} className="w-full">
      <div className="flex flex-col justify-center items-center gap-4 hover:scale-[1.01] duration-200">
        <div className="relative flex flex-col gap-8 w-full h-[256px] ">
          <Image
            src={props.image}
            alt={props.alt}
            fill
            objectFit="cover"
            className="relative rounded-md shadow-md"
          ></Image>
        </div>
        <h2 className=" text-black text-3xl">{props.title}</h2>
      </div>
    </Link>
  );
}
