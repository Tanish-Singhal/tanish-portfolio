"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiAmazonaws,
  SiAuth0,
  SiBootstrap,
  SiC,
  SiCloudflare,
  SiCloudflareworkers,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHono,
  SiReactrouter,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNextui,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRecoil,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWebrtc,
  SiZod,
  SiRender,
  SiReacthookform,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Github",
      Icon: SiGithub,
    },
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "Sass",
      Icon: SiSass,
    },
    {
      text: "Tailwind CSS",
      Icon: SiTailwindcss,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "bootstrap",
      Icon: SiBootstrap,
    },
    {
      text: "Material UI",
      Icon: SiMui,
    },
    {
      text: "Vite",
      Icon: SiVite,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "React Router",
      Icon: SiReactrouter
    },
    {
      text: "React Hook Form",
      Icon: SiReacthookform
    },
    // {
    //   text: "Recoil",
    //   Icon: SiRecoil
    // },
    {
      text: "Redux",
      Icon: SiRedux,
    },
    {
      text: "Next JS",
      Icon: SiNextdotjs,
    },
    {
      text: "Shadcn",
      Icon: SiShadcnui,
    },
    {
      text: "Next UI",
      Icon: SiNextui,
    },
    {
      text: "Node JS",
      Icon: SiNodedotjs,
    },
    {
      text: "npm",
      Icon: SiNpm,
    },
    {
      text: "Express",
      Icon: SiExpress,
    },
    {
      text: "Postman",
      Icon: SiPostman,
    },
    {
      text: "Zod",
      Icon: SiZod,
    },
    {
      text: "JWT",
      Icon: SiJsonwebtokens,
    },
    {
      text: "Mongo DB",
      Icon: SiMongodb,
    },
    {
      text: "My SQL",
      Icon: SiMysql,
    },
    {
      text: "Postgres",
      Icon: SiPostgresql,
    },
    {
      text: "Prisma",
      Icon: SiPrisma,
    },
    {
      text: "Supabase",
      Icon: SiSupabase,
    },
    {
      text: "Docker",
      Icon: SiDocker,
    },
    {
      text: "Turborepo",
      Icon: SiTurborepo,
    },
    // {
    //   text: "WebRTC",
    //   Icon: SiWebrtc,
    // },
    // {
    //   text: "Socket.io",
    //   Icon: SiSocketdotio,
    // },
    // {
    //   text: "AWS",
    //   Icon: SiAmazonaws,
    // },
    {
      text: "Vercel",
      Icon: SiVercel,
    },
    {
      text: "Render",
      Icon: SiRender, 
    },
    {
      text: "Hono",
      Icon: SiHono,
    },
    {
      text: "Cloudflare Workers",
      Icon: SiCloudflare,
    },
  ];

  return (
    <div className="max-w-8xl mx-auto pt-20 lg:pt-24" id="skills">
      <Title
        text="Skills 🔪 (hover me)"
        className="flex flex-col items-center justify-center"
      />

      <HoverEffect items={skills} />
    </div>
  );
}

export default Skills;
