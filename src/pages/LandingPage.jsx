import React from 'react'
import Events from '../components/client/common/EventsComponent/Events'
import bg from '../assets/images/LandingPage/bg1.png'
import bg2 from '../assets/images/LandingPage/bg2.png'
import NewHeroSection from '../components/client/landing/heroSection/newHeroSection'
import WhoWeAreSection from '../components/client/landing/whoWeAreSection'
import BoardOfOfficialsImg from '../assets/images/boardOfOfficials.webp'
import LatestNotice from '../components/client/landing/latestNotice/LatestNotice'
import { data as upcomingEvents } from '../components/client/common/EventsComponent/upcomingEvents'
import './styles/landingPage.css'
import ContactUsForm from '../components/client/contactUs/formSection/ContactUsForm'


function LandingPage() {
  const wwaDesc =
    'Welcome to the vibrant SLIIT Faculty of Computing Media Unit community, where we celebrate and nurture your unique talents in announcing, photography, content writing, digital marketing, graphics, and all aspects of media creation and production.\n\n Our media unit is a hub of creativity, collaboration, and innovation, where students can explore their passions and develop their skills in a supportive and dynamic environment. '

  const content =
    'Faculty of Computing Media Unit of Sri Lanka Institute of information and Technology, dedicated to providing high-quality media services to our students, faculty, and staff.\n' +
    "Our team is made up of experienced professionals who are passionate about creating and delivering engaging and informative content. From producing videos and podcasts to designing graphics and websites, we work hard to ensure that the University's voice is heard loud and clear.\n" +
    'At the heart of our mission is the belief that media plays a vital role in shaping the narrative of our institution. By telling the stories of our students, faculty, and alumni, we can inspire and inform future generations.\n' +
    "We are proud to be part of a University that values creativity, innovation, and diversity. Our team reflects this commitment by fostering an inclusive and collaborative work environment where everyone's voice is heard and respected.\n" +
    "Whether you're looking for help with a project or want to learn more about our services, we invite you to explore our website and get in touch with us. We are excited to work with you and help you bring your ideas to life."

  return (
    <>
      <img src={bg} alt="background" className="bgImg" />
      <div className="container-mx-100">
        <NewHeroSection />
        <WhoWeAreSection
          description={wwaDesc}
          findMoreUrl=""
          imgAltText="Board of officials image"
          imgSrc={BoardOfOfficialsImg}
        />
        <LatestNotice />
        <Events eventData={upcomingEvents} mainTitle="UPCOMING EVENTS" />
        <h2 className="contactUsTitle">Contact Us</h2>
        <div className="landingPageContactUsContainer">
          <ContactUsForm />
        </div>
      </div>
      <img src={bg2} alt="background" className="bgImg2" />
    </>
  )
}

export default LandingPage
