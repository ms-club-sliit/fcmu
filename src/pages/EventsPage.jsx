import HeroSection from '../components/client/eventsPage/HeroSection'
import manPlaysGuitarImg from '../assets/images/EventsPage/manPlaysGuitar.svg'
import MainEvents from '../components/client/eventsPage/MainEvent/MainEvents.jsx'
import LatestNotice from '../components/client/landing/latestNotice/LatestNotice'
import mainEvents from '../components/client/eventsPage/MainEvent/mainEvents.json'
import UpcomingEvents from '../components/client/eventsPage/UpComingEvent/UpcomingEvents.jsx'
import upcomingEvents from '../components/client/eventsPage/UpComingEvent/events.json'

const EventsPage = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <div>
      <HeroSection
        description={lorem}
        imgAltText={'Man plays guitar image'}
        imgSrc={manPlaysGuitarImg}
        title={'What are events'}
      />
      <LatestNotice />
      <MainEvents eventData={mainEvents} mainTitle={'MAIN EVENTS'} />
      <UpcomingEvents eventData={upcomingEvents} mainTitle={'UPCOMING EVENTS'} />
    </div>
  )
}

export default EventsPage
