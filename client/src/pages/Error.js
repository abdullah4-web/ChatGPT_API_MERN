import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import HeroHeader from '../components/HeaderHero';
import NewsletterSection from '../components/NewsletterSection';
import NavBar from '../components/NavBar';

const PageNotFound = () => {
  return (
    <>
    <NavBar />
    <HeroHeader Title="Page Not Found Something Went Wrong ..." />
    <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container text-center py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <FaExclamationTriangle className="display-1 text-primary" />
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="mb-4">We’re sorry, the page you have looked for does not exist on our website! Maybe go to our home page or try to use a search?</p>
            <a className="btn btn-primary rounded-pill py-3 px-5" href="/">Go Back To Home</a>
          </div>
        </div>
      </div>
    </div>
    <NewsletterSection />
    </>
  );
};

export default PageNotFound;
