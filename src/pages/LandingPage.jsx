import React from "react"
import UpcomingEvents from "../components/client/common/upcomingEvents/UpcomingEvents"
import QuotesSection from "../components/client/landing/quotesSection/QuotesSection"
import HeroSection from "../components/client/landing/heroSection"
import WhoWeAreSection from "../components/client/landing/whoWeAreSection"
import BoardOfOfficialsImg from "../assets/images/boardOfOfficials.webp"
import LatestNotice from "../components/client/landing/latestNotice/LatestNotice"
import "./../pages/styles/LandingPage.css"

function LandingPage() {
  const content =
    "Faculty of Computing Media Unit of Sri Lanka Institute of information and Technology, dedicated to providing high-quality media services to our students, faculty, and staff.\n" +
    "Our team is made up of experienced professionals who are passionate about creating and delivering engaging and informative content. From producing videos and podcasts to designing graphics and websites, we work hard to ensure that the University's voice is heard loud and clear.\n" +
    "At the heart of our mission is the belief that media plays a vital role in shaping the narrative of our institution. By telling the stories of our students, faculty, and alumni, we can inspire and inform future generations.\n" +
    "We are proud to be part of a University that values creativity, innovation, and diversity. Our team reflects this commitment by fostering an inclusive and collaborative work environment where everyone's voice is heard and respected.\n" +
    "Whether you're looking for help with a project or want to learn more about our services, we invite you to explore our website and get in touch with us. We are excited to work with you and help you bring your ideas to life.\n"

  return (
    <div>
      <HeroSection />
      <WhoWeAreSection
        description="Welcome to the vibrant SLIIT Faculty of Computing Media Unit community, where your Announcing, Photography, Content Writing, Digital Marketing, Graphics, and media talents bring out. "
        findMoreUrl=""
        imgAltText="Board of officials image"
        imgSrc={BoardOfOfficialsImg}
      />
      <LatestNotice />
      <UpcomingEvents />
      <QuotesSection />
    </div>
  )
}

export default LandingPage
