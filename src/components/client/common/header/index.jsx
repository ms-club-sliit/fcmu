import React from 'react'
import './header.css'
import logo from '../../../../assets/logo/FCSCMedia.png'

function Header() {
  return (
    <div className="row p-0 m-0">
      <div className="container-fluid w-100 pe-0  ps-0">
        <header className="sticky-top d-flex flex-wrap justify-content-center py-3 pe-0">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
          >
            <div className="logoDiv d-flex justify-content-center align-items-center">
              <div>
                <img src={logo} alt="" width="90" />
              </div>
            </div>
          </a>

          <ul className="nav nav-pills me-4 navUl">
            <li className="nav-item">
              <a
                href="src/components/client/header#"
                className="nav-link active"
                aria-current="page"
              >
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
        </header>
      </div>
    </div>
  )
}

export default Header
