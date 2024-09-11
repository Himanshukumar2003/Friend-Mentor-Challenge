"use client";

import { useState } from "react";
import Image from "next/image";

export default function Technology(params) {
  const [openStap, setOpenStap] = useState("1");
  const [transitioning, setTransitioning] = useState(false);

  const handleStap = (stapId) => {
    setTransitioning(true);
    setTimeout(() => {
      setOpenStap(stapId);
      setTransitioning(false);
    }, 500);
  };

  const teach = [
    {
      id: "1",
      img: "https://fm-space-tourism.davequah.com/assets/technology/image-spaceport-portrait.jpg",
      name: "Spaceport",
      pera: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      id: "2",
      img: "https://fm-space-tourism.davequah.com/assets/technology/image-launch-vehicle-portrait.jpg",
      name: "Launch vehicle",
      pera: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      id: "3",
      img: "https://fm-space-tourism.davequah.com/assets/technology/image-space-capsule-portrait.jpg",
      name: "Space capsule",
      pera: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  return (
    <div className="tech  pt-[100px] lg:pt-[200px] text-center lg:text-left">
      <div className="container mx-auto flex p-10 justify-start items-center">
        <div>
          <h1 className="uppercase text-white text-2xl font-sans-condensed tracking-widest mb-[40px]">
            <span className="text-gray-500 font-bold">03</span> Space Launch 101
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-full ">
            <div className="flex gap-5 items-center justify-center">
              <div className="flex flex-col gap-7">
                {teach.map((stap) => (
                  <div
                    className={`flex items-center justify-center w-[60px] h-[60px] rounded-full border-2 text-[40px]  ${
                      openStap === stap.id
                        ? "border-white text-black bg-white"
                        : "hover:border-white text-white opacity-80 hover:opacity-100"
                    } font-[400] cursor-pointer transition-all duration-300 ease-in-out`}
                    key={stap.id}
                    onClick={() => handleStap(stap.id)}
                  >
                    {stap.id}
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-white w-full">
                <p className="uppercase text-gray-500 tracking-widest text-sm mb-4">
                  The terminology...
                </p>

                {teach.map(
                  (item) =>
                    openStap === item.id && (
                      <div
                        key={item.id}
                        className={`transition-opacity duration-300 ease-in-out ${
                          transitioning ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <h2 className="text-5xl lg:text-7xl font-[400] mb-7">
                          {item.name}
                        </h2>
                        <p className="text-lg mb-6 mt-[1rem] lg:mt-[2rem] text-[#959bb5] leading-[2rem]">
                          {item.pera}
                        </p>
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              {teach.map(
                (item) =>
                  openStap === item.id && (
                    <Image
                      key={item.id}
                      src={item.img}
                      alt={item.name}
                      width={500}
                      height={500}
                      className={`transition-opacity duration-[1000] ease-in-out ${
                        transitioning ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
