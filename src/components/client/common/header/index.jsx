import './header.css'
import logo from '../../../../assets/logo/FCSCMedia.webp'
import React from 'react'
import { NavLink } from 'react-router-dom'

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
                <NavLink to="/" className="nav-link" aria-current="page" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="events" className="nav-link" activeClassName="active">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/community" className="nav-link" activeClassName="active">
                  Community
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="active">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactUs" className="nav-link" activeClassName="active">
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
