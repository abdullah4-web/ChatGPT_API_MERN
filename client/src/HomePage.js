import './App.css'; 
import AboutSection from './components/AboutSection';
import CaseStudySection from './components/CaseStudySection';
import FAQSection from './components/FAQSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import HeroHeader from './components/HeaderHero';
import NavBar from './components/NavBar';
import NewsletterSection from './components/NewsletterSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';





function HomePage() {


  return (
    <>
    <NavBar/>
    <HeroHeader Title="Artificial Intelligence for Your Business" />
    <AboutSection />
    <ServicesSection />
    <FeatureSection />
    <CaseStudySection />
    <FAQSection />
    <TeamSection />
    <NewsletterSection />
   
   
    
    </>
  );
}

export default HomePage;
