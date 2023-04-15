import React from 'react'
import './whoWeAreSection.css'

function WhoWeAreSection({ description, findMoreUrl, imgAltText, imgSrc }) {
  return (
    <div className="container-fluid row px-2 pt-4 pb-4 mx-auto whoWeAreSection">
      <div className="col-md-6 col-lg-1">
        <img id="boardOfOfficialsImg" src={imgSrc} alt={imgAltText} />
      </div>
      <div className="col-md-6 col-lg-11">
        <div className="text-section-card  d-flex flex-column p-3 p-lg-5 w-100 w-lg-50">
            <h2 id="lp-wwas-title">Who We Are</h2>
            <p>{description}</p>
            <button
                className="mt-auto"
                id="findMoreBtn"
                onClick={(e) => {
                    e.preventDefault()
                    window.location.href = findMoreUrl
                }}
            >
                Find More
            </button>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreSection
