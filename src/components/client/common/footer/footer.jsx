import React from "react"
import "./footer.css"
import mediaLogo from "../../../../assets/logo/FCSC MEDIA 1.svg"
import msClubLogo from "../../../../assets/logo/logoMS 1.svg"
import msClubFooterLogo from "../../../../assets/logo/logoMS 2.svg"

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <section id="footer">
      <img src={mediaLogo} className="img-fluid footer-img1" alt="logo" />
      <img src={msClubLogo} className="img-fluid footer-img2 float-end" alt="logo" />
      <div className="container-fluid ps-4 pe-4">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-white fw-bold mt-3">Follow Us</h5>

            <div className="d-flex mb-4">
              <a href="https://web.facebook.com/sliit.fcmu">
                <FaFacebook className="me-2 text-white social-media-icon social-links" size="27" />
              </a>
              <a href="https://www.instagram.com/sliit.fcmu/?hl=en">
                <FaInstagram className="me-2 text-white social-media-icon social-links" size="27" />
              </a>
              <a href="https://www.linkedin.com/company/sliit-fcmu/">
                <FaLinkedin className="me-2 text-white social-media-icon social-links" size="27" />
              </a>
            </div>
          </div>
          <div className="col-md-4 quick-link-area">
            <h5 className="text-white fw-bold sub-head">Quick Links</h5>
            <hr className="hr-line" />
            <Link to="/" className="nav-link text-white ps-0" aria-current="page">
              Home
            </Link>
            <Link to="events" className="nav-link text-white ps-0">
              Events
            </Link>
            <Link to="/community" className="nav-link text-white ps-0">
              Community
            </Link>
            <Link to="/about" className="nav-link text-white ps-0">
              About us
            </Link>
            <Link to="/contactUs" className="nav-link text-white ps-0">
              Contact us
            </Link>
          </div>
          <div className="col-md-4 quick-link-area">
            <h5 className="text-white fw-bold sub-head">Subscribe</h5>
            <hr className="hr-line" />
            <p className="subscribe-p fw-normal">
              Dont forget to subscribe our news letters,enter your e-mail here.
            </p>
            <div className="input-group mb-3 ms-3">
              <span className="input-group-text rounded" id="basic-addon2">
                <i className="fa fa-solid fa-envelope" id="emailIconInText"></i>
              </span>
            </div>
          </div>
        </div>

        <hr className="seprator" />
        <div className="d-flex justify-content-center align-items-center">
          <p className="text-center text-white">
            Copyright © 2023 - All Rights Reserved | Powered By MSClub
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
