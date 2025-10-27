import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Testimonial from './components/Testimonial'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Process from './components/Process'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='bg-[#0e0e0e] w-full overflow-x-hidden'>
      <Nav />
      <Home />
      <Testimonial />
      <About />
      <Services />
      <Process />
      <Projects />
      <Footer />
    </div>
  )
}

export default App