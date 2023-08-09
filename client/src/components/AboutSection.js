import React from 'react';
import { FaCheck, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="about-img">
            <img className="img-fluid" src="img/about-img.jpg" alt="About Us" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div>
          <h1 className="mb-4">We Make Your Business Smarter with Artificial Intelligence</h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
            amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
            clita duo justo et tempor eirmod magna dolore erat amet</p>
          <p className="mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
            labore lorem sit. Sanctus clita duo justo et tempor.</p>
          <div className="row g-3">
            <div className="col-sm-6">
              <h6 className="mb-3"><FaCheck className="text-primary me-2" />Award Winning</h6>
              <h6 className="mb-0"><FaCheck className="text-primary me-2" />Professional Staff</h6>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3"><FaCheck className="text-primary me-2" />24/7 Support</h6>
              <h6 className="mb-0"><FaCheck className="text-primary me-2" />Fair Prices</h6>
            </div>
          </div>
          <div className="d-flex align-items-center mt-4">
            <a className="btn btn-primary rounded-pill px-4 me-3" href="">Read More</a>
            <a className="btn btn-outline-primary btn-square me-3" href=""><FaFacebookF /></a>
            <a className="btn btn-outline-primary btn-square me-3" href=""><FaTwitter /></a>
            <a className="btn btn-outline-primary btn-square me-3" href=""><FaInstagram /></a>
            <a className="btn btn-outline-primary btn-square" href=""><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
