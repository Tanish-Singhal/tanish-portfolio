"use client";
import React, { useState } from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      name: "Personal Developer Portfolio",
      description: "Explore my world through a personalized platform, designed to highlight my Skills, Experiences, and Achievements. This is the website in which you are currently on.",
      image: "/nenad-novakovic-mvG5WDANqPw-unsplash.jpg",
      hoverImage: "/Portfolio Project.png",
      tags: ["all", "frontend"],
      tech: ["next js", "tailwind css", "shadcn ui", "next ui", "vercel"],
      github: "https://github.com/Tanish-Singhal/tanish-portfolio",
      website: "https://tanish-portfolio-nu.vercel.app/",
    },

    {
      name: "Foodies - Food Ordering App",
      description: "Developed a user-friendly food ordering app using API of an Indian Unicorn Startup, featuring real-time restaurants and cuisine options and cart functionality.",
      image: "/bright-colors-mixing-gently.jpg",
      hoverImage: "/foodies.png",
      tags: ["all", "frontend"],
      tech: ["React js", "tailwind css", "Redux Toolkit", "React Router", "express js", "vercel", "render"],
      github: "https://github.com/Tanish-Singhal/Foodies",
      website: "https://foodies-zeta-one.vercel.app/",
    },
    {
      name: "Taskster - Task Mangement App",
      description:"Developed a full-stack Kanban-style task management app with drag-and-drop functionality.",
      image: "/vivid-blurred-colorful-background.jpg",
      hoverImage: "/Portfolio Project.png",
      tags: ["all", "full stack"],
      tech: ["next js", "tailwind css", "shadcn ui", "next ui", "redux toolkit", "node js", "express js", "mongodb", "jwt", "zod", "vercel", "render"],
      github: "https://github.com/Tanish-Singhal/taskster",
      website: "https://taskster.vercel.app/",
    },
    // {
    //   name: "AI Image SaaS - Canva Application",
    //   description: "A real Saas App with Ai features and a payment and credits system using latest tech stack.",
    //   image: "/vivid-blurred-colorful-wallpaper-background.jpg",
    //   hoverImage: "/Portfolio Project.png",
    //   tags: ["all", "Frontend"],
    //   tech: ["next js", "tailwind css", "acertinity ui"],
    //   github: "",
    //   website: "",
    // },
    // {
    //   name: "Facely - Video Conferencing App",
    //   description: "Simplyfy your video conferencing experience with Facely. Seamlessly connect with colleagues and friends.",
    //   image: "/pink-color-pastel-gradient-background.png",
    //   hoverImage: "/Demo Project 2.png",
    //   tags: ["all", "full stack"],
    //   tech: ["next js", "tailwind css", "acertinity ui"],
    //   github: "https://github.com/Tanish-Singhal",
    //   website: "https://google.com",
    // },
    // {
    //   name: "personal Portfolio",
    //   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus vel saepe doloremque quam repellat",
    //   image: "/Blue-pastel-gradient-background-free-download.-scaled.jpg",
    //   hoverImage: "/Demo Project 2.png",
    //   tags: ["all", "full stack"],
    //   tech: ["next js", "tailwind css", "acertinity ui"],
    //   github: "https://github.com/Tanish-Singhal",
    //   website: "https://google.com",
    // },
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
        className="flex flex-col items-center justify-center"
      />

      <div className="flex justify-center md:justify-center gap-[10px] mb-[50px] overflow-auto mt-8">
        {filters.map((item, index) => (
          <button
            key={index}
            className={`bg-zinc-900 rounded-xl py-3 px-5 text-md sm:text-lg font-semibold cursor-pointer whitespace-nowrap ${
              selectedTag === item.id ? "text-yellow-400" : ""
            }`}
            onClick={() => {
              filterHandler(item.id);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex justify-center px-3 sm:px-7">
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
