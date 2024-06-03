"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      // Provide a fallback value of 0 for getPrevious() to avoid 'undefined'
      let direction = current - (scrollYProgress.getPrevious() || 0);
      setVisible(scrollYProgress.get() >= 0.05 && direction < 0);
    }
  });

  // Define the type for 'id' as string
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit flex-wrap fixed top-5 inset-x-0 mx-auto border-2 dark:border-green-500 rounded-2xl dark:bg-zinc-900 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-4 items-center justify-center space-x-4 sm:px-5 sm:py-3 sm:text-lg sm:gap-6",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`nav-item-${idx}`}
            onClick={() => scrollToSection(navItem.link.substring(1))}
            className={cn(
              "cursor-pointer relative dark:text-white items-center flex space-x-3 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="sm:block text-md font-semibold">{navItem.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};