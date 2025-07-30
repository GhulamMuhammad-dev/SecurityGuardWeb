import { AboutSection } from '@/components/AboutSection'
import { BlogSection } from '@/components/BlogSection'
import { ContactSection } from '@/components/ContactSection'
import { GuardsSection } from '@/components/GuardsSection'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import React from 'react'

const App = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GuardsSection />
      <BlogSection />
      <ContactSection />
      
    </div>
  )
}

export default App
