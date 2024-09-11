"use client";

import { useState } from "react";
import SpaceNav from "../Navbar";
import Image from "next/image";

export default function Crew(params) {
  const [open, setOpen] = useState("Douglas Hurley");
  const handleSetOpen = (name) => setOpen(open === name ? null : name);

  const astronauts = [
    {
      position: "Commander",
      name: "Douglas Hurley",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image:
        "https://fm-space-tourism.davequah.com/assets/crew/image-douglas-hurley.webp",
    },
    {
      position: "Mission Specialist",
      name: "Mark Shuttleworth",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image:
        "https://fm-space-tourism.davequah.com/assets/crew/image-mark-shuttleworth.webp",
    },
    {
      position: "Pilot",
      name: "Victor Glover",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image:
        "https://fm-space-tourism.davequah.com/assets/crew/image-victor-glover.webp",
    },
    {
      position: "Flight Engineer",
      name: "Anousheh Ansari",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image:
        "https://fm-space-tourism.davequah.com/assets/crew/image-anousheh-ansari.webp",
    },
  ];

  return (
    <>
      <div className="crew bg-cover bg-center  pt-[7rem] lg:pt-[10rem] bg-gray-900 h-screen">
        <div className="container mx-auto pt-10 text-white overflow-hidden h-full">
          <h1 className="uppercase text-white font-sans text-lg md:text-2xl tracking-widest mb-6 leading-snug text-center lg:text-left">
            <span className="font-bold text-gray-400  lg:text-start">02</span>{" "}
            Meet Your Crew
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  h-full">
            <div className="flex flex-col justify-center items-start gap-6  ">
              <div className="">
                {astronauts.map((item, index) =>
                  open === item.name ? (
                    <div
                      key={index}
                      className="text-center lg:text-left mx-auto"
                    >
                      <p className="text-gray-400 text-2xl lg:text-4xl font-light leading-snug mb-4  font-serif">
                        {item.position}
                      </p>
                      <p className="text-3xl lg:text-5xl font-semibold text-white leading-tight  font-sans-condensed  ">
                        {item.name}
                      </p>
                      <p className="text-lg lg:text-xl mt-6 text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ) : null
                )}
              </div>
              <div className="flex  justify-center     items-end  w-full lg:justify-start gap-5 pt-20   lg:flex">
                {astronauts.map((item, index) => (
                  <div
                    key={index}
                    className={`h-4 w-4 rounded-full ${
                      open === item.name ? "bg-white" : "bg-gray-600"
                    } cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110`}
                    onClick={() => handleSetOpen(item.name)}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-end justify-start ">
              {astronauts.map((item, index) =>
                open === item.name ? (
                  <Image
                    key={index}
                    src={item.image}
                    width={500}
                    height={500}
                    alt={`${item.name} - ${item.position}`}
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
