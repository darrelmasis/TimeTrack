import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Página de home</h2>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h2>Página de about</h2>
    </div>
  )
}

const NotFound = () => {
  return (
    <div>
      <h2>Error 404</h2>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
