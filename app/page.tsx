import React from 'react'
import Hero from './components/landing/Hero'
import Services from './components/landing/Services'
import CaseStudy from './components/landing/CaseStudy'
import TechnicalArsenal from './components/landing/TechnicalArsenal'
import CTASection from './components/landing/CTASection'

export default function LandingPage() {
  return (
    <section className="flex flex-col">x
      <Hero />
      <Services />
      <CaseStudy />
      <TechnicalArsenal />
      <CTASection />
    </section>
  )
}
