import React from 'react'
import HeroSection from '../components/client/landing/heroSection'
import WhoWeAreSection from '../components/client/landing/whoWeAreSection'
import BoardOfOfficialsImg from '../assets/images/boardOfOfficials.webp'

function LandingPage() {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  return (
    <div>
      <HeroSection />
      <WhoWeAreSection description={lorem} findMoreUrl={''} imgSrc={BoardOfOfficialsImg} />
    </div>
  )
}
export default LandingPage
