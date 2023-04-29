import './styles.css'

function HeroSection({ description, imgAltText, imgSrc, title }) {
  return (
    <div>
      <div id="events-hero-section" className="container-fluid row px-2 pt-4 pb-4 m-0">
        <div className="row">
          <h1 id="events-hero-title">{title}</h1>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <p className="desc">{description}</p>
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
