import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HeroSection from './Components/Hero'
import WhyChooseUs from './Components/WhyChooseUs'
import Services from './Components/Services'
import AboutUs from './Components/AboutUs'
import HowItWorks from './Components/HowItWorks'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import About from './Pages/About'
import ServicesPage from './Pages/Services'
// import ProjectsPage from './Pages/Projects'
import Projects from './Pages/Projects'
import WhyUs from './Pages/WhyUs'
import Reviews from './Components/Reviews'
import DetailedReviews from './Pages/DetailedReviews'
import BookSurvey from './Pages/BookSurvey'
import Leadership from './Pages/Leadership'
import Blurtext from './Components/BlurText'
import FloatingWhatsApp from './Components/FloatingWhatsApp'
import ProductShowcase from './Components/ProductShowcase'
import SolarCalculator from './Components/SolarCalculator'
import BuiltBetter from './Components/BuiltBetter'
import ProjectsShowcase from './Components/ProjectsShowcase'
import StatsBar from './Components/StatsBar'
import TrustedBrands from './Components/TrustedBrands'
import FAQSection from './Components/FAQSection'
import CTABanner from './Components/CTABanner'
import ProductDetail from './Pages/Products/ProductDetail'

function Home() {
  return (
    <>
      <HeroSection />
      <Blurtext />
      <ProductShowcase />
      <SolarCalculator />
      <BuiltBetter />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <ProjectsShowcase />
      <StatsBar />
      <Reviews />
      <TrustedBrands />
      <FAQSection />
      <ContactUs />
      <CTABanner />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/contact" element={<Contact />} />
         <Route path="/pages/about" element={<About />} />
          <Route path="/pages/services" element={<ServicesPage />} />
     <Route path="/pages/projects" element={<Projects />} />
     <Route path="/pages/whyus" element={<WhyUs />} />
       <Route path="/pages/detailedreviews" element={<DetailedReviews />} />
        <Route path="/pages/booksurvey" element={<BookSurvey />} />
          <Route path="/pages/leadership" element={<Leadership />} />
        <Route path="/pages/products/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  )
}

export default App
