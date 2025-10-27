import React from 'react'
import Hero from '../components/Hero'
import Testimonial from '../components/Testimonial'
import Process from '../components/Process'



const Home = () => {
  return (
    <div className='min-h-screen w-full'>
        <Hero />
        <Testimonial />
        <Process />
    </div>
  )
}

export default Home