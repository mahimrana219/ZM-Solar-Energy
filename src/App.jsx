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
import ProjectsPage from './Pages/Projects'
import Projects from './Pages/Projects'
import WhyUs from './Pages/WhyUs'
import Reviews from './Components/Reviews'
import DetailedReviews from './Pages/DetailedReviews'
import BookSurvey from './Pages/BookSurvey'
import Leadership from './Pages/Leadership'

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Reviews />
      <ContactUs />
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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
