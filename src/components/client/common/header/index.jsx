import './header.css'
import logo from '../../../../assets/logo/FCSCMedia.webp'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header() {
  const location = useLocation()
  const [url, setUrl] = useState(null)

  useEffect(() => {
    setUrl(location.pathname)
  }, [location])

  return (
    <header>
      <nav className="navBarCont navbar navbar-expand-lg bg-body-tertiary">
        <div className="navBarInnerCont container-fluid">
          <a className="navbar-brand" href="#">
            <div className="logoDiv d-flex justify-content-center align-items-center">
              <div>
                <img src={logo} alt="Media Unit logo" width="90" />
              </div>
            </div>
          </a>
          <button
            className="navbar-light navbar-toggler m-3 dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navlinkCont collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav nav-pills gap-2">
              <li className="nav-item">
                <Link
                  to="/"
                  className={url === '/' ? 'nav-link active' : 'nav-link'}
                  aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className={url === '/events' ? 'nav-link active' : 'nav-link'}>
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/community"
                  className={url === '/community' ? 'nav-link active' : 'nav-link'}>
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <a href="/about" className={url === '/about' ? 'nav-link active' : 'nav-link'}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="/contactUs"
                  className={url === '/contactUs' ? 'nav-link active' : 'nav-link'}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
