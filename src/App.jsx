import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './components/pages/home/Home'
import Cards from './components/pages/cards/Cards'
import Header from './components/layouts/Header/Header'
import Footer from './components/layouts/footer/Footer'

import './App.css'


function App() {


  return (
    <div className="App">

      <Header/>

      <div className="main">

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cards" element={<Cards />}/>
        </Routes>

      </div>

      <Footer/>

    </div>
  )
}

export default App
