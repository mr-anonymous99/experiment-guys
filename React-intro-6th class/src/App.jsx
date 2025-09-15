import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Kura from './components/Kura'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Home/>
    <Home/>
    <Kura/>
    <Footer/>
    <p>this is vinay from guru</p>
    </>
    
  )
}

export default App
