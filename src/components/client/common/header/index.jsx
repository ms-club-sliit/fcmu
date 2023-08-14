import './header.css'
import logo from '../../../../assets/logo/FCSCMedia.webp'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className="navBarCont navbar navbar-expand-lg bg-body-tertiary">
        <div className="navBarInnerCont container">
          <a className="navbar-brand" href="#">
            <div className="logoDiv d-flex justify-content-center align-items-center">
              <div>
                <img src={logo} alt="" width="88" />
              </div>
            </div>
          </a>
          <button
            className="navbar-light navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navlinkCont collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav text-dark gap-2">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="events" className="nav-link" activeclassname="active">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/community" className="nav-link" activeclassname="active">
                  Community
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeclassname="active">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactUs" className="nav-link" activeclassname="active">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
