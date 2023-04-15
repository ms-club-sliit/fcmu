import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/logo/FCSCMedia.webp'
import './header.css'

export default function Header() {
  return (
    <header>
      <nav className="navBarCont navbar navbar-expand-lg bg-body-tertiary">
        <div className="navBarInnerCont container-fluid">
          <a className="navbar-brand" href="#">
            <div className="logoDiv d-flex justify-content-center align-items-center">
              <div>
                <img src={logo} alt="" width="90" />
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
                <a
                  href="src/components/client/header#"
                  className="nav-link active"
                  aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="src/components/client/header#" className="nav-link">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <Link to="/community" className="nav-link">
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactUs" className="nav-link">
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
