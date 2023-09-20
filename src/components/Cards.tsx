import React from "react";
import Image from "next/image";
import death from "@/assets/card/death.jpg";
import team from "@/assets/card/team.jpg";
import lot from "@/assets/card/lot.jpg";
const Cards = () => {
  const cardDesc = [
    {
      id: 1,
      img: lot,
      title: "MY FOREST LAKE",
      description:
        "Invest in a lot from Forest Lake Memorial Parks, the country’s top neighborhood memorial park.​ Find a park near you.​",
    },
    {
      id: 2,
      img: team,
      title: "JOIN US",
      description:
        "Invest in a lot from Forest Lake Memorial Parks, the country’s top neighborhood memorial park.​ Find a park near you​",
    },
    {
      id: 3,
      img: death,
      title: "SERVICES",
      description:
        "Discover how we celebrate the lives of your loved ones with our excellent service and premium product offerings.​",
    },
  ];

  return (
    <div className="w-9/12 mx-auto pb-[30px] my-3">
      <h1 className="text-center text-[2rem]">Our Business</h1>
      <div className="flex gap-7 items-center justify-center flex-col sm:flex-row md:ease-in duration-300">
        {cardDesc.map((desc) => {
          return (
            <div
              key={desc.id}
              className="flex flex-col w-[350px] rounded-lg bg-white mt-6"
            >
              <div className="w-full overflow-hidden relative">
                <Image
                  src={desc.img}
                  alt="lot_time"
                  className="rounded-lg hover:scale-125 ease-in duration-300 cursor-pointer"
                ></Image>
              </div>
              <div className="w-full text-left p-3">
                <h1 className="text-lg my-4">{desc.title}</h1>
                <p className="leading-6 my-4">{desc.description}</p>
                <button className="bg-green-500 p-2 mx-auto text-white">
                  READ MORE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
