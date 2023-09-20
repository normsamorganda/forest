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

//images
import slider1 from "@/assets/slide/slider.jpg";
import slider2 from "@/assets/slide/slider-3.jpg";
import slider3 from "@/assets/slide/slider-2.jpg";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="cursor-pointer"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${slider1.src})`,
            }}
            className="w-full h-[70vh] bg-no-repeat bg-cover bg-center relative flex flex-col items-center justify-center"
          >
            <h4 className="text-white text-[2rem] md:text-[4rem]">
              Helping you cope with grief
            </h4>
            <p className="text-white text-sm md:text-[1rem] mx-3 mt-3">
              We explain some of the feelings you may have and suggest ways of
              dealing with them.
            </p>
            <button className=" bg-green-500 text-white p-3 text-base text-center mt-6">
              GET ADVISE
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${slider2.src})`,
            }}
            className="w-full h-[70vh] bg-no-repeat bg-cover bg-center relative flex flex-col items-center justify-center"
          >
            <h4 className="text-white text-[2rem] md:text-[4rem]">
              Arrange the funeral event
            </h4>
            <p className="text-white text-sm md:text-[1rem] mx-3 mt-3">
              We are here to help you arrange the funeral you want for your
              loved one – every step of the way.
            </p>
            <button className=" bg-green-500 text-white p-3 text-base text-center mt-6">
              SEE EVENTS
            </button>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${slider3.src})`,
            }}
            className="w-full h-screen bg-no-repeat bg-contain"
          ></div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
