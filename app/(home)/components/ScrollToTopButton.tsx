"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down a certain amount
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    // Render button conditionally based on showButton state
    <button
      className={`fixed bottom-10 right-10 bg-green-500 hover:bg-green-700 text-white text-lg font-bold py-4 px-4 rounded-full z-50 animate-move-up md:bottom-20 ${
        showButton ? "block" : "hidden"
      }`}
      onClick={goToTop}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
