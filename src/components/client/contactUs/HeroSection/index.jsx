import "./styles.css"

// eslint-disable-next-line react/prop-types
function HeroSection({ description, imgAltText, imgSrc, title }) {
  return (
    <div>
      <div id="contactus-hero-section" className="container-fluid row px-2 pt-4 m-0">
        <div className="row mb-3 mt-3">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h1 id="contactus-hero-title">{title}</h1> <br />
            <div className="col-12 col-sm-12 col-md-6 col-lg-12">
              <p className="desc mt-3 mb-0">{description}</p>
              <br />
            </div>
          </div>
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center mt-4 mt-lg-0 mt-md-4 mt-sm-4">
            <div id="contactus-hero-img-container">
              <img id="contactus-hero-img" src={imgSrc} alt={imgAltText} />
            </div>
          </div>
          <p className="mt-3">
            If you have any questions or concerns, please do not hesitate to fill out the form
            below. A member of our team will contact you within one business day to discuss your
            project in more detail and provide you with a personalized quote. At the SLIIT Faculty
            of Computing Media Unit, we believe that every project is unique, and we take great
            pride in tailoring our services to meet your specific needs. So whether you're looking
            for help with a video production, podcasting, graphic designing, or website development,
            we've got you covered. We appreciate your interest in our services and look forward to
            working with you. Thank you again for considering the SLIIT Faculty of Computing Media
            Unit!
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
