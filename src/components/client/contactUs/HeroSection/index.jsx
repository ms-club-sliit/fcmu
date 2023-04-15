import "./styles.css"

const HeroSection = ({description, imgAltText, imgSrc, title}) => {
    return (
        <div>
            <div id="contactus-hero-section" className="container-fluid row px-2 pt-4 m-0">
                <div className="row mb-3 mt-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h1 id="contactus-hero-title">{title}</h1> <br/>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-12">
                            <p className="desc mt-3 mb-0">{description}</p>
                            <br/>
                        </div>
                    </div>
                    <div
                        className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center mt-4 mt-lg-0 mt-md-4 mt-sm-4">
                        <div id="contactus-hero-img-container">
                            <img id="contactus-hero-img" src={imgSrc} alt={imgAltText}/>
                        </div>
                    </div>
                    <p className="mt-3">faucibus sollicitudin. Feugiat turpis velit fermentum metus. Ipsum ultrices
                        quam egestas turpis in. Sapien nulla magnis ornare nulla. Consectetur blandit
                        pellentesque tortor sagittis enim suspendisse. Varius vitae ullamcorper mus ultricies in
                        a lorem id egestas. Cras cum vitae blandit massa.faucibus sollicitudin. Feugiat turpis velit
                        fermentum metus. Ipsum ultrices
                        quam egestas turpis in. Sapien nulla magnis ornare nulla. Consectetur blandit
                        pellentesque tortor sagittis enim suspendisse. Varius vitae ullamcorper mus ultricies in
                        a lorem id egestas. Cras cum vitae blandit massa.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
