"use client";

import React from "react";
import Link from "next/link";
import { MovingBorderBtn } from "@/components/ui/moving-border";
import Image from "next/image";
import aboutImg from "/public/Profile Photo.png";
import { toast, Toaster } from 'react-hot-toast';

function HeroSection() {
  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Resume downloaded successfully!");
  };

  return (
    <>
      <Toaster />
      <div className="min-h-[60vh] flex flex-col-reverse gap-20 lg:gap-0 md:flex-row items-center justify-between mt-16 md:mt-0 animate-move-up">
        <div className="space-y-10 text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Nice to meet you!
            <br />
            <span className="underline underline-offset-8 decoration-green-500">
              I&apos;m Tanish.
            </span>
          </h1>

          <p className="text-md sm:text-xl text-gray-300 w-96 mx-auto md:mx-0">
            Based in India. I&apos;m a Full Stack Developer passionate about building
            modern Web Applications that users love.
          </p>

          <div className="flex items-center justify-center md:justify-start mt-4 lg:mt-8">
            <Link href="" onClick={scrollToContact}>
              <h2 className="text-2xl sm:text-4xl font-bold">Contact Me 📬</h2>
              <div className="w-30 sm:w-40 h-2 bg-green-500 rounded-full"></div>
              <div className="w-30 sm:w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
            </Link>
            <a href="/TanishSinghal_Resume_2024.docx.pdf" className="ml-4" onClick={handleDownload}>
              <MovingBorderBtn
                borderRadius="2rem"
                className="text-sm sm:text-xl p-3 font-semibold"
              >
                Download Resume 📄
              </MovingBorderBtn>
            </a>
          </div>
        </div>

        <div className="relative md:mt-8">
          <Image
            className="rounded-2xl h-auto w-60 sm:w-72"
            src={aboutImg}
            alt="personImage"
          />
          <div className="absolute bottom-6 left-6 sm:left-7">
            <MovingBorderBtn
              borderRadius="0.5rem"
              className="text-base sm:text-xl p-2 font-semibold"
            >
              <Link href="mailto:tanishsinghal510@gmail.com">
                📢 Available for Work
              </Link>
            </MovingBorderBtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
