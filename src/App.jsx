import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Fact from './pages/Fact'
import About from './pages/About'

function App() {
  return (
    <div className='container mx-auto'>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fact' element={<Fact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>

      <footer className='grid grid-cols-3 p-8 gap-8'>
        <div>
          <h1 className='text-3xl font-bold pb-5'>HoomanFinder</h1>
          <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto, beatae nulla numquam minima odit. Minus porro nam nemo sequi provident nesciunt architecto voluptates. Sit facilis repellat mollitia soluta officia!</p>
        </div>

        <div></div>

        <ul className='flex justify-between items-center font-bold'>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Email</li>
        </ul>
      </footer>
    </div>
  )
}

export default App
