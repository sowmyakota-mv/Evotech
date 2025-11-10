import './App.css'
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

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <KeyStats/>
    <Services/>
    <Process/>
    <WhyChooseUs/>
    <SuccessStories/>
    <ClientsSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default App
