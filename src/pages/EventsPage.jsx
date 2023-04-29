import HeroSection from '../components/client/eventsPage/HeroSection'
import manPlaysGuitarImg from '../assets/images/EventsPage/manPlaysGuitar.svg'
import MainEvents from '../components/client/eventsPage/MainEvent/MainEvents.jsx'
import LatestNotice from '../components/client/landing/latestNotice/LatestNotice'
import mainEvents from '../components/client/eventsPage/MainEvent/mainEvents.json'
import UpcomingEvents from '../components/client/eventsPage/UpComingEvent/UpcomingEvents.jsx'
import upcomingEvents from '../components/client/eventsPage/UpComingEvent/events.json'


function EventsPage() {
    const lorem =
        'Our media unit is a thriving community of passionate and driven individuals who are committed to creating and delivering high-quality content that inspires and informs audiences both locally and globally. We offer a range of opportunities for students to get involved in all aspects of media production, from designing graphics and websites to producing videos and podcasts.Joining our media unit is not only a chance to gain hands-on experience and build your portfolio, but also an opportunity to be part of a vibrant and dynamic community. We encourage students to share their ideas, collaborate with others, and grow their skills in a supportive and engaging environment.'

    const para = 'So what are you waiting for? If you\'re a young and talented media enthusiast who is passionate about creating and delivering engaging content, we invite you to join us at the SLIIT Faculty of Computing Media Unit. Your moment to shine is now!'
    return (
        <div>
            <HeroSection
                description={lorem}
                description2={para}
                imgAltText="Man plays guitar image"
                imgSrc={manPlaysGuitarImg}
                title="What are events"
            />
      <LatestNotice />
      <MainEvents eventData={mainEvents} mainTitle={'MAIN EVENTS'} />
      <UpcomingEvents eventData={upcomingEvents} mainTitle={'UPCOMING EVENTS'} />
      <UpcomingEvents />
    </div>
  )
}

export default EventsPage
