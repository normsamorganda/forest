import React from "react";
import Image from "next/image";
import bgAbout from "@/assets/about/about-forestlake.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
const page = () => {
  return (
    <div className="w-full">
      <div className="w-9/12 mx-auto">
        <h1 className="text-center text-green-500 text-4xl">About Us</h1>
        <p className="italic text-lg my-8">
          As a family business we were honoured and humbled to be asked to
          manage the state funeral service. Our focus and commitment is always
          to provide the family with care.
        </p>
        <Image
          src={bgAbout}
          height={500}
          alt="bgAbt"
          className="mx-auto w-full"
        />
        <p className="text-primary-500 italic text-lg my-8">
          Quisque semenim bibendum eget tristique rutrum ullamcorper etmass
          aaurisnon ullamcorpenean laoreet finibus varius vamus tempus nisilacus
          ultricies venenatis nulla rutrum sitamet uisitamet element orem ipsum
          dolor sitamet consectetur adipiscingelit uisque necarcu vitae ipsum
          tincidunt dapibus et sollicitudin esed a semper massa.ed acongue
          magnased ultrices metus.
        </p>
        <div className="sm:flex my-10">
          <div className="p-3">
            <h1 className="text-lg font-bold">Our Vision</h1>
            <p className="pt-6">
              To build a better place where generations of family memories are
              treasured, immortalized and celebrated by the living.
            </p>
            <span className="underline cursor-pointer flex items-center gap-3 my-6">
              View Our Future <AiOutlineArrowRight />
            </span>
          </div>
          <div className="p-3">
            <h1 className="text-lg font-bold">Our Mission</h1>
            <p className="pt-6">
              To offer accessible and affordable memorial parks and services
              managed by a professional team dedicated to provide value,
              innovation and personalized service.
            </p>
            <span className="underline cursor-pointer flex items-center gap-3 my-6">
              View What We Do <AiOutlineArrowRight />
            </span>
          </div>
          <div className="p-3">
            <h1 className="text-lg font-bold">Our Values</h1>
            <p className="pt-6">
              Personalized Service, Value Creation, Teamwork, Innovation &
              Creativity and Professionalism
            </p>
            <span className="underline cursor-pointer flex items-center gap-3 my-6">
              View Who We Are <AiOutlineArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
