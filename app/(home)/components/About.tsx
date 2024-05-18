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
              I'm Tanish Singhal, a B.Tech student and aspiring <b>Full-Stack
              Developer</b> with a passion for innovation. My expertise spans both
              front-end and back-end development, allowing me to tackle projects
              from start to finish. I'm particularly fascinated by <b>Blockchain
              Technology</b> and its potential to reshape the web.
              <br />
              <br />
              A strong believer in continuous learning, I actively contribute to
              <b> Open Source Projects</b> and build personal ventures to sharpen my
              skills. These projects showcase my ability to craft user-centric
              interfaces and develop robust back-end solutions, all while
              staying at the forefront of technological advancements.
              <br />
              <br />
              <b>Ready to Collaborate?</b> I'm eager to bring my enthusiasm and
              expertise to your project. Let's build something groundbreaking
              together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
