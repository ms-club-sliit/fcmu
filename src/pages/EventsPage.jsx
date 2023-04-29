import HeroSection from '../components/client/eventsPage/HeroSection'
import manPlaysGuitarImg from '../assets/images/EventsPage/manPlaysGuitar.svg'
<<<<<<< HEAD
import UpcomingEvents from '../components/client/common/upcomingEvents/UpcomingEvents'
import LatestNotice from '../components/client/landing/latestNotice/LatestNotice'

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
      <UpcomingEvents />
=======
import Events from '../components/client/common/EventsComponent/Events'
import LatestNotice from '../components/client/landing/latestNotice/LatestNotice'
import mainEvents from '../components/client/common/EventsComponent/mainEvents.json'

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
      <Events eventData={mainEvents} mainTitle={'MAIN EVENTS'} />
>>>>>>> e2df22e2781f70cee9b785df717c4f3f4731725d
    </div>
  )
}

export default EventsPage
