import React from 'react'
import './newHeroSection.css'

function HeroSection() {
  return (
    <div className="py-4 m-0 newHeroSecMainDivContainer">
      <div className="d-flex flex-column">
        <h1 className="heroSecTitle">
          SLIIT Faculty of Computing
          <br />
          Media Unit
        </h1>
        <p className="text-justify newHeroTextParagraph mx-4">
          The Sliit Media Unit is an essential part of the university community, providing valuable
          support to departments and faculties. They use their skills and expertise to take
          high-quality photographs, creative writing, and digital media to promote the university's
          activities, achievements, and culture. They also use their communication skills to
          disseminate information to the campus community, creating a more engaged and connected
          campus community.
        </p>
        <button className="btn btnHoverEffect" id="newBtnJonNow">
          Join Now
        </button>
      </div>
    </div>
  )
}

export default HeroSection
