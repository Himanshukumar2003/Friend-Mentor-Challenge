"use client";

import Image from "next/image";
import Redux from "./Form/page";
import ShowData from "./Form/Show";
import Calculator from "./calculator/calculator";
import CalculatorTwo from "./calculator/SowData";
import StapFrom from "./stapform/page";
import GroceryApp from "./foodapp/cards";
import HomePage from "./space/HomePage";
import Link from "next/link";

export default function Home() {
  const link = [
    { Name: "Space", link: "/space" },
    { Name: "stap Form", link: "/stapform" },
    { Name: "food app", link: "/foodapp" },
    { Name: "calculator", link: "calculator" },
  ];
  return (
    <>
      <div className="pt-20 h-screen  bg-[blue] bg-opacity-15   ">
        <p className="text-center text-[35px] font-normal">All projects</p>
        <div className="h-screen flex items-center justify-center flex-col gap-10 font-light text-[28px]  ">
          {link.map((item, index) => (
            <Link href={item.link} key={index} className="uppercase">
              {item.Name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
