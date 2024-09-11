"use client";

import SpaceNav from "./Navbar";

export default function HomePage() {
  return (
    <>
      <div className="spaceHome h-screen bg-cover bg-center flex flex-col justify-between py-10">
        <div className="flex-grow flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] lg:gap-4 justify-center items-center text-white">
              <div className="flex flex-col justify-center text-center lg:text-left text-[#959bb5]">
                <h1 className="uppercase text-accent  text-2xl md:text-2xl tracking-[0.1em] mb-6 leading-[3]">
                  So, you want to travel to
                  <span className="block  text-5xl md:text-9xl mt-2 text-white">
                    Space
                  </span>
                </h1>
                <p className="text-accent max-w-prose text-lg leading-relaxed">
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <button className="large-button text-black">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
