import React from "react"
import MainEvents from "../components/client/eventsPage/MainEvent/MainEvents.jsx"
import QuotesSection from "../components/client/landing/quotesSection/QuotesSection"
import HeroSection from "../components/client/landing/heroSection"
import WhoWeAreSection from "../components/client/landing/whoWeAreSection"
import BoardOfOfficialsImg from "../assets/images/boardOfOfficials.webp"
import LatestNotice from "../components/client/landing/latestNotice/LatestNotice"
import mainEvents from "../components/client/eventsPage/MainEvent/mainEvents.json"
import UpcomingEvents from "../components/client/eventsPage/UpComingEvent/UpcomingEvents.jsx"


import upcomingEvents from '../components/client/common/EventsComponent/upcomingEvents.json'

function LandingPage() {
  const content =
    'Welcome to the vibrant SLIIT Faculty of Computing Media Unit community, where we celebrate and nurture your unique talents in announcing, photography, content writing, digital marketing, graphics, and all aspects of media creation and production
  return (
    <div>
      <HeroSection />
      <WhoWeAreSection
        description="Welcome to the vibrant SLIIT Faculty of Computing Media Unit community, where we celebrate and nurture your unique talents in announcing, photography, content writing, digital marketing, graphics, and all aspects of media creation and production.Our media unit is a hub of creativity, collaboration, and innovation, where students can explore their passions and develop their skills in a supportive and dynamic environment. "
        findMoreUrl=""
        imgAltText="Board of officials image"
        imgSrc={BoardOfOfficialsImg}
      />
      <LatestNotice />
      <Events eventData={upcomingEvents} mainTitle={'UPCOMING EVENTS'} />
      <MainEvents eventData={mainEvents} mainTitle={"MAIN EVENTS"} />
      <UpcomingEvents />
      <QuotesSection />
    </div>
  )
}

export default LandingPage
