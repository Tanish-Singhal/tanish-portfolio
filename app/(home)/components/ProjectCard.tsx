import React from "react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

function ProjectCard({ project }: any) {
  return (
    <div className="max-w-sm rounded-[12px] overflow-hidden bg-zinc-900">
      <div className="px-4 pt-4">
        <img
          className="block w-full h-48 object-cover object-center rounded-[12px]"
          src={project.image}
          alt={project.name}
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-white mb-2">{project.name}</h2>
        <p className="text-gray-400 text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-2 pb-3">
        <div className="flex flex-wrap">
          {project.tech.map((tech: any, techIndex: any) => (
            <span
              key={techIndex}
              className="inline-block bg-gray-800 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 py-2 mb-3 flex gap-3">
        <Link
          href={project.website}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
          target="_blank"
        >
          Live Demo
        </Link>
        <Link
          href={project.github}
          className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg"
          target="_blank"
        >
          <SiGithub />
          <span>GitHub</span>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
