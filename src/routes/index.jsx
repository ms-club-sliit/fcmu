import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/client/common/header'
import EventsPage from '../pages/EventsPage'
import LandingPage from '../pages/LandingPage'
import CommunityPage from '../pages/CommunityPage'
import AboutPage from '../pages/AboutPage'

function RouteComponent() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default RouteComponent
