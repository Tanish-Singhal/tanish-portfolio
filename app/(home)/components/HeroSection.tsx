import React from "react";
import Link from "next/link";

import Title from "./Title";

function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-20 lg:gap-0 lg:flex-row items-center justify-between mt-16 md:mt-0">
      <div className="space-y-10 text-center  lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you!👋🏻
          <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Tanish."}
          </span>
        </h1>

        <div className="flex justify-center lg:justify-start">
          <p className="text-center text-gray-300 w-96  lg:text-left">
            {
              "Based in India. I'm a Full Stack developer passionate about building a modern web application that users love."
            }
          </p>
        </div>

        <div className="flex items-center mt-4 lg:mt-8">
          <Link href="#contact" className="inline-block mr-16">
            <Title text="Contact Me 📬" />
          </Link>

          {/* .. */}
        </div>
      </div>

      <div className="relative md:mt-10">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>

          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>

          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>

        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          {/* .. */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;