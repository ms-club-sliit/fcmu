import React from 'react'
import './heroSection.css'
import heroSecImage from '../../../../assets/images/heroSecImg.svg'
// import heroSecBackground from "../../../../assets/images/heroSecBackground.svg"

function HeroSection() {
  return (
    <div className="container-fluid row px-2 pt-4 pb-4 m-0 heroSecDiv">
      {/*<img src={heroSecBackground} alt="" height={350} className="heroSecBackground"/>*/}
      <div className="col-12 col-sm-6 col-md-6 col-lg-6">
        <h1>SLIIT </h1>
        <h1>Faculty of Computing</h1>
        <h1>Media Unit</h1>
        <p className="text-justify heroTextParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi diam vitae, cursus ac velit
          bibendum tristique. Vitae lacinia proin urna, in pretium dui. Suspendisse proin etiam
          senectus gravida suscipit.
        </p>
        <button className="btn" id="btnJonNow">
          Join Now
        </button>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-6 heroImgSec d-flex justify-content-end align-items-center mt-4 mt-lg-0 mt-md-4 mt-sm-4">
        <img className="heroImgSec" src={heroSecImage} alt="heroSecImage" />
      </div>
    </div>
  )
}

export default HeroSection
