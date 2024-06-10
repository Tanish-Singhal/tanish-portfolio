"use client"

import React, { useRef } from "react";
import Title from "./Title";
import { motion, useScroll } from "framer-motion";

function Experience() {
  const experience = [
    {
      position: "Self Developer",
      company: "College",
      companyLink: "https://www.google.com",
      year: "2021-Present",
      location: "Faridabad, Haryana, India",
      work: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil ipsa recusandae vero illum reprehenderit quibusdam magnam ullam distinctio. Debitis nihil doloribus suscipit quos autem similique natus. Commodi voluptatibus laboriosam fugiat ducimus officia blanditiis.",
    },
    {
      position: "Self Developer",
      company: "College",
      companyLink: "https://www.google.com",
      year: "2021-Present",
      location: "Faridabad, Haryana, India",
      work: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil ipsa recusandae vero illum reprehenderit quibusdam magnam ullam distinctio. Debitis nihil doloribus suscipit quos autem similique natus. Commodi voluptatibus laboriosam fugiat ducimus officia blanditiis.",
    },
    {
      position: "Self Developer",
      company: "College",
      companyLink: "https://www.google.com",
      year: "2021-Present",
      location: "Faridabad, Haryana, India",
      work: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil ipsa recusandae vero illum reprehenderit quibusdam magnam ullam distinctio. Debitis nihil doloribus suscipit quos autem similique natus. Commodi voluptatibus laboriosam fugiat ducimus officia blanditiis.",
    },
    {
      position: "Self Developer",
      company: "College",
      companyLink: "https://www.google.com",
      year: "2021-Present",
      location: "Faridabad, Haryana, India",
      work: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil ipsa recusandae vero illum reprehenderit quibusdam magnam ullam distinctio. Debitis nihil doloribus suscipit quos autem similique natus. Commodi voluptatibus laboriosam fugiat ducimus officia blanditiis.",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section
      className="max-w-8xl mx-auto py-10 px-5 sm:p-0 mt-7"
      id="experience"
    >
      <Title
        text="Experience 😎"
        className="flex flex-col items-center justify-center -rotate-6 animate-move-down"
      />

      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-green-400 origin-top"
        />

        <ul className="w-full flex flex-col items-center justify-between ml-4">
          {experience.map((exp, index) => (
            <li key={index} className="mb-10">
              <h3 className="capitalize font-bold text-2xl">
                {exp.position} &nbsp;
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary capitalize"
                >
                  @{exp.company}
                </a>
              </h3>
              <span className="capitalize font-medium text-dark/75">
                {exp.year} | {exp.location}
              </span>
              <p className="font-medium w-full">{exp.work}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
