// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
// import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
