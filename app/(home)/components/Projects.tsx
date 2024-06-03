"use client";
import React, { useState } from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      name: "Personal Portfolio",
      description: "Explore my world through a personalized platform, designed to highlight my unique Skills, Experiences, and Achievements.",
      image: "/nenad-novakovic-mvG5WDANqPw-unsplash.jpg",
      hoverImage: "/Demo Project 1.png",
      tags: ["all", "frontend"],
      tech: ["next js", "tailwind css", "acertinity ui"],
      github: "https://github.com/Tanish-Singhal",
      website: "",
    },
    {
      name: "AI Image SaaS - Canva Application",
      description: "A real Saas App with Ai features and a payment and credits system using latest tech stack.",
      image: "/bright-colors-mixing-gently.jpg",
      hoverImage: "/Demo Project 2.png",
      tags: ["all", "full stack"],
      tech: ["next js", "tailwind css", "acertinity ui"],
      github: "",
      website: "",
    },
    {
      name: "personal Portfolio",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus vel saepe doloremque quam repellat",
      image: "/vivid-blurred-colorful-wallpaper-background.jpg",
      hoverImage: "/Demo Project 1.png",
      tags: ["all", "Frontend"],
      tech: ["next js", "tailwind css", "acertinity ui"],
      github: "",
      website: "",
    },
    {
      name: "Facely - Video Conferencing App",
      description:"Simplyfy your video conferencing experience with Facely. Seamlessly connect with colleagues and friends.",
      image: "/vivid-blurred-colorful-background.jpg",
      hoverImage: "/Demo Project 1.png",
      tags: ["all", "frontend"],
      tech: ["next js", "tailwind css", "acertinity ui"],
      github: "",
      website: "",
    },
    {
      name: "personal Portfolio",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus vel saepe doloremque quam repellat",
      image: "/pink-color-pastel-gradient-background.png",
      hoverImage: "/Demo Project 2.png",
      tags: ["all", "full stack"],
      tech: ["next js", "tailwind css", "acertinity ui"],
      github: "https://github.com/Tanish-Singhal",
      website: "https://google.com",
    },
    {
      name: "personal Portfolio",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus vel saepe doloremque quam repellat",
      image: "/Blue-pastel-gradient-background-free-download.-scaled.jpg",
      hoverImage: "/Demo Project 2.png",
      tags: ["all", "full stack"],
      tech: ["next js", "tailwind css", "acertinity ui"],
      github: "https://github.com/Tanish-Singhal",
      website: "https://google.com",
    },
  ];

  const filters = [
    {
      name: "All",
      id: "all",
    },
    {
      name: "Frontend",
      id: "frontend",
    },
    {
      name: "Full Stack",
      id: "full stack",
    },
  ];

  const [selectedTag, setSelectedTag] = useState("all");
  const [projectData, setProjectData] = useState(projects);

  const filterHandler = (tag: any) => {
    setSelectedTag(tag);
    let filteredProjects = [];
    if (tag === "all") {
      filteredProjects = projects;
    } else {
      filteredProjects = projects.filter((p) => p.tags.includes(tag));
    }
    setProjectData(filteredProjects);
  };

  return (
    <div className="py-10 px-5 sm:p-0 mt-7" id="projects">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <div className="flex justify-center md:justify-center gap-[10px] mb-[50px] overflow-auto mt-8">
        {filters.map((item, index) => (
          <button
            key={index}
            className={`bg-zinc-900 rounded-xl py-3 px-5 text-lg font-semibold cursor-pointer whitespace-nowrap ${
              selectedTag === item.id ? "bg-green-400 text-black" : ""
            }`}
            onClick={() => {
              filterHandler(item.id);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex justify-center px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
