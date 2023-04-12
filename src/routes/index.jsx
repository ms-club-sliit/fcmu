import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/client/common/header'
import EventsPage from '../pages/EventsPage'
import LandingPage from '../pages/LandingPage'
import CommunityPage from '../pages/CommunityPage'
import ContactUs from '../pages/ContactUs.jsx'

function RouteComponent() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default RouteComponent
