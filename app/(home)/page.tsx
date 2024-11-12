"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import FloatingNavbar from "./components/FloatingNavbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { gsap } from "gsap";

function Page() {
  const counterRef = useRef<HTMLHeadingElement>(null);
  const counter1Ref = useRef<HTMLHeadingElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    function startLoader() {
      let current = 0;

      function updateCounter() {
        current += Math.floor(Math.random() * 10) + 1;
        if (current >= 100) {
          current = 100;
          return;
        }
        if (counterRef.current) {
          counterRef.current.innerHTML = current + '%';
        }
        const delay = 55;
        setTimeout(updateCounter, delay);
      }

      updateCounter();
    }

    startLoader();

    gsap.to(counterRef.current, {
      delay: 2,
      opacity: 0,
      duration: 0.25,
    });
    gsap.to(counter1Ref.current, {
      delay: 2,
      opacity: 0,
      duration: 0.25,
    });

    gsap.to(barRefs.current, {
      delay: 2.5,
      height: 0,
      duration: 1,
      stagger: {
        amount: 0.4,
      },
      ease: "power4.inOut",
      onComplete: () => {
        if (overlayRef.current) {
          overlayRef.current.style.display = "none";
        }
        if (counterRef.current) {
          counterRef.current.style.display = "none";
        }
        if (counter1Ref.current) {
          counter1Ref.current.style.display = "none";
        }
        barRefs.current.forEach((bar) => {
          if (bar) bar.style.display = "none";
        });
        document.body.classList.remove("no-scroll");
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <h1 ref={counterRef} className="counter text-[#bcbcc4]">
        0
      </h1>
      <h1 ref={counter1Ref} className="counter-1 text-[#bcbcc4]">
        SIT BACK. RELAX.
      </h1>
      <div ref={overlayRef} className="overlay">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) barRefs.current[index] = el;
            }}
            className="bar dark:bg-neutral-800"
          ></div>
        ))}
      </div>
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-6">
          <Navbar />
          <FloatingNavbar />
          <div className="mt-8">
            <HeroSection />
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6 mt-20">
          <About />
        </div>

        <div className="max-w-7xl mx-auto">
          <Skills />
          <Projects />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default Page;
