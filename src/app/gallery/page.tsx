"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import card3 from "@/assets/gallery/card3.jpg";
import cardFive from "@/assets/gallery/cardFive.jpg";
import cardFour from "@/assets/gallery/cardFour.jpg";
import cardSix from "@/assets/gallery/cardSix.jpg";
import slide from "@/assets/gallery/slide.jpg";
import cardTwo from "@/assets/gallery/cardTwo.jpg";

export default function page() {
  const cardDesc = [
    {
      id: 1,
      img: card3,
      title: "THE FUNDAMENTALS OF CREATING A BETTER DAYS",
    },
    {
      id: 2,
      img: cardFive,
      title: "ONLINE PAYMENT THRU FUND TRANSFER USING INTERNET BANKING",
    },
    {
      id: 3,
      img: cardFour,
      title: "ONLINE PAYMENT THRU FUND TRANSFER USING INTERNET BANKING",
    },
    {
      id: 4,
      img: cardSix,
      title: "PARK DIRECTORY",
    },
    {
      id: 5,
      img: slide,
      title:
        "Forest Lake celebrates 25 years of revolutionizing total death care in the Philippines",
    },
    {
      id: 6,
      img: cardTwo,
      title: "RESILIENCE IN SALES",
    },
  ];

  return (
    <>
      <h1 className="text-center text-4xl text-green-500">News And Updates</h1>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          430: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 4 },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="cursor-pointer my-12"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {cardDesc.map((desc) => {
          return (
            <SwiperSlide>
              <div
                key={desc.id}
                className="flex flex-col w-[350px] rounded-lg bg-white mt-6 mx-auto"
              >
                <div className="w-[300px] h-[400px] overflow-hidden relative mx-auto">
                  <Image
                    src={desc.img}
                    alt="lot_time"
                    className="rounded-lg hover:scale-125 ease-in duration-300 cursor-pointer"
                  ></Image>
                </div>
                <div className="w-full text-center p-3 sm:text-left">
                  <h1 className="text-lg my-4 h-[80px]">{desc.title}</h1>
                  <button className="bg-green-500 p-2 mx-auto text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
