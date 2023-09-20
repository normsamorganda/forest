import React from "react";
import homecoming from "../assets/homecoming/about-pic.jpg";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
const Funeral = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto my-6 py-6">
        <h1 className="text-[2rem] text-center">
          Welcome to our Funeral Caring Home
        </h1>
        <div className=" gap-3 my-8 flex flex-col sm:flex-row">
          <Image src={homecoming} alt="home" width={400} height={150} />
          <div className="flex-col gap-5 md:w-[520px] hidden md:flex">
            <h1 className="text-orange-500 text-[1.50rem] italic p-2 text-justify">
              We strive to set the highest standards for funeral profession in
              terms of client service and care.
            </h1>
            <p className="p-2 text-justify">
              Etiam egetdignissim lorem a ullamcorper leoras aliquam quam
              etmagna dictum pharetra mnec purus sed erat lobortis condimentum
              auris allow malesuada dolorgravileoras aliquam quam felis illa
              lacus, ac blandit nulla nulla eu lorem.
            </p>
          </div>

          <div className="bg-white rounded-lg">
            <h1 className="p-5 text-orange-500 font-bold text-[1.25rem]">
              FUNERAL SUPPORT
            </h1>
            <p className="p-5">
              If you'd like to speak to us directly, call free 24 hours a day.
            </p>
            <div className="p-5">
              <p className="flex gap-3 items-center">
                <BsFillTelephoneFill /> 1800-123-4567 / 6789
              </p>

              <p className="flex gap-3 items-center">
                <GrMail />
                info@funeral.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funeral;
