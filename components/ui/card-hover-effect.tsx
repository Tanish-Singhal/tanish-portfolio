import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 py-14",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.Icon;

        return <div
          key={idx}
          className="relative group p-2 h-full w-full flex flex-col items-center"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-600/[0.8]  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-md w-full p-2 overflow-hidden bg-black group-hover:ring-4 ring-green-500 relative z-20 transition-all duration-500 cursor-pointer">
            <div className="py-4 space-y-2">
                <Icon className="w-8 h-8 mx-auto" />
                <p className="text-xl font-bold text-center text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">{item.text}</p>
            </div>
          </div>
        </div>
      })}
    </div>
  );
};
