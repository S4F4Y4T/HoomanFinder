import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import {store} from './conf/Store'

import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Fact from './pages/Fact'
import About from './pages/About'
import JOIN from './pages/Join'
import Dashboard from './pages/dashboard/Dashboard'
import Settings from './pages/admin/Settings'

function Main(){
  const themeColor = useSelector((state) => state.global.value.themeColor)

  return (
    <div style={{backgroundColor: themeColor}} >
      <div className='container mx-auto'>

        <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/fact' element={<Fact />} />
              <Route path='/about' element={<About />} />
              <Route path='/join' element={<JOIN />} />
              <Route path='/dashboard/*' element={<Dashboard />} />
              <Route path='/site-settings' element={<Settings />} />
            </Routes>
            <Footer />
        </Router>

      </div>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App
