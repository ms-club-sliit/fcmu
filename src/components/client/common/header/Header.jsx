import './header.css'
import logo from '../../../../assets/logo/FCSCMedia.png'
import React from 'react'

export default function Header() {
  return (
    <header>
      <nav class="navBarCont navbar navbar-expand-lg bg-body-tertiary">
        <div class="navBarInnerCont container-fluid">
          <a class="navbar-brand" href="#">
            <div className="logoDiv d-flex justify-content-center align-items-center">
              <div>
                <img src={logo} alt="" width="90" />
              </div>
            </div>
          </a>
          <button
            class="navbar-light navbar-toggler m-3 dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navlinkCont collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav nav-pills gap-2">
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
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="src/components/client/header#" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="src/components/client/header#" className="nav-link">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="src/components/client/header#" className="nav-link">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
