import React from 'react'
import './whoWeAreSection.css'

function WhoWeAreSection({ description, findMoreUrl, imgAltText, imgSrc }) {
  return (
    <div className="container-fluid d-flex px-2 pt-4 pb-4 mx-auto whoWeAreSection">
      <div className="boardImgDiv">
        <img id="boardOfOfficialsImg" src={imgSrc} alt={imgAltText} />
      </div>
      <div className="">
        <div className="text-section-card  d-flex flex-column p-3 p-lg-5 w-100">
          <h2 id="lp-wwas-title">Who We Are</h2>
          <p className="white-space-string">{description}</p>
          <button
            className="btnHoverEffect "
            id="findMoreBtn"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = findMoreUrl
            }}>
            Find out More {'>'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreSection
