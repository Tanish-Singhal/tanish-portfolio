"use client";

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
      link: "https://x.com/offline_tnsh",
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

  function scrollToContact(event:any) {
    event.preventDefault(); // Prevent default link behavior
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="flex justify-between items-center md:py-4 animate-move-down">
      <Link
        href="/"
        className="text-2xl font-bold underline underline-offset-4 decoration-green-500 md:text-3xl"
      >
        Tanish Singhal
      </Link>

      <div className="flex items-center gap-3 sm:gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link
              key={index}
              aria-label={social.label}
              href={social.link} 
              onClick={social.label === "Mail" ? scrollToContact : undefined}
              target={social.label === "Mail" ? "" : "_blank"} // Maintain target behavior
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
