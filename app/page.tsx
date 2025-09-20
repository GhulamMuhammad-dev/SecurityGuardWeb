
import AboutSection from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { HeroSection } from '@/components/HeroSection'
import ServiceCoverage from '@/components/ServiceCoverage'
import ServicesSection from '@/components/ServicesSection'


import React from 'react'

const App = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ServiceCoverage />
      <ContactSection />
      
       {/* <Practice /> */}
    </div>
  )
}

export default App
