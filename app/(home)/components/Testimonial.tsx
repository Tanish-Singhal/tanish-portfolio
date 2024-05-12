import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import React from 'react'
import Title from './Title'

function Testimonial() {
  const testimonials = [
    {
      quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eligendi est libero corrupti voluptas fugit.",
      name: "Ajeeb Aadmi",
      title: "Project Manager at Netflix"
    },
    {
      quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eligendi est libero corrupti voluptas fugit.",
      name: "Ajeeb Aadmi",
      title: "Project Manager at Netflix"
    },
    {
      quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eligendi est libero corrupti voluptas fugit.",
      name: "Ajeeb Aadmi",
      title: "Project Manager at Netflix"
    },
    {
      quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eligendi est libero corrupti voluptas fugit.",
      name: "Ajeeb Aadmi",
      title: "Project Manager at Netflix"
    },
    {
      quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eligendi est libero corrupti voluptas fugit.",
      name: "Ajeeb Aadmi",
      title: "Project Manager at Netflix"
    },
  ]

  return (
    <div className="max-w-8xl mx-auto pt-20 lg:pt-24 mt-4">
      <Title
        text="Testmonials 🔊"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <InfiniteMovingCards items={testimonials} speed="slow" className='mt-10' />
    </div>
  )
}

export default Testimonial