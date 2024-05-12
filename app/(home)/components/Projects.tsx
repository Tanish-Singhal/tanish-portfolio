"use client";
import React, { useState } from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      name: "personal Portfolio",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      image: "/Screenshot 2024-05-12 130736.png",
      tags: ["all", "frontend"],
      tech: ["next js", "tailwind css", "acertinity ui"],
      github: "https://github.com/Tanish-Singhal",
      website: "",
    },
    {
      name: "personal Portfolio",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      image: "/Screenshot 2024-05-12 130736.png",
      tags: ["all", "full stack"],
      tech: ["next js", "tailwind css", "acertinity ui"],
      github: "",
      website: "",
    },
    {
      name: "personal Portfolio",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      image: "/Screenshot 2024-05-12 130736.png",
      tags: ["all", "Frontend"],
      tech: ["next js", "tailwind css", "acertinity ui"],
      github: "",
      website: "",
    },
    {
      name: "personal Portfolio",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      image: "/Screenshot 2024-05-12 130736.png",
      tags: ["all", "frontend"],
      tech: ["next js", "tailwind css", "acertinity ui"],
      github: "",
      website: "",
    },
    {
      name: "personal Portfolio",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      image: "/Screenshot 2024-05-12 130736.png",
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
    <div className="py-10 px-5 sm:p-0 mt-7">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <div className="flex justify-center md:justify-center gap-[10px] mb-[50px] overflow-auto mt-8">
        {filters.map((item, index) => (
          <button
            key={index}
            className={`bg-[#252525] rounded-lg py-3 px-5 text-lg font-semibold cursor-pointer whitespace-nowrap ${
              selectedTag === item.id ? "bg-green-500 text-black" : ""
            }`}
            onClick={() => filterHandler(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex justify-center px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            // <div
            //   key={index}
            //   className="max-w-sm rounded-[12px] overflow-hidden bg-zinc-800"
            // >
            //   <div className="px-4 pt-4">
            //     <img
            //       className="block w-full h-48 object-cover object-center rounded-[12px]"
            //       src={project.image}
            //       alt={project.name}
            //     />
            //   </div>
            //   <div className="px-6 py-4">
            //     <h2 className="text-xl font-bold text-white mb-2">
            //       {project.name}
            //     </h2>
            //     <p className="text-gray-400 text-base">{project.description}</p>
            //   </div>
            //   <div className="px-6 pt-2 pb-3">
            //     <div className="flex flex-wrap">
            //       {project.tech.map((tech, techIndex) => (
            //         <span
            //           key={techIndex}
            //           className="inline-block bg-gray-800 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2"
            //         >
            //           {tech}
            //         </span>
            //       ))}
            //     </div>
            //   </div>
            //   <div className="px-6 py-2 mb-3 flex gap-3">
            //     <Link
            //       href={project.website}
            //       className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
            //       target="_blank"
            //     >
            //       Live Demo
            //     </Link>
            //     <Link
            //       href={project.github}
            //       className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg"
            //       target="_blank"
            //     >
            //       <SiGithub />
            //       <span>GitHub</span>
            //     </Link>
            //   </div>
            // </div>
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
