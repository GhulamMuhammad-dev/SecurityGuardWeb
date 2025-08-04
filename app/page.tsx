
import AboutSection from '@/components/AboutSection'
import { BlogSection } from '@/components/BlogSection'
import CertificationsSection from '@/components/CertificationsSection'
import { ContactSection } from '@/components/ContactSection'
import GuardSection from '@/components/GuardsSection'
import { HeroSection } from '@/components/HeroSection'
import Practice from '@/components/Practice'
import ServiceCoverage from '@/components/ServiceCoverage'
import ServicesSection from '@/components/ServicesSection'
import StatsCounter from '@/components/StatsCounter'

import React from 'react'

const App = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsCounter />
      <CertificationsSection />
      <ServiceCoverage />
      <ContactSection />
      
       {/* <Practice /> */}
    </div>
  )
}

export default App
