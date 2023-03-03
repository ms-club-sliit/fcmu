import './App.css'
import Header from './components/client/common/header/Header.jsx'
import HeroSection from './components/client/landing/heroSection/HeroSection.jsx'
import WhoWeAreSection from './components/client/landing/whoWeAreSection/WhoWeAreSection'
import BoardOfOfficialsImg from './assets/images/boardOfOfficials.jpg'

function App() {
  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil libero fuga quam amet porro! Quae voluptatum illo in quidem, iste libero? Veniam non dignissimos facere, repudiandae placeat qui impedit at.'

  return (
    <div>
      <Header />
      <HeroSection />
      <WhoWeAreSection findMoreUrl={''} imgSrc={BoardOfOfficialsImg} description={lorem} />
    </div>
  )
}

export default App
