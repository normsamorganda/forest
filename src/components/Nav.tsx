"use client";

import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMapPin } from "react-icons/bi";
import Image from "next/image";
import fpLogo from "@/assets/fl_logo-removebg-preview.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";
const Nav = () => {
  const [navShow, setNavShow] = useState(false);

  console.log(navShow);
  const navBars = [
    {
      id: 1,
      title: "Home",
      href: "/",
      class:
        "hover:text-green-500 hover:border-b hover:border-green-600 cursor-pointer",
    },
    {
      id: 2,
      title: "Gallery",
      href: "/gallery",
      class:
        "hover:text-green-500 hover:border-b hover:border-green-600 cursor-pointer",
    },
    {
      id: 3,
      title: "About",
      href: "/",
      class:
        "hover:text-green-500 hover:border-b hover:border-green-600 cursor-pointer",
    },
    {
      id: 4,
      title: " Contact Us",
      href: "/",
      class:
        "hover:text-green-500 hover:border-b hover:border-green-600 cursor-pointer",
    },
    {
      id: 5,
      title: " Services",
      href: "/",
      class:
        "hover:text-green-500 hover:border-b hover:border-green-600 cursor-pointer",
    },
    {
      id: 6,
      title: " Our Stories",
      href: "/",
      class:
        "hover:text-green-500 hover:border-b hover:border-green-600 cursor-pointer",
    },
  ];

  return (
    <div className="w-full">
      {/* desktop */}
      <div className="hidden sm:flex w-full mx-auto  flex-col bg-primary ">
        <div className="flex w-9/12 mx-auto justify-between text-gray-500 py-2 px-4">
          <div>
            <h1 className="text-sm">Welcome to Forest Lake Memorial Park</h1>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-2 cursor-pointer">
              <BiMapPin className="inline" />
              <span className="text-sm ">View Location</span>
            </div>
            <div className="flex gap-2 items-center text-green-500 cursor-pointer">
              <BsFillTelephoneFill className="inline" />
              <span className="text-sm">1800-123-4567 </span>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="w-full mx-auto flex flex-col bg-primary sm:hidden">
        <div className="flex justify-around text-gray-500 py-2 px-4">
          <div className="flex gap-2">
            <BiMapPin className="inline" />
            <span className="text-sm">View Location</span>
          </div>
          <div className="flex gap-2 items-center text-green-500">
            <BsFillTelephoneFill className="inline" />
            <span className="text-sm">1800-123-4567 </span>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="bg-white w-9/12 mx-auto  items-center justify-between hidden sm:flex">
        <div className="ml-3">
          <Image src={fpLogo} width={120} height={50} alt="fp_logo" />
        </div>
        <div>
          <ul className="flex gap-[2rem]">
            {navBars.map((bar) => {
              return (
                <li key={bar.id} className={`${bar.class} text-sm`}>
                  <Link href={bar.href}>{bar.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* mobile */}

      <div className="bg-white w-9/12 mx-auto  items-center justify-between flex sm:hidden">
        <div>
          <Image src={fpLogo} width={80} height={50} alt="fp_logo" />
        </div>
        <div className="relative">
          <GiHamburgerMenu onClick={() => setNavShow((prev) => !prev)} />
        </div>
        {/* {navShow && (
          <div className="absolute w-full h-screen bg-green-300">
            <ul className="gap-[2rem]">
              {navBars.map((bar) => {
                return (
                  <li key={bar.id} className="">
                    {bar.title}
                  </li>
                );
              })}
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Nav;
