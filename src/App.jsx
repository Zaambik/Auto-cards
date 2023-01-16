import { useState } from 'react'
import './App.css'
import { Home } from './assets/home'
import { Page } from './assets/page'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">


    <div className="main">

      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/page" element={<Page />}/>
        
      </Routes>

    </div>


  </div>
  )
}

export default App
