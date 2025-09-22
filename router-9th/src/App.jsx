import { useState } from 'react'

import './App.css'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import {Link,Route,Routes,useNavigate} from "react-router-dom"
import Navbar from "../src/Components/Navbar"
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
        <Route path='services' element={<Services/>}/>
    </Routes>
    </>
  )
}

export default App
