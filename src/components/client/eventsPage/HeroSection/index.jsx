import './styles.css'
const HeroSection = ({ description, imgSrc, title }) => {
  return (
    <div>
      <div className="container-fluid row px-2 pt-4 pb-4 m-0">
        <div className="row">
          <div className="col-md-6">
            <h1 className="title">{title}</h1>
            <p className="desc">{description}</p>
          </div>
          <div className="col-md-6">
            <img src={imgSrc} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
