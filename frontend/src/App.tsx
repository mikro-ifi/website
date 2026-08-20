import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/Index'
import NavBar from './components/Navbar/Navbar'
import MainLayout from './layouts/MainLayout'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage/>}>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
