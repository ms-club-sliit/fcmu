import "./styles.css"

function HeroSection({ description, imgAltText, imgSrc, title }) {
  return (
    <div>
      <div id="events-hero-section" className="container-fluid row px-2 pt-4 m-0">
        <div className="row mb-3">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
            <h1 id="events-hero-title">{title.titleOne}</h1> <br />
            <h1 id="events-hero-title2">{title.titleTwo}</h1> <br />
            <h1 id="events-hero-title2">{title.titleThree}</h1>
            <div className="col-12 col-sm-12 col-md-6 col-lg-12">
              <p className="desc mt-5 mb-0">{description}</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center mt-4 mt-lg-0 mt-md-4 mt-sm-4">
            <div id="events-hero-img-container">
              <img id="events-hero-img" src={imgSrc} alt={imgAltText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
