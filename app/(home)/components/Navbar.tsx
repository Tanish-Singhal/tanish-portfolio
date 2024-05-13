import Link from "next/link";
import React from "react";
import { SiDiscord, SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";

function Navbar() {
  const socials = [
    {
      link: "#contact",
      label: "Mail",
      Icon: SiGmail,
    },
    {
      link: "https://github.com/Tanish-Singhal",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https://twitter.com/TanishSing44334",
      label: "X",
      Icon: SiX,
    },
    {
      link: "https://discord.com/users/tanish_002/",
      label: "Discord",
      Icon: SiDiscord,
    },
    {
      link: "https://www.linkedin.com/in/tanishsinghal1",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
  ];

  return (
    <nav className="py-4 flex justify-between items-center md:py-6 animate-move-down">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 md:text-3xl">Tanish Singhal ‍</h1>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link
              href={social.link}
              key={index}
              aria-label={social.label}
              target={social.label === "Mail" ? "_self" : "_blank"}
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all md:w-7 md:h-7" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
