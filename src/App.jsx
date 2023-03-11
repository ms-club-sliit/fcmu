import "./App.css"
import Header from "./components/client/common/header/Header.jsx"
import UpcomingEvents from "./components/client/common/upcomingEvents/UpcomingEvents.jsx"
import HeroSection from "./components/client/landing/heroSection/HeroSection.jsx"
import QuotesSection from "./components/client/landing/quotesSection/QuotesSection"
import RouteComponent from './routes'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <QuotesSection />
      <UpcomingEvents />
      <RouteComponent />
    </div>
  )
}

export default App
