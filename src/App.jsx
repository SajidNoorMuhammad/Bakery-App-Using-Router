import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header'
import Home from './Pages/Home'
import Bakery from './Pages/Bakery'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Footer from '../Components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bakery' element={<Bakery />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
