import Header from "../../components/client/common/header/Header.jsx"
import UpcomingEvents from "../../components/client/common/upcomingEvents/UpcomingEvents.jsx"
import HeroSection from "../../components/client/landing/heroSection/HeroSection.jsx"

function Home() {

  return (
    <div>
      <Header />
      <HeroSection />
      <UpcomingEvents />
    </div>
  )
}

export default Home
