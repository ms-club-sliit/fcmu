import "./App.css"
import Header from "./components/client/common/header/Header.jsx"
import HeroSection from "./components/client/landing/heroSection/HeroSection.jsx"
import QuotesSection from "./components/client/landing/quotesSection/QuotesSection"

function App() {

  return (
    <div>
      <Header />
      <HeroSection />
      <QuotesSection />
    </div>
  )
}

export default App
