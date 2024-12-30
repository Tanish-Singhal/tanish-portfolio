import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SiGithub,
  SiMui,
  SiNextdotjs,
  SiShadcnui,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNextui,
  SiNodedotjs,
  SiVercel,
  SiReactrouter,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiRender,
  SiZod,
  SiReacthookform,
  SiPrisma,
  SiSupabase,
  SiPostman
} from "react-icons/si";

type TechIconKey = "next js" | "tailwind css" | "acertinity ui" | "react js" | "redux toolkit";

const techIcons: any = {
  "next js": <SiNextdotjs className="w-7 h-7" />,
  "tailwind css": <SiTailwindcss className="w-7 h-7" />,
  "shadcn ui": <SiShadcnui className="w-7 h-7" />,
  "next ui": <SiNextui className="w-7 h-7" />,
  "react js": <SiReact className="w-7 h-7" />,
  "react hook form": <SiReacthookform className="w-7 h-7" />,
  "react router": <SiReactrouter className="w-7 h-7" />,
  "redux toolkit": <SiRedux className="w-7 h-7" />,
  "node js": <SiNodedotjs className="w-7 h-7" />,
  "express js": <SiExpress className="w-7 h-7" />,
  "mongodb": <SiMongodb className="w-7 h-7" />,
  "jwt": <SiJsonwebtokens className="w-7 h-7" />,
  "zod": <SiZod className="w-7 h-7" />,
  "vercel": <SiVercel className="w-7 h-7" />,
  "render": <SiRender className="w-7 h-7" />,
  "prisma": <SiPrisma className="w-7 h-7" />,
  "supabase": <SiSupabase className="w-7 h-7" />,
  "postman": <SiPostman className="w-7 h-7" />,
};

interface Project {
  name: string;
  description: string;
  image: string;
  hoverImage: string;
  tech: string[];
  website: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => setIsHovered(!isHovered);

  return (
    <div
      className="max-w-sm rounded-xl overflow-hidden bg-zinc-900 relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onTouchStart={handleHover}
      onTouchEnd={handleHover}
    >
      <Image
        className="block w-full h-48 object-cover object-center"
        src={project.image}
        alt={project.name}
        width={500}
        height={500}
      />
      <Image
        className={`absolute top-0 left-0 w-full h-48 object-cover object-center transition duration-300 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        src={project.hoverImage}
        alt={project.name}
        width={500}
        height={500}
      />
      <div className="px-4 sm:px-6 py-4">
        <h2 className="text-xl font-bold text-white mb-2">{project.name}</h2>
        <p className="text-gray-400 text-base">{project.description}</p>
      </div>
      <div className="px-4 sm:px-6 pt-2 pb-3 flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <span key={techIndex} className="flex items-center text-white mr-2">
            {techIcons[tech.toLowerCase() as TechIconKey] || null}
          </span>
        ))}
      </div>
      <div className="px-4 sm:px-6 py-1 sm:py-2 mb-3 flex gap-3">
        <Link
          href={project.website}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl mr-2 w-1/2 flex items-center justify-center"
          target="_blank"
        >
          Live Demo
        </Link>
        <Link
          href={project.github}
          className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-xl w-1/2"
          target="_blank"
        >
          <SiGithub />
          <span>GitHub</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
