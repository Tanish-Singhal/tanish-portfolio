import React from "react";
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

function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-6">
          <Navbar />
          <FloatingNavbar />
          <div className="mt-8">

          <HeroSection />
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6 mt-28">
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

export default page;
