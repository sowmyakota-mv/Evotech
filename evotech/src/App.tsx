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
import { ServicesPage } from './pages/ServicesPage'
import { CustomWebDevelopment } from './pages/CustomWebDevelopment'
import { EcommerceSolutions } from './pages/EcommerceSolutions'
import { EnterpriseSoftwareIntegration } from './pages/EnterpriseSoftwareIntegration'
import { CloudInfrastructure } from './pages/CloudInfrastructure'
import { DigitalMarketingSEO } from './pages/DigitalMarketingSEO'
import { BrandingCreativeDesign } from './pages/BrandingCreativeDesign'
import ScrollToTop from './components/Animations/ScrollToTop'
import PortfolioPage from './pages/PortfolioPage'
import Contact from './pages/ContactPage'

function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
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
    <Route path='/services' element={<ServicesPage/>}/>
    <Route path='/services/web-development' element={<CustomWebDevelopment/>}/>
    <Route path='/services/ecommerce' element={<EcommerceSolutions/>}/>
    <Route path='/services/enterprise-software' element={<EnterpriseSoftwareIntegration/>}/>
    <Route path='/services/cloud-infrastructure' element={<CloudInfrastructure/>}/>
    <Route path='/services/digital-marketing-seo' element={<DigitalMarketingSEO/>}/>
    <Route path='/services/branding-creative-design' element={<BrandingCreativeDesign/>}/>
    <Route path='/portfolio' element={<PortfolioPage/>}/>
    <Route path='/contact-us' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
