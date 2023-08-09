import React from 'react'
import HeroHeader from '../components/HeaderHero'
import AboutSection from '../components/AboutSection'
import FeatureSection from '../components/FeatureSection'
import TeamSection from '../components/TeamSection'
import NewsletterSection from '../components/NewsletterSection'
import NavBar from '../components/NavBar'

const AboutPage = () => {
  return (
    <>
    <NavBar />
    <HeroHeader Title="About Us" />
    <AboutSection />
    <FeatureSection />
    <TeamSection />
    <NewsletterSection />
    </>
  )
}

export default AboutPage
