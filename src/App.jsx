import "./App.css"
import Header from "./components/client/common/header/Header.jsx"
import HeroSection from "./components/client/landing/heroSection/HeroSection.jsx"
import LatestNotice from "./components/client/landing/latestNotice/LatestNotice.jsx"

function App() {

  return (
    <div>
      <Header />
      <HeroSection />
      <LatestNotice/>
    </div>
  )
}

export default App
