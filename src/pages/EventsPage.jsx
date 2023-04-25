import HeroSection from '../components/client/eventsPage/HeroSection'
import manPlaysGuitarImg from '../assets/images/EventsPage/manPlaysGuitar.svg'
import Events from '../components/client/common/EventsComponent/Events'

import mainEvents from '../components/client/common/EventsComponent/upcomingEvents.json'

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

      <Events eventData={mainEvents} mainTitle={'MAIN EVENTS'} />
    </div>
  )
}

export default EventsPage
