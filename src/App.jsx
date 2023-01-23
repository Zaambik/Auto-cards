import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/layouts/header/Header'
import Footer from './components/layouts/footer/Footer'
import Home from './components/pages/home/Home'
import Catalog from './components/pages/catalog/Catalog'
import Contacts from './components/pages/contacts/Contacts'

import './App.css'


function App() {

  const [activePage, setActivePage] = useState('home')

  return (
    <div className="App">

      <Header activePage={activePage}/>

      <div className="main">

        <Routes>
          <Route path="/" element={<Home setActivePage={(page) => setActivePage(page)}/>}/>
          <Route path="/catalog" element={<Catalog setActivePage={(page) => setActivePage(page)}/>}/>
          <Route path="/contacts" element={<Contacts setActivePage={(page) => setActivePage(page)}/>}/>
          <Route path="*" element={<h1>page not found</h1>}/>
        </Routes>

      </div>

      <Footer/>

    </div>
  )
}

export default App
