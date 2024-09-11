"use client";

import { useState } from "react";
import SpaceNav from "../Navbar";

export default function Destination(params) {
  const destinationdata = [
    {
      name: "Moon",
      description:
        "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDistance: "384,400 KM",
      travelTime: "3 DAYS",
      image:
        "https://fm-space-tourism.davequah.com/assets/destination/image-moon.webp",
    },
    {
      name: "Mars",
      description:
        "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
      avgDistance: "225 MIL. KM",
      travelTime: "9 MONTHS",
      image:
        "https://fm-space-tourism.davequah.com/assets/destination/image-mars.webp",
    },
    {
      name: "Europa",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDistance: "628 MIL. KM",
      travelTime: "3 YEARS",
      image:
        "https://fm-space-tourism.davequah.com/assets/destination/image-europa.webp",
    },
    {
      name: "Titan",
      description:
        "The only moon known to have a substantial atmosphere, Titan is a world unto itself. With lakes of liquid methane and seas of frozen methane, it's a fascinating place to explore.",
      avgDistance: "1.4 BIL. KM",
      travelTime: "7 YEARS",
      image:
        "https://fm-space-tourism.davequah.com/assets/destination/image-titan.webp",
    },
  ];
  const [openDestination, setOpenDestination] = useState("Moon");

  const handleOpen = (name) => {
    setOpenDestination(openDestination === name ? null : name);
  };

  return (
    <>
      <div className="Destination">
        <div className=" container mx-auto pt-[200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-end flex-col gap-2">
              <h1 className="uppercase text-white text-accent font-sans-condensed text-2xl md:text-2xl tracking-[0.1em] mb-4 leading-[3]">
                <span className="text-gray-600 font-[900]">01</span> Pick your
                destination
              </h1>
              {destinationdata.map(
                (item, index) =>
                  openDestination === item.name && (
                    <img
                      src={item.image}
                      className="animate-spin-slow duration-300 ease-in-out"
                      key={index}
                    />
                  )
              )}
            </div>
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center lg:justify-start  text-[#959bb5]  gap-[2rem]  font-900 text-2sm  tracking-[0.1em] py-2  ">
                <p
                  onClick={() => handleOpen("Moon")}
                  className={`py-2 uppercase  cursor-pointer ${
                    openDestination === "Moon"
                      ? "border-b-[3px] border-[#f1efef]  text-white"
                      : ""
                  }`}
                >
                  Moon
                </p>
                <p
                  onClick={() => handleOpen("Mars")}
                  className={`py-2 uppercase   cursor-pointer ${
                    openDestination === "Mars"
                      ? "border-b-[3px] border-[#f1efef]  text-white"
                      : ""
                  }`}
                >
                  Mars
                </p>
                <p
                  onClick={() => handleOpen("Europa")}
                  className={`  uppercase  py-2   cursor-pointer ${
                    openDestination === "Europa"
                      ? "border-b-[3px] border-[#f1efef]  text-white"
                      : ""
                  }`}
                >
                  Europa
                </p>
                <p
                  onClick={() => handleOpen("Titan")}
                  className={`py-2  uppercase cursor-pointer ${
                    openDestination === "Titan"
                      ? "border-b-[3px] border-[#f1efef]  text-white"
                      : ""
                  }`}
                >
                  Titan
                </p>
              </div>

              {destinationdata.map((destination, index) => (
                <div
                  className="text-white text-center lg:text-left mt-[1rem] lg:mt-[2rem]  leading-[1.1]  tracking-[0.1em] "
                  key={index}
                >
                  {openDestination === destination.name && (
                    <div>
                      <h2 className="text-[6.25rem] font-[500]  mb-4  uppercase  ">
                        {destination.name}
                      </h2>
                      <p className="text-lg mb-6  mt-[1rem] lg:mt-[2rem] text-[#959bb5] leading-[1.6]">
                        {destination.description}
                      </p>
                      <div className="flex justify-between mt-6 border-t border-gray-500 pt-10">
                        <div>
                          <h3 className="text-[0.875rem] font-semibold text-[#959bb5] ">
                            AVG. DISTANCE
                          </h3>
                          <p className="text-[1.7rem]  font-400">
                            {destination.avgDistance}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-[0.875rem] font-semibold pb-1 text-[#959bb5] ">
                            EST. TRAVEL TIME
                          </h3>
                          <p className=" text-[1.7rem] font-400">
                            {destination.travelTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
