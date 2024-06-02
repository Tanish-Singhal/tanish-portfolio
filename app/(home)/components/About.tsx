import React from "react";
import Title from "./Title";
import aboutImg from "/public/Profile Photo.png";
import Image from "next/image";

function About() {
  return (
    <section className="max-w-8xl mx-auto" id="about">
      <Title
        text="About Me 😁"
        className="flex flex-col items-center justify-center -rotate-6 animate-move-down"
      />

      <div className="flex justify-center flex-wrap w-full pt-10 mx-auto ">
        <p className="my-2 text-xl text-gray-300 text-center">
          I'm Tanish Singhal, a B.Tech student and aspiring{" "}
          <b>Full-Stack Developer</b> with a passion for innovation. My
          expertise spans both front-end and back-end development, allowing me
          to tackle projects from start to finish. I'm particularly fascinated
          by <b>Blockchain Technology</b> and its potential to reshape the web.
          <br />
          <br />A strong believer in continuous learning, I actively contribute
          to
          <b> Open Source Projects</b> and build personal ventures to sharpen my
          skills. These projects showcase my ability to craft user-centric
          interfaces and develop robust back-end solutions, all while staying at
          the forefront of technological advancements.
          <br />
          <br />
          <b>Ready to Collaborate?</b> I'm eager to bring my enthusiasm and
          expertise to your project. Let's build something groundbreaking
          together!
        </p>
      </div>
    </section>
  );
}

export default About;
