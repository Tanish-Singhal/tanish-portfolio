import { FloatingNav } from "@/components/ui/floating-navbar";
import React from "react";

function FloatingNavbar() {
  return (
    <div>
      <FloatingNav navItems={[
        { 
          name: "About", 
          link: "#about",
        },
        { 
          name: "Skills", 
          link: "#skills",
        },
        { 
          name: "Projects",
          link: "#projects",
        },
        // {
        //   name: "Experience",
        //   link: "#experience",
        // },
        { 
          name: "Contact", 
          link: "#contact",
        },
      ]} />
    </div>
  );
}

export default FloatingNavbar;