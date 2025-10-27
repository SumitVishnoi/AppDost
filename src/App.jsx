import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-[#0e0e0e] w-full overflow-x-hidden'>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/career' element={<Projects />}/>
        <Route path='/services' element={<Services />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App