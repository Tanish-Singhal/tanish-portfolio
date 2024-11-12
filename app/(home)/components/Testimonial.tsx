import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";
import Title from "./Title";

function Testimonial() {
  const testimonials = [
    {
      quote: "Tanish joined us as an intern and quickly adapted to our development workflow. His eagerness to learn and positive attitude made him a great addition to our team.",
      name: "Akshita Jain",
      title: "Project Lead, Stance International"
    },
    {
      quote: "I've seen Tanish's projects and his approach to problem-solving is impressive. He was always ready to take on new challenges and learn from feedback.",
      name: "Ashish Singhal",
      title: "Software Engineer, Apple"
    },
    {
      quote: "Tanish's ability to write clean, maintainable code and his commitment to best practices made him stand out. He's a valuable asset to any development team.",
      name: "Ashish Singhal",
      title: "Program Manager, TCS"
    },
    {
      quote: "Have reviewed Tanish's work, I can say he has a good grasp of frontend technologies. His projects demonstrate attention to detail and user experience.",
      name: "Meenakshi Jindal",
      title: "Staff Software Engineer, Netflix"
    },
    {
      quote: "Met Tanish at a hackathon - his enthusiasm for coding and ability to grasp new concepts quickly stood out. He's definitely someone to watch in the tech community.",
      name: "Lakshay Gautam",
      title: "Hackathon Partner"
    },
    {
      quote: "Have reviewed Tanish's work and projects. His code contributions were well-structured and good grasp of web technologies.",
      name: "Ankit Jain",
      title: "Developer, Nagarro"
    },
    {
      quote: "Tanish showed exceptional skills in frontend development during our collaboration in Hackathon.",
      name: "Saksham Gupta",
      title: "Hackathon Partner"
    }
  ];

  return (
    <div className="max-w-8xl mx-auto pt-20 lg:pt-24 mt-4" id="testimonials">
      <Title text="Testmonials 🔊" className="flex flex-col items-center justify-center" />
      <InfiniteMovingCards items={testimonials} speed="slow" className="mt-10" />
    </div>
  );
}

export default Testimonial;
