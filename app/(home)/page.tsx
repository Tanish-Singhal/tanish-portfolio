import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'

function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative'>
        <div className='max-w-7xl mx-auto p-6'>
          <Navbar />
          <HeroSection />
        </div>

        <div className='max-w-7xl mx-auto p-6 mt-20'>
          <About />
          <Skills />
          <Projects />
          <Testimonial />
        </div>
      </div>
      
    </div>
  )
}

export default page