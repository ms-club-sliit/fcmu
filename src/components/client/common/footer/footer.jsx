import React from 'react'
import './footer.css'
import mediaLogo from '../../../../assets/logo/FCSC MEDIA 1.svg'
import msClubLogo from '../../../../assets/logo/logoMS 1.svg'
import msClubFooterLogo from '../../../../assets/logo/logoMS 2.svg'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section id="footer ">
      <div className="container-mx-100 footerSubContainer">
        <div className="">
          <div className="row">
            <div className="col-6 col-md-4">
              <img src={mediaLogo} className="img-fluid footer-img1" alt="logo" />
              <h5 className="text-black fw-bold mt-3 sub-head">Contact with us</h5>

              <div className="d-flex mb-4">
                <a href="https://web.facebook.com/sliit.fcmu">
                  <FaFacebook
                    className="me-2 text-black social-media-icon social-links"
                    size="27"
                  />
                </a>
                <a href="https://www.instagram.com/sliit.fcmu/?hl=en">
                  <FaInstagram
                    className="me-2 text-black social-media-icon social-links"
                    size="27"
                  />
                </a>
                <a href="https://www.linkedin.com/company/sliit-fcmu/">
                  <FaLinkedin
                    className="me-2 text-black social-media-icon social-links"
                    size="27"
                  />
                </a>
              </div>
            </div>

            <div className="col-6 col-md-4 quick-link-area">
              <h5 className="text-black fw-bold sub-head">Quick Links</h5>
              <Link to="/" className="nav-link text-black ps-0 text-14px" aria-current="page">
                Home
              </Link>
              <Link to="events" className="nav-link text-black ps-0 text-14px">
                Events
              </Link>
              <Link to="/community" className="nav-link text-black ps-0 text-14px">
                Community
              </Link>
              <Link to="/about" className="nav-link text-black ps-0 text-14px">
                About us
              </Link>
              <Link to="/contactUs" className="nav-link text-black ps-0 text-14px">
                Contact us
              </Link>
            </div>
            <div className="col-md-4 quick-link-area">
              <h5 className="text-black fw-bold sub-head">Subscribe</h5>
              <p className="subscribe-p fw-normal text-14px">
                Dont forget to subscribe our news letters,enter your e-mail here.
              </p>
              <div className="input-group mb-3 footer-input-group">
                <input
                  type="text"
                  className="form-control rounded text-14px"
                  placeholder="Email Address"
                  aria-label="Email
                Address"
                  aria-describedby="basic-addon2"
                  id="subscribe-input"
                />
                <span className="input-group-text rounded" id="basic-addon2">
                  <i className="fa fa-solid fa-envelope" id="emailIconInText"></i>
                </span>
              </div>

            </div>
          </div>

          <hr className="seprator" />
          <div className="d-flex justify-content-center align-items-center">
            <p className="text-center text-14px">
              Copyright © 2023 - All Rights Reserved | Powered By MSClub
            </p>
            <img src={msClubLogo} className="img-fluid footer-img2 float-end" alt="logo" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
