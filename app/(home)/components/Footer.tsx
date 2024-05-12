import Link from "next/link"; // Ensure correct import
import React from "react";
import { SiDiscord, SiGithub, SiLinkedin, SiX } from "react-icons/si";

function Footer() {
  const socials = [
    {
      link: "https://github.com/Tanish-Singhal",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https://",
      label: "X",
      Icon: SiX,
    },
    {
      link: "https://",
      label: "Discord",
      Icon: SiDiscord,
    },
    {
      link: "https://",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
  ];

  return (
    <div className="mt-20 mb-6 px-6">
      <div className="w-full h-2 bg-green-500 rounded-full"></div>
      <div className="w-full h-2 bg-indigo-500 rounded-full translate-x-2"></div>
      <div className="py-7 mx-8 flex flex-col gap-5 md:flex-row justify-between items-center md:py-6">
        <h1 className="text-xl font-bold md:text-3xl underline underline-offset-8 decoration-green-500 selectable">
          tanishsinghal510@gmail.com
        </h1>

        <div className="flex items-center gap-5">
          {socials.map((social, index) => {
            const Icon = social.Icon;

            return (
              <Link
                href={social.link}
                key={index}
                aria-label={social.label}
                target="_blank"
              >
                <Icon className="w-6 h-6 hover:scale-125 transition-all md:w-7 md:h-7" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
