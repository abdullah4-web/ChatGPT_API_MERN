import React from 'react'
import ServicesSection from '../components/ServicesSection'
import HeroHeader from '../components/HeaderHero'
import NewsletterSection from '../components/NewsletterSection'
import NavBar from '../components/NavBar'

const ServicesPage = () => {
  return (
   <>
   <NavBar />
    <HeroHeader Title="Services That AI Provide" />
   <ServicesSection />
   <NewsletterSection />
   </>
  )
}

export default ServicesPage
