"use client";

import React, { useState } from "react";
import Image from "next/image";
import bgAbout from "@/assets/about/about-forestlake.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
const page = () => {
  const [isShowModal, setshowModal] = useState(false);

  const submitHandle = (e: any) => {
    e.preventDefault();
    setshowModal(!isShowModal);
  };
  return (
    <>
      <div className="w-full">
        <h1 className="text-green-500 text-4xl text-center">Contact Us</h1>
        <div className="w-3/4 mx-auto relative">
          <div className=" bg-[#fefefe] rounded-lg">
            <section className="flex flex-col items-center justify-around mb-12">
              <div className="md:w-[800px] relative">
                <form
                  className="bg-white shadow-md rounded px-8 pt-12 pb-8 mb-4"
                  onSubmit={submitHandle}
                >
                  <div className="mb-4 gap-3 md:flex">
                    <div className="mb-2 md:w-2/4">
                      <label
                        className="block text-gray-700 text-sm mb-2"
                        htmlFor="name"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700 placeholder:italic placeholder:text-sm leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Last Name, First name"
                      ></input>
                    </div>
                    <div className="md:w-2/4">
                      <label
                        className="block text-gray-700 text-sm mb-2"
                        htmlFor="company"
                      >
                        Organization Name
                      </label>
                      <input
                        className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700 placeholder:italic placeholder:text-sm leading-tight focus:outline-none focus:shadow-outline"
                        id="company"
                        type="text"
                        placeholder="Company Name"
                      ></input>
                    </div>
                  </div>
                  <div className="mb-4 md:flex gap-3">
                    <div className="md:w-2/4">
                      <label
                        className="block text-gray-700 text-sm mb-2"
                        htmlFor="email"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                      ></input>
                    </div>
                    <div className="md:w-2/4">
                      <label
                        className="block text-gray-700 text-sm mb-2"
                        htmlFor="contactNumber"
                      >
                        Contact Number
                      </label>
                      <input
                        className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="contactNumber"
                        type="tel"
                      ></input>
                    </div>
                  </div>
                  <div className="mb-4 md:flex gap-3">
                    <div className="md:w-2/4">
                      <label
                        className="block text-gray-700 text-sm mb-2"
                        htmlFor="email"
                      >
                        Service Interest <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                      ></input>
                    </div>
                    <div className="md:w-2/4">
                      <label
                        className="block text-gray-700 text-sm mb-2"
                        htmlFor="category"
                      >
                        Category
                      </label>
                      <input
                        className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        type="text"
                      ></input>
                    </div>
                    <div className="md:w-2/4">
                      <label
                        className="block text-gray-700 text-sm mb-2"
                        htmlFor="subCategory"
                      >
                        Sub-Category
                      </label>
                      <input
                        className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                        id="subCategory"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="mb-4 md:flex gap-3">
                    <div className="w-full">
                      <label
                        className="block text-gray-700 text-sm mb-2"
                        htmlFor="subject"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="subject"
                      ></input>
                    </div>
                  </div>
                  <div className="mb-4 md:flex gap-3">
                    <div className="w-full">
                      <label
                        className="block text-gray-700 text-sm mb-2"
                        htmlFor="message"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        className="shadow appearance-none border w-full rounded-lg py-2 px-3 text-gray-700  leading-tight placeholder:italic placeholder:text-sm focus:outline-none focus:shadow-outline"
                        id="subject"
                        rows={5}
                        placeholder="How Can We Help You?"
                      ></textarea>
                    </div>
                  </div>
                  <div className="hidden tablet:block my-4 mx-4 text-sm">
                    <p className="mb-5">Service Inquiries: 400-100-6053</p>
                    <p>Expedited processing: 0731-85168499</p>
                  </div>
                  <button
                    type="submit"
                    className="text-[#fefefe] bg-green-500 w-full py-3 rounded-xl mt-12"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
