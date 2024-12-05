import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen bg-black '>
      <Navbar />
     <HomePage/ >
    </div>
    </>
  )
}

export default App
