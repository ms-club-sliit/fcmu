import illustration from '../../../../assets/images/AboutPage/peps-looking-at-laptop.png'
import './styles.css'

function WhoWeAreSection() {
  return (
    <div id="intro-section" className="container">
      <div className="row">
        <div className="col">
          <h1 className="intro-header">Who We Are </h1>
        </div>
      </div>

      <div className="row d-flex align-items-center spacer-bottom">
        <div className="col-12 col-md-12 col-lg-6">
          <p className="para-dark-blue">
            <span className="firstcharacter">F</span>
            aculty of Computing Media Unit of Sri Lanka Institute of information and Technology, dedicated to providing high-quality media services to our students, faculty, and staff.
            Our team is made up of experienced professionals who are passionate about creating and delivering engaging and informative content. From producing videos and podcasts to designing graphics and websites, we work hard to ensure that the University's voice is heard loud and clear.
            At the heart of our mission is the belief that media plays a vital role in shaping the narrative of our institution. By telling the stories of our students, faculty, and alumni, we can inspire and inform future generations.

          </p>
          <p className="para-dark-blue">

            We are proud to be part of a University that values creativity, innovation, and diversity. Our team reflects this commitment by fostering an inclusive and collaborative work environment where everyone's voice is heard and respected.
          </p>
        </div>
        <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-end">
          <img src={illustration} alt="Illustration" className="intro-illustration" />
        </div>
      </div>

      <div className="row spacer-bottom">
        <div className="col">
          <p className="para-dark-blue">
            Whether you're looking for help with a project or want to learn more about our services, we invite you to explore our website and get in touch with us. We are excited to work with you and help you bring your ideas to life.
          </p>
          <p className="para-dark-blue">
            Vitae id egestas condimentum hac eget dictum bibendum elementum. Ornare arcu
            pellentesque sociis malesuada risus accumsan. Nunc nisi sed eu lacus ut tortor blandit.
            Et semper nibh tristique lacus et quis neque lectus a. Sed nec ante dignissim egestas
            felis suspendisse purus in cum. Quis est vitae arcu at. Eget praesent fames non nec
            fusce. Convallis elementum velit dignissim risus tempus amet. Imperdiet ac in donec
            ultrices euismod cursus enim. In tempor sed lobortis dictum quis dignissim diam quis. Ut
            consequat bibendum sem mattis tincidunt. Dolor mi semper turpis penatibus pellentesque.
            Augue ut sagittis sed adipiscing volutpat. Eget nisi dictumst blandit hendrerit
            accumsan. Lectus viverra semper tristique eros.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreSection
