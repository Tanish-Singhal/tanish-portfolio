import React from "react";
import Title from "./Title";
import aboutImg from "/public/Profile Photo.png";
import Image from "next/image";

function About() {
  return (
    <section className="max-w-8xl mx-auto" id="about">
      <Title
        text="About Me 😁"
        className="flex flex-col items-center justify-center animate-move-down"
      />

      <div className="flex justify-center flex-wrap w-full pt-10 mx-auto ">
        <p className="my-2 text-md sm:text-xl text-gray-300 text-center">
          I&apos;m Tanish Singhal, a B.Tech student and aspiring{" "}
          <b><u>Full-Stack Developer</u></b> with a passion for innovation. My
          expertise spans both <b><u>Frontend and Backend Development</u></b>, allowing me
          to tackle projects from start to finish. I&apos;m particularly fascinated
          by <b><u>Blockchain Technology</u></b> and its potential to reshape the web.
          <br />
          <br />A strong believer in continuous learning, I actively contribute
          to
          <b> <u>Open Source Projects</u></b> and build Personal Ventures to sharpen my
          skills. These projects showcase my ability to craft user-centric
          interfaces and develop robust back-end solutions, all while staying at
          the forefront of technological advancements.
          <br />
          <br />
          <b><u>Ready to Collaborate?</u></b> I&apos;m eager to bring my enthusiasm and
          expertise to your project. Let&apos;s build something groundbreaking
          together!
        </p>
      </div>
    </section>
  );
}

export default About;
