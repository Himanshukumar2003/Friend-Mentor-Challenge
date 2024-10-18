"use client";

import { Container, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function SpaceNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const link = [
    { number: "00", name: "Home", link: "/space" },
    { number: "01", name: "Destination", link: "/space/destination" },
    { number: "02", name: "Crew", link: "/space/crew" },
    { number: "03", name: "Technology", link: "/space/technology" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };



  return (
    <div className="z-[9999] fixed        top-0 lg:top-5 w-full">
      <div className="flex items-start  lg:items-center justify-between gap-10 relative">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <Image
            src="https://fm-space-tourism.davequah.com/assets/shared/logo.svg"
            className="m-[1.5rem] clamp-[(1.5rem, 5vw, 3.5rem)]"
            width={50}
            height={50}
            alt="Logo"
          />
          <div className="lg:hidden flex justify-end w-full">
            <MenuIcon
              onClick={toggleMenu}
              style={{ color: "white", fontSize: "50px" }}
              className={`${menuOpen ? "hidden" : "block"}`}
            />
          </div>
        </div>

        <div className="hidden lg:block border-[1px] border-[white] opacity-50 w-full -mr-[4rem]"></div>
        <div className="h-screen lg:h-auto">
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col lg:flex-row bg-white bg-opacity-10 backdrop-blur-[5rem] gap-[clamp(1.5rem,5vw,3.5rem)] px-[70px] h-fu lg:flex z-[9999] h-full lg:h-auto`}
          >

            {link.map((item, index) => (
              <Link
                href={item.link}
                className={`text-white flex tracking-[2px] opacity-[100%] text-[1rem] gap-1 py-5 lg:py-10 hover:border-b-[5px] border-[#5F5D53] ${
                  pathname === item.link ? "border-b-[5px] border-[white]" : ""
                }`}
                key={index}
                onClick={toggleMenu}
              >
                <p className="leading-[1.5rem]">{item.number}</p>
                <p className="leading-[1.5rem] uppercase">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
