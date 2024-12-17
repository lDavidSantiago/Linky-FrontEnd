import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
    <div className="relative min-h-screen dark:bg-neutral-1000 ">
      <div className="fireflies absolute inset-0 pointer-events-none z-10">
        <div className="firefly" style={{ top: '30%', left: '20%', animationDuration: '3s', animationDelay: '0.2s' }} />
        <div className="firefly" style={{ top: '70%', left: '80%', animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="firefly" style={{ top: '20%', left: '40%', animationDuration: '2.5s', animationDelay: '0.3s' }} />
        <div className="firefly" style={{ top: '60%', left: '50%', animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="firefly" style={{ top: '10%', left: '70%', animationDuration: '2.5s', animationDelay: '0.8s' }} />
        <div className="firefly" style={{ top: '40%', left: '80%', animationDuration: '2.5s', animationDelay: '1s' }} />
      </div>
      <Navbar />
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App
