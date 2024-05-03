import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([]) 

  return (
    <>
      <Navbar/>
      <Outlet
        context={[cart, setCart]}
      />
    </>
  )
}

export default App
