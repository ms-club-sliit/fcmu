import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/client/common/header/Header'
import LandingPage from '../pages/LandingPage'

function RouteComponent() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default RouteComponent
