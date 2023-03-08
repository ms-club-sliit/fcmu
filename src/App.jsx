import "./App.css"
import Header from "./components/client/common/header/Header.jsx"
import HeroSection from "./components/client/landing/heroSection/HeroSection.jsx"
import QuotesSection from "./components/client/landing/quotesSection/QuotesSection"
import RouteComponent from './routes'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <QuotesSection />
      <RouteComponent />
    </div>
  )
}

export default App
