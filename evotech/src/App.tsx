import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { ClientsSection } from './components/ClientSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/FooterSection'
import { Header } from './components/Header'
import { Hero } from './components/HeroSection'
import { Process } from './components/ProcessSection'
import { Services } from './components/ServiceSection'
import { KeyStats } from './components/StatsSection'
import { SuccessStories } from './components/SuccessStories'
import { WhyChooseUs } from './components/WhyChooseUs'
import { AboutPage } from './pages/AboutPage'

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
    <Route path="/" element={
      <div>
    <Hero/>
    <KeyStats/>
    <Services/>
    <Process/>
    <WhyChooseUs/>
    <SuccessStories/>
    <ClientsSection/>
    <ContactSection/>
    </div>}/>
    <Route path='/about-us' element={<AboutPage/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
