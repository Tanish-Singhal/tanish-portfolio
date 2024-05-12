import Link from "next/link";
import React from "react";
import { SiDiscord, SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";

function Navbar() {
  const socials = [
    {
      link: "https:",
      label: "Mail",
      Icon: SiGmail,
    },
    {
      link: "https://github.com/Tanish-Singhal",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https:",
      label: "X",
      Icon: SiX,
    },
    {
      link: "https:",
      label: "Discord",
      Icon: SiDiscord,
    },
    {
      link: "https:",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
  ];

  return (
    <nav className="py-4 flex justify-between items-center md:py-6">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 md:text-3xl">Tanish Singhal 🧑🏻‍💻</h1>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label} target="_blank" >
              <Icon className="w-5 h-5 hover:scale-125 transition-all md:w-7 md:h-7" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
