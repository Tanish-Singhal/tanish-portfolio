import React from "react";
import Title from "./Title";
import aboutImg from "/public/Profile Photo.png";
import Image from "next/image";

function About() {
  return (
    <div className="max-w-8xl mx-auto">
      <Title
        text="About Me 😁"
        className="flex flex-col items-center justify-center -rotate-6 animate-move-down"
      />

      <div className="flex flex-wrap pt-12">
        <div className="w-full lg:w-1/3 lg:p-2">
          <div className="flex justify-center items-center">
            <Image
              className="rounded-2xl h-auto w-72"
              src={aboutImg}
              alt="personImage"
            />
          </div>
        </div>
        <div className="w-full pt-10 lg:w-2/3 lg:pt-0">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-2/3 text-xl text-gray-300">
              I'm Tanish Singhal, a versatile Web Developer with a keen interest
              in blachain developement. Currently I'm a Third year undergrad at
              Galgotias College of Engineering and Texhnology, Greate Noida,
              Uttar Pradesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
