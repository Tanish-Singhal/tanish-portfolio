import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import React from 'react'
import Title from './Title'

function Testimonial() {
  const testimonials = [
    {
      quote: "Lorem ipsum dolor ecusandae vero adipisci inventore, quasi culpa expedita incidunt nisi eum! Nulla accusamus sequi deleniti.",
      name: "Ajeeb Aadmi",
      title: "Project Manager at Netflix"
    },
    {
      quote: "Lorem ipsum dolor sit amet ccusamus sequi deleniti.",
      name: "Ajeeb Aadmi",
      title: "Project Manager at Netflix"
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem vel, recusandae vero adipisci inventore, quasi culpa expedita incidunt nisi eum! Nulla accusamus sequi deleniti.",
      name: "Ajeeb Aadmi",
      title: "Project Manager at Netflix"
    },
    {
      quote: "Lorem ipsum dolor sit  incidunt nisi eum! Nulla accusamus sequi deleniti.",
      name: "Ajeeb Aadmi",
      title: "Project Manager at Netflix"
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem vel, recusandae vero adipisci inventore, quasi culpa expedita incidunt nisi eum! Nulla accusamus sequi deleniti.",
      name: "Ajeeb Aadmi",
      title: "Project Manager at Netflix"
    },
  ]

  return (
    <div className="max-w-8xl mx-auto pt-20 lg:pt-24 mt-4" id="testimonials">
      <Title
        text="Testmonials 🔊"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <InfiniteMovingCards items={testimonials} speed="slow" className='mt-10' />
    </div>
  )
}

export default Testimonial