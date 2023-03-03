import React from 'react'
import './whoWeAreSection.css'

const WhoWeAreSection = ({ imgSrc, description, findMoreUrl }) => {
  return (
    <div className="container-fluid row align-items-center px-2 pt-4 pb-4 m-0 whoWeAreSection">
      <div className="col-md-12 col-lg-7">
        <img id="boardOfOfficialsImg" src={imgSrc} />
      </div>
      <div className="col-md-12 col-lg-5">
        <div className="text-section-card p-4 align-middle">
          <h1>Who We Are</h1>
          <p>{description}</p>
          <a id="findMoreBtn" className="btn btn_findMore" to={findMoreUrl}>
            Find More
          </a>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreSection
