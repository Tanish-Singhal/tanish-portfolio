import React from 'react'
import Navbar from './components/Navbar'

function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative'>
        <div className='max-w-7xl mx-auto p-6'>
          <Navbar />
        </div>
      </div>
      
    </div>
  )
}

export default page