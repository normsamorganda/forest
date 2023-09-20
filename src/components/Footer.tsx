import React from "react";
import Image from "next/image";
import fpLogo from "@/assets/fl_logo-removebg-preview.png";
import { TbGrave } from "react-icons/tb";
const Footer = () => {
  const quickLinks = [
    {
      id: 1,
      title: "About Forest Lake",
      className: "hover:underline hover:cursor-pointer",
    },
    {
      id: 2,
      title: "Parks",
      className: "hover:underline hover:cursor-pointer",
    },
    {
      id: 3,
      title: "Chapels",
      className: "hover:underline hover:cursor-pointer",
    },
    {
      id: 4,
      title: "Advocacy",
      className: "hover:underline hover:cursor-pointer",
    },
    {
      id: 5,
      title: "Become A Seller",
      className: "hover:underline hover:cursor-pointer",
    },
    {
      id: 6,
      title: "Submit A Property",
      className: "hover:underline hover:cursor-pointer",
    },
  ];

  const otherLinks = [
    {
      id: 1,
      title: "Park Guidelines",
      className: "hover:underline hover:cursor-pointer",
    },
    {
      id: 2,
      title: "Features & Amenities",
      className: "hover:underline hover:cursor-pointer",
    },
    {
      id: 3,
      title: "Videos",
      className: "hover:underline hover:cursor-pointer",
    },
    {
      id: 4,
      title: "Newsletter",
      className: "hover:underline hover:cursor-pointer",
    },
    {
      id: 5,
      title: "Blogs",
      className: "hover:underline hover:cursor-pointer",
    },
    {
      id: 6,
      title: "Careers",
      className: "hover:underline hover:cursor-pointer",
    },
    {
      id: 7,
      title: "Privacy Policy",
      className: "hover:underline hover:cursor-pointer",
    },
    {
      id: 8,
      title: "Terms And Conditions ",
      className: "hover:underline hover:cursor-pointer",
    },
  ];

  return (
    <>
      <div className="w-full bg-primary hidden sm:block">
        <div className="w-9/12 mx-auto flex justify-around">
          <div className="text-gray-500 w-[350px]">
            <p className="p-3">Forest Lake Development Inc.</p>
            <p className="p-3">
              Alexcy One Building Third Floor, 51, President's Ave, Parañaque,
              1718 Metro Manila
            </p>
            <p className="p-3">Email: info@forestlakeparks.com</p>
          </div>
          <div className="flex gap-24 text-gray-500 p-3">
            <div>
              <ul>
                QUICK LINKS
                {quickLinks.map((link) => {
                  return (
                    <li key={link.id} className={`${link.className}`}>
                      {link.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <ul>
                OTHER LINKS
                {otherLinks.map((link) => {
                  return (
                    <li key={link.id} className={`${link.className}`}>
                      {link.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-9/12 mx-auto items-center justify-center gap-6 my-3">
          {/* <TbGrave className="text-gray-500 w-[120px] h-[80px]" /> */}
          <p className="text-lg text-gray-500">Subscribe to Newsletter</p>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none h-[50px] w-5/12"></input>
          <button className="text-lg text-gray-500 bg-green-500 px-3 py-2 rounded-lg">
            Subscribe
          </button>
        </div>
        <div>
          <p className="text-gray-500 text-center py-5">
            © Copyright 2022 Forest Lake | All Rights Reserved
          </p>
        </div>
      </div>

      {/* mobile  */}

      <div className="w-full bg-primary sm:hidden">
        <div className="text-gray-500 w-[350px] pl-5 pt-5">
          <p>Forest Lake Development Inc.</p>
          <p>
            Alexcy One Building Third Floor, 51, President's Ave, Parañaque,
            1718 Metro Manila
          </p>
          <p>Email: info@forestlakeparks.com</p>
        </div>
        <div className=" text-gray-500 p-3 pl-5 pt-5">
          <div className="my-5">
            <ul>
              QUICK LINKS
              {quickLinks.map((link) => {
                return (
                  <li key={link.id} className={`${link.className}`}>
                    {link.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul>
              OTHER LINKS
              {otherLinks.map((link) => {
                return (
                  <li key={link.id} className={`${link.className}`}>
                    {link.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col w-full mx-auto bg-gray-700 items-center justify-center gap-2 my-3 py-3">
          <div className="flex items-center justify-center">
            <TbGrave className="text-gray-500 w-[80px] h-[50px]" />
            <p className="text-sm text-gray-500">Subscribe to Newsletter</p>
          </div>

          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none h-[30px] w-5/12"></input>
          <button className="text-sm text-gray-500 bg-green-500 px-3 py-2 rounded-lg w-5/12">
            Subscribe
          </button>
        </div>
        <div>
          <p className="text-gray-500 text-center py-5">
            © Copyright 2022 Forest Lake | All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
