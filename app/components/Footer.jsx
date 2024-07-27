import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex justify-center pb-8 pt-16">
      <div className="max-w-7xl flex flex-col md:flex-row gap-12 lg:gap-64 md:gap-32">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold pb-2">Contact Us</h3>
          <div className="flex gap-3 items-center">
            <Image src="phone.svg" alt="phone" width={24} height={24}></Image>
            <p className="text-lg">(02) 4990 1198</p>
          </div>
          <div className="flex gap-3 items-center">
            <Image src="email.svg" alt="phone" width={24} height={24}></Image>
            <p className="text-lg">info@cmsg.org.au</p>
          </div>
          <Link
            href="https://www.facebook.com/menssheds"
            className="flex gap-3 items-center"
          >
            <Image
              src="facebook.svg"
              alt="phone"
              width={24}
              height={24}
            ></Image>
            <p className="text-lg text-blue-500 hover:text-blue-700 visited:text-purple-700 underline cursor-pointer">
              Cessnock Men's Shed & Garden
            </p>
          </Link>
          <Link href="/location" className="flex gap-3 items-center">
            <Image
              src="location.svg"
              alt="phone"
              width={24}
              height={24}
            ></Image>
            <p className="text-lg text-blue-500 hover:text-blue-700 visited:text-purple-700 underline cursor-pointer">
              Location
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold pb-2">Operating Hours</h3>
          <p>Monday - 08:00 - 12:30</p>
          <p>Thursday - 08:00 - 12:30</p>
        </div>
      </div>
    </div>
  );
}
