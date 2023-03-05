import './App.css'
import Header from './components/client/common/header/Header.jsx'
import HeroSection from './components/client/landing/heroSection/HeroSection.jsx'
import WhoWeAreSection from './components/client/landing/whoWeAreSection/WhoWeAreSection'
import BoardOfOfficialsImg from './assets/images/boardOfOfficials.jpg'

function App() {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus orci ut augue rhoncus, id pharetra nisi porta. Cras nec lorem non dui ullamcorper fringilla ut eget ante. Nunc porttitor quam nec dapibus efficitur . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus orci ut augue rhoncus, id pharetra nisi porta. Cras nec'

  return (
    <div>
      <Header />
      <HeroSection />
      <WhoWeAreSection findMoreUrl={''} imgSrc={BoardOfOfficialsImg} description={lorem} />
    </div>
  )
}

export default App
