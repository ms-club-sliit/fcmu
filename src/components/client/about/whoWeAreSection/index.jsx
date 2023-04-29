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
            <span className="firstcharacter">T</span>
            he Faculty of Computing Media Unit at Sri Lanka Institute of Information Technology is
            dedicated to providing high-quality media services that enable our students, faculty,
            and staff to express their creativity and ideas in innovative ways. Our team is composed
            of experienced professionals who have a passion for creating and delivering engaging and
            informative content. From producing videos and podcasts to designing graphics and
            websites, we work hard to ensure that the University's voice is heard loud and clear.
          </p>
          <p className="para-dark-blue">
            At the heart of our mission is the belief that media plays a vital role in shaping the
            narrative of our institution. By telling the stories of our students, faculty, and
            alumni, we can inspire and inform future generations. We are committed to showcasing the
            incredible talent and diversity within our community, and highlighting the
            groundbreaking research and initiatives that take place here.
          </p>
        </div>
        <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-end">
          <img src={illustration} alt="Illustration" className="intro-illustration" />
        </div>
      </div>

      <div className="row spacer-bottom">
        <div className="col">
          <p className="para-dark-blue">
            We believe that media is an essential tool for education, and we strive to provide our students with the
            skills and resources they need to succeed in a rapidly evolving digital landscape. We offer a range of
            courses and workshops that teach students how to create and distribute high-quality media content, and we
            also provide opportunities for students to gain hands-on experience working on real-world projects.
          </p>
          <p className="para-dark-blue">
            Our team is proud to be part of a University that values creativity, innovation, and diversity. We are
            committed to fostering an inclusive and collaborative work environment where everyone's voice is heard and
            respected. We believe that diversity is key to creativity and innovation, and we strive to reflect this
            commitment in our team and our work. Whether you're looking for help with a project or want to learn more about our services, we invite you to
            explore our website and get in touch with us. We are excited to work with you and help you bring your ideas
            to life. Together, we can create media that inspires, informs, and engages audiences both locally and
            globally.

          </p>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreSection
